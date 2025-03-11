import React from 'react';

const Projects = () => {
  // Datos de proyectos (puedes reemplazarlos con tus proyectos reales de GitHub)
  const projects = [
    {
      id: 1,
      title: "Sistem_taller_titis",
      description: "Sistema web para manejo de inventarios y servicios para el taller Car Service Titis",
      technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
      image: "https://via.placeholder.com/600x400?text=Sistem_taller_titis",
      github: "https://github.com/OsviTap/Sistem_taller_titis",
      demo: "#"
    },
    {
      id: 2,
      title: "Sistem_CoralGris",
      description: "Sistema de gestión para empresa CoralGris",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "https://via.placeholder.com/600x400?text=Sistem_CoralGris",
      github: "https://github.com/OsviTap/Sistem_CoralGris",
      demo: "#"
    },
    {
      id: 3,
      title: "Sistema de Inventarios",
      description: "Sistema de inventarios con HTML, CSS y JS con localStorage",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      image: "https://via.placeholder.com/600x400?text=Sistema+de+Inventarios",
      github: "https://github.com/OsviTap/sis.inventario",
      demo: "#"
    },
    {
      id: 4,
      title: "Hamilo Chat",
      description: "Aplicación de chat en tiempo real",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/600x400?text=Hamilo+Chat",
      github: "https://github.com/OsviTap/Hamilo-chat",
      demo: "#"
    },
    {
      id: 5,
      title: "Clon de Netflix",
      description: "Réplica de la interfaz de usuario de Netflix",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/600x400?text=Clon+de+Netflix",
      github: "https://github.com/OsviTap/pagina-netflix",
      demo: "#"
    },
    {
      id: 6,
      title: "Prácticas Hamilo",
      description: "Prácticas creando páginas web con HTML5, CSS y JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/600x400?text=Prácticas+Hamilo",
      github: "https://github.com/OsviTap/Practicas-Hamilo",
      demo: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Mis Proyectos</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Aquí hay una selección de mis proyectos más recientes. Cada proyecto refleja mi pasión por crear soluciones digitales elegantes y funcionales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-secondary/20 rounded-xl overflow-hidden shadow-lg border border-tertiary/30 transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-highlight">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-tertiary/30 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-tertiary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/OsviTap" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-tertiary hover:bg-accent text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Ver más en GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 