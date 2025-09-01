const About = () => {
  return (
    <section id="about" className="py-20 px-6 section-enter-delay-1">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card glass-card-hover p-8 rounded-3xl">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground-muted">
                I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> with 
                <span className="text-accent font-semibold"> 2+ years of experience</span> in creating 
                scalable web applications and responsive user interfaces.
              </p>
              
              <p className="text-foreground-subtle">
                My expertise spans across <span className="text-secondary">frontend development</span> with 
                React.js and Next.js, <span className="text-primary">backend optimization</span> with Node.js, 
                and <span className="text-accent">AI-powered solutions</span> that enhance user experiences.
              </p>

              <p className="text-foreground-subtle">
                I thrive on solving complex problems, optimizing performance, and building applications 
                that make a real impact. Whether it's implementing secure authentication systems, 
                creating real-time tracking solutions, or developing AI-driven workflows, I bring 
                dedication and innovation to every project.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card glass-card-hover p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2+</div>
                  <div className="text-sm text-foreground-muted">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-foreground-muted">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-foreground-muted">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-foreground-muted">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Specializations</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground-muted">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Scalable Web Applications
                </li>
                <li className="flex items-center text-foreground-muted">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Responsive UI/UX Design
                </li>
                <li className="flex items-center text-foreground-muted">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  AI-Powered Solutions
                </li>
                <li className="flex items-center text-foreground-muted">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Performance Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;