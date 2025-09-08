import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectFronted from "@/assets/batatabit.png";
import projectSass from "@/assets/eco.png";
import projectLanding from "@/assets/landing.png";

const Projects = () => {
  const projects = [
    {
      title: "Batatabit",
      description: "Proyecto desarrollado con el enfoque Mobile First, priorizando la experiencia de usuario en dispositivos móviles y adaptando progresivamente a pantallas más grandes.",
      image: projectFronted,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://franchescaycr.github.io/Batatabit/",
      githubUrl: "https://github.com/franchescaycr/Batatabit",
      category: "Frontend"
    },
    {
      title: "Eco-store",
      description: "Eco-store es una landing page responsive diseñada para promover productos ecológicos de uso diario. El objetivo fue combinar diseño visual atractivo con código limpio y modular..",
      image: projectSass,
      technologies: ["HTML5", "Sass (Dart Sass)"],
      liveUrl: "https://franchescaycr.github.io/eco-store/",
      githubUrl: "https://github.com/franchescaycr/eco-store",
      category: "Frontend"
    },
    {
      title: "Landing Page",
      description: "Panel de control personal para seguimiento de hábitos y tareas, creado para practicar React hooks y gestión de estado.",
      image: projectLanding,
      technologies: ["Figma"],
      liveUrl: "https://www.behance.net/gallery/233647197/Landing-Page-London-Carniceria",
      githubUrl: "#",
      category: "UX/UI Design"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos que muestran mi evolución y aprendizaje en desarrollo web y UX/UI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;