import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Shield, Users, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MindTrack LMS",
      description: "A comprehensive Learning Management System built with MERN stack featuring course tracking, progress analytics, and payment integration.",
      longDescription: "Advanced LMS platform with real-time progress tracking, interactive course modules, and comprehensive analytics dashboard. Improved user retention by 45% through gamification features.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT", "Socket.io"],
      features: [
        "Secure JWT authentication system",
        "Stripe payment integration",
        "Real-time course progress tracking",
        "Interactive learning modules",
        "Advanced analytics dashboard"
      ],
      github: "https://github.com/ShaktiCodes/LMS",
      image: "project1",
      color: "primary",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Neo-Chat Engine",
      description: "An advanced chat application with AI integration, featuring OpenAI API, responsive design, and plugin-based architecture.",
      longDescription: "Next-generation chat platform with AI-powered responses, real-time messaging, and extensible plugin system. Built with modern React patterns and optimized for performance.",
      technologies: ["React.js", "OpenAI API", "WebSocket", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "AI-powered chat responses",
        "Real-time messaging system",
        "Plugin-based architecture",
        "Responsive cross-device design",
        "Advanced message filtering"
      ],
      github: "https://github.com/ShaktiCodes/plugin-powered-chat-hub",
      image: "project2",
      color: "secondary",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground-muted mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate expertise in full-stack development,
            AI integration, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card glass-card-hover p-8 rounded-3xl group">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${project.color}/20 text-${project.color}`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              </div>

              <p className="text-foreground-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <p className="text-foreground-subtle text-sm mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-secondary mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-sm text-foreground-subtle mb-3">Technologies Used:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full text-xs border border-${project.color}/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  size="sm" 
                  className={`interactive-hover bg-${project.color}/20 hover:bg-${project.color}/30 border-${project.color}/30 text-${project.color}`}
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-foreground-subtle/20">
                <div className="flex items-center gap-2 text-sm text-foreground-subtle">
                  <Shield className="w-4 h-4" />
                  <span>Production-ready • Fully tested • Scalable architecture</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="glass-card interactive-hover bg-accent/20 hover:bg-accent/30 border-accent/30 text-accent px-8 py-6"
            asChild
          >
            <a href="https://github.com/ShaktiCodes" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;