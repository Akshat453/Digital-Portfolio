import { Card } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const Leadership = () => {
  const experiences = [
    {
      icon: Users,
      title: "Technical Lead - University Hackathon",
      role: "Team Leader",
      duration: "March 2024",
      description: "Led a team of 5 developers in a 48-hour hackathon to build an AI-powered study assistant",
      responsibilities: [
        "Coordinated task distribution and sprint planning",
        "Facilitated daily standups and technical discussions",
        "Resolved merge conflicts and code review processes",
      ],
      dynamics: "Successfully managed diverse skill levels through pair programming and mentorship",
      resolution: "Addressed technical disagreements through data-driven decision making and consensus building",
      achievements: "Won 1st place among 50+ teams, delivered fully functional MVP in time",
    },
    {
      icon: Target,
      title: "Project Manager - Student Portal Development",
      role: "Cross-functional Team Lead",
      duration: "January - April 2024",
      description: "Managed development of a comprehensive student information portal for 5000+ students",
      responsibilities: [
        "Coordinated between developers, designers, and stakeholders",
        "Managed project timeline, resources, and deliverables",
        "Conducted requirement gathering and user acceptance testing",
      ],
      dynamics: "Built team cohesion through regular team-building activities and open communication channels",
      resolution: "Resolved scope creep issues by implementing agile methodology and regular sprint reviews",
      achievements: "Delivered project 2 weeks ahead of schedule with 95% stakeholder satisfaction",
    },
    {
      icon: Award,
      title: "Tech Club President",
      role: "Organization Leader",
      duration: "August 2023 - Present",
      description: "Leading university's largest technical club with 200+ active members",
      responsibilities: [
        "Organized 10+ technical workshops and coding competitions",
        "Managed club budget and resources",
        "Mentored junior members in technical and soft skills",
      ],
      dynamics: "Created inclusive environment welcoming students from all technical backgrounds",
      resolution: "Handled team conflicts through active listening and finding win-win solutions",
      achievements: "Increased club participation by 150% and secured 3 corporate sponsorships",
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Collaborative & Leadership Experiences
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Demonstrating interpersonal skills and ability to work effectively in diverse teams
        </p>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <exp.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-primary text-2xl mb-1">{exp.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{exp.role}</span>
                    <span>•</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-foreground font-semibold mb-3">Roles & Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Team Dynamics</h4>
                    <p className="text-sm text-muted-foreground">{exp.dynamics}</p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Conflict Resolution</h4>
                    <p className="text-sm text-muted-foreground">{exp.resolution}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <h4 className="text-primary font-semibold mb-2">Achievements & Contributions</h4>
                <p className="text-sm text-muted-foreground">{exp.achievements}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
