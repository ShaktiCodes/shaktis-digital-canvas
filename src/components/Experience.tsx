import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "BrandwepBTG",
      location: "Mumbai",
      period: "2024 – 2025",
      type: "Full-time",
      achievements: [
        "Optimized backend performance by 40% through efficient database queries and caching strategies",
        "Implemented secure authentication systems with JWT and OAuth integration",
        "Developed real-time tracking solutions using WebSocket technology",
        "Enhanced overall system efficiency by 35% through code optimization and architecture improvements",
        "Led integration of third-party APIs and payment gateways"
      ],
      technologies: ["Node.js", "React.js", "MongoDB", "JWT", "WebSocket", "AWS"]
    },
    {
      title: "Frontend Developer (Intern)",
      company: "Grappitech",
      location: "Bengaluru",
      period: "2024",
      type: "Internship",
      achievements: [
        "Developed responsive UI components from Figma designs with pixel-perfect accuracy",
        "Successfully deployed applications using AWS Amplify with CI/CD pipelines",
        "Created AI-driven workflows that improved user engagement by 25%",
        "Collaborated with design teams to implement modern UI/UX patterns",
        "Optimized application performance and loading times"
      ],
      technologies: ["React.js", "Figma", "AWS Amplify", "TypeScript", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 section-enter-delay-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card glass-card-hover p-8 rounded-3xl">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{exp.title}</h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-foreground-subtle mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <h5 className="text-lg font-semibold text-secondary mb-4">Key Achievements:</h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground-muted leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;