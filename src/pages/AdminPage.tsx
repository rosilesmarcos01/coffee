import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Package, CheckCircle, ArrowLeft, Coffee, Clock, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { Order, MenuItem } from '../types';

export default function AdminPage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [menuItems, setMenuItems] = useState<Record<string, MenuItem>>({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'ordered'>('pending');

  useEffect(() => {
    loadMenu();
    loadOrders();
  }, [filter]);

  const loadMenu = async () => {
    try {
      const menuRef = collection(db, 'menu');
      const snapshot = await getDocs(menuRef);
      const items: Record<string, MenuItem> = {};
      
      snapshot.docs.forEach(doc => {
        items[doc.id] = { id: doc.id, ...doc.data() } as MenuItem;
      });
      
      setMenuItems(items);
    } catch (error) {
      console.error('Error loading menu:', error);
    }
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const ordersRef = collection(db, 'orders');
      let q;
      
      if (filter === 'all') {
        // Get all orders without filtering
        q = query(ordersRef);
      } else {
        // Filter by status only
        q = query(ordersRef, where('status', '==', filter));
      }
      
      console.log('Fetching orders with filter:', filter);
      const snapshot = await getDocs(q);
      console.log('Found orders:', snapshot.docs.length);
      
      const ordersData = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Order data:', doc.id, data);
        return {
          id: doc.id,
          ...data
        };
      }) as Order[];
      
      // Sort in memory instead of in query
      ordersData.sort((a, b) => {
        const dateA = new Date(a.shiftDate).getTime();
        const dateB = new Date(b.shiftDate).getTime();
        return dateA - dateB;
      });
      
      console.log('Sorted orders:', ordersData);
      setOrders(ordersData);
    } catch (error) {
      console.error('Error loading orders:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      toast.error(`Error: ${error instanceof Error ? error.message : 'Desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  const markAsOrdered = async (orderId: string) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        status: 'ordered',
        updatedAt: new Date()
      });
      toast.success('✅ Marcado como ordenado');
      loadOrders();
    } catch (error) {
      toast.error('Error al actualizar');
      console.error(error);
    }
  };

  const markAsDelivered = async (orderId: string) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        status: 'delivered',
        deliveryTime: new Date(),
        updatedAt: new Date()
      });
      toast.success('📦 Marcado como entregado - Gabriela recibirá notificación');
      loadOrders();
    } catch (error) {
      toast.error('Error al actualizar');
      console.error(error);
    }
  };

  const getOrderDetails = (order: Order) => {
    if (order.orderType === 'surprise') {
      return '🎲 Sorpresa';
    }
    
    if (order.selectedItems && order.selectedItems.length > 0) {
      return order.selectedItems
        .map(itemId => menuItems[itemId]?.name || 'Item desconocido')
        .join(', ');
    }
    
    return 'Sin detalles';
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '⏳ Pendiente' },
      ordered: { bg: 'bg-blue-100', text: 'text-blue-700', label: '🛒 Ordenado' },
      delivered: { bg: 'bg-purple-100', text: 'text-purple-700', label: '📦 Entregado' },
      confirmed: { bg: 'bg-green-100', text: 'text-green-700', label: '✅ Confirmado' }
    };
    
    const badge = badges[status as keyof typeof badges] || badges.pending;
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    );
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
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-gray-100 rounded-lg"
                title="Volver"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <Coffee className="w-8 h-8 text-coffee-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Panel de Administración</h1>
                <p className="text-sm text-gray-600">Gestión de pedidos</p>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'pending'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ⏳ Pendientes ({orders.filter(o => o.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilter('ordered')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'ordered'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🛒 Ordenados ({orders.filter(o => o.status === 'ordered').length})
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-coffee-100 text-coffee-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              📋 Todos
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {orders.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No hay pedidos {filter !== 'all' ? `${filter === 'pending' ? 'pendientes' : 'ordenados'}` : ''}
            </h3>
            <p className="text-gray-500">
              Los pedidos aparecerán aquí cuando Gabriela los cree
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-xl text-gray-800">
                        {format(new Date(order.shiftDate), "EEEE d 'de' MMMM", { locale: es })}
                      </h3>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>
                        Creado: {order.createdAt?.toDate?.()?.toLocaleString('es-MX', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        }) || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase mb-1">Tipo de pedido</p>
                      <p className="text-gray-800 font-medium">
                        {order.orderType === 'surprise' ? '✨ Sorpresa' : '📋 Seleccionado'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase mb-1">Detalles</p>
                      <p className="text-gray-800">{getOrderDetails(order)}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {order.status === 'pending' && (
                    <>
                      <button
                        onClick={() => markAsOrdered(order.id)}
                        className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Package className="w-5 h-5" />
                        Marcar como Ordenado
                      </button>
                      <button
                        onClick={() => markAsDelivered(order.id)}
                        className="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Marcar como Entregado
                      </button>
                    </>
                  )}
                  
                  {order.status === 'ordered' && (
                    <button
                      onClick={() => markAsDelivered(order.id)}
                      className="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Marcar como Entregado
                    </button>
                  )}

                  {(order.status === 'delivered' || order.status === 'confirmed') && (
                    <div className="flex-1 py-3 px-4 bg-gray-100 text-gray-600 rounded-lg font-medium text-center">
                      {order.status === 'delivered' ? '⏳ Esperando confirmación de Gabriela' : '✅ Confirmado por Gabriela'}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Summary */}
        {orders.length > 0 && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Total Pedidos</p>
              <p className="text-3xl font-bold text-gray-800">{orders.length}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl shadow-sm p-6 border border-yellow-200">
              <p className="text-sm text-yellow-700 mb-1">Pendientes</p>
              <p className="text-3xl font-bold text-yellow-700">
                {orders.filter(o => o.status === 'pending').length}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-sm p-6 border border-blue-200">
              <p className="text-sm text-blue-700 mb-1">Ordenados</p>
              <p className="text-3xl font-bold text-blue-700">
                {orders.filter(o => o.status === 'ordered').length}
              </p>
            </div>
            <div className="bg-green-50 rounded-xl shadow-sm p-6 border border-green-200">
              <p className="text-sm text-green-700 mb-1">Confirmados</p>
              <p className="text-3xl font-bold text-green-700">
                {orders.filter(o => o.status === 'confirmed').length}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
