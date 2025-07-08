
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Maestría en Geografía, UASD",
      status: "(Pendiente a defender tesis-actual)",
      year: "Actual"
    },
    {
      degree: "Licenciatura en Educación, Mención Ciencias Sociales",
      institution: "Universidad Dominicana O&M",
      year: "2020"
    },
    {
      degree: "Estudios Secundarios",
      institution: "Centro de Excelencia Profesora Liduvina Cornelio",
      year: "2015"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              FORMACIÓN ACADÉMICA
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {item.degree}
                    </h3>
                    {item.status && (
                      <p className="text-purple-600 font-medium mb-1">{item.status}</p>
                    )}
                    {item.institution && (
                      <p className="text-gray-600 mb-2">{item.institution}</p>
                    )}
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
