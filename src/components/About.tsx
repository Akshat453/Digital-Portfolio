import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Introduction & Learning Philosophy
        </h2>
        
        <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in">
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-primary mb-3">My Learning Journey</h3>
              <p className="leading-relaxed">
                My academic journey has been driven by an insatiable curiosity and a passion for understanding 
                how technology shapes our world. From my early days of coding simple programs to now architecting 
                complex systems, I've embraced every challenge as an opportunity to grow and innovate.
              </p>
            </div>
            
            <div>
              <h3 className="text-primary mb-3">Core Values</h3>
              <p className="leading-relaxed">
                I believe in the power of continuous learning, collaborative innovation, and ethical technology 
                development. My approach to problem-solving combines analytical thinking with creative exploration, 
                always keeping the end-user and societal impact at the forefront of my work.
              </p>
            </div>
            
            <div>
              <h3 className="text-primary mb-3">Academic Philosophy</h3>
              <p className="leading-relaxed">
                Education, to me, is not just about acquiring knowledge—it's about developing the ability to 
                think critically, adapt quickly, and contribute meaningfully to society. I strive to bridge 
                theoretical concepts with practical applications, ensuring that every lesson learned can be 
                transformed into real-world solutions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
