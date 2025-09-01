import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ssrrathaur068@gmail.com",
      href: "mailto:ssrrathaur068@gmail.com",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/shaktirathaur",
      href: "https://github.com/shaktirathaur",
      color: "primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shaktirathaur",
      href: "https://linkedin.com/in/shaktirathaur",
      color: "secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 section-enter-delay-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-foreground-muted mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card-hover transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-3 rounded-xl bg-${info.color}/20 text-${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-foreground-subtle">{info.label}</div>
                      <div className="text-foreground font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>


            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-accent mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24h</div>
                  <div className="text-xs text-foreground-muted">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-xs text-foreground-muted">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">2+</div>
                  <div className="text-xs text-foreground-muted">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-xs text-foreground-muted">Projects Done</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-accent mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground-muted mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="glass-card border-foreground-subtle/30 focus:border-primary/50 bg-background-secondary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground-muted mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="glass-card border-foreground-subtle/30 focus:border-primary/50 bg-background-secondary/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-foreground-muted mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="john.doe@example.com"
                  className="glass-card border-foreground-subtle/30 focus:border-primary/50 bg-background-secondary/50"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground-muted mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="Let's discuss your project"
                  className="glass-card border-foreground-subtle/30 focus:border-primary/50 bg-background-secondary/50"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground-muted mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  rows={6}
                  className="glass-card border-foreground-subtle/30 focus:border-primary/50 bg-background-secondary/50 resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full interactive-hover bg-primary/20 hover:bg-primary/30 border-primary/30 text-primary py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
              Whether you need a full-stack web application, frontend development, 
              or technical consultation, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="interactive-hover bg-accent/20 hover:bg-accent/30 border-accent/30 text-accent px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="interactive-hover border-foreground-subtle/30 text-foreground-muted hover:text-foreground hover:border-secondary/30 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;