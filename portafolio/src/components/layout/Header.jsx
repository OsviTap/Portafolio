import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-highlight">Johan Orellana</div>
        
        {/* Navegación para escritorio */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="hover:text-highlight transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-highlight transition-colors">Sobre Mí</a>
          <a href="#proyectos" className="hover:text-highlight transition-colors">Proyectos</a>
          <a href="#habilidades" className="hover:text-highlight transition-colors">Habilidades</a>
          <a href="#contacto" className="hover:text-highlight transition-colors">Contacto</a>
        </nav>
        
        {/* Botón de menú móvil */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Menú móvil */}
      <div 
        className={`md:hidden absolute w-full bg-primary/95 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg ${
          isMobileMenuOpen ? 'max-h-96 py-4 border-b border-tertiary/30' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <a 
            href="#inicio" 
            className="py-2 hover:text-highlight transition-colors"
            onClick={closeMobileMenu}
          >
            Inicio
          </a>
          <a 
            href="#sobre-mi" 
            className="py-2 hover:text-highlight transition-colors"
            onClick={closeMobileMenu}
          >
            Sobre Mí
          </a>
          <a 
            href="#proyectos" 
            className="py-2 hover:text-highlight transition-colors"
            onClick={closeMobileMenu}
          >
            Proyectos
          </a>
          <a 
            href="#habilidades" 
            className="py-2 hover:text-highlight transition-colors"
            onClick={closeMobileMenu}
          >
            Habilidades
          </a>
          <a 
            href="#contacto" 
            className="py-2 hover:text-highlight transition-colors"
            onClick={closeMobileMenu}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 