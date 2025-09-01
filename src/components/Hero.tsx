import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="hero-enter max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text animate-float">
            Shakti Singh Rathaur
          </h1>
          <div className="text-xl md:text-2xl text-foreground-muted mb-6 font-mono">
            Full-Stack Developer | 
            <span className="text-primary mx-2">React.js</span> • 
            <span className="text-secondary mx-2">Next.js</span> • 
            <span className="text-accent mx-2">Node.js</span>
          </div>
          <p className="text-lg md:text-xl text-foreground-subtle max-w-2xl mx-auto leading-relaxed">
            I build scalable, high-performance web applications with modern technologies.
            Transforming ideas into seamless digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="glass-card interactive-hover bg-primary/20 hover:bg-primary/30 border-primary/30 text-primary px-8 py-6 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card interactive-hover border-foreground-subtle/30 text-foreground-muted hover:text-foreground hover:border-primary/30 px-8 py-6 text-lg"
            asChild
          >
            <a href="https://github.com/ShaktiCodes" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://github.com/ShaktiCodes" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-full interactive-hover border-foreground-subtle/20 hover:border-primary/30"
          >
            <Github className="w-6 h-6 text-foreground-muted hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/shakti-singh-rathaur-37948b20a/" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-full interactive-hover border-foreground-subtle/20 hover:border-secondary/30"
          >
            <Linkedin className="w-6 h-6 text-foreground-muted hover:text-secondary transition-colors" />
          </a>
          <a 
            href="https://www.hackerrank.com/profile/ssrsecret1" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-full interactive-hover border-foreground-subtle/20 hover:border-accent/30"
          >
            <Mail className="w-6 h-6 text-foreground-muted hover:text-accent transition-colors" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-foreground-subtle mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;