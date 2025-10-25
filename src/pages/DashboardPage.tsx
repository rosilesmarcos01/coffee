import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { format, startOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { Coffee, Calendar, CheckCircle, Clock, LogOut, Settings } from 'lucide-react';
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    loadTodayShift();
    loadOrders();
    loadMenuItems();
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, [user]);

  const loadTodayShift = () => {
    const now = new Date();
    const today = startOfDay(now);
    
    // Check if today is a shift day (Monday, Wednesday, or Saturday)
    const todayDayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, 3 = Wednesday, 6 = Saturday
    if (todayDayOfWeek === 1 || todayDayOfWeek === 3 || todayDayOfWeek === 6) {
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
      const dayName = format(shiftDate, 'EEEE', { locale: es }).toLowerCase() as 'monday' | 'wednesday' | 'saturday';

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
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coffee-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-lg">
              <Coffee className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Night Shift Assistant</h1>
              <p className="text-xs text-gray-400 mt-0.5">Tu café, siempre listo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {user?.email === 'rosilesmarcos99@gmail.com' && (
              <button
                onClick={() => navigate('/admin')}
                className="p-2.5 text-emerald-500 hover:text-emerald-400 hover:bg-gray-700/50 rounded-xl transition-all"
                title="Panel de administración"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => signOut()}
              className="p-2.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 rounded-xl transition-all"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Greeting Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Hola, {user?.email?.split('@')[0]}
          </h2>
          <p className="text-lg text-gray-400 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {currentTime.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true })} • {currentTime.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
        </div>

        {/* Today's Shift Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Que se te antoja hoy?
          </h3>
          <p className="text-gray-400">
            {todayShift ? 'Tu guardia nocturna' : 'No hay guardia programado para hoy'}
          </p>
        </div>

        {todayShift ? (
          <div className="mb-8">
            {(() => {
              const order = getOrderForShift(todayShift);
              
              return (
                <div className="rounded-2xl shadow-xl p-6 border-2 bg-gradient-to-br from-gray-800 to-gray-900 border-coffee-600 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-600/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="mb-4 inline-block px-4 py-1.5 bg-white text-gray-900 text-xs font-bold rounded-full shadow-lg">
                      TURNO DE HOY
                    </div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-coffee-600/20 rounded-xl">
                          <Calendar className="w-6 h-6 text-coffee-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">
                            {format(todayShift, "EEEE d 'de' MMMM", { locale: es })}
                          </h3>
                          <p className="text-sm text-gray-400">Turno nocturno</p>
                        </div>
                      </div>

                    {order && (() => {
                      let statusClass = 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50 backdrop-blur-sm';
                      let statusText = 'Pendiente';
                      
                      if (order.status === 'confirmed') {
                        statusClass = 'bg-green-900/50 text-green-300 border border-green-700/50 backdrop-blur-sm';
                        statusText = 'Confirmado';
                      } else if (order.status === 'delivered') {
                        statusClass = 'bg-blue-900/50 text-blue-300 border border-blue-700/50 backdrop-blur-sm';
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
                    <div className="mb-4 p-4 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/50">
                      <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">Tu pedido:</p>
                      <p className="text-sm font-medium text-white">
                        {getOrderSummary(order)}
                      </p>
                    </div>
                  )}

                  {!order && (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleOrderForShift(todayShift, 'surprise')}
                        className="w-full py-4 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-bold hover:from-emerald-700 hover:to-emerald-800 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/50 relative z-10"
                      >
                        <Coffee className="w-5 h-5" />
                        Sorpréndeme
                      </button>
                      <button
                        onClick={() => handleOrderForShift(todayShift, 'selected')}
                        className="w-full py-4 px-4 bg-gray-700 text-gray-200 rounded-xl font-semibold hover:bg-gray-600 active:scale-95 transition-all flex items-center justify-center gap-2 border border-gray-600 relative z-10"
                      >
                        <Calendar className="w-5 h-5" />
                        Ver Menú
                      </button>
                    </div>
                  )}
                  
                  {order && order.status === 'delivered' && (
                    <button
                      onClick={() => confirmDelivery(order.id)}
                      className="w-full py-4 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:from-green-700 hover:to-green-800 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Confirmar que lo recibí
                    </button>
                  )}
                  
                  {order && (order.status === 'pending' || order.status === 'ordered') && (
                    <div className="space-y-3">
                      {/* Progress Bar */}
                      <div className="bg-gray-700/30 backdrop-blur-sm rounded-xl overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-coffee-600 via-coffee-500 to-coffee-600 animate-pulse relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                      
                      {/* Status Message */}
                      <div className="flex items-center gap-2 text-gray-400 bg-gray-700/30 backdrop-blur-sm px-4 py-3 rounded-xl">
                        <Clock className="w-5 h-5 animate-pulse" />
                        <span className="text-sm font-medium">
                          {order.orderType === 'surprise' ? 'Sorpresa en camino' : 'Pedido en proceso'}
                        </span>
                      </div>
                    </div>
                  )}

                  {order && order.status === 'confirmed' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-900/20 backdrop-blur-sm px-4 py-3 rounded-xl border border-green-700/50">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Pedido Entregado
                      </span>
                    </div>
                  )}
                  </div>
                </div>
              );
            })()}
          </div>
        ) : (
          <div className="mb-8 rounded-2xl shadow-lg p-8 border-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
            <Calendar className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-300 font-semibold text-lg">No hay turno programado para hoy</p>
            <p className="text-sm text-gray-500 mt-2">Los turnos son Lunes, Miércoles y Sábados</p>
          </div>
        )}

        {/* Past Orders Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Pedidos Anteriores
          </h3>
          <p className="text-gray-400">
            Tus últimas entregas
          </p>
        </div>

        {pastOrders.length > 0 ? (
          <div className="space-y-4 mb-8">
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl shadow-lg p-6 border-2 bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-coffee-600/20 rounded-xl">
                      <Coffee className="w-6 h-6 text-coffee-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">
                        {format(new Date(order.shiftDate), "EEEE d 'de' MMMM", { locale: es })}
                      </h3>
                      <p className="text-sm text-gray-400">Turno nocturno</p>
                    </div>
                  </div>

                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-green-900/50 text-green-300 border border-green-700/50 backdrop-blur-sm">
                    Completado
                  </span>
                </div>

                <div className="p-4 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/50">
                  <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">Pedido:</p>
                  <p className="text-sm font-medium text-white">
                    {getOrderSummary(order)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-8 rounded-2xl shadow-lg p-8 border-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
            <Coffee className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-300 font-semibold mb-2">Aún no hay pedidos anteriores</p>
            <p className="text-sm text-gray-500">
              Tus pedidos completados aparecerán aquí una vez que los recibas
            </p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700">
            <p className="text-sm text-gray-400 mb-2 font-medium">Cafés este mes</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              {orders.filter(o => o.status === 'confirmed').length}
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700">
            <p className="text-sm text-gray-400 mb-2 font-medium">Pedidos completados</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              {pastOrders.length}
            </p>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-md w-full border-2 border-emerald-600/50 overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              {/* Success Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/50">
                  <Coffee className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                ¡Sorpresa en Camino!
              </h2>

              {/* What happens next */}
              <div className="mb-6 p-5 bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-gray-600/50">
                <h3 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wide">
                  ¿Qué sigue?
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">1.</span>
                    <span>Seleccionaremos algo especial para ti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">2.</span>
                    <span>Recibirás tu café durante tu turno nocturno</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">3.</span>
                    <span>Te notificaremos cuando esté listo para recoger</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">4.</span>
                    <span>Confirma la recepción cuando lo tengas</span>
                  </li>
                </ul>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 active:scale-95 transition-all shadow-lg shadow-emerald-900/50"
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-md w-full border-2 border-coffee-600/50 overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-full flex items-center justify-center shadow-lg shadow-coffee-900/50">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                ¿Cómo estuvo?
              </h2>
              <p className="text-gray-400 text-center mb-6 text-sm">
                Espero que le guste (yo).
              </p>

              {/* Textarea */}
              <div className="mb-6">
                <textarea
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  placeholder="Deja un comentario..."
                  className="w-full h-32 px-4 py-3 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-coffee-500 focus:ring-2 focus:ring-coffee-500/50 transition-all resize-none"
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
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 active:scale-95 transition-all shadow-lg shadow-emerald-900/50"
                >
                  Enviar Comentario
                </button>
                <button
                  onClick={skipFeedback}
                  className="w-full py-3 px-6 bg-gray-700/50 text-gray-300 rounded-2xl font-semibold hover:bg-gray-700 active:scale-95 transition-all border border-gray-600"
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
