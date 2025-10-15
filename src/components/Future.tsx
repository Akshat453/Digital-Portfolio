import { Card } from "@/components/ui/card";
import { Rocket, BookOpen, Target, TrendingUp, Sparkles } from "lucide-react";

const Future = () => {
  return (
    <section id="future" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-card-foreground">Future</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Aspirations</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            My long-term vision as an engineer, innovator, and speaker — shaping technology that is intelligent, secure, and ethical.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Goals Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Short-term Goals */}
          <Card className="relative overflow-hidden bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Short-term Goals</h3>
              </div>
              <p className="text-sm text-white/80 mb-6">Next 1–2 Years</p>
              <ul className="space-y-4">
                {[
                  "Enhance FinSecure’s AI-powered detection pipeline for global scalability at Apple.",
                  "Contribute to open-source projects in AI safety and real-time analytics.",
                  "Deliver technical talks and workshops on Responsible AI and Cloud Security.",
                  "Earn AWS Solutions Architect and Kubernetes certifications.",
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Long-term Vision */}
          <Card className="relative overflow-hidden bg-card-dark text-card-dark-foreground border-2 border-border-dark hover:shadow-glow-soft transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Long-term Vision</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Next 5–10 Years</p>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Emerge as a technical leader driving innovation in secure and ethical AI systems.",
                  "Launch a startup focused on intelligent safety solutions for smart cities.",
                  "Represent India as a global tech speaker promoting sustainable innovation.",
                  "Mentor the next generation of engineers and researchers in applied AI.",
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Learning & Growth */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Further Study */}
          <Card className="p-8 border-2 hover:border-primary hover:shadow-glow-soft transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Areas for Further Study</h3>
            </div>
            <div className="space-y-3">
              {[
                "Advanced Reinforcement Learning & Edge AI",
                "Privacy-Preserving Machine Learning (Differential Privacy)",
                "Quantum-safe Cryptography and Secure System Design",
                "Ethical AI Governance and Policy Frameworks",
              ].map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Improvement Strategies */}
          <Card className="p-8 border-2 hover:border-primary hover:shadow-glow-soft transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Continuous Improvement</h3>
            </div>
            <div className="space-y-3">
              {[
                "Host and speak at global conferences on AI ethics and cybersecurity.",
                "Read one technical paper or book chapter every day.",
                "Collaborate on side projects combining AI with IoT and human-centered design.",
                "Actively mentor students through open forums and hackathons.",
                "Write and publish thought pieces on ethical innovation.",
              ].map((strategy, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-lg">
                  <span className="text-green-600 font-bold">→</span>
                  <span className="text-sm text-card-foreground">{strategy}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Commitment Banner */}
        <Card className="relative overflow-hidden border-0">
          <div className="absolute inset-0 bg-gradient-accent"></div>
          <div className="relative p-12 text-center text-white">
            <Sparkles className="w-12 h-12 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold mb-4">My Commitment</h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              I am dedicated to advancing technology that safeguards people, empowers organizations,
              and inspires trust. My mission is to lead with integrity — building AI systems that are
              transparent, sustainable, and human-centered, while nurturing innovation through mentorship
              and continuous learning.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Future;
