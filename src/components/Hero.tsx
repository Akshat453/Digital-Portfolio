import { User } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-primary p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <User className="w-20 h-20 text-primary" />
            </div>
          </div>
          
          <h1 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Name
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-3">
            Computer Science & Engineering Student
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            Your University Name • Class of 2025
          </p>
          
          <p className="text-xl md:text-2xl text-primary font-semibold max-w-2xl mx-auto">
            "Innovating at the intersection of technology and creativity"
          </p>
          
          <div className="mt-12">
            <a 
              href="#about" 
              className="inline-block px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Explore My Journey
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
