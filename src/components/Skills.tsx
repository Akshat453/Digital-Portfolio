import { Card } from "@/components/ui/card";
import { Code, Brain, Users, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Proficiencies",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Full-Stack Development", level: 90 },
        { name: "Machine Learning & AI", level: 85 },
        { name: "Cloud & DevOps", level: 80 },
      ],
    },
    {
      icon: Brain,
      title: "Analytical Skills",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Data Analysis", level: 88 },
        { name: "Problem Solving", level: 92 },
        { name: "Research & Innovation", level: 85 },
      ],
    },
    {
      icon: Users,
      title: "Leadership & Communication",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Team Leadership", level: 87 },
        { name: "Technical Communication", level: 90 },
        { name: "Project Management", level: 83 },
      ],
    },
    {
      icon: Palette,
      title: "Creative Competencies",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "UI/UX Design", level: 82 },
        { name: "Design Thinking", level: 85 },
        { name: "Creative Problem Solving", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-secondary relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(210 100% 50% / 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(210 100% 50% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Advanced</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Skill Development</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Comprehensive skill set spanning technical proficiencies, analytical capabilities, and leadership qualities
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden bg-card-dark border-border-dark hover:shadow-glow-soft transition-all duration-500 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${category.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-dark-foreground">{category.title}</h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-card-dark-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(idx * 3 + skillIdx) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code, value: "500+", label: "Problems Solved" },
            { icon: Zap, value: "10+", label: "Projects Completed" },
            { icon: Users, value: "20+", label: "Students Mentored" },
            { icon: Brain, value: "5+", label: "ML Models Built" },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 bg-card text-center hover:shadow-glow-soft transition-all duration-300 hover:-translate-y-2">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-card-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
