import { Card } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const Leadership = () => {
  const experiences = [
    {
      icon: Users,
      title: "Team Lead – FinSecure (Insider Threat Detection System)",
      role: "Project Lead, Apple Inc.",
      duration: "Jan 2023 – Present",
      color: "from-blue-500 to-cyan-500",
      achievements: "Deployed enterprise-wide anomaly detection pipeline",
      impact: "Leading a cross-functional team of 8 engineers and data scientists to build scalable behavioral analytics systems for enterprise threat prevention.",
    },
    {
      icon: Target,
      title: "Product & Engineering Manager – Smart Vehicle Dashboard",
      role: "Research Collaboration (Georgia Tech)",
      duration: "Jan 2020 – Dec 2021",
      color: "from-purple-500 to-pink-500",
      achievements: "Published 2 research papers and presented at IEEE ICMLA",
      impact: "Managed an interdisciplinary team integrating IoT, web systems, and data pipelines to create real-time safety analytics for smart vehicles.",
    },
    {
      icon: Award,
      title: "Engineering Mentor – Zomato Tech Program",
      role: "Mentorship Lead",
      duration: "Mar 2018 – Dec 2019",
      color: "from-green-500 to-emerald-500",
      achievements: "Mentored 20+ interns; improved onboarding speed by 40%",
      impact: "Guided junior engineers on backend design, API optimization, and scalable microservice deployment practices.",
    },
  ];

  return (
    <section id="leadership" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Leadership</span>
            <span className="text-card-foreground"> & Collaboration</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Demonstrating strategic leadership, mentorship, and the ability to drive innovation through collaboration across global teams.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-20"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-primary shadow-glow z-10"></div>

                {/* Content Card */}
                <div className={idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}>
                  <Card className="relative overflow-hidden hover:shadow-glow-soft transition-all duration-500 border-2 hover:border-primary group">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 ${idx % 2 === 0 ? 'right-0' : 'left-0'} w-2 h-full bg-gradient-to-b ${exp.color}`}></div>

                    <div className="p-8">
                      {/* Icon & Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br ${exp.color} rounded-xl shadow-lg`}>
                          <exp.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-card-foreground mb-1">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">{exp.role} • {exp.duration}</p>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-sm font-semibold text-card-foreground mb-1">Impact</p>
                        <p className="text-sm text-muted-foreground">{exp.impact}</p>
                      </div>

                      {/* Achievement Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">{exp.achievements}</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                {idx % 2 !== 0 && <div className="hidden md:block"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Key Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">Key Leadership Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Team Empowerment", desc: "Building high-performing, cross-disciplinary teams driven by autonomy and accountability." },
              { title: "Innovation Leadership", desc: "Encouraging experimentation and continuous learning to foster a culture of creative problem-solving." },
              { title: "Strategic Vision", desc: "Aligning technical initiatives with business goals to deliver long-term organizational value." },
            ].map((comp, idx) => (
              <Card key={idx} className="p-6 bg-gradient-secondary text-foreground hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <h4 className="text-lg font-bold mb-2">{comp.title}</h4>
                <p className="text-sm text-muted-foreground">{comp.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
