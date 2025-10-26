import { Coffee, Wrench } from 'lucide-react';

export default function MaintenanceMode() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Coffee className="w-24 h-24 text-pink-500" strokeWidth={1.5} />
            <Wrench className="w-10 h-10 text-pink-600 absolute -bottom-2 -right-2 animate-bounce" strokeWidth={2} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          En mantenimiento
        </h1>
        
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Jose Alberto siente mucho lo sucedido... Mientras tanto, su programador favorito esta trabajando en mejoras para evitar inconsistencias como la del dia de hoy.
        </p>
        
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-5 mb-6">
          <p className="text-pink-900 font-semibold text-lg">
            Por favor, vuelva mañana.
          </p>
          <p className="text-pink-700 text-sm mt-2">
            Gracias por su paciencia
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          <span className="font-medium">Siga salvando vidas mientras tanto</span>
        </div>
      </div>
    </div>
  );
}
