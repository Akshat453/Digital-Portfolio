import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@yourusername",
      href: "https://instagram.com/yourusername",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to connect!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow hover:scale-105 animate-fade-in cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">{contact.label}</h3>
                    <p className="text-foreground font-medium">{contact.value}</p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-card border-border">
            <p className="text-muted-foreground mb-4">
              Open to exciting opportunities in software development, research collaborations, 
              and innovative projects that make a positive impact.
            </p>
            <p className="text-primary font-semibold">
              Let's build something amazing together!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
