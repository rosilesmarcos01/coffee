import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { format, addDays, startOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArrowLeft, Calendar, Coffee, CheckCircle, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import { Order } from '../types';

export default function ShiftsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextShifts, setNextShifts] = useState<Date[]>([]);

  useEffect(() => {
    calculateNextShifts();
    loadOrders();
  }, [user]);

  const calculateNextShifts = () => {
    const shifts: Date[] = [];
    let currentDate = startOfDay(new Date());
    let daysChecked = 0;
    const maxDaysToCheck = 30; // Look ahead 30 days max

    // Keep checking until we find 3 shift days
    while (shifts.length < 3 && daysChecked < maxDaysToCheck) {
      const dayOfWeek = currentDate.getDay();
      
      // Check if it's a shift day: Monday (1), Wednesday (3), or Saturday (6)
      if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 6) {
        shifts.push(new Date(currentDate));
      }
      
      currentDate = addDays(currentDate, 1);
      daysChecked++;
    }

    setNextShifts(shifts);
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
    } catch (error) {
      console.error('Error loading orders:', error);
      toast.error('Error al cargar los turnos');
    } finally {
      setLoading(false);
    }
  };

  const getOrderForShift = (shiftDate: Date) => {
    const dateString = format(shiftDate, 'yyyy-MM-dd');
    return orders.find(order => order.shiftDate === dateString);
  };

  const getStatusInfo = (order: Order | undefined) => {
    if (!order) {
      return {
        label: 'Sin pedido',
        className: 'bg-gray-100 text-gray-600 border-gray-200',
        icon: Clock
      };
    }

    switch (order.status) {
      case 'pending':
      case 'ordered':
        return {
          label: 'Pedido activo',
          className: 'bg-blue-100 text-blue-700 border-blue-200',
          icon: Clock
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
          label: 'Sin pedido',
          className: 'bg-gray-100 text-gray-600 border-gray-200',
          icon: Clock
        };
    }
  };

  const getDayLabel = (date: Date) => {
    const today = startOfDay(new Date());
    const shiftDate = startOfDay(date);
    
    if (shiftDate.getTime() === today.getTime()) {
      return 'Hoy';
    }
    
    const tomorrow = addDays(today, 1);
    if (shiftDate.getTime() === tomorrow.getTime()) {
      return 'Mañana';
    }
    
    return format(date, 'EEEE', { locale: es });
  };

  const handleShiftClick = (shiftDate: Date) => {
    const order = getOrderForShift(shiftDate);
    if (!order) {
      // Navigate to menu to create an order
      navigate('/menu', { state: { shiftDate: format(shiftDate, 'yyyy-MM-dd') } });
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
            <h1 className="text-xl font-bold text-white">Próximos Turnos</h1>
            <p className="text-xs text-pink-100">Tus siguientes 3 guardias</p>
          </div>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-6">
        {/* Info Banner */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-pink-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-xl flex-shrink-0">
              <Calendar className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Turnos Nocturnos
              </h2>
              <p className="text-sm text-gray-600">
                Tus guardias son todos los <span className="font-semibold">Lunes, Miércoles y Sábados</span>. 
                Puedes hacer tu pedido con anticipación para cualquier turno.
              </p>
            </div>
          </div>
        </div>

        {/* Next Shifts List */}
        <div className="space-y-4">
          {nextShifts.map((shiftDate) => {
            const order = getOrderForShift(shiftDate);
            const statusInfo = getStatusInfo(order);
            const StatusIcon = statusInfo.icon;
            const isToday = startOfDay(shiftDate).getTime() === startOfDay(new Date()).getTime();
            const dateString = format(shiftDate, 'yyyy-MM-dd');

            return (
              <div
                key={dateString}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                  order ? '' : 'cursor-pointer'
                }`}
                onClick={() => !order && handleShiftClick(shiftDate)}
                onKeyDown={(e) => {
                  if (!order && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleShiftClick(shiftDate);
                  }
                }}
                role={order ? undefined : "button"}
                tabIndex={order ? undefined : 0}
              >
                <div className="p-6">
                  {/* Shift Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        isToday 
                          ? 'bg-gradient-to-br from-pink-400 to-pink-500' 
                          : 'bg-pink-100'
                      }`}>
                        <Calendar className={`w-6 h-6 ${
                          isToday ? 'text-white' : 'text-pink-600'
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800 text-lg capitalize">
                            {getDayLabel(shiftDate)}
                          </h3>
                          {isToday && (
                            <span className="px-2 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-600">
                              Hoy
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {format(shiftDate, "d 'de' MMMM, yyyy", { locale: es })}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Turno nocturno
                        </p>
                      </div>
                    </div>

                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${statusInfo.className} flex items-center gap-1.5 flex-shrink-0`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {statusInfo.label}
                    </span>
                  </div>

                  {/* Order Details or CTA */}
                  {order ? (
                    <div className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <div className="flex items-start gap-3">
                        <Coffee className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide">
                            {order.orderType === 'surprise' ? 'Sorpresa' : 'Pedido personalizado'}
                          </p>
                          <p className="text-sm font-medium text-gray-800">
                            {order.orderType === 'surprise' 
                              ? 'El courier seleccionará algo especial para ti' 
                              : 'Pedido registrado'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl border-2 border-dashed border-pink-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">
                            Aún no has hecho tu pedido
                          </p>
                          <p className="text-xs text-gray-600">
                            Haz clic aquí para ordenar
                          </p>
                        </div>
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-gray-700 text-center">
            💡 <span className="font-semibold">Tip:</span> Puedes hacer tu pedido con anticipación para cualquier turno futuro
          </p>
        </div>
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
            <button 
              onClick={() => navigate('/order-history')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
            >
              <Clock className="w-6 h-6" />
            </button>
            <button className="flex flex-col items-center gap-1 text-pink-500">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-2.5 rounded-xl">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
