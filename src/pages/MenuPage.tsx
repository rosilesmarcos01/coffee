import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ArrowLeft, ShoppingCart, Coffee, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { MenuItem, OrderItemSelection, DrinkSize, MilkType } from '../types';

interface MenuLocationState {
  shiftDate?: string;
  orderId?: string;
  existingItems?: OrderItemSelection[];
}

export default function MenuPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as MenuLocationState;
  const shiftDate = locationState?.shiftDate;
  const existingOrderId = locationState?.orderId;
  const existingItems = locationState?.existingItems || [];

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<OrderItemSelection[]>(existingItems);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [customizationModal, setCustomizationModal] = useState<{
    item: MenuItem | null;
    isOpen: boolean;
  }>({ item: null, isOpen: false });
  const [tempSize, setTempSize] = useState<DrinkSize>('grande');
  const [tempMilkType, setTempMilkType] = useState<MilkType>('whole');

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
      
      // Mark which items have size/milk options based on category
      const processedItems = items.map(item => {
        const drinkCategories = [
          'hot-coffee', 'iced-coffee', 'cold-brew', 
          'frappuccino-coffee', 'frappuccino-cream', 
          'shaken-espresso', 'hot-tea', 'iced-tea', 'seasonal'
        ];
        
        const needsMilk = [
          'hot-coffee', 'iced-coffee', 'cold-brew',
          'frappuccino-coffee', 'shaken-espresso', 'seasonal'
        ];
        
        return {
          ...item,
          hasSizeOptions: drinkCategories.includes(item.category),
          hasMilkOptions: needsMilk.includes(item.category)
        };
      });
      
      setMenuItems(processedItems.filter(item => item.available));
    } catch (error) {
      toast.error('Error al cargar el menú');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (item: MenuItem) => {
    // Check if item requires customization
    if (item.hasSizeOptions || item.hasMilkOptions) {
      // Open customization modal
      setTempSize('grande');
      setTempMilkType('whole');
      setCustomizationModal({ item, isOpen: true });
    } else {
      // For food items, just toggle selection
      toggleItem(item.id);
    }
  };

  const toggleItem = (itemId: string, size?: DrinkSize, milkType?: MilkType) => {
    setSelectedItems(prev => {
      const existingIndex = prev.findIndex(item => item.itemId === itemId);
      
      if (existingIndex >= 0) {
        // Remove item if already selected
        return prev.filter(item => item.itemId !== itemId);
      } else {
        // Add new item with customization
        return [...prev, { itemId, size, milkType }];
      }
    });
  };

  const confirmCustomization = () => {
    if (!customizationModal.item) return;
    
    const item = customizationModal.item;
    toggleItem(
      item.id,
      item.hasSizeOptions ? tempSize : undefined,
      item.hasMilkOptions ? tempMilkType : undefined
    );
    
    setCustomizationModal({ item: null, isOpen: false });
  };

  const isItemSelected = (itemId: string) => {
    return selectedItems.some(item => item.itemId === itemId);
  };

  const handleSubmit = async () => {
    if (!user) {
      toast.error('Usuario no autenticado');
      return;
    }

    if (!shiftDate) {
      toast.error('No se encontró la fecha del turno');
      return;
    }

    if (selectedItems.length === 0) {
      toast.error('Selecciona al menos un item');
      return;
    }

    try {
      const date = new Date(shiftDate);
      const dayOfWeek = date.getDay();
      const isShift = dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 6; // Monday, Wednesday, Saturday
      const dayName = isShift ? date.toLocaleDateString('es', { weekday: 'long' }) as 'monday' | 'wednesday' | 'saturday' : undefined;

      // Clean up item selections to remove undefined values for Firestore
      const cleanedItemSelections = selectedItems.map(item => {
        const cleaned: OrderItemSelection = { itemId: item.itemId };
        if (item.size !== undefined) cleaned.size = item.size;
        if (item.milkType !== undefined) cleaned.milkType = item.milkType;
        return cleaned;
      });

      let orderId = existingOrderId;

      if (existingOrderId) {
        // Update existing order
        const orderRef = doc(db, 'orders', existingOrderId);
        await updateDoc(orderRef, {
          itemSelections: cleanedItemSelections,
          selectedItems: selectedItems.map(item => item.itemId),
          updatedAt: new Date(),
        });
        toast.success('Pedido actualizado');
      } else {
        // Create new order
        const orderData: any = {
          userId: user.uid,
          shiftDate,
          isShiftDay: isShift,
          orderType: 'selected',
          itemSelections: cleanedItemSelections,
          selectedItems: selectedItems.map(item => item.itemId),
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        if (dayName) {
          orderData.shiftDay = dayName;
        }

        const orderRef = await addDoc(collection(db, 'orders'), orderData);
        orderId = orderRef.id;
      }

      // Navigate to order summary page with order details
      navigate('/order-summary', {
        state: {
          orderId,
          selectedItems: cleanedItemSelections,
          shiftDate
        }
      });
    } catch (error) {
      toast.error('Error al crear el pedido');
      console.error(error);
    }
  };

  const createSurpriseOrder = async () => {
    if (!user || !shiftDate) {
      toast.error('No se encontró la información del turno');
      return;
    }

    try {
      const date = new Date(shiftDate);
      const dayOfWeek = date.getDay();
      const isShift = dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 6; // Monday, Wednesday, Saturday
      const dayName = isShift ? date.toLocaleDateString('es', { weekday: 'long' }) as 'monday' | 'wednesday' | 'saturday' : undefined;

      const orderData: any = {
        userId: user.uid,
        shiftDate,
        isShiftDay: isShift,
        orderType: 'surprise',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (dayName) {
        orderData.shiftDay = dayName;
      }

      await addDoc(collection(db, 'orders'), orderData);

      toast.success('¡Sorpresa creada! Prepárate para algo especial');
      navigate('/');
    } catch (error) {
      toast.error('Error al crear el pedido');
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  const categories = [
    { id: 'all', label: 'Todos', value: 'all' },
    { id: 'seasonal', label: 'Temporada', value: 'seasonal' },
    { id: 'hot-coffee', label: 'Café Caliente', value: 'hot-coffee' },
    { id: 'iced-coffee', label: 'Café Frío', value: 'iced-coffee' },
    { id: 'cold-brew', label: 'Cold Brew', value: 'cold-brew' },
    { id: 'frappuccino-coffee', label: 'Frappuccino Café', value: 'frappuccino-coffee' },
    { id: 'frappuccino-cream', label: 'Frappuccino Crema', value: 'frappuccino-cream' },
    { id: 'refreshers', label: 'Refreshers', value: 'refreshers' },
    { id: 'shaken-espresso', label: 'Shaken Espresso', value: 'shaken-espresso' },
    { id: 'hot-tea', label: 'Té Caliente', value: 'hot-tea' },
    { id: 'iced-tea', label: 'Té Frío', value: 'iced-tea' },
    { id: 'food', label: 'Alimentos', value: 'food' },
    { id: 'combo', label: 'Combos', value: 'combo' },
  ];

  const getFilteredMenuItems = () => {
    if (selectedCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter(item => item.category === selectedCategory);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => navigate(existingOrderId ? '/order-summary' : '/', {
              state: existingOrderId ? {
                orderId: existingOrderId,
                selectedItems: existingItems,
                shiftDate
              } : undefined
            })}
            className="p-2 hover:bg-white/20 rounded-full text-white transition-all active:scale-95"
            title="Volver"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold text-white">
              {existingOrderId ? 'Agregar más items' : 'Menú Completo'}
            </h1>
            <p className="text-xs text-pink-100">
              {existingOrderId ? 'Selecciona items adicionales' : 'Selecciona tus favoritos'}
            </p>
          </div>
          <div className="w-10" />
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-6 py-6 pb-32">
        {/* Choose for Me Banner */}
        <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-6 mb-6 relative overflow-hidden shadow-lg border border-pink-200">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ¿No sabes qué elegir?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Déjame sorprenderte con algo especial
            </p>
            <button
              onClick={() => {
                if (!shiftDate) {
                  toast.error('No se encontró la fecha del turno');
                  return;
                }
                createSurpriseOrder();
              }}
              className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md flex items-center gap-2"
            >
              <Coffee className="w-5 h-5" />
              Sorpréndeme
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
            <Coffee className="w-24 h-24 text-pink-600" />
          </div>
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

        {/* Selection indicator */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-pink-100 border border-pink-200 rounded-xl">
            <p className="text-sm text-pink-700 font-medium">
              ✓ {selectedItems.length} items seleccionados
            </p>
          </div>
        )}
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-2 gap-4">
          {getFilteredMenuItems().map((item) => (
            <button
              key={`${item.id}-${selectedCategory}`}
              onClick={() => handleItemClick(item)}
              className={`rounded-2xl overflow-hidden transition-all text-left w-full relative ${
                isItemSelected(item.id)
                  ? 'shadow-xl ring-2 ring-pink-400'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-[#00704A] flex items-center justify-center relative overflow-hidden">
                {item.imageUrl ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      key={`img-${item.id}-${selectedCategory}`}
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                  </div>
                ) : (
                  <Coffee className="w-20 h-20 text-white" />
                )}
                {isItemSelected(item.id) && (
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Item Info */}
              <div className="p-4 bg-white h-[120px] flex flex-col">
                <h3 className="font-bold text-gray-800 mb-1 text-sm line-clamp-2 flex-shrink-0">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3 flex-1">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {getFilteredMenuItems().length === 0 && (
          <div className="text-center py-12">
            <Coffee className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No hay items en esta categoría</p>
          </div>
        )}
      </main>

      {/* Fixed Bottom Bar */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200" style={{ minHeight: '90px' }}>
          <div className="px-6 py-4">
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>
                {existingOrderId ? `Actualizar Pedido (${selectedItems.length})` : `Confirmar Pedido (${selectedItems.length})`}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-8">
              {/* Success Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                ¡Pedido Confirmado!
              </h2>

              {/* What happens next */}
              <div className="mb-6 p-5 bg-pink-50 rounded-2xl border border-pink-100">
                <h3 className="text-sm font-bold text-pink-600 mb-3 uppercase tracking-wide">
                  ¿Qué sigue?
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">1.</span>
                    <span>Tu pedido ha sido registrado exitosamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">2.</span>
                    <span>El sistema hará tu pedido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 font-bold mt-0.5">3.</span>
                    <span>Recibirás una notificación cuando esté listo para recoger</span>
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
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-lg"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customization Modal */}
      {customizationModal.isOpen && customizationModal.item && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Personaliza tu bebida
                </h2>
                <button
                  onClick={() => setCustomizationModal({ item: null, isOpen: false })}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Item Name */}
              <div className="mb-6 p-4 bg-pink-50 rounded-xl border border-pink-100">
                <h3 className="font-bold text-gray-800">{customizationModal.item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{customizationModal.item.description}</p>
              </div>

              {/* Size Selection */}
              {customizationModal.item.hasSizeOptions && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Tamaño</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {(['tall', 'grande', 'venti'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setTempSize(size)}
                        className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                          tempSize === size
                            ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {size === 'tall' && 'Tall (12 oz)'}
                        {size === 'grande' && 'Grande (16 oz)'}
                        {size === 'venti' && 'Venti (20 oz)'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Milk Selection */}
              {customizationModal.item.hasMilkOptions && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Tipo de leche</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      { value: 'whole', label: 'Entera' },
                      { value: '2%', label: 'Deslactosada' },
                      { value: 'nonfat', label: 'Descremada' },
                      { value: 'almond', label: 'Almendra' },
                      { value: 'coconut', label: 'Coco' },
                      { value: 'oat', label: 'Avena' },
                      { value: 'soy', label: 'Soya' },
                      { value: 'none', label: 'Sin leche' }
                    ] as const).map((milk) => (
                      <button
                        key={milk.value}
                        onClick={() => setTempMilkType(milk.value)}
                        className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                          tempMilkType === milk.value
                            ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {milk.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setCustomizationModal({ item: null, isOpen: false })}
                  className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:scale-95 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmCustomization}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-lg"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
