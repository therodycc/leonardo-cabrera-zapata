
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Leonardocabrera1518@gmail.com",
      link: "mailto:Leonardocabrera1518@gmail.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "829-613-4375",
      link: "tel:8296134375"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santo Domingo Este",
      link: null
    }
  ];

  const references = [
    {
      name: "Lic. Emely Pujols",
      phone: "809-608-7070",
      email: "Emelypujols@hotmail.com"
    },
    {
      name: "Lic. Juan Daniel Martínez",
      phone: "829-875-7966",
      email: "Jdmartinez@isa.edu.do"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CONTACTO
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Información de Contacto */}
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-purple-200">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm text-purple-200">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-white hover:text-purple-300 transition-colors flex items-center break-words">
                          <span className="break-all">{item.value}</span>
                          <ExternalLink className="w-4 h-4 ml-1 flex-shrink-0" />
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Referencias */}
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-purple-200">Referencias Personales</h3>
              <div className="space-y-6">
                {references.map((ref, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <h4 className="font-bold text-white mb-2">{ref.name}</h4>
                    <p className="text-purple-200 text-sm mb-1">Tel: {ref.phone}</p>
                    <a href={`mailto:${ref.email}`} className="text-purple-300 hover:text-white text-sm transition-colors break-all">
                      {ref.email}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-purple-200 text-sm">
                  Para consulta de títulos y certificaciones disponibles bajo solicitud.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-purple-200">
              © 2024 Leonardo Cabrera. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
