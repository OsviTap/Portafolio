import React from 'react';
import fotoPerfil from '../assets/images/fotoPerfil.png';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hola, soy <span className="text-highlight">Johan Orellana</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-accent">Desarrollador Web Full Stack & QA Manual</h2>
          <p className="text-lg mb-8 max-w-lg">
            Creando soluciones digitales elegantes, funcionales y escalables para la web. Especializado en desarrollo frontend, backend y testing de calidad.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#proyectos" 
              className="bg-tertiary hover:bg-accent text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contacto" 
              className="border-2 border-tertiary hover:border-accent text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Contáctame
            </a>
            <a 
              href="https://github.com/OsviTap/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
          
          <div className="mt-10 flex items-center space-x-4">
            <p className="text-gray-300">Sígueme en:</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/johan-orellana-tapia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://wa.me/59167515583" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a 
                href="mailto:johan.orellana.tapia@gmail.com" 
                className="text-gray-300 hover:text-highlight transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Círculos decorativos */}
            <div className="absolute inset-0 -z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-tertiary/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-tertiary/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-tertiary/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Imagen de perfil con aura animada */}
            <div className="relative">
              {/* Aura animada */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-tertiary via-accent to-highlight opacity-75 blur-md animate-pulse z-0"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-highlight via-tertiary to-accent opacity-50 blur-md animate-pulse-slow z-0"></div>
              
              {/* Imagen de perfil */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-highlight relative z-10">
                <img 
                  src={fotoPerfil} 
                  alt="Johan Orellana" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Elementos flotantes */}
            <div className="absolute -top-4 -right-4 bg-primary/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-tertiary/30 z-20">
              <div className="text-highlight font-bold">Frontend</div>
              <div className="text-sm">React & Vue</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-primary/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-tertiary/30 z-20">
              <div className="text-highlight font-bold">QA Testing</div>
              <div className="text-sm">Manual Testing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 