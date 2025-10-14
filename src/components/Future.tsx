import { Card } from "@/components/ui/card";
import { Rocket, BookOpen, Target, TrendingUp } from "lucide-react";

const Future = () => {
  const aspirations = [
    {
      icon: Target,
      title: "Short-term Goals (1-2 years)",
      items: [
        "Secure a position as a Software Engineer at a leading tech company",
        "Contribute to open-source projects in AI/ML domain",
        "Complete advanced certifications in Cloud Architecture and Machine Learning",
        "Publish research paper on AI ethics in a peer-reviewed journal",
      ],
    },
    {
      icon: Rocket,
      title: "Long-term Career Vision (5-10 years)",
      items: [
        "Become a technical lead or architect designing scalable systems",
        "Launch a tech startup addressing real-world problems in healthcare or education",
        "Mentor the next generation of developers through teaching and workshops",
        "Establish myself as a thought leader in ethical AI development",
      ],
    },
    {
      icon: BookOpen,
      title: "Areas for Further Study",
      items: [
        "Advanced Machine Learning and Deep Learning specialization",
        "Quantum Computing fundamentals and applications",
        "Blockchain technology and decentralized systems",
        "Human-Computer Interaction and UX research methodologies",
      ],
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement Strategies",
      items: [
        "Participate in competitive programming and hackathons regularly",
        "Read 2 technical books per month and document key learnings",
        "Build side projects experimenting with emerging technologies",
        "Network with industry professionals through conferences and meetups",
        "Maintain a technical blog sharing insights and lessons learned",
      ],
    },
  ];

  return (
    <section id="future" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Future Aspirations & Professional Development
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Outlining career goals, areas for growth, and commitment to lifelong learning
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {aspirations.map((section, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <section.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-primary text-xl">{section.title}</h3>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card className="p-8 bg-gradient-primary text-primary-foreground border-0">
            <h3 className="text-2xl font-bold mb-4 text-center">My Commitment</h3>
            <p className="text-center leading-relaxed">
              I am committed to continuous growth, staying curious, and using technology as a force for positive 
              change. My journey is not just about building a career, but about making meaningful contributions 
              to society while staying true to my values of innovation, ethics, and excellence.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Future;
