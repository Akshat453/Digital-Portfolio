import { Card } from "@/components/ui/card";
import { Code2, Rocket, Database, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Code2,
      title: "AI-Powered Recommendation System",
      category: "Machine Learning • Python • TensorFlow",
      overview: "Developed a collaborative filtering recommendation system for e-commerce platform",
      methodology: [
        "Implemented deep learning models using TensorFlow",
        "Applied data preprocessing and feature engineering",
        "Optimized through hyperparameter tuning",
      ],
      outcomes: "85% accuracy, 40% increase in user engagement",
      challenges: "Resolved sparse data matrices and cold-start problems",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Real-Time Collaboration Platform",
      category: "Web Development • React • WebSockets",
      overview: "Built a real-time collaborative document editing platform for teams",
      methodology: [
        "Designed scalable architecture with React and Node.js",
        "Implemented WebSocket-based real-time sync",
        "Created conflict resolution algorithms",
      ],
      outcomes: "500+ users, 99.9% uptime, sub-100ms latency",
      challenges: "Solved race conditions with operational transformation",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Smart Healthcare Data Analytics",
      category: "Data Science • Healthcare • Analytics",
      overview: "Developed predictive analytics system for patient health monitoring",
      methodology: [
        "Analyzed large-scale healthcare datasets",
        "Created interactive visualization dashboards",
        "Implemented predictive models for early detection",
      ],
      outcomes: "90% accuracy in identifying high-risk patients",
      challenges: "Ensured HIPAA compliance and data privacy",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-card-foreground">Interdisciplinary</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Projects & Research</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Major projects demonstrating integration of multiple disciplines, innovative problem-solving, and real-world impact
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className={`relative overflow-hidden border-2 hover:shadow-glow-soft transition-all duration-500 ${
                idx % 2 === 0 ? 'animate-slide-in-left' : 'animate-fade-in'
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Gradient Background Accent */}
              <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${project.gradient} opacity-5`}></div>
              
              <div className="relative p-8 md:p-10">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Column - Icon & Title */}
                  <div className="md:col-span-4">
                    <div className={`inline-flex p-5 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg mb-4`}>
                      <project.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="p-2 border-2 border-border rounded-lg hover:border-primary transition-colors">
                        <Github className="w-5 h-5 text-muted-foreground" />
                      </button>
                      <button className="p-2 border-2 border-border rounded-lg hover:border-primary transition-colors">
                        <ExternalLink className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:col-span-8 space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-card-foreground mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        Overview
                      </h4>
                      <p className="text-muted-foreground">{project.overview}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-card-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        Methodology
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.methodology.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 bg-primary/5 p-3 rounded-lg">
                            <span className="text-primary font-bold text-sm mt-0.5">→</span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                        <h4 className="text-sm font-bold text-green-900 mb-2">✓ Outcomes & Impact</h4>
                        <p className="text-sm text-green-800">{project.outcomes}</p>
                      </div>
                      
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                        <h4 className="text-sm font-bold text-orange-900 mb-2">⚡ Challenges Solved</h4>
                        <p className="text-sm text-orange-800">{project.challenges}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
