const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold border border-blue-500/30 backdrop-blur-sm">
                ✨ Software Empresarial Profesional
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transforma tu negocio con
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"> software especializado</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Soluciones de software a medida para <span className="text-cyan-400 font-semibold">restaurantes, bodegas, gimnasios, comercios</span> y más. 
              Potencia tu negocio con tecnología de vanguardia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToDemo}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🚀</span>
                Solicitar Demo Gratuita
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('productos').scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-slate-900 px-8 py-5 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-3"
              >
                <span className="text-2xl">👀</span>
                Ver Nuestros Sistemas
                <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Stats/Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Empresas Activas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-400">Soporte</div>
              </div>
            </div>
          </div>

          {/* Imagen/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 shadow-2xl">
              <div className="space-y-4">
                {/* Dashboard mockup */}
                <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-blue-500/30 rounded w-3/4"></div>
                    <div className="h-4 bg-cyan-500/30 rounded w-full"></div>
                    <div className="h-4 bg-blue-500/30 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-4 rounded-lg border border-blue-500/20">
                        <div className="h-8 bg-blue-400/40 rounded mb-2"></div>
                        <div className="h-3 bg-blue-300/30 rounded w-2/3"></div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-transparent p-4 rounded-lg border border-cyan-500/20">
                        <div className="h-8 bg-cyan-400/40 rounded mb-2"></div>
                        <div className="h-3 bg-cyan-300/30 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
