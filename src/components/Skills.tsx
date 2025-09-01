import { Code, Database, Cloud, Palette, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "primary",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development", 
      icon: <Database className="w-6 h-6" />,
      color: "secondary",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL", "JWT", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "accent",
      skills: ["AWS", "Docker", "GitHub Actions", "AWS Amplify", "Vercel", "Netlify", "Linux", "Nginx"]
    },
    {
      title: "Programming Languages",
      icon: <Cpu className="w-6 h-6" />,
      color: "primary",
      skills: ["C++", "JavaScript", "TypeScript", "Python", "Java", "PHP", "Bash", "SQL"]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      color: "secondary", 
      skills: ["Figma", "Adobe XD", "Photoshop", "Responsive Design", "UI/UX Principles", "Wireframing", "Prototyping"]
    },
    {
      title: "Tools & Technologies",
      icon: <Globe className="w-6 h-6" />,
      color: "accent",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Webpack", "Vite", "ESLint", "Prettier"]
    }
  ];

  const expertise = [
    { name: "React.js", level: 90, color: "primary" },
    { name: "Node.js", level: 85, color: "secondary" },
    { name: "TypeScript", level: 88, color: "accent" },
    { name: "MongoDB", level: 82, color: "primary" },
    { name: "Next.js", level: 87, color: "secondary" },
    { name: "AWS", level: 75, color: "accent" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground-muted mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building
            exceptional web applications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-card p-6 rounded-2xl border border-foreground-subtle/20">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-${category.color}/20 text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-background-secondary rounded-full text-sm text-foreground-muted border border-foreground-subtle/20 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Levels */}
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-accent-text">
            Expertise Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                  <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
                </div>
                <div className="w-full bg-background-secondary rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-foreground-muted">Technologies Mastered</div>
          </div>
          <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-secondary mb-2">2+</div>
            <div className="text-foreground-muted">Years of Experience</div>
          </div>
          <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-foreground-muted">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;