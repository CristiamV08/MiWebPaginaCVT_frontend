const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "$49",
      period: "/mes",
      description: "Perfecto para pequeñas empresas y emprendedores",
      features: [
        "Hasta 10 usuarios",
        "5GB de almacenamiento",
        "Reportes básicos",
        "Soporte por email",
        "Actualizaciones incluidas",
        "Dashboard básico"
      ],
      highlighted: false,
      color: "blue"
    },
    {
      name: "Profesional",
      price: "$99",
      period: "/mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Hasta 50 usuarios",
        "50GB de almacenamiento",
        "Reportes avanzados",
        "Soporte prioritario 24/7",
        "Integraciones ilimitadas",
        "Dashboard personalizable",
        "API acceso completo",
        "Backup automático"
      ],
      highlighted: true,
      color: "cyan",
      badge: "Más Popular"
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      period: "",
      description: "Soluciones a medida para grandes organizaciones",
      features: [
        "Usuarios ilimitados",
        "Almacenamiento ilimitado",
        "Reportes personalizados",
        "Soporte dedicado 24/7",
        "Implementación personalizada",
        "Consultoría incluida",
        "SLA garantizado",
        "Servidor dedicado opcional"
      ],
      highlighted: false,
      color: "blue"
    }
  ];

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Planes y Precios
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Elige el plan perfecto para ti
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Sin costos ocultos. Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl transform scale-105 ring-4 ring-blue-200' 
                  : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl'
              } transition-all duration-300 relative`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg 
                      className={`w-6 h-6 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-green-500'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.price === "Personalizado" ? "Contactar Ventas" : "Comenzar Prueba"}
              </button>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Todos los planes incluyen <span className="font-semibold text-gray-900">15 días de prueba gratuita</span> sin necesidad de tarjeta de crédito
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
