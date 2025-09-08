import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

const Skills = () => {
  const techSkills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js",  "PostgreSQL", "MongoDB", "API REST"]
    },
    {
      icon: Globe,
      title: "Herramientas & Deploy",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
    }
  ];

  const uxSkills = [
    {
      icon: Palette,
      title: "UX/UI Design",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Experiencia Usuario",
      skills: ["User Journey", "Usability Testing", "Accessibility", "Responsive Design"]
    },
    {
      icon: Zap,
      title: "Design Tools",
      skills: ["Figma", "Adobe Creative Suite"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combinando desarrollo técnico con experiencia de usuario para crear soluciones completas
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Desarrollo Web</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <skill.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-3">{skill.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UX/UI Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">UX/UI Design</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uxSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <skill.icon className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-lg font-semibold mb-3">{skill.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;