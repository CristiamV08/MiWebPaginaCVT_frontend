const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Análisis en Tiempo Real",
      description: "Visualiza métricas y KPIs de tu negocio en dashboards personalizables y actualizados en tiempo real."
    },
    {
      icon: "🔒",
      title: "Seguridad Avanzada",
      description: "Protección de datos con encriptación de nivel empresarial y cumplimiento de estándares internacionales."
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      description: "Accede a tu información desde cualquier lugar con nuestra infraestructura en la nube escalable."
    },
    {
      icon: "🤝",
      title: "Gestión de Clientes",
      description: "CRM integrado para gestionar relaciones con clientes, ventas y seguimiento completo."
    },
    {
      icon: "📈",
      title: "Reportes Avanzados",
      description: "Genera informes detallados y exportables para tomar decisiones estratégicas basadas en datos."
    },
    {
      icon: "⚡",
      title: "Automatización",
      description: "Automatiza procesos repetitivos y flujos de trabajo para aumentar la productividad."
    },
    {
      icon: "💼",
      title: "Gestión Financiera",
      description: "Control total de facturación, contabilidad e inventario en una sola plataforma."
    },
    {
      icon: "🔄",
      title: "Integraciones",
      description: "Conecta con tus herramientas favoritas mediante APIs y webhooks personalizables."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Características
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Todo lo que necesitas para crecer
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas profesionales diseñadas para optimizar cada aspecto de tu negocio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Únete a cientos de empresas que ya están optimizando sus operaciones
          </p>
          <button 
            onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Comenzar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
