import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      id: 2,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "MySQL", level: 70 },
        { name: "API REST", level: 80 },
      ]
    },
    {
      id: 3,
      title: "QA Testing",
      skills: [
        { name: "Pruebas Funcionales", level: 85 },
        { name: "Pruebas de Regresión", level: 80 },
        { name: "Pruebas de UI/UX", level: 85 },
        { name: "Documentación de Bugs", level: 90 },
        { name: "Casos de Prueba", level: 85 },
      ]
    },
    {
      id: 4,
      title: "Herramientas",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jira", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 80 },
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Mis Habilidades</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          He desarrollado un conjunto diverso de habilidades a lo largo de mi carrera. Aquí hay un vistazo a mis competencias técnicas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-secondary/20 rounded-xl p-6 shadow-lg border border-tertiary/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-highlight">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-tertiary to-highlight" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Otras Habilidades</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Trabajo en Equipo", 
              "Comunicación Efectiva", 
              "Resolución de Problemas", 
              "Atención al Detalle", 
              "Gestión del Tiempo", 
              "Adaptabilidad", 
              "Pensamiento Crítico", 
              "Aprendizaje Continuo"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="bg-gradient-to-r from-tertiary/40 to-accent/40 px-4 py-2 rounded-full text-white border border-tertiary/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 