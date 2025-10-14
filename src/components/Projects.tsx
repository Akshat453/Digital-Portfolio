import { Card } from "@/components/ui/card";
import { Code2, Rocket, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Code2,
      title: "AI-Powered Recommendation System",
      category: "Machine Learning • Python • TensorFlow",
      overview: "Developed a collaborative filtering recommendation system for e-commerce platform",
      methodology: [
        "Implemented deep learning models using TensorFlow",
        "Applied data preprocessing and feature engineering techniques",
        "Optimized model performance through hyperparameter tuning",
      ],
      outcomes: "Achieved 85% accuracy in product recommendations, improving user engagement by 40%",
      challenges: "Handled sparse data matrices and cold-start problems through innovative hybrid approaches",
    },
    {
      icon: Rocket,
      title: "Real-Time Collaboration Platform",
      category: "Web Development • React • WebSockets",
      overview: "Built a real-time collaborative document editing platform for teams",
      methodology: [
        "Designed scalable architecture using React and Node.js",
        "Implemented WebSocket-based real-time synchronization",
        "Created conflict resolution algorithms for concurrent editing",
      ],
      outcomes: "Successfully deployed to 500+ users with 99.9% uptime and sub-100ms latency",
      challenges: "Resolved complex race conditions and implemented operational transformation for conflict resolution",
    },
    {
      icon: Database,
      title: "Smart Healthcare Data Analytics",
      category: "Data Science • Healthcare • Analytics",
      overview: "Developed predictive analytics system for patient health monitoring",
      methodology: [
        "Analyzed large-scale healthcare datasets using Python and SQL",
        "Created visualization dashboards with interactive charts",
        "Implemented predictive models for early disease detection",
      ],
      outcomes: "Identified high-risk patients with 90% accuracy, enabling preventive care interventions",
      challenges: "Ensured HIPAA compliance and maintained patient data privacy through encryption and anonymization",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Interdisciplinary Projects & Research
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Major projects demonstrating integration of multiple disciplines, innovative problem-solving, and real-world impact
        </p>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <project.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary text-2xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Overview</h4>
                  <p>{project.overview}</p>
                </div>

                <div>
                  <h4 className="text-foreground font-semibold mb-2">Methodology</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {project.methodology.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-foreground font-semibold mb-2">Outcomes & Impact</h4>
                  <p>{project.outcomes}</p>
                </div>

                <div>
                  <h4 className="text-foreground font-semibold mb-2">Challenges & Solutions</h4>
                  <p>{project.challenges}</p>
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
