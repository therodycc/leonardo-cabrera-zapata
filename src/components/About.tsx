
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              MI FILOSOFÍA EDUCATIVA
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Metodología</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creo firmemente en el aprendizaje activo y participativo, donde cada estudiante 
                es protagonista de su propio proceso de formación.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Objetivos</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi objetivo es formar ciudadanos críticos, reflexivos y comprometidos con 
                la transformación positiva de su entorno social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
