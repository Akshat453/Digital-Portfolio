import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Heart, Code, Lightbulb } from "lucide-react";

const Resume = () => {
  const sections = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        {
          heading: "Bachelor of Technology in Computer Science",
          subheading: "Your University Name",
          details: "Expected Graduation: 2025 • CGPA: X.XX/10",
        },
        {
          heading: "High School",
          subheading: "Your School Name",
          details: "Percentage: XX% • Year: 2021",
        },
      ],
    },
    {
      icon: Briefcase,
      title: "Work Experience",
      items: [
        {
          heading: "Software Development Intern",
          subheading: "Company Name",
          details: "Summer 2024 • Developed web applications using React and Node.js",
        },
        {
          heading: "Research Assistant",
          subheading: "University Research Lab",
          details: "Jan 2024 - Present • Working on AI/ML projects",
        },
      ],
    },
    {
      icon: Code,
      title: "Technical Skills",
      items: [
        {
          heading: "Programming Languages",
          details: "Python, JavaScript, Java, C++, SQL",
        },
        {
          heading: "Frameworks & Tools",
          details: "React, Node.js, Django, TensorFlow, Git, Docker",
        },
        {
          heading: "Areas of Interest",
          details: "Machine Learning, Web Development, Cloud Computing, Data Science",
        },
      ],
    },
    {
      icon: Lightbulb,
      title: "Soft Skills",
      items: [
        {
          details: "Leadership • Communication • Problem Solving • Team Collaboration • Time Management",
        },
      ],
    },
    {
      icon: Award,
      title: "Certifications & Awards",
      items: [
        {
          heading: "AWS Certified Cloud Practitioner",
          details: "Amazon Web Services • 2024",
        },
        {
          heading: "First Prize - Hackathon 2024",
          details: "University Tech Fest",
        },
      ],
    },
    {
      icon: Heart,
      title: "Volunteer & Activities",
      items: [
        {
          heading: "Tech Club President",
          details: "Organized workshops and coding competitions",
        },
        {
          heading: "Community Volunteer",
          details: "Teaching coding to underprivileged students",
        },
      ],
    },
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Resume / CV
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <section.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-primary text-xl">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-l-2 border-primary/30 pl-4">
                    {item.heading && (
                      <h4 className="font-semibold text-foreground">{item.heading}</h4>
                    )}
                    {item.subheading && (
                      <p className="text-sm text-muted-foreground">{item.subheading}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
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

export default Resume;
