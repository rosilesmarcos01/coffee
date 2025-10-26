import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { format, startOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { Coffee, Calendar, CheckCircle, Clock, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import { Order, MenuItem } from '../types';

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [todayShift, setTodayShift] = useState<Date | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [pastOrders, setPastOrders] = useState<Order[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadTodayShift();
    loadOrders();
    loadMenuItems();
  }, [user]);

  const loadTodayShift = () => {
    const now = new Date();
    const today = startOfDay(now);
    
    // Check if today is a shift day (Sunday, Monday, Wednesday, or Saturday)
    const todayDayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, 3 = Wednesday, 6 = Saturday
    if (todayDayOfWeek === 0 || todayDayOfWeek === 1 || todayDayOfWeek === 3 || todayDayOfWeek === 6) {
      setTodayShift(today);
    } else {
      setTodayShift(null);
    }
  };

  const loadOrders = async () => {
    if (!user) return;

    try {
      const ordersRef = collection(db, 'orders');
      const q = query(ordersRef, where('userId', '==', user.uid));
      const snapshot = await getDocs(q);
      
      const ordersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      
      setOrders(ordersData);

      // Get past orders (completed orders before today)
      const today = startOfDay(new Date());
      const past = ordersData
        .filter(order => {
          const orderDate = new Date(order.shiftDate);
          return orderDate < today && (order.status === 'confirmed' || order.status === 'delivered');
        })
        .sort((a, b) => new Date(b.shiftDate).getTime() - new Date(a.shiftDate).getTime())
        .slice(0, 2);
      
      setPastOrders(past);
    } catch (error) {
      console.error('Error loading orders:', error);
      toast.error('Error al cargar pedidos');
    } finally {
      setLoading(false);
    }
  };

  const loadMenuItems = async () => {
    try {
      const menuRef = collection(db, 'menu');
      const snapshot = await getDocs(menuRef);
      
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MenuItem[];
      
      setMenuItems(items);
    } catch (error) {
      console.error('Error loading menu:', error);
    }
  };

  const getOrderForShift = (shiftDate: Date) => {
    const dateString = format(shiftDate, 'yyyy-MM-dd');
    return orders.find(order => order.shiftDate === dateString);
  };

  const getOrderSummary = (order: Order) => {
    if (order.orderType === 'surprise') {
      return 'Sorpresa seleccionada';
    }
    
    if (order.selectedItems && order.selectedItems.length > 0) {
      const itemNames = order.selectedItems
        .map(itemId => {
          const item = menuItems.find(m => m.id === itemId);
          return item?.name;
        })
        .filter(Boolean);
      
      if (itemNames.length > 0) {
        return itemNames.join(', ');
      }
    }
    
    return 'Pedido registrado';
  };

  const hasTriedItem = (itemId: string) => {
    return orders.some(order => 
      order.selectedItems && order.selectedItems.includes(itemId)
    );
  };

  const categories = [
    { id: 'all', label: 'Todos', value: 'all' },
    { id: 'seasonal', label: 'Temporada', value: 'seasonal' },
    { id: 'hot-coffee', label: 'Café Caliente', value: 'hot-coffee' },
    { id: 'iced-coffee', label: 'Café Frío', value: 'iced-coffee' },
    { id: 'cold-brew', label: 'Cold Brew', value: 'cold-brew' },
    { id: 'frappuccino', label: 'Frappuccino', value: 'frappuccino-coffee' },
  ];

  const getFilteredMenuItems = () => {
    if (selectedCategory === 'all') {
      return menuItems.slice(0, 4);
    }
    return menuItems.filter(item => item.category === selectedCategory).slice(0, 4);
  };

  const handleOrderForShift = (shiftDate: Date, orderType: 'surprise' | 'selected') => {
    if (orderType === 'selected') {
      navigate('/menu', { state: { shiftDate: format(shiftDate, 'yyyy-MM-dd') } });
    } else {
      createSurpriseOrder(shiftDate);
    }
  };

  const createSurpriseOrder = async (shiftDate: Date) => {
    if (!user) return;

    try {
      const dateString = format(shiftDate, 'yyyy-MM-dd');
      const dayName = format(shiftDate, 'EEEE', { locale: es }).toLowerCase() as 'sunday' | 'monday' | 'wednesday' | 'saturday';

      await addDoc(collection(db, 'orders'), {
        userId: user.uid,
        shiftDate: dateString,
        shiftDay: dayName,
        orderType: 'surprise',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      setShowSuccessModal(true);
      loadOrders();
    } catch (error) {
      toast.error('Error al crear el pedido');
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const confirmDelivery = (orderId: string) => {
    setSelectedOrderId(orderId);
    setShowFeedbackModal(true);
  };

  const submitFeedback = async () => {
    if (!selectedOrderId) return;

    try {
      const orderRef = doc(db, 'orders', selectedOrderId);
      await updateDoc(orderRef, {
        status: 'confirmed',
        confirmedAt: new Date(),
        updatedAt: new Date(),
        feedback: feedbackMessage || null,
      });

      toast.success('¡Confirmado! Gracias por tu mensaje');
      setShowFeedbackModal(false);
      setFeedbackMessage('');
      setSelectedOrderId('');
      loadOrders();
    } catch (error) {
      toast.error('Error al confirmar');
      console.error(error);
    }
  };

  const skipFeedback = async () => {
    if (!selectedOrderId) return;

    try {
      const orderRef = doc(db, 'orders', selectedOrderId);
      await updateDoc(orderRef, {
        status: 'confirmed',
        confirmedAt: new Date(),
        updatedAt: new Date(),
      });

      toast.success('¡Confirmado! Disfruta tu café');
      setShowFeedbackModal(false);
      setFeedbackMessage('');
      setSelectedOrderId('');
      loadOrders();
    } catch (error) {
      toast.error('Error al confirmar');
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20 -mt-[env(safe-area-inset-top)] pt-[env(safe-area-inset-top)]">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold text-white">Night Shift</h1>
              <p className="text-xs text-pink-100">Home</p>
            </div>
            <div className="flex items-center gap-2">
              {user?.email === 'rosilesmarcos99@gmail.com' && (
                <button 
                  className="text-white p-2 hover:bg-white/20 rounded-full transition-all"
                  onClick={() => navigate('/admin')}
                  title="Admin"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              )}
              <button 
                className="text-white p-2 hover:bg-white/20 rounded-full transition-all"
                onClick={() => signOut()}
                title="Cerrar sesión"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Coffee"
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-6">
        {/* Greeting */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            ¡Hola, <span className="text-pink-600">Gabriela!</span>
          </h2>
          <p className="text-base text-gray-600">
            Bienvenida a tu Asistente de Guardia. ¿Qué se te antoja hoy?
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                  : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Today's Shift Section */}
        {todayShift && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tu Turno de Hoy</h3>
            {(() => {
              const order = getOrderForShift(todayShift);
              
              return (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-pink-100 rounded-xl">
                        <Calendar className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-base">
                          {format(todayShift, "EEEE d 'de' MMMM", { locale: es })}
                        </h3>
                        <p className="text-xs text-gray-500">Turno nocturno</p>
                      </div>
                    </div>

                    {order && (() => {
                      let statusClass = 'bg-yellow-100 text-yellow-700 border border-yellow-200';
                      let statusText = 'Pendiente';
                      
                      if (order.status === 'confirmed') {
                        statusClass = 'bg-green-100 text-green-700 border border-green-200';
                        statusText = 'Confirmado';
                      } else if (order.status === 'delivered') {
                        statusClass = 'bg-blue-100 text-blue-700 border border-blue-200';
                        statusText = 'Entregado';
                      }
                      
                      return (
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${statusClass}`}>
                          {statusText}
                        </span>
                      );
                    })()}
                  </div>

                  {order && (
                    <div className="mb-4 p-4 bg-pink-50 rounded-xl">
                      <p className="text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide">Tu pedido:</p>
                      <p className="text-sm font-medium text-gray-800">
                        {getOrderSummary(order)}
                      </p>
                    </div>
                  )}

                  {!order && (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleOrderForShift(todayShift, 'surprise')}
                        className="w-full py-3.5 px-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
                      >
                        <Coffee className="w-5 h-5" />
                        Sorpréndeme
                      </button>
                      <button
                        onClick={() => handleOrderForShift(todayShift, 'selected')}
                        className="w-full py-3.5 px-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-pink-50 active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-pink-200"
                      >
                        <Calendar className="w-5 h-5" />
                        Ver Menú
                      </button>
                    </div>
                  )}
                  
                  {order && order.status === 'delivered' && (
                    <button
                      onClick={() => confirmDelivery(order.id)}
                      className="w-full py-3.5 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Confirmar que lo recibí
                    </button>
                  )}
                  
                  {order && (order.status === 'pending' || order.status === 'ordered') && (
                    <div className="space-y-3">
                      <div className="bg-pink-100 rounded-xl overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 animate-pulse"></div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 bg-pink-50 px-4 py-3 rounded-xl">
                        <Clock className="w-5 h-5 animate-pulse" />
                        <span className="text-sm font-medium">
                          {order.orderType === 'surprise' ? 'Sorpresa en camino' : 'Pedido en proceso'}
                        </span>
                      </div>
                    </div>
                  )}

                  {order && order.status === 'confirmed' && (
                    <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-3 rounded-xl border border-green-200">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Pedido Entregado
                      </span>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {!todayShift && (
          <div className="mb-6 bg-white rounded-2xl shadow-lg p-8 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-700 font-semibold text-lg">No hay turno programado para hoy</p>
            <p className="text-sm text-gray-500 mt-2">Tus guardias son Domingo, Lunes, Miércoles y Sábados</p>
            <p className="text-xs text-gray-500 mt-2">Sin embargo, siempre puedes hacer un pedido a otro punto de entrega</p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Sugerencias Para Usted</h3>
            <button
              onClick={() => navigate('/menu')}
              className="text-pink-600 text-sm font-semibold hover:text-pink-700 transition-colors"
            >
              Ver todo →
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getFilteredMenuItems().map((item) => (
              <button 
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all text-left w-full"
                onClick={() => navigate('/menu')}
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center relative overflow-hidden">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover absolute inset-0"
                      style={{ objectPosition: 'center', objectFit: 'cover' }}
                    />
                  ) : (
                    <Coffee className="w-20 h-20 text-pink-400" />
                  )}
                </div>
                <div className="p-5 h-[160px] flex flex-col">
                  {hasTriedItem(item.id) ? (
                    <div className="flex items-center gap-1 mb-2 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-bold text-green-600">Ya lo has probado</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 mb-2 flex-shrink-0">
                      <span className="text-xs font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-full">Nuevo para ti</span>
                    </div>
                  )}
                  <h4 className="font-bold text-gray-800 mb-2 text-base line-clamp-2 flex-shrink-0">{item.name}</h4>
                  <p className="text-sm text-gray-500 mb-3 capitalize line-clamp-2 flex-1">{item.category.split('-').join(' ')}</p>
                  <div className="flex items-center justify-end flex-shrink-0">
                    <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-2 rounded-lg shadow-md">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Past Orders Section */}
        {pastOrders.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pedidos Anteriores</h3>
            <div className="space-y-4">
              {pastOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-lg p-5 border border-pink-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-pink-100 rounded-xl">
                        <Coffee className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">
                          {format(new Date(order.shiftDate), "EEEE d 'de' MMMM", { locale: es })}
                        </h3>
                        <p className="text-xs text-gray-500">Turno nocturno</p>
                      </div>
                    </div>

                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                      Completado
                    </span>
                  </div>

                  <div className="p-3 bg-pink-50 rounded-xl">
                    <p className="text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide">Pedido:</p>
                    <p className="text-sm font-medium text-gray-800">
                      {getOrderSummary(order)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Banner */}
        <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-6 mb-6 relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Entrega <span className="text-pink-600">Gratis!</span>
            </h2>
            <p className="text-sm text-gray-600 mb-1">En todas sus órdenes</p>
            <p className="text-xs text-gray-500">Solo por bonita</p>
            <p className="text-xs text-gray-500">NO aplican términos ni condiciones</p>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
            <Coffee className="w-32 h-32 text-pink-600" />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 text-pink-500">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-2.5 rounded-xl">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-8">
              {/* Success Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Coffee className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                ¡Sorpresa en Camino!
              </h2>

              {/* What happens next */}
              <div className="mb-6 p-5 bg-pink-50 rounded-2xl border border-pink-100">
                <h3 className="text-sm font-bold text-pink-600 mb-3 uppercase tracking-wide">
                  ¿Qué sigue?
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">1.</span>
                    <span>Seleccionaremos algo especial para ti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">2.</span>
                    <span>Recibirás tu café durante tu turno nocturno</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">3.</span>
                    <span>Te notificaremos cuando esté listo para recoger</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">4.</span>
                    <span>Confirma la recepción cuando lo tengas</span>
                  </li>
                </ul>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                ¿Cómo estuvo?
              </h2>
              <p className="text-gray-600 text-center mb-6 text-sm">
                Espero que le guste (yo).
              </p>

              {/* Textarea */}
              <div className="mb-6">
                <textarea
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  placeholder="Deja un comentario..."
                  className="w-full h-32 px-4 py-3 bg-pink-50 border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all resize-none"
                  maxLength={500}
                />
                <p className="text-xs text-gray-500 mt-2 text-right">
                  {feedbackMessage.length}/500 caracteres
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={submitFeedback}
                  className="w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md"
                >
                  Enviar Comentario
                </button>
                <button
                  onClick={skipFeedback}
                  className="w-full py-3 px-6 bg-pink-50 text-pink-600 rounded-2xl font-semibold hover:bg-pink-100 active:scale-95 transition-all border border-pink-200"
                >
                  Omitir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
