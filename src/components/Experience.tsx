
import { Briefcase, Users, BookOpen, Target, Lightbulb } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    {
      icon: Target,
      text: "Diseño, organización y ejecución de las estrategias por grado"
    },
    {
      icon: Users,
      text: "Tutoría a 6 grupos diferentes de distintos niveles educativos"
    },
    {
      icon: BookOpen,
      text: "Manejo de matrícula de 175 estudiantes por año escolar"
    },
    {
      icon: Lightbulb,
      text: "Preparación del temario y elaboración del material pedagógico"
    },
    {
      icon: Briefcase,
      text: "Coordinador del área de Ciencias Sociales"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              EXPERIENCIA LABORAL
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Centro Educativo Salesiano, Mons. Juan Félix Pepén
              </h3>
              <p className="text-lg text-purple-600 font-medium">2020 - presente</p>
            </div>
            
            <div className="grid gap-4 md:gap-6">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 flex-grow">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
