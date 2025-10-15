import { Card } from "@/components/ui/card";
import { BookOpen, Target, Lightbulb } from "lucide-react";

const About = () => {
  const philosophies = [
    {
      icon: BookOpen,
      title: "My Learning Journey",
      content: "My professional journey has been guided by an endless curiosity about how technology can transform everyday life. From building scalable systems at Zomato to leading innovation at Apple, I’ve always viewed challenges as opportunities to create smarter, more meaningful experiences through technology.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Core Values",
      content: "I value innovation grounded in empathy, collaboration, and ethics. My approach blends strategic problem-solving with creative experimentation ensuring technology not only solves problems but also empowers people. I believe true innovation happens at the intersection of purpose and impact.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Professional Philosophy",
      content: "My professional philosophy revolves around lifelong learning, adaptability, and human-centered innovation. I believe technology should enhance lives, not complicate them. Every project I undertake reflects a commitment to excellence, integrity, and purposeful design.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Introduction</span>
            <span className="text-card-foreground"> & Learning Philosophy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Philosophy Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((item, idx) => (
            <Card 
              key={idx}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-transparent hover:shadow-glow-soft transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              <div className="absolute inset-[2px] bg-white rounded-[calc(1rem-2px)] z-0"></div>
              
              <div className="relative z-10 p-8 space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-card-foreground">
                  {item.title}
                </h3>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-secondary border-0 text-center">
            <blockquote className="text-xl md:text-2xl text-foreground font-light italic">
              "The beautiful thing about learning is that no one can take it away from you."
            </blockquote>
            <p className="mt-4 text-muted-foreground">— B.B. King</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
