import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-foreground-subtle/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-foreground-muted">
            © 2024 Shakti Singh Rathaur.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
