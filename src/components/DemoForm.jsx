import { useState } from 'react';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    empleados: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/trial/solicitar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            nombre: '',
            empresa: '',
            email: '',
            telefono: '',
            empleados: '',
            mensaje: ''
          });
        }, 5000);
      } else {
        alert(data.message || 'Error al enviar la solicitud. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor intenta nuevamente más tarde.');
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Trial Gratuito
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold mb-6">
              Solicita un trial de 15 días gratis
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Prueba nuestro software sin compromiso. Acceso completo a todas las funcionalidades durante 15 días.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Acceso Completo</h3>
                  <p className="text-gray-400">Todas las funcionalidades disponibles por 15 días</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Soporte Incluido</h3>
                  <p className="text-gray-400">Asistencia técnica durante todo el periodo de prueba</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sin Tarjeta de Crédito</h3>
                  <p className="text-gray-400">No requiere información de pago para comenzar</p>
                </div>
              </div>
            </div>

            {/* Important Message for Restaurant System */}
            <div className="mt-8 bg-orange-500/10 border-2 border-orange-400/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl">🍽️</div>
                <div>
                  <h3 className="font-bold text-xl text-orange-300 mb-2">
                    Sistema para Restaurantes - TeAtiendoCVT
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-200">
                <p className="flex items-start gap-2">
                  <span className="text-orange-400 text-xl">📧</span>
                  <span><strong>Al solicitar</strong> recibirás un manual completo y acceso a una demo del sistema básico</span>
                </p>
                <div className="bg-white/5 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-orange-300">Disponible en 2 versiones:</p>
                  <div className="ml-4 space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400">💼</span>
                      <span><strong className="text-blue-300">Básico:</strong> Manejo interno del local (POS, inventario, cocina)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-yellow-400">⭐</span>
                      <span><strong className="text-yellow-300">Premium:</strong> Incluye boleta/factura electrónica, login propio y administración completa de empleados (ingresos y bloqueos)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">¡Solicitud Enviada!</h3>
                <p className="text-gray-600">
                  Nos pondremos en contacto contigo pronto para configurar tu trial de 15 días.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    autoComplete="organization"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Mi Empresa S.A."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="email@empresa.com"
                  />
                </div>

                {/* Campo Teléfono - Oculto temporalmente */}
                {/* <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    autoComplete="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div> */}

                {/* Campo Número de Empleados - Oculto temporalmente */}
                {/* <div>
                  <label htmlFor="empleados" className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de Empleados
                  </label>
                  <select
                    id="empleados"
                    name="empleados"
                    value={formData.empleados}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="201-500">201-500 empleados</option>
                    <option value="500+">Más de 500 empleados</option>
                  </select>
                </div> */}

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="¿Qué funcionalidades necesitas? ¿Cuáles son tus objetivos?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Solicitar Trial Gratuito
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
