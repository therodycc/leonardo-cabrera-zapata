
import { GraduationCap, Briefcase, Users, BookOpen, Target, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Career = () => {
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              TRAYECTORIA PROFESIONAL
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>
          
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Formación
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experiencia
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="space-y-6">
              <div className="grid gap-6">
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
            </TabsContent>
            
            <TabsContent value="experience" className="space-y-6">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Centro Educativo Salesiano, Mons. Juan Félix Pepén
                  </h3>
                  <p className="text-lg text-purple-600 font-medium">2020 - presente</p>
                </div>
                
                <div className="grid gap-4 md:gap-6">
                  {responsibilities.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-gray-700 flex-grow font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Career;
