import { User, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 border-4 border-primary/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-32 left-32 w-16 h-16 bg-accent/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Available for Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">Akshat Singh</span>
            </h1>
            
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                Software Engineer at Apple | Tech Speaker | Innovator
              </p>
              <p className="text-lg text-muted-foreground">
                Based in San Francisco | 5+ Years of Experience
              </p>
            </div>
            
            <p className="text-xl text-foreground/90 font-medium max-w-xl border-l-4 border-primary pl-6 py-2">
              "Innovating at the intersection of technology and creativity"
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-card text-card-foreground border-2 border-border rounded-xl font-semibold hover:border-primary transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Image/Avatar */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-3xl -z-10"></div>
              
              {/* Main Avatar Circle */}
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/my-photo-3.jpg"
                  alt="Akshat Singh"
                  className="object-cover w-full h-full rounded-3xl transition-transform duration-500 hover:scale-105"
                />
              </div>


              {/* Floating Stats Cards */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-2xl shadow-glow-soft p-4 border border-border animate-float">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 bg-card rounded-2xl shadow-glow-soft p-4 border border-border animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Years Exp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <span className="text-sm">Scroll Down</span>
        <ArrowDown className="w-5 h-5" />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
