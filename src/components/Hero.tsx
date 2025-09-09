import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import heroImage from "@/assets/Foto2.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Desarrolladora</span>
              <br />
              Web & UX/UI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            ¡Hola! Soy Franchesca, desarrolladora web apasionada por convertir ideas en experiencias digitales únicas. Me enfoco en combinar código limpio con diseño intuitivo, 
            siempre con ganas de aprender y crecer profesionalmente.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              Ver Proyectos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contactar
            </Button>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/franchescaycr" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/franchesca-carrasco/" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.behance.net/franchescaycr"
               className="text-muted-foreground hover:text-primary transition-colors">
              <FaBehance size={24} />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="glass-card p-8 rounded-2xl glow-effect">
            <img 
              src={heroImage} 
              alt="Desarrolladora trabajando" 
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;