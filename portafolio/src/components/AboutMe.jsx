import React from 'react';

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sobre Mí</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="bg-secondary/30 p-6 rounded-lg shadow-xl border border-tertiary/30 backdrop-blur-sm">
              <p className="text-lg mb-4">
                Soy un desarrollador web apasionado con sólidas habilidades en la creación de soluciones de software eficientes y escalables. Mi experiencia abarca el desarrollo de aplicaciones web y móviles.
              </p>
              <p className="text-lg mb-4">
                También tengo experiencia como QA Manual, lo que me ha permitido desarrollar un ojo crítico para la calidad del software y la experiencia del usuario.
              </p>
              <p className="text-lg">
                Me encanta enfrentar nuevos desafíos y aprender constantemente nuevas tecnologías para mejorar mis habilidades y ofrecer soluciones innovadoras.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-secondary/20 p-4 rounded-lg border border-tertiary/20">
                <h3 className="text-xl font-semibold mb-2 text-highlight">Educación</h3>
                <p>Ingeniería en Sistemas</p>
                <p className="text-sm text-gray-300">Universidad XYZ, 2018-2022</p>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg border border-tertiary/20">
                <h3 className="text-xl font-semibold mb-2 text-highlight">Experiencia</h3>
                <p>+3 años de experiencia</p>
                <p className="text-sm text-gray-300">Desarrollo Web Full Stack & QA</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-tertiary/20 to-accent/20 p-5 rounded-lg border border-tertiary/30">
                <h3 className="text-xl font-semibold mb-3 text-highlight">Desarrollo Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> React.js
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Vue.js
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> HTML5/CSS3
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> JavaScript
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-tertiary/20 to-accent/20 p-5 rounded-lg border border-tertiary/30">
                <h3 className="text-xl font-semibold mb-3 text-highlight">Desarrollo Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Express
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> MongoDB
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> MySQL
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-tertiary/20 to-accent/20 p-5 rounded-lg border border-tertiary/30">
                <h3 className="text-xl font-semibold mb-3 text-highlight">QA Testing</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Pruebas Funcionales
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Pruebas de Regresión
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Pruebas de UI/UX
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Documentación de Bugs
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-tertiary/20 to-accent/20 p-5 rounded-lg border border-tertiary/30">
                <h3 className="text-xl font-semibold mb-3 text-highlight">Herramientas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Git/GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> VS Code
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Jira
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-highlight">✓</span> Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 