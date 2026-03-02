import { useState } from 'react';

/**
 * Componente de Checkout para Suscripción con Trial de 15 días
 * 
 * Flujo:
 * 1. Usuario hace clic en "Trial por 15 días"
 * 2. Ingresa datos de tarjeta (NO se cobra aún)
 * 3. Se crea suscripción con trial_period_days: 15
 * 4. Después de 15 días, Stripe cobra automáticamente $50 USD
 * 5. El cobro se repite mensualmente
 */

const SubscriptionCheckout = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Función para crear una suscripción con trial
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Paso 1: Crear Checkout Session en el backend
      const response = await fetch('http://localhost:3000/api/create-subscription-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          priceId: 'price_xxxxx', // Reemplazar con tu Price ID de Stripe
          trialDays: 14,
        }),
      });

      const { sessionId, error: serverError } = await response.json();

      if (serverError) {
        throw new Error(serverError);
      }

      // Paso 2: Redirigir a Stripe Checkout
      // Se requiere: npm install @stripe/stripe-js
      const stripe = window.Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

    } catch (err) {
      setError(err.message || 'Error al procesar la suscripción');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Trial Activado!
            </h3>
            <p className="text-gray-600 mb-6">
              Tu período de prueba de 15 días ha comenzado. 
              Te enviaremos un recordatorio antes de que inicie el cobro.
            </p>
            <button 
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Trial por 15 días - $50/mes después
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-4xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Información del Trial */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎁</span>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ¿Cómo funciona el Trial?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Gratis por 15 días:</strong> Acceso completo sin costo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Sin cargo inmediato:</strong> Solo guardamos tu método de pago</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Después de 15 días:</strong> Se cobra automáticamente $50 USD/mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Cancela cuando quieras:</strong> Sin compromisos a largo plazo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detalles de Suscripción */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Resumen de Suscripción</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Período de prueba:</span>
              <span className="font-semibold text-gray-900">15 días gratis</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Precio después del trial:</span>
              <span className="font-semibold text-gray-900">$50.00 USD/mes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Facturación:</span>
              <span className="font-semibold text-gray-900">Mensual, renovación automática</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between text-lg">
                <span className="font-bold text-gray-900">Cargo hoy:</span>
                <span className="font-bold text-green-600">$0.00 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubscribe}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="tu@email.com"
            />
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Procesando...' : 'Iniciar Trial Gratuito'}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Al continuar, aceptas nuestros términos y condiciones. 
            Puedes cancelar en cualquier momento antes de que termine el trial.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionCheckout;
