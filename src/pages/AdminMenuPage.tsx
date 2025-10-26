import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { Coffee, ArrowLeft, Plus, Edit2, Trash2, Upload, X, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { MenuItem } from '../types';
import { useAuth } from '../contexts/AuthContext';

export default function AdminMenuPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const [formData, setFormData] = useState({
    name: '',
    category: 'hot-coffee' as MenuItem['category'],
    description: '',
    available: true,
  });

  useEffect(() => {
    // Check if user is admin
    if (!user || user.email !== 'rosilesmarcos99@gmail.com') {
      toast.error('Acceso denegado');
      navigate('/');
      return;
    }
    
    loadMenuItems();
  }, [user, navigate]);

  const loadMenuItems = async () => {
    setLoading(true);
    try {
      const menuRef = collection(db, 'menu');
      const snapshot = await getDocs(menuRef);
      
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MenuItem[];
      
      // Sort by category and name
      items.sort((a, b) => {
        if (a.category === b.category) {
          return a.name.localeCompare(b.name);
        }
        return a.category.localeCompare(b.category);
      });
      
      setMenuItems(items);
    } catch (error) {
      console.error('Error loading menu:', error);
      toast.error('Error al cargar el menú');
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      category: 'hot-coffee',
      description: '',
      available: true,
    });
    setImageFile(null);
    setImagePreview('');
    setShowModal(true);
  };

  const openEditModal = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      description: item.description,
      available: item.available,
    });
    setImageFile(null);
    setImagePreview(item.imageUrl || '');
    setShowModal(true);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error('La imagen debe ser menor a 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        toast.error('Solo se permiten imágenes');
        return;
      }
      
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      const timestamp = Date.now();
      const filename = `menu-items/${timestamp}-${file.name}`;
      const storageRef = ref(storage, filename);
      
      console.log('Uploading image to:', filename);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log('Image uploaded successfully:', downloadURL);
      
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      if (error instanceof Error) {
        throw new Error(`Error al subir imagen: ${error.message}`);
      }
      throw new Error('Error al subir la imagen');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error('El nombre es requerido');
      return;
    }
    
    if (!formData.description.trim()) {
      toast.error('La descripción es requerida');
      return;
    }
    
    setUploading(true);
    
    try {
      let imageUrl = editingItem?.imageUrl || '';
      
      // Upload new image if selected
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }
      
      const itemData = {
        name: formData.name.trim(),
        category: formData.category,
        description: formData.description.trim(),
        available: formData.available,
        imageUrl: imageUrl || null,
        updatedAt: new Date(),
      };
      
      if (editingItem) {
        // Update existing item
        await updateDoc(doc(db, 'menu', editingItem.id), itemData);
        toast.success('Item actualizado exitosamente');
      } else {
        // Create new item
        await addDoc(collection(db, 'menu'), {
          ...itemData,
          createdAt: new Date(),
        });
        toast.success('Item creado exitosamente');
      }
      
      setShowModal(false);
      loadMenuItems();
    } catch (error) {
      console.error('Error saving item:', error);
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error('Error al guardar el item. Revisa la consola para más detalles.');
      }
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (item: MenuItem) => {
    if (!confirm(`¿Estás seguro de eliminar "${item.name}"?`)) {
      return;
    }
    
    try {
      // Delete image from storage if exists
      if (item.imageUrl) {
        try {
          const imageRef = ref(storage, item.imageUrl);
          await deleteObject(imageRef);
        } catch (error) {
          console.error('Error deleting image:', error);
          // Continue even if image deletion fails
        }
      }
      
      await deleteDoc(doc(db, 'menu', item.id));
      toast.success('Item eliminado');
      loadMenuItems();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error('Error al eliminar');
    }
  };

  const toggleAvailability = async (item: MenuItem) => {
    try {
      await updateDoc(doc(db, 'menu', item.id), {
        available: !item.available,
        updatedAt: new Date(),
      });
      toast.success(item.available ? 'Item deshabilitado' : 'Item habilitado');
      loadMenuItems();
    } catch (error) {
      console.error('Error toggling availability:', error);
      toast.error('Error al actualizar');
    }
  };

  const categories = [
    { value: 'seasonal', label: 'Temporada' },
    { value: 'hot-coffee', label: 'Café Caliente' },
    { value: 'iced-coffee', label: 'Café Frío' },
    { value: 'cold-brew', label: 'Cold Brew' },
    { value: 'frappuccino-coffee', label: 'Frappuccino Café' },
    { value: 'frappuccino-cream', label: 'Frappuccino Crema' },
    { value: 'refreshers', label: 'Refreshers' },
    { value: 'shaken-espresso', label: 'Espresso Batido' },
    { value: 'hot-tea', label: 'Té Caliente' },
    { value: 'iced-tea', label: 'Té Frío' },
    { value: 'coffee-beans', label: 'Granos de Café' },
    { value: 'coffee', label: 'Café' },
    { value: 'food', label: 'Comida' },
    { value: 'combo', label: 'Combo' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700/50 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin')}
                className="p-2.5 hover:bg-gray-700/50 rounded-xl text-gray-400 hover:text-gray-200 transition-all"
                title="Volver"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="p-2.5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Gestión de Menú</h1>
                <p className="text-sm text-gray-400 mt-0.5">{menuItems.length} items en total</p>
              </div>
            </div>
            
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Agregar Item
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {menuItems.length === 0 ? (
          <div className="bg-gray-800 rounded-xl p-12 text-center border border-gray-700">
            <Coffee className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No hay items en el menú
            </h3>
            <p className="text-gray-500 mb-6">
              Comienza agregando tu primer item
            </p>
            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-all"
            >
              <Plus className="w-5 h-5" />
              Agregar Primer Item
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`bg-gray-800 rounded-xl shadow-lg border transition-all ${
                  item.available ? 'border-gray-700' : 'border-gray-600 opacity-60'
                }`}
              >
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-xl overflow-hidden">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Coffee className="w-20 h-20 text-gray-600" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="font-bold text-white text-lg mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                      {categories.find(c => c.value === item.category)?.label || item.category}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Status Badge */}
                  <div className="mb-4">
                    {item.available ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Disponible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-900 text-red-300 border border-red-700">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        No disponible
                      </span>
                    )}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleAvailability(item)}
                      className="flex-1 py-2 px-3 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      {item.available ? 'Deshabilitar' : 'Habilitar'}
                    </button>
                    <button
                      onClick={() => openEditModal(item)}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      title="Editar"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full border border-gray-700 my-8">
            <form onSubmit={handleSubmit}>
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">
                  {editingItem ? 'Editar Item' : 'Agregar Nuevo Item'}
                </h2>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Imagen del Producto
                  </label>
                  
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(editingItem?.imageUrl || '');
                        }}
                        className="absolute top-3 right-3 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-pink-500 transition-colors bg-gray-700/50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <ImageIcon className="w-12 h-12 text-gray-500 mb-3" />
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Click para subir</span> o arrastra y suelta
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, WEBP (MAX. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageSelect}
                      />
                    </label>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    placeholder="Ej: Caramel Macchiato"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Categoría *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as MenuItem['category'] })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Descripción *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                    placeholder="Describe el producto..."
                    required
                  />
                </div>

                {/* Available Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Disponibilidad
                    </label>
                    <p className="text-xs text-gray-500">
                      ¿Este item está disponible para ordenar?
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, available: !formData.available })}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      formData.available ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        formData.available ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 p-6 border-t border-gray-700">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 px-4 bg-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                  disabled={uploading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Guardando...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      {editingItem ? 'Actualizar' : 'Crear Item'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
