
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/237eebb4-ad5e-4493-b350-a063e7aa13d5.png" 
              alt="Leonardo Cabrera"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl object-cover animate-scale-in"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            LEONARDO CABRERA
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light tracking-wide">
            MAESTRO
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Educador apasionado y comprometido, especializado en fomentar el pensamiento crítico 
            y el desarrollo de habilidades prácticas en mis estudiantes.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
