import { useState } from 'react';

const InteractiveDemo = ({ isOpen, onClose }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  console.log('InteractiveDemo renderizado, isOpen:', isOpen);

  const screens = [
    {
      id: 0,
      title: "Login Inicial del Sistema",
      description: "Acceso seguro al sistema con credenciales únicas para cada usuario. Control total de permisos y roles para administradores, cajeros y personal de cocina.",
      image: "/demo/login-inicial.png",
      features: [
        "Autenticación segura de usuarios",
        "Roles y permisos personalizados",
        "Control de acceso por sucursal",
        "Registro de ingresos al sistema",
        "Recuperación de contraseña",
        "Sesiones seguras con timeout automático"
      ],
      highlights: "🔐 Seguridad y control de acceso profesional"
    },
    {
      id: 1,
      title: "Gestión de Menú Digital",
      description: "Crea y organiza tu carta digital con categorías personalizadas. Tus clientes pueden ver el menú completo, agregar productos al carrito y realizar pedidos de forma intuitiva.",
      image: "/demo/menu-gestion.png",
      features: [
        "Categorías personalizables (Pollos, Hamburguesas, Alitas, etc.)",
        "Carrito de compras en tiempo real",
        "Precios y códigos de productos",
        "Imágenes y descripciones detalladas",
        "Cantidades ajustables por producto"
      ],
      highlights: "🎨 Temáticas personalizables para cada plato"
    },
    {
      id: 2,
      title: "Seguimiento de Pedidos en Tiempo Real",
      description: "Monitorea todos los pedidos activos con información detallada del tiempo transcurrido, estado y contenido de cada orden. Perfecta sincronización entre cocina y servicio.",
      image: "/demo/seguimiento-pedidos.png",
      features: [
        "Visualización de todos los pedidos activos",
        "Tiempo transcurrido por pedido",
        "Estados: Atendido/Pagado en tiempo real",
        "Filtros por fecha y estado",
        "Códigos únicos por mesa",
        "Actualización automática"
      ],
      highlights: "⏱️ Control total del tiempo de atención"
    },
    {
      id: 3,
      title: "Reportes de Ventas Inteligentes",
      description: "Analiza el desempeño de tu restaurante con reportes detallados. Identifica tus platos más vendidos, ingresos totales y optimiza tu operación basándote en datos reales.",
      image: "/demo/reportes-ventas.png",
      features: [
        "Total de platos vendidos del día",
        "Monto total recaudado",
        "Total de pedidos procesados",
        "Detalle de platos más vendidos",
        "Filtros por fecha personalizada",
        "Exportación de reportes"
      ],
      highlights: "📊 Decisiones basadas en datos reales"
    }
  ];

  console.log('isOpen:', isOpen);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-6 flex justify-between items-center z-10">
          <div>
            <h3 className="text-3xl font-bold flex items-center gap-3">
              🍽️ Demo Interactivo - TeAtiendoCVT
            </h3>
            <p className="text-orange-100 mt-2">Explora las funcionalidades del sistema</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-orange-200 text-4xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          {/* Screen Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {screens.map((screen, index) => (
              <button
                key={screen.id}
                onClick={() => setCurrentScreen(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentScreen === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}. {screen.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Current Screen Display */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left: Info */}
              <div>
                <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Módulo {currentScreen + 1} de {screens.length}
                </div>
                
                <h4 className="text-3xl font-bold text-gray-900 mb-4">
                  {screens[currentScreen].title}
                </h4>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {screens[currentScreen].description}
                </p>

                <div className="bg-white rounded-xl p-6 mb-6 border-2 border-orange-200">
                  <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    Características Principales
                  </h5>
                  <ul className="space-y-3">
                    {screens[currentScreen].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    {screens[currentScreen].highlights}
                  </p>
                </div>
              </div>

              {/* Right: Screenshot */}
              <div className="relative">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
                  <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-400">TeAtiendoCVT - Sistema en Acción</div>
                  </div>
                  <img 
                    src={screens[currentScreen].image}
                    alt={screens[currentScreen].title}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" fill="%236b7280" font-size="20">Pantalla: ' + screens[currentScreen].title + '</text></svg>';
                    }}
                  />
                </div>
                
                {/* Screen indicator */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-orange-300">
                  <span className="text-sm font-semibold text-gray-700">
                    Pantalla {currentScreen + 1} de {screens.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => setCurrentScreen(Math.max(0, currentScreen - 1))}
              disabled={currentScreen === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentScreen === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-800'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            {currentScreen === screens.length - 1 ? (
              <button
                onClick={() => {
                  onClose();
                  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Solicitar Trial Gratuito
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setCurrentScreen(Math.min(screens.length - 1, currentScreen + 1))}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Siguiente
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Benefits Summary */}
          <div className="mt-12 bg-white rounded-xl p-8 border-2 border-gray-200">
            <h5 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎯 Bondades del Sistema TeAtiendoCVT
            </h5>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-4xl mb-3">⚡</div>
                <h6 className="font-bold text-gray-900 mb-2">Rapidez</h6>
                <p className="text-sm text-gray-600">Reduce el tiempo de atención hasta en 40%</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-4xl mb-3">🎯</div>
                <h6 className="font-bold text-gray-900 mb-2">Precisión</h6>
                <p className="text-sm text-gray-600">Elimina errores en pedidos y cobros</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-4xl mb-3">📈</div>
                <h6 className="font-bold text-gray-900 mb-2">Crecimiento</h6>
                <p className="text-sm text-gray-600">Decisiones basadas en datos reales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
