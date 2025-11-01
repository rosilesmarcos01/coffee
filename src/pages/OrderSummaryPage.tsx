import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ArrowLeft, MapPin, MessageSquare, CheckCircle, Plus, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { MenuItem, OrderItemSelection } from '../types';

interface LocationState {
  orderId?: string;
  selectedItems: OrderItemSelection[];
  shiftDate?: string;
}

// Helper function to check if a date is a shift day (Monday, Wednesday, Saturday)
const isShiftDay = (dateString: string): boolean => {
  // Parse YYYY-MM-DD as local date to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day); // month is 0-indexed
  const dayOfWeek = date.getDay();
  return dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 6; // Monday, Wednesday, Saturday
};

export default function OrderSummaryPage() {
  useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, selectedItems, shiftDate } = (location.state as LocationState) || {};

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [comment, setComment] = useState('');
  const [customAddress, setCustomAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  // Default delivery address for shift days
  const defaultDeliveryAddress = 'Av. De Los Deportes 515, Deportivo, 36749 Salamanca, Gto.';
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.1!2d-101.1968!3d20.5728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM0JzIyLjEiTiAxMDHCsDExJzQ4LjUiVw!5e0!3m2!1sen!2smx!4v1234567890123';

  const isOrderOnShiftDay = shiftDate ? isShiftDay(shiftDate) : false;

  useEffect(() => {
    if (!selectedItems || selectedItems.length === 0) {
      toast.error('No hay items en el pedido');
      navigate('/');
      return;
    }
    loadMenuItems();
  }, [selectedItems, navigate]);

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
      console.error('Error loading menu items:', error);
      toast.error('Error al cargar los detalles del pedido');
    } finally {
      setLoading(false);
    }
  };

  const getItemDetails = (itemId: string) => {
    return menuItems.find(item => item.id === itemId);
  };

  const getSizeLabel = (size?: string) => {
    switch (size) {
      case 'tall': return 'Tall (12 oz)';
      case 'grande': return 'Grande (16 oz)';
      case 'venti': return 'Venti (20 oz)';
      default: return '';
    }
  };

  const getMilkLabel = (milkType?: string) => {
    switch (milkType) {
      case 'whole': return 'Leche entera';
      case '2%': return 'Leche deslactosada';
      case 'nonfat': return 'Leche descremada';
      case 'almond': return 'Leche de almendra';
      case 'coconut': return 'Leche de coco';
      case 'oat': return 'Leche de avena';
      case 'soy': return 'Leche de soya';
      case 'none': return 'Sin leche';
      default: return '';
    }
  };

  const handleSubmit = async () => {
    if (!orderId) {
      toast.error('No se encontró el ID del pedido');
      return;
    }

    if (comment.trim().length > 500) {
      toast.error('El comentario es muy largo (máximo 500 caracteres)');
      return;
    }

    // Validate custom address for non-shift days
    if (!isOrderOnShiftDay && !customAddress.trim()) {
      toast.error('Por favor ingresa una dirección de entrega');
      return;
    }

    setSubmitting(true);

    try {
      // Update the order with the comment and custom address if applicable
      const orderRef = doc(db, 'orders', orderId);
      const updateData: any = {
        courierComment: comment.trim(),
        updatedAt: new Date(),
      };

      if (!isOrderOnShiftDay) {
        updateData.customDeliveryAddress = customAddress.trim();
      }

      await updateDoc(orderRef, updateData);

      toast.success('¡Pedido confirmado con éxito!');
      navigate('/');
    } catch (error) {
      console.error('Error updating order:', error);
      toast.error('Error al actualizar el pedido');
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddMoreItems = () => {
    // Navigate back to menu with the current order info
    if (!location.state) return;
    
    const state = location.state as LocationState;
    navigate('/menu', {
      state: {
        shiftDate: state.shiftDate,
        orderId: state.orderId,
        existingItems: state.selectedItems
      }
    });
  };

  const handleCancelOrder = async () => {
    if (!orderId) {
      toast.error('No se encontró el ID del pedido');
      return;
    }

    setCancelling(true);

    try {
      // Delete the order from Firestore
      const orderRef = doc(db, 'orders', orderId);
      await deleteDoc(orderRef);

      toast.success('Pedido cancelado');
      navigate('/');
    } catch (error) {
      console.error('Error cancelling order:', error);
      toast.error('Error al cancelar el pedido');
    } finally {
      setCancelling(false);
      setShowCancelModal(false);
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
    <div className="min-h-screen bg-pink-50 pb-32">
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
            <h1 className="text-xl font-bold text-white">Resumen del Pedido</h1>
            <p className="text-xs text-pink-100">Confirma los detalles</p>
          </div>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-1">¡Pedido Confirmado!</h2>
              <p className="text-sm text-green-50">Tu pedido ha sido registrado exitosamente</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4">
            <h3 className="text-lg font-bold text-white">Tu Pedido</h3>
          </div>
          <div className="p-6 space-y-4">
            {selectedItems.map((selection) => {
              const item = getItemDetails(selection.itemId);
              if (!item) return null;

              // Create a unique key that handles undefined values properly
              const itemKey = `${selection.itemId}-${selection.size || 'no-size'}-${selection.milkType || 'no-milk'}`;

              return (
                <div key={itemKey} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div className="w-20 h-20 bg-[#00704A] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl">☕</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-1">{item.name}</h4>
                    {selection.size && (
                      <p className="text-sm text-gray-600">• {getSizeLabel(selection.size)}</p>
                    )}
                    {selection.milkType && (
                      <p className="text-sm text-gray-600">• {getMilkLabel(selection.milkType)}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Address with Map or Custom Address Input */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-white" />
            <h3 className="text-lg font-bold text-white">Dirección de Entrega</h3>
          </div>
          <div className="p-6">
            {isOrderOnShiftDay ? (
              <>
                <p className="text-gray-800 font-medium mb-4">{defaultDeliveryAddress}</p>
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación de entrega"
                  ></iframe>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-800 font-medium mb-1">
                    📍 Pedido fuera de día de guardia
                  </p>
                  <p className="text-xs text-blue-700">
                    Por favor ingresa la dirección donde deseas recibir tu pedido
                  </p>
                </div>
                <textarea
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  placeholder="Ingresa la dirección completa de entrega..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all resize-none"
                  rows={3}
                  maxLength={200}
                />
                <p className="text-sm text-gray-500 mt-2 text-right">
                  {customAddress.length}/200 caracteres
                </p>
              </>
            )}
          </div>
        </div>

        {/* Comment Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4 flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-white" />
            <h3 className="text-lg font-bold text-white">Mensaje para el Courier</h3>
          </div>
          <div className="p-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escribe un mensaje para el courier (opcional). Ejemplo: Dejar en la recepción, tocar el timbre, etc."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all resize-none"
              rows={4}
              maxLength={500}
            />
            <p className="text-sm text-gray-500 mt-2 text-right">
              {comment.length}/500 caracteres
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleAddMoreItems}
            className="px-6 py-4 bg-white border-2 border-pink-400 text-pink-500 rounded-2xl font-bold hover:bg-pink-50 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Agregar más</span>
          </button>
          <button
            onClick={() => setShowCancelModal(true)}
            className="px-6 py-4 bg-white border-2 border-red-400 text-red-500 rounded-2xl font-bold hover:bg-red-50 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <XCircle className="w-5 h-5" />
            <span>Cancelar pedido</span>
          </button>
        </div>

        {/* What's Next */}
        <div className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-pink-600 mb-3 uppercase tracking-wide">
            ¿Qué sigue?
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold mt-0.5">1.</span>
              <span>El sistema procesará tu pedido</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold mt-0.5">2.</span>
              <span>El courier recogerá tu pedido</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold mt-0.5">3.</span>
              <span>Recibirás tu pedido en la dirección indicada</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold mt-0.5">4.</span>
              <span>Confirma la recepción cuando lo tengas</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200">
        <div className="px-6 py-4">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Guardando...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-6 h-6" />
                <span>Confirmar y Finalizar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-8">
              {/* Warning Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-12 h-12 text-red-500" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                ¿Cancelar pedido?
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                Esta acción no se puede deshacer. Se eliminará tu pedido completo y tendrás que empezar de nuevo.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  disabled={cancelling}
                  className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:scale-95 transition-all disabled:opacity-50"
                >
                  No, volver
                </button>
                <button
                  onClick={handleCancelOrder}
                  disabled={cancelling}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-xl font-bold hover:from-red-500 hover:to-red-600 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                >
                  {cancelling ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Cancelando...</span>
                    </div>
                  ) : (
                    'Sí, cancelar'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
