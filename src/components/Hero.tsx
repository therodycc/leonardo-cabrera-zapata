
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Profile and main info */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="flex flex-col items-center lg:items-start">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                  <img 
                    src="/lovable-uploads/237eebb4-ad5e-4493-b350-a063e7aa13d5.png" 
                    alt="Leonardo Cabrera"
                    className="relative w-56 h-56 rounded-2xl object-cover shadow-2xl border-4 border-white/20 animate-scale-in"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-4 mb-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                    LEONARDO<br />CABRERA
                  </h1>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 inline-block">
                    <p className="text-lg font-semibold text-white">
                      MAESTRO ESPECIALIZADO
                    </p>
                  </div>
                </div>

                {/* Quick contact info */}
                <div className="flex flex-col gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>Disponible para oportunidades</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Contacto profesional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - About me info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fade-in delay-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Sobre Mí
              </h2>
              
              <div className="space-y-4 text-gray-200">
                <p className="text-lg leading-relaxed">
                  Educador apasionado y comprometido, especializado en fomentar el pensamiento crítico 
                  y el desarrollo de habilidades prácticas en mis estudiantes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-purple-200 mb-2">Enfoque Pedagógico</h3>
                    <p className="text-sm text-gray-300">Participación activa y pensamiento crítico</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-purple-200 mb-2">Especialización</h3>
                    <p className="text-sm text-gray-300">Ciencias Sociales y desarrollo integral</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-sm text-gray-300 italic">
                    "Comprometido con la excelencia educativa y el crecimiento personal de cada estudiante"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
