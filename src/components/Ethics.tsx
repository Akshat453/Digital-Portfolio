import { Card } from "@/components/ui/card";
import { Globe, Shield, Heart } from "lucide-react";

const Ethics = () => {
  const considerations = [
    {
      icon: Globe,
      title: "Responsible AI in Financial Systems",
      context: "Ethical AI & Bias Prevention",
      color: "from-blue-500 to-cyan-500",
      reflection:
        "While leading FinSecure’s anomaly detection pipeline at Apple, I realized that AI decisions directly impact user trust and livelihoods. Ensuring transparency, bias mitigation, and explainability in models became central to my design process.",
      tags: ["Explainable AI", "Bias Mitigation", "Transparency"],
    },
    {
      icon: Shield,
      title: "Data Privacy in User-Centric Design",
      context: "Global Data Protection & Privacy",
      color: "from-purple-500 to-pink-500",
      reflection:
        "At Zomato and Apple, I prioritized privacy-by-design — embedding encryption, minimal data retention, and user consent frameworks within all data flows. Protecting user data isn’t a compliance task — it’s a moral commitment to digital autonomy.",
      tags: ["Privacy-by-Design", "GDPR Compliance", "User Consent"],
    },
    {
      icon: Heart,
      title: "Sustainability in Cloud & Edge Computing",
      context: "Green Technology & Environmental Ethics",
      color: "from-green-500 to-emerald-500",
      reflection:
        "During my work with global-scale infrastructure, I focused on reducing the carbon footprint of cloud systems. By optimizing workloads and using efficient compute scheduling, I learned that environmental responsibility must be engineered into every architecture.",
      tags: ["Green Cloud", "Energy Efficiency", "Sustainable Engineering"],
    },
  ];

  return (
    <section id="ethics" className="py-24 px-4 bg-gradient-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(210 100% 50%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Global Awareness</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              & Ethical Considerations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            How responsible innovation, privacy, and sustainability have shaped my engineering philosophy
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Ethics Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {considerations.map((item, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden bg-card hover:shadow-glow-soft transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              {/* Icon Circle */}
              <div className="p-8">
                <div
                  className={`w-20 h-20 mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title & Context */}
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 italic">
                  Context: {item.context}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reflection Quote */}
                <div className="relative p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border-l-4 border-primary">
                  <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">
                    "
                  </div>
                  <p className="relative text-sm text-card-foreground leading-relaxed italic">
                    {item.reflection}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16">
          <Card className="p-10 bg-card text-center border-2 border-border hover:border-primary transition-colors">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Ethical Commitment
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am committed to creating technology that upholds fairness, privacy, and sustainability.
              Whether developing AI models or leading engineering teams, I aim to design solutions that empower users,
              respect global values, and leave a positive impact on both society and the environment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ethics;
