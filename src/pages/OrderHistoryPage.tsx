import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArrowLeft, Coffee, CheckCircle, Clock, Calendar, Package } from 'lucide-react';
import toast from 'react-hot-toast';
import { Order, MenuItem } from '../types';

export default function OrderHistoryPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'delivered' | 'confirmed'>('all');

  useEffect(() => {
    loadOrders();
    loadMenuItems();
  }, [user]);

  const loadOrders = async () => {
    if (!user) return;

    try {
      const ordersRef = collection(db, 'orders');
      const q = query(
        ordersRef, 
        where('userId', '==', user.uid)
      );
      const snapshot = await getDocs(q);
      
      const ordersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      
      // Sort by createdAt in JavaScript to avoid needing a Firestore index
      ordersData.sort((a, b) => {
        const aTime = a.createdAt?.toDate?.()?.getTime() || 0;
        const bTime = b.createdAt?.toDate?.()?.getTime() || 0;
        return bTime - aTime; // descending order (newest first)
      });
      
      setOrders(ordersData);
    } catch (error) {
      console.error('Error loading orders:', error);
      toast.error('Error al cargar el historial');
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

  const getOrderSummary = (order: Order) => {
    if (order.orderType === 'surprise') {
      return 'Sorpresa del courier';
    }
    
    // Try itemSelections first (new format)
    if (order.itemSelections && order.itemSelections.length > 0) {
      const itemNames = order.itemSelections
        .map(selection => {
          const item = menuItems.find(m => m.id === selection.itemId);
          return item?.name;
        })
        .filter(Boolean);
      
      if (itemNames.length > 0) {
        return itemNames.join(', ');
      }
    }
    
    // Fall back to selectedItems (legacy format)
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

  const getStatusInfo = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Pendiente',
          className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
          icon: Clock
        };
      case 'ordered':
        return {
          label: 'En proceso',
          className: 'bg-blue-100 text-blue-700 border-blue-200',
          icon: Package
        };
      case 'delivered':
        return {
          label: 'Entregado',
          className: 'bg-purple-100 text-purple-700 border-purple-200',
          icon: Coffee
        };
      case 'confirmed':
        return {
          label: 'Confirmado',
          className: 'bg-green-100 text-green-700 border-green-200',
          icon: CheckCircle
        };
      default:
        return {
          label: 'Desconocido',
          className: 'bg-gray-100 text-gray-700 border-gray-200',
          icon: Clock
        };
    }
  };

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/20 rounded-full text-white transition-all active:scale-95"
            title="Volver"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold text-white">Historial de Pedidos</h1>
            <p className="text-xs text-pink-100">Tus pedidos anteriores</p>
          </div>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-6">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
              filterStatus === 'all'
                ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
            }`}
          >
            Todos ({orders.length})
          </button>
          <button
            onClick={() => setFilterStatus('pending')}
            className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
              filterStatus === 'pending'
                ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
            }`}
          >
            Pendientes ({orders.filter(o => o.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilterStatus('delivered')}
            className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
              filterStatus === 'delivered'
                ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
            }`}
          >
            Entregados ({orders.filter(o => o.status === 'delivered').length})
          </button>
          <button
            onClick={() => setFilterStatus('confirmed')}
            className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
              filterStatus === 'confirmed'
                ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
            }`}
          >
            Confirmados ({orders.filter(o => o.status === 'confirmed').length})
          </button>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Coffee className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {filterStatus === 'all' ? 'No tienes pedidos' : 'No hay pedidos en esta categoría'}
            </h3>
            <p className="text-gray-600 mb-6">
              {filterStatus === 'all' 
                ? 'Empieza haciendo tu primer pedido' 
                : 'Cambia de filtro para ver otros pedidos'}
            </p>
            {filterStatus === 'all' && (
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md"
              >
                Ir al inicio
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const statusInfo = getStatusInfo(order.status);
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-pink-100 rounded-xl">
                          <Calendar className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-base">
                            {format(new Date(order.shiftDate), "EEEE d 'de' MMMM", { locale: es })}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Creado: {format(order.createdAt.toDate(), "d MMM yyyy, HH:mm", { locale: es })}
                          </p>
                        </div>
                      </div>

                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${statusInfo.className} flex items-center gap-1.5`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {statusInfo.label}
                      </span>
                    </div>

                    {/* Order Details */}
                    <div className="p-4 bg-pink-50 rounded-xl mb-3">
                      <div className="flex items-start gap-3">
                        <Coffee className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide">
                            {order.orderType === 'surprise' ? 'Sorpresa' : 'Pedido personalizado'}
                          </p>
                          <p className="text-sm font-medium text-gray-800">
                            {getOrderSummary(order)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Courier Comment */}
                    {order.courierComment && (
                      <div className="p-3 bg-blue-50 rounded-xl mb-3 border border-blue-100">
                        <p className="text-xs text-blue-600 mb-1 font-medium uppercase tracking-wide">
                          Mensaje para courier:
                        </p>
                        <p className="text-sm text-gray-700">{order.courierComment}</p>
                      </div>
                    )}

                    {/* Feedback */}
                    {order.feedback && (
                      <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-xs text-green-600 mb-1 font-medium uppercase tracking-wide">
                          Tu comentario:
                        </p>
                        <p className="text-sm text-gray-700">{order.feedback}</p>
                      </div>
                    )}

                    {/* Timestamps */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                        {order.deliveryTime && (
                          <div>
                            <p className="font-medium text-gray-600">Entregado:</p>
                            <p>{format(order.deliveryTime.toDate(), "d MMM, HH:mm", { locale: es })}</p>
                          </div>
                        )}
                        {order.confirmedAt && (
                          <div>
                            <p className="font-medium text-gray-600">Confirmado:</p>
                            <p>{format(order.confirmedAt.toDate(), "d MMM, HH:mm", { locale: es })}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-around">
            <button 
              onClick={() => navigate('/')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>
            <button className="flex flex-col items-center gap-1 text-pink-500">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-2.5 rounded-xl">
                <Clock className="w-5 h-5 text-white" />
              </div>
            </button>
            <button 
              onClick={() => navigate('/shifts')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
            >
              <Calendar className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
