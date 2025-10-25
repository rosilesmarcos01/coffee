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

      toast.success('¡Pedido registrado! 🎉');
      navigate('/');
    } catch (error) {
      toast.error('Error al crear el pedido');
      console.error(error);
    }
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

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
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-gray-100 rounded-lg"
            title="Volver"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Menú</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-32">
        {/* Debug indicator */}
        {selectedItems.length > 0 && (
          <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
            <p className="text-sm text-blue-800">
              ✓ {selectedItems.length} items seleccionados - El botón debería aparecer abajo
            </p>
          </div>
        )}
        
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 capitalize">
              {category === 'coffee' ? '☕ Cafés' :
               category === 'food' ? '🥪 Comida' :
               '🎁 Combos'}
            </h2>
            
            <div className="grid gap-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    selectedItems.includes(item.id)
                      ? 'border-coffee-600 bg-coffee-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    {selectedItems.includes(item.id) && (
                      <div className="ml-4 flex-shrink-0 w-6 h-6 bg-coffee-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="fixed bottom-0 left-0 right-0 bg-coffee-600 shadow-2xl z-50" style={{ minHeight: '80px' }}>
          <div className="px-4 py-3">
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-4 bg-white text-coffee-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg border-2 border-coffee-700"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Confirmar Pedido ({selectedItems.length})</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
