import { useState } from 'react';
import InteractiveDemo from './InteractiveDemo';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false);

  const products = [
    {
      id: 1,
      name: "TeAtiendoCVT",
      category: "Restaurantes",
      tagline: "Sistema Integral de Gestión para Restaurantes",
      description: "Optimiza la operación completa de tu restaurante con nuestro sistema todo-en-uno. Desde el punto de venta hasta la gestión de inventario y reportes.",
      icon: "🍽️",
      color: "orange",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hasVersions: true,
      versions: {
        basic: {
          name: "Básico",
          price: "$30/mes",
          description: "Ideal para manejo interno del local",
          features: [
            "✅ Punto de Venta (POS) completo",
            "✅ Gestión de Mesas",
            "✅ Control de Inventario básico",
            "✅ Reportes de ventas",
            "✅ Gestión de Cocina (KDS)",
            "✅ Manual de usuario incluido",
            "✅ Demo del sistema al solicitar trial"
          ]
        },
        premium: {
          name: "Premium",
          price: "$50/mes",
          description: "Solución completa con facturación electrónica",
          features: [
            "✅ Todo lo del plan Básico",
            "✅ Emisión de Boletas Electrónicas",
            "✅ Emisión de Facturas Electrónicas",
            "✅ Sistema de Login propio para cada sucursal",
            "✅ Administración avanzada de empleados",
            "✅ Control de acceso de empleados",
            "✅ Bloqueo de empleados que ya no pertenecen",
            "✅ Histórico de accesos y actividades",
            "✅ Integración contable completa",
            "✅ Soporte prioritario 24/7"
          ]
        }
      },
      trialMessage: "🎁 Al recibir tu solicitud, te enviaremos un manual completo y acceso a una demo del sistema Básico para que puedas evaluar la plataforma.",
      features: [
        {
          icon: "📱",
          title: "Punto de Venta (POS)",
          description: "Interfaz intuitiva y rápida para tomar pedidos desde cualquier dispositivo"
        },
        {
          icon: "👨‍🍳",
          title: "Gestión de Cocina",
          description: "Coordina pedidos entre meseros y cocina en tiempo real con pantallas KDS"
        },
        {
          icon: "📦",
          title: "Control de Inventario",
          description: "Monitorea ingredientes, recetas y stock automáticamente"
        },
        {
          icon: "💰",
          title: "Reportes Financieros",
          description: "Análisis de ventas, gastos y rentabilidad en tiempo real"
        },
        {
          icon: "👥",
          title: "Gestión de Empleados",
          description: "Control de turnos, propinas y desempeño del personal"
        },
        {
          icon: "🎯",
          title: "Gestión de Mesas",
          description: "Visualiza y administra la ocupación de mesas en tiempo real"
        },
        {
          icon: "🧾",
          title: "Facturación Electrónica",
          description: "Emisión automática de facturas y comprobantes fiscales"
        },
        {
          icon: "📊",
          title: "Dashboard Ejecutivo",
          description: "Métricas clave y KPIs para tomar decisiones informadas"
        }
      ],
      benefits: [
        "Reduce tiempo de atención hasta 40%",
        "Elimina errores en pedidos",
        "Control total del inventario",
        "Aumenta la rentabilidad",
        "Reportes en tiempo real",
        "Multi-sucursal"
      ],
      pricing: {
        basic: "$30/mes",
        pro: "$50/mes",
        enterprise: "Personalizado"
      }
    },
    {
      id: 2,
      name: "InvMaster Pro",
      category: "Bodegas",
      tagline: "Sistema Avanzado de Gestión de Bodegas e Inventario",
      description: "Controla tu inventario de manera eficiente con tecnología de punta. Rastreo en tiempo real, control de múltiples bodegas y optimización de espacios.",
      icon: "📦",
      color: "blue",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          icon: "📊",
          title: "Control de Stock",
          description: "Monitoreo en tiempo real de existencias y movimientos de inventario"
        },
        {
          icon: "📍",
          title: "Ubicaciones Inteligentes",
          description: "Sistema de localización por códigos de barra y QR"
        },
        {
          icon: "🚚",
          title: "Gestión de Compras",
          description: "Automatiza órdenes de compra y seguimiento de proveedores"
        },
        {
          icon: "📱",
          title: "App Móvil",
          description: "Escaneo y gestión desde dispositivos móviles"
        },
        {
          icon: "⚠️",
          title: "Alertas Automáticas",
          description: "Notificaciones de stock mínimo y productos por vencer"
        },
        {
          icon: "🔄",
          title: "Transferencias",
          description: "Control de movimientos entre múltiples bodegas"
        },
        {
          icon: "📈",
          title: "Análisis Predictivo",
          description: "Predicción de demanda y optimización de stock"
        },
        {
          icon: "🔐",
          title: "Seguridad Avanzada",
          description: "Control de accesos y auditoría de movimientos"
        }
      ],
      benefits: [
        "Reduce pérdidas por desabastecimiento",
        "Optimiza espacio en bodega hasta 30%",
        "Elimina errores de conteo manual",
        "Mejora la rotación de productos",
        "Integración con sistemas contables",
        "Reportes personalizables"
      ],
      pricing: {
        basic: "$99/mes",
        pro: "$199/mes",
        enterprise: "Personalizado"
      }
    },
    {
      id: 3,
      name: "FitnessPro Manager",
      category: "Gimnasios",
      tagline: "Plataforma Completa para Gestión de Gimnasios",
      description: "Administra tu gimnasio de manera profesional. Control de membresías, accesos, clases grupales y seguimiento de clientes.",
      icon: "💪",
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          icon: "🎫",
          title: "Gestión de Membresías",
          description: "Control completo de suscripciones y renovaciones automáticas"
        },
        {
          icon: "🚪",
          title: "Control de Acceso",
          description: "Sistema de entrada con tarjetas RFID o reconocimiento facial"
        },
        {
          icon: "📅",
          title: "Clases Grupales",
          description: "Programación y reservas de clases con aforo controlado"
        },
        {
          icon: "👤",
          title: "Perfiles de Clientes",
          description: "Historial completo de rutinas, medidas y progreso"
        },
        {
          icon: "💳",
          title: "Pagos Automáticos",
          description: "Cobros recurrentes y múltiples métodos de pago"
        },
        {
          icon: "📲",
          title: "App para Clientes",
          description: "Reservas, rutinas y seguimiento desde el móvil"
        },
        {
          icon: "👨‍🏫",
          title: "Gestión de Entrenadores",
          description: "Agenda de citas y seguimiento de sesiones personales"
        },
        {
          icon: "📊",
          title: "Reportes de Asistencia",
          description: "Análisis de concurrencia y uso de instalaciones"
        }
      ],
      benefits: [
        "Aumenta la retención de clientes",
        "Automatiza cobros y reduce morosidad",
        "Mejora la experiencia del usuario",
        "Controla el aforo en tiempo real",
        "Incrementa ventas de clases",
        "Reduce carga administrativa"
      ],
      pricing: {
        basic: "$89/mes",
        pro: "$169/mes",
        enterprise: "Personalizado"
      }
    },
    {
      id: 4,
      name: "ComercioTotal POS",
      category: "Comercios",
      tagline: "Sistema de Punto de Venta para Todo Tipo de Comercios",
      description: "Solución completa para tiendas, boutiques y comercios. Ventas rápidas, inventario integrado y fidelización de clientes.",
      icon: "🏪",
      color: "purple",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          icon: "💰",
          title: "POS Multi-caja",
          description: "Múltiples cajas funcionando simultáneamente"
        },
        {
          icon: "📦",
          title: "Inventario Integrado",
          description: "Actualización automática de stock con cada venta"
        },
        {
          icon: "🎁",
          title: "Programa de Lealtad",
          description: "Puntos, descuentos y promociones para clientes frecuentes"
        },
        {
          icon: "📊",
          title: "Reportes de Ventas",
          description: "Análisis detallado de ventas por producto, vendedor y período"
        },
        {
          icon: "👥",
          title: "CRM Integrado",
          description: "Base de datos de clientes con historial de compras"
        },
        {
          icon: "🔖",
          title: "Promociones Flexibles",
          description: "Descuentos, 2x1, ofertas por temporada"
        },
        {
          icon: "📱",
          title: "Ventas Móviles",
          description: "Cobra desde tablet o smartphone"
        },
        {
          icon: "🧾",
          title: "Facturación Digital",
          description: "Tickets y facturas electrónicas automáticas"
        }
      ],
      benefits: [
        "Ventas más rápidas y eficientes",
        "Control preciso de inventario",
        "Aumenta ventas recurrentes",
        "Reduce mermas y robos",
        "Fideliza a tus clientes",
        "Multi-sucursal y multi-usuario"
      ],
      pricing: {
        basic: "$69/mes",
        pro: "$129/mes",
        enterprise: "Personalizado"
      }
    },
    {
      id: 5,
      name: "HotelSuite Manager",
      category: "Hoteles",
      tagline: "Sistema Integral de Gestión Hotelera",
      description: "Administra tu hotel u hostal de forma profesional. Reservas, check-in/out, housekeeping y canal manager todo en uno.",
      icon: "🏨",
      color: "cyan",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          icon: "📅",
          title: "Motor de Reservas",
          description: "Sistema de booking online integrado con tu sitio web"
        },
        {
          icon: "🗓️",
          title: "Calendario de Ocupación",
          description: "Visualiza disponibilidad y gestiona overbooking"
        },
        {
          icon: "🔑",
          title: "Check-in Digital",
          description: "Registro rápido con firma electrónica y escaneo de documentos"
        },
        {
          icon: "🧹",
          title: "Housekeeping",
          description: "Control de limpieza y estado de habitaciones en tiempo real"
        },
        {
          icon: "💳",
          title: "Facturación Hotelera",
          description: "Cargos a habitación y cierre de cuentas automático"
        },
        {
          icon: "🌐",
          title: "Channel Manager",
          description: "Sincronización con Booking, Airbnb y otras OTAs"
        },
        {
          icon: "📊",
          title: "Revenue Management",
          description: "Optimización de tarifas basada en ocupación"
        },
        {
          icon: "👨‍💼",
          title: "Gestión de Personal",
          description: "Turnos, tareas y comunicación del equipo"
        }
      ],
      benefits: [
        "Aumenta la ocupación promedio",
        "Reduce tiempo de check-in/out",
        "Elimina doble-booking",
        "Mejora coordinación del equipo",
        "Incrementa reservas directas",
        "Reportes para toma de decisiones"
      ],
      pricing: {
        basic: "$119/mes",
        pro: "$229/mes",
        enterprise: "Personalizado"
      }
    },
    {
      id: 6,
      name: "BeautyPro Salon",
      category: "Salones de Belleza",
      tagline: "Software Especializado para Salones y Spas",
      description: "Gestiona tu salón de belleza o spa de manera profesional. Agenda, recordatorios, gestión de citas y control de inventario de productos.",
      icon: "💅",
      color: "pink",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          icon: "📅",
          title: "Agenda Inteligente",
          description: "Calendario visual con código de colores por servicio"
        },
        {
          icon: "📲",
          title: "Recordatorios SMS",
          description: "Notificaciones automáticas para reducir no-shows"
        },
        {
          icon: "💆",
          title: "Catálogo de Servicios",
          description: "Gestiona tratamientos, precios y duraciones"
        },
        {
          icon: "👤",
          title: "Historial de Clientes",
          description: "Registro de servicios previos y preferencias"
        },
        {
          icon: "💰",
          title: "Punto de Venta",
          description: "Cobra servicios y vende productos de belleza"
        },
        {
          icon: "👨‍🎨",
          title: "Gestión de Estilistas",
          description: "Control de comisiones y rendimiento por profesional"
        },
        {
          icon: "🎁",
          title: "Paquetes y Membresías",
          description: "Vende bonos y planes de tratamientos"
        },
        {
          icon: "📊",
          title: "Reportes de Negocio",
          description: "Análisis de ventas, servicios más solicitados y rentabilidad"
        }
      ],
      benefits: [
        "Reduce cancelaciones hasta 60%",
        "Optimiza tiempo de los estilistas",
        "Aumenta ventas de productos",
        "Mejora experiencia del cliente",
        "Fideliza con programas de lealtad",
        "Control de inventario automático"
      ],
      pricing: {
        basic: "$59/mes",
        pro: "$119/mes",
        enterprise: "Personalizado"
      }
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Nuestros Sistemas
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Software Especializado por Tipo de Negocio
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Haz clic en cualquier imagen para conocer más sobre el sistema
          </p>
        </div>

        {/* Products Gallery - Large Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => product.id === 1 ? setSelectedProduct(product) : null}
              className={`group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${product.id === 1 ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {/* Background Image/Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`}
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                {/* Icon and Category */}
                <div className="flex items-start justify-between">
                  <div className="text-7xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                      {product.category}
                    </span>
                    {product.hasVersions && (
                      <span className="bg-yellow-400/90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500 animate-pulse">
                        📦 2 Versiones
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Title and Description */}
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold leading-tight group-hover:text-yellow-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/90 text-lg font-medium leading-snug">
                    {product.tagline}
                  </p>
                  
                  {/* Hover Call to Action */}
                  <div className="flex items-center gap-2 text-yellow-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.id === 1 ? (
                      <>
                        <span>Conocer más</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>🚀 Próximamente disponible</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Hero header with gradient */}
              <div className={`relative bg-gradient-to-br ${selectedProduct.gradient} text-white px-8 py-12`}>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 text-4xl leading-none bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center transition-all"
                >
                  ×
                </button>
                <div className="flex items-center gap-6">
                  <div className="text-8xl">
                    {selectedProduct.icon}
                  </div>
                  <div>
                    <div className="inline-block mb-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                        {selectedProduct.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-2">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xl text-white/90">{selectedProduct.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Video Demo - Oculto por ahora */}
                {/* <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">🎥 Video Demostrativo</h4>
                  <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={selectedProduct.videoUrl}
                      title={`${selectedProduct.name} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div> */}

                {/* Description */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Trial Message - Only for TeAtiendoCVT */}
                {selectedProduct.trialMessage && (
                  <div className="mb-12">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">📧</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            ¡Importante! Al solicitar tu Trial
                          </h4>
                          <p className="text-gray-700 text-lg">
                            {selectedProduct.trialMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Versions - Only for products with versions */}
                {selectedProduct.hasVersions && selectedProduct.versions && (
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">📦 Versiones Disponibles</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Basic Version */}
                      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="text-2xl font-bold text-gray-900">
                            {selectedProduct.versions.basic.name}
                          </h5>
                          <div className="text-3xl font-bold text-orange-600">
                            {selectedProduct.versions.basic.price}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 text-lg">
                          {selectedProduct.versions.basic.description}
                        </p>
                        <ul className="space-y-2">
                          {selectedProduct.versions.basic.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Premium Version */}
                      <div className="border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 relative">
                        <div className="absolute -top-3 right-4">
                          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                            ⭐ RECOMENDADO
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-4 mt-2">
                          <h5 className="text-2xl font-bold text-gray-900">
                            {selectedProduct.versions.premium.name}
                          </h5>
                          <div className="text-3xl font-bold text-orange-600">
                            {selectedProduct.versions.premium.price}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 text-lg font-semibold">
                          {selectedProduct.versions.premium.description}
                        </p>
                        <ul className="space-y-2">
                          {selectedProduct.versions.premium.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Características Principales</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-xl">
                        <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">{feature.title}</h5>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Beneficios</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProduct.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Planes Disponibles</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                      <h5 className="font-bold text-lg mb-2">Básico</h5>
                      <p className="text-3xl font-bold text-blue-600 mb-4">{selectedProduct.pricing.basic}</p>
                      <p className="text-gray-600 text-sm">Ideal para restaurantes pequeños</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-blue-500 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Recomendado</span>
                      </div>
                      <h5 className="font-bold text-lg mb-2">Profesional</h5>
                      <p className="text-3xl font-bold text-blue-600 mb-4">{selectedProduct.pricing.pro}</p>
                      <p className="text-gray-600 text-sm">Para restaurantes en crecimiento</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                      <h5 className="font-bold text-lg mb-2">Empresarial</h5>
                      <p className="text-3xl font-bold text-blue-600 mb-4">{selectedProduct.pricing.enterprise}</p>
                      <p className="text-gray-600 text-sm">Cadenas y franquicias</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="text-center space-y-4">
                  <button 
                    onClick={() => {
                      setSelectedProduct(null);
                      setShowInteractiveDemo(true);
                    }}
                    className={`bg-gradient-to-r ${selectedProduct.gradient} hover:opacity-90 text-white py-4 px-12 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3`}
                  >
                    <span className="text-2xl">🎮</span>
                    Ver Demo Interactivo
                  </button>
                  <div className="text-gray-400 font-medium">o</div>
                  <a 
                    href="http://localhost:5175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-12 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    <span className="text-2xl">🎯</span>
                    Iniciar Trial Gratuito de 15 días
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Demo Modal */}
      <InteractiveDemo 
        isOpen={showInteractiveDemo} 
        onClose={() => setShowInteractiveDemo(false)} 
      />
    </section>
  );
};

export default Products;
