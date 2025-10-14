import { Card } from "@/components/ui/card";
import { Globe, Shield, Heart } from "lucide-react";

const Ethics = () => {
  const considerations = [
    {
      icon: Globe,
      title: "AI Ethics in Healthcare",
      context: "Global Healthcare Equity",
      scenario: "Developed an AI diagnostic tool for disease detection in resource-limited settings",
      ethical_implications: [
        "Addressed bias in training data that could lead to unequal treatment across demographics",
        "Considered accessibility issues for non-English speaking populations",
        "Evaluated potential job displacement of healthcare workers",
      ],
      analysis: "Implemented fairness metrics to ensure equal accuracy across all demographic groups. Created multilingual interfaces and designed the system to augment rather than replace human expertise.",
      reflection: "This experience taught me that technology must be developed with intentional consideration of its impact on vulnerable populations. My responsibility extends beyond code functionality to ensuring equitable access and outcomes.",
    },
    {
      icon: Shield,
      title: "Data Privacy in Social Platform",
      context: "Digital Privacy Rights",
      scenario: "Built a student networking platform handling sensitive personal information",
      ethical_implications: [
        "Balancing feature utility with user privacy protection",
        "Transparent data collection and usage policies",
        "Right to data deletion and portability",
      ],
      analysis: "Implemented privacy-by-design principles, end-to-end encryption for sensitive data, and granular privacy controls. Conducted privacy impact assessments and ensured GDPR compliance.",
      reflection: "I learned that user trust is paramount and privacy is not a feature but a fundamental right. Every design decision must prioritize user agency over business convenience.",
    },
    {
      icon: Heart,
      title: "Environmental Impact of Computing",
      context: "Climate Change & Sustainability",
      scenario: "Optimized cloud infrastructure for a large-scale web application",
      ethical_implications: [
        "Carbon footprint of computational resources",
        "E-waste from hardware upgrades",
        "Energy efficiency vs. performance tradeoffs",
      ],
      analysis: "Chose green cloud providers using renewable energy, optimized algorithms to reduce computational load by 40%, implemented lazy loading and efficient caching strategies.",
      reflection: "As technologists, we have a responsibility to consider the environmental impact of our solutions. Sustainable computing is not optional—it's an ethical imperative for our generation.",
    },
  ];

  return (
    <section id="ethics" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Global Awareness & Ethical Considerations
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          How global issues and ethical dilemmas have shaped my work and decision-making
        </p>

        <div className="space-y-6">
          {considerations.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary text-2xl mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Context: {item.context}</p>
                </div>
              </div>

              <div className="space-y-5 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Case Study</h4>
                  <p>{item.scenario}</p>
                </div>

                <div>
                  <h4 className="text-foreground font-semibold mb-2">Ethical Implications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {item.ethical_implications.map((impl, i) => (
                      <li key={i}>{impl}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-foreground font-semibold mb-2">Analysis & Actions Taken</h4>
                  <p>{item.analysis}</p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-primary font-semibold mb-2">Personal Reflection</h4>
                  <p className="text-sm">{item.reflection}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ethics;
