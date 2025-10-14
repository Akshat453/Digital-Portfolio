import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Instagram, Send, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-[#0077b5]",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      color: "hover:bg-[#333]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@yourusername",
      href: "https://instagram.com/yourusername",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Get In</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Primary Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  className="block group"
                >
                  <Card className="relative overflow-hidden p-8 bg-card hover:shadow-glow-soft transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full`}></div>
                    
                    <div className="relative">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${contact.color} rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2">{contact.label}</h3>
                      <p className="text-lg font-bold text-card-foreground break-all">{contact.value}</p>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            {/* Social Media Grid */}
            <Card className="p-8 bg-card border-2">
              <h3 className="text-xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-border ${social.color} hover:border-transparent hover:text-white transition-all duration-300`}>
                      <social.icon className="w-8 h-8" />
                      <span className="text-sm font-semibold">{social.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-primary text-white border-0">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Open to Opportunities</h3>
                  <p className="text-white/90 leading-relaxed">
                    I'm actively seeking exciting opportunities in software development, research collaborations, 
                    and innovative projects that make a positive impact. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Info Card */}
          <div className="space-y-6">
            <Card className="p-8 bg-card-dark text-card-dark-foreground border-border-dark sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Let's Collaborate</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Dev', 'Machine Learning', 'Cloud Computing', 'Open Source'].map((interest) => (
                      <span key={interest} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Currently
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Available for freelance projects</li>
                    <li>• Open to full-time opportunities</li>
                    <li>• Interested in research collaborations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Response Time
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24-48 hours
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
