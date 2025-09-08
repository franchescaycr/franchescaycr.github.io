import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Colaboración",
      description: "Creo en el poder del trabajo en equipo y la comunicación efectiva para lograr resultados excepcionales."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Siempre busco las últimas tecnologías y tendencias para crear soluciones modernas y eficientes."
    },
    {
      icon: Target,
      title: "Orientación a resultados",
      description: "Me enfoco en entregar proyectos que realmente aporten valor y cumplan los objetivos del negocio."
    },
    {
      icon: Heart,
      title: "Pasión por el diseño",
      description: "Combino funcionalidad con estética para crear experiencias que los usuarios realmente disfruten."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desarrolladora junior entusiasta por aprender y crear experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Mi historia</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                Me encanta enfrentar desafíos y explorar nuevas tecnologías 
                que me permitan encontrar soluciones creativas y efectivas.
                </p>
                <p>
                Por un tiempo, también me desempeñé como diseñadora UX/UI, trabajando en proyectos freelance 
                donde realicé tareas como diseño de interfaces, análisis de experiencia de usuario y prototipado. 
                Esta experiencia me permitió entender mejor la importancia de crear productos funcionales y
                atractivos enfocados en el usuario.
                </p>
                <p>
                Actualmente, me desempeño como desarrolladora web con enfoque en UX/UI, combinando 
                creatividad y funcionalidad para ofrecer soluciones integrales.
                </p>
                <p>
                Disfruto resolver problemas y siempre estoy en busca de nuevas 
                oportunidades para seguir aprendiendo y aportar valor con mi trabajo.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">¿Por qué elegirme?</h3>
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Energía y dedicación:</strong> Aporto entusiasmo y 
                    ganas de dar lo mejor de mí en cada proyecto
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Mentalidad de crecimiento:</strong> Aprendo rápido 
                    y me adapto a nuevas tecnologías y metodologías
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Atención al detalle:</strong> Me preocupo por 
                    escribir código limpio y crear interfaces pulidas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Formación continua:</strong> Invierto tiempo 
                    constantemente en aprender nuevas herramientas y mejores prácticas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Mis valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;