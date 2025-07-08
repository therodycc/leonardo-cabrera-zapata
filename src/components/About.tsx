
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              SOBRE MÍ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Soy un educador apasionado y comprometido, con una sólida formación académica. 
              Mi enfoque pedagógico se centra en fomentar la participación activa, el pensamiento 
              crítico y el desarrollo de habilidades prácticas en mis estudiantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
