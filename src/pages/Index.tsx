
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Hero />
      <About />
      <Career />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
