
import { Award, Globe, Lightbulb } from "lucide-react";

const Skills = () => {
  const additionalKnowledge = [
    "Geoestadística: Importancia del dónde, Oficina Nacional de Estadística, 2023",
    "Competencias digitales para profesionales, Google Active, 2023",
    "Cómo usar preguntas para fomentar el pensamiento crítico y la curiosidad, LinkedIn Learning, 2023"
  ];

  const languages = [
    { language: "Inglés", level: "Intermedio" },
    { language: "Portugués", level: "Intermedio" },
    { language: "Español", level: "Lengua materna" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Otros Conocimientos */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  OTROS CONOCIMIENTOS
                </h2>
              </div>
              <div className="space-y-4">
                {additionalKnowledge.map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-600">
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  IDIOMAS
                </h2>
              </div>
              <div className="space-y-4">
                {languages.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <span className="font-medium text-gray-800">{item.language}</span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
