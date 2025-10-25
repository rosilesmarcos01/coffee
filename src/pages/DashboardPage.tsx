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

  useEffect(() => {
    loadTodayShift();
    loadOrders();
    loadMenuItems();
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

      toast.success('¡Pedido registrado! Sorpresa en camino ✨');
      loadOrders();
    } catch (error) {
      toast.error('Error al crear el pedido');
      console.error(error);
    }
  };

  const confirmDelivery = async (orderId: string) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, {
        status: 'confirmed',
        confirmedAt: new Date(),
        updatedAt: new Date(),
      });

      toast.success('¡Confirmado! Disfruta tu café ☕');
      loadOrders();
    } catch (error) {
      toast.error('Error al confirmar');
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coffee-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="w-8 h-8 text-coffee-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Night Shift Coffee</h1>
              <p className="text-sm text-gray-600">Hola, {user?.email?.split('@')[0]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {user?.email === 'rosilesmarcos99@gmail.com' && (
              <button
                onClick={() => navigate('/admin')}
                className="p-2 text-coffee-600 hover:text-coffee-700 hover:bg-coffee-50 rounded-lg transition-colors"
                title="Panel de administración"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => signOut()}
              className="p-2 text-gray-600 hover:text-gray-800"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Today's Shift Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Que se te antoja hoy?
          </h2>
          <p className="text-gray-600">
            {todayShift ? 'Tu guardia nocturna' : 'No hay guardia programado para hoy'}
          </p>
        </div>

        {todayShift ? (
          <div className="mb-8">
            {(() => {
              const order = getOrderForShift(todayShift);
              
              return (
                <div className="rounded-xl shadow-sm p-6 border-2 bg-coffee-50 border-coffee-600">
                  <div className="mb-3 inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                    TURNO DE HOY
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-orange-600" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {format(todayShift, "EEEE d 'de' MMMM", { locale: es })}
                        </h3>
                        <p className="text-sm text-gray-600">Turno nocturno</p>
                      </div>
                    </div>

                    {order && (() => {
                      let statusClass = 'bg-yellow-100 text-yellow-700';
                      let statusText = '⏳ Pendiente';
                      
                      if (order.status === 'confirmed') {
                        statusClass = 'bg-green-100 text-green-700';
                        statusText = '✓ Confirmado';
                      } else if (order.status === 'delivered') {
                        statusClass = 'bg-blue-100 text-blue-700';
                        statusText = '📦 Entregado';
                      }
                      
                      return (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass}`}>
                          {statusText}
                        </span>
                      );
                    })()}
                  </div>

                  {order && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Tu pedido:</p>
                      <p className="text-sm font-medium text-gray-800">
                        {getOrderSummary(order)}
                      </p>
                    </div>
                  )}

                  {!order && (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleOrderForShift(todayShift, 'surprise')}
                        className="w-full py-3 px-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Coffee className="w-5 h-5" />
                        Sorpréndeme
                      </button>
                      <button
                        onClick={() => handleOrderForShift(todayShift, 'selected')}
                        className="w-full py-3 px-4 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border border-gray-300"
                      >
                        <Calendar className="w-5 h-5" />
                        Ver Menú
                      </button>
                    </div>
                  )}
                  
                  {order && order.status === 'delivered' && (
                    <button
                      onClick={() => confirmDelivery(order.id)}
                      className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Confirmar que lo recibí
                    </button>
                  )}
                  
                  {order && order.status !== 'delivered' && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">
                        {order.orderType === 'surprise' ? 'Sorpresa en camino' : 'Pedido en proceso'}
                      </span>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        ) : (
          <div className="mb-8 rounded-xl shadow-sm p-6 border-2 bg-gray-50 border-gray-200 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No hay turno programado para hoy</p>
            <p className="text-sm text-gray-500 mt-1">Los turnos son Lunes, Miércoles y Sábados</p>
          </div>
        )}

        {/* Past Orders Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Pedidos Anteriores
          </h2>
          <p className="text-gray-600">
            Tus últimas entregas
          </p>
        </div>

        {pastOrders.length > 0 ? (
          <div className="space-y-4 mb-8">
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-xl shadow-sm p-6 border-2 bg-white border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-coffee-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {format(new Date(order.shiftDate), "EEEE d 'de' MMMM", { locale: es })}
                      </h3>
                      <p className="text-sm text-gray-600">Turno nocturno</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    ✓ Completado
                  </span>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Pedido:</p>
                  <p className="text-sm font-medium text-gray-800">
                    {getOrderSummary(order)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-8 rounded-xl shadow-sm p-6 border-2 bg-white border-gray-200 text-center">
            <Coffee className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium mb-1">Aún no hay pedidos anteriores</p>
            <p className="text-sm text-gray-500">
              Tus pedidos completados aparecerán aquí una vez que los recibas
            </p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Cafés este mes</p>
            <p className="text-3xl font-bold text-coffee-600">
              {orders.filter(o => o.status === 'confirmed').length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Pedidos completados</p>
            <p className="text-3xl font-bold text-coffee-600">
              {pastOrders.length}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
