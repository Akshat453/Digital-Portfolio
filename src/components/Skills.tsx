import { Card } from "@/components/ui/card";
import { Code, Brain, Users, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Proficiencies",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "Full-Stack Development",
          description: "Expert in MERN stack, building scalable web applications",
          artifacts: "Portfolio includes 10+ production-ready applications",
        },
        {
          name: "Machine Learning & AI",
          description: "Proficient in TensorFlow, PyTorch, scikit-learn",
          artifacts: "Implemented 5+ ML models with 85%+ accuracy rates",
        },
        {
          name: "Cloud & DevOps",
          description: "AWS, Docker, Kubernetes, CI/CD pipelines",
          artifacts: "Managed deployments serving 10K+ users",
        },
      ],
    },
    {
      icon: Brain,
      title: "Analytical Skills",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Data Analysis",
          description: "Advanced skills in Python, R, SQL for data manipulation",
          artifacts: "Analyzed datasets with 1M+ records, created 20+ dashboards",
        },
        {
          name: "Problem Solving",
          description: "Systematic approach to complex technical challenges",
          artifacts: "Solved 500+ algorithmic problems on competitive platforms",
        },
      ],
    },
    {
      icon: Users,
      title: "Leadership & Communication",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Team Leadership",
          description: "Led cross-functional teams in multiple projects",
          artifacts: "Managed teams of 5-10 members, delivered 95% projects on time",
        },
        {
          name: "Technical Communication",
          description: "Ability to explain complex concepts to diverse audiences",
          artifacts: "Conducted 15+ technical workshops, mentored 20+ students",
        },
      ],
    },
    {
      icon: Palette,
      title: "Creative Competencies",
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "UI/UX Design",
          description: "User-centered design thinking and prototyping",
          artifacts: "Designed 8+ user interfaces with 90%+ satisfaction scores",
        },
        {
          name: "Design Thinking",
          description: "Innovative problem-solving through creative methodologies",
          artifacts: "Applied design sprints to 3+ major projects",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Advanced Skill Development & Mastery
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Comprehensive skill set spanning technical proficiencies, analytical capabilities, leadership qualities, and creative competencies
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-primary text-xl">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{skill.description}</p>
                    <p className="text-xs text-primary">{skill.artifacts}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
