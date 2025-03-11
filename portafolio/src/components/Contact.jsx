import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contáctame</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o quieres hablar sobre una oportunidad laboral? ¡Estoy aquí para ayudarte!
        </p>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-secondary/20 p-8 rounded-xl shadow-lg border border-tertiary/30">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-tertiary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-tertiary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-primary/50 border border-tertiary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-tertiary hover:bg-accent text-white'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg ${
                  submitStatus === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-secondary/20 p-8 rounded-xl shadow-lg border border-tertiary/30 h-full">
              <h3 className="text-2xl font-bold mb-6 text-highlight">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-tertiary/30 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-highlight mb-1">Email</h4>
                    <a href="mailto:johan.orellana.tapia@gmail.com" className="hover:text-highlight transition-colors">
                      johan.orellana.tapia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tertiary/30 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-highlight mb-1">WhatsApp</h4>
                    <a href="https://wa.me/59167515583" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
                      +591 67515583
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tertiary/30 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-highlight mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/johan-orellana-tapia/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
                      @johan-orellana-tapia
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tertiary/30 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-highlight mb-1">GitHub</h4>
                    <a href="https://github.com/OsviTap/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
                      @OsviTap
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-highlight mb-4">Horario de Disponibilidad</h4>
                <p className="mb-2">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Fines de Semana: Con cita previa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 