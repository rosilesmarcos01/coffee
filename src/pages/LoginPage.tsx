import { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(email, password);
      const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Error al iniciar sesión. Verifica tus credenciales.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 to-pink-500 flex flex-col px-6 py-8" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        {/* Brand Header */}
        <div className="text-center mb-16 mt-12">
          <div className="mb-6">
            {/* Typographic logo */}
            <div className="inline-block">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-6xl sm:text-7xl font-bold text-white leading-none">NS</span>
              </div>
              <div className="h-1 bg-white/80 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-2 tracking-wide">
            Night Shift Assistant
          </h2>
          <p className="text-white/90 text-sm tracking-wide">
            Tu café, siempre listo
          </p>
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Greeting */}
          <div className="mb-8">
            <h3 className="text-3xl font-semibold text-white mb-2">
              Hola, Enfermera
            </h3>
            <p className="text-white/90 text-base">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="User"
              className="w-full px-6 py-4 bg-white/95 text-gray-800 placeholder-gray-500 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              required
            />
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-6 py-4 bg-white/95 text-gray-800 placeholder-gray-500 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-pink-600 py-4 px-6 rounded-full font-medium text-base hover:bg-white/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-white/90 text-sm">
              Don't have an account?{' '}
              <button className="text-white underline hover:text-white/80 transition-colors">
                Sign Up Here
              </button>
            </p>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
