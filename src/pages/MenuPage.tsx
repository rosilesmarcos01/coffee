import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';
import { MenuItem } from '../types';

export default function MenuPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const shiftDate = (location.state as { shiftDate?: string })?.shiftDate;

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const menuRef = collection(db, 'menu');
      const snapshot = await getDocs(menuRef);
      
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MenuItem[];
      
      setMenuItems(items.filter(item => item.available));
    } catch (error) {
      toast.error('Error al cargar el menú');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubmit = async () => {
    if (!user || !shiftDate || selectedItems.length === 0) {
      toast.error('Selecciona al menos un item');
      return;
    }

    try {
      const dayName = new Date(shiftDate).toLocaleDateString('es', { weekday: 'long' }) as 'monday' | 'wednesday' | 'saturday';

      await addDoc(collection(db, 'orders'), {
        userId: user.uid,
        shiftDate,
        shiftDay: dayName,
        orderType: 'selected',
        selectedItems,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      setShowSuccessModal(true);
    } catch (error) {
      toast.error('Error al crear el pedido');
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      'seasonal': '🎄 Bebidas de Temporada',
      'hot-coffee': '☕ Cafés Calientes',
      'iced-coffee': '🧊 Cafés Fríos',
      'cold-brew': '❄️ Cold Brew',
      'frappuccino-coffee': '🥤 Frappuccinos® de Café',
      'frappuccino-cream': '🍦 Frappuccinos® Crema',
      'refreshers': '🍓 Starbucks Refreshers®',
      'shaken-espresso': '🥃 Iced Shaken Espresso',
      'hot-tea': '🍵 Tés Calientes',
      'iced-tea': '🧃 Tés Fríos',
      'food': '🥐 Alimentos',
      'coffee-beans': '☕ Tipo de grano',
      'coffee': '☕ Cafés',
      'combo': '🎁 Combos',
    };
    return labels[category] || category;
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
      <header className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700/50 backdrop-blur-sm bg-gray-800/95 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="p-2.5 hover:bg-gray-700/50 rounded-xl text-gray-400 hover:text-gray-200 transition-all active:scale-95"
            title="Volver"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white">Menú</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-32">
        {/* Instructions */}
        <div className="mb-6 p-5 bg-gradient-to-br from-coffee-900/20 to-coffee-800/20 backdrop-blur-sm border border-coffee-700/30 rounded-2xl">
          <h3 className="text-lg font-bold text-coffee-300 mb-3 flex items-center gap-2">
            <span className="text-2xl"></span>
            Instrucciones
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-coffee-400 font-bold mt-0.5">1.</span>
              <span>Selecciona los items que deseas para tu pedido</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coffee-400 font-bold mt-0.5">2.</span>
              <span>Puedes elegir múltiples items de diferentes categorías</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coffee-400 font-bold mt-0.5">3.</span>
              <span>Confirma tu pedido cuando estés lista!</span>
            </li>
          </ul>
        </div>

        {/* Selection indicator */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-blue-900/30 backdrop-blur-sm border border-blue-700/50 rounded-xl">
            <p className="text-sm text-blue-300 font-medium">
              ✓ {selectedItems.length} items seleccionados
            </p>
          </div>
        )}
        
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-5">
              {getCategoryLabel(category)}
            </h2>
            
            <div className="grid gap-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left group hover:scale-[1.02] active:scale-[0.98] ${
                    selectedItems.includes(item.id)
                      ? 'border-coffee-600 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg shadow-coffee-900/20'
                      : 'border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-gray-600 hover:bg-gray-800/80'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-2 text-lg group-hover:text-coffee-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    {selectedItems.includes(item.id) && (
                      <div className="ml-4 flex-shrink-0 w-8 h-8 bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Fixed Bottom Bar */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg shadow-2xl z-50 border-t border-gray-700" style={{ minHeight: '90px' }}>
          <div className="px-4 py-4">
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-900/50"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Confirmar Pedido ({selectedItems.length})</span>
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-md w-full border-2 border-emerald-600/50 overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              {/* Success Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/50">
                  <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                ¡Pedido Confirmado!
              </h2>

              {/* What happens next */}
              <div className="mb-6 p-5 bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-gray-600/50">
                <h3 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wide">
                  ¿Qué sigue?
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">1.</span>
                    <span>Tu pedido ha sido registrado exitosamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">2.</span>
                    <span>El sistema hará tu pedido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">3.</span>
                    <span>Recibirás una notificación cuando esté listo para recoger</span>
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
    </div>
  );
}
