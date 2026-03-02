import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tusoftwareya
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('caracteristicas')}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Características
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors font-semibold"
              >
                Solicitar Demo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-700 rounded-md font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-700 rounded-md font-medium"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('caracteristicas')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-700 rounded-md font-medium"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold mt-2"
            >
              Solicitar Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
