import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-card-dark text-card-dark-foreground border-t border-border-dark overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
              Your Name
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science Student passionate about building innovative solutions 
              and making a positive impact through technology.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Connect */}
          <div>
            <h4 className="font-bold mb-4">Let's Connect</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Always open to discussing new opportunities and collaborations
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 text-sm font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} Your Name. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
            and <Code className="w-4 h-4 text-primary" />
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
