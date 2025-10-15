import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Heart, Code, Lightbulb } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-4 bg-gradient-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-accent rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Resume</span>
            <span className="text-foreground"> / CV</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 border-l-4 border-primary">
              <h4 className="text-xl font-bold text-card-foreground mb-2">Master of Science in Computer Science</h4>
              <p className="text-muted-foreground mb-2"> Georgia Institute of Technology, Atlanta, USA</p>
              <p className="text-sm text-primary font-semibold">Jan 2020 – Dec 2021 • Graduated: 2021 • GPA: 3.9/4.0</p>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 border-l-4 border-accent">
              <h4 className="text-xl font-bold text-card-foreground mb-2">Bachelor of Technology in Computer Science</h4>
              <p className="text-muted-foreground mb-2">Pandit Deendayal Energy University</p>
              <p className="text-sm text-primary font-semibold">Jul 2012 – May 2016 • Graduated: 2016 • CGPA: 9.1/10</p>
            </Card>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-glow">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Work Experience</h3>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <h4 className="text-xl font-bold text-card-foreground mb-2">Software Engineer — Apple Inc.</h4>
                <p className="text-muted-foreground mb-2">Cupertino, CA • Jan 2022 – Present</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-card-foreground">
                  <li>Leading development of scalable backend services for Apple Pay and Wallet.</li>
                  <li>Architected internal APIs improving transaction speed and reliability by 40%.</li>
                  <li>Collaborated with cross-functional teams to design secure, privacy-focused user systems.</li>
                  <li>Delivered keynote sessions on system optimization and innovation culture within Apple.</li>
                </ul>
              </div>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <h4 className="text-xl font-bold text-card-foreground mb-2">Backend Developer — Zomato</h4>
                <p className="text-muted-foreground mb-2">Gurgaon, India • Mar 2017 – Dec 2019
</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-card-foreground">
                  <li>Built and optimized microservices powering real-time order tracking and restaurant analytics.</li>
                  <li>Improved backend efficiency by reducing API latency by 25% and increasing data throughput.</li>
                  <li>Partnered with product teams to deploy new restaurant analytics features.</li>
                  <li>Mentored new engineers on clean architecture and backend best practices.</li>
                </ul>
              </div>
            </Card>

            {/* 🆕 New Card 3 */}
            <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-indigo-500 to-sky-500 opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <h4 className="text-xl font-bold text-card-foreground mb-2">Software Developer — Scaler</h4>
                <p className="text-muted-foreground mb-2">Bangalore, India • Jan 2016 – Feb 2017</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-card-foreground">
                  <li>Developed full-stack web applications using React, Node.js, and MongoDB.</li>
                  <li>Built internal dashboards for instructor performance and learner analytics.</li>
                  <li>Automated assessment grading system, improving operational efficiency by 30%.</li>
                  <li>Collaborated with content and product teams to integrate interactive learning modules.</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Technical Skills */}
          <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-card-foreground">Technical Skills</h4>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-card-foreground">Languages:</span> Python, JavaScript (TypeScript), Java, C++</p>
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-card-foreground">Frameworks:</span> React, Node.js, FastAPI, Django</p>
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-card-foreground">Cloud & Tools:</span> AWS, Docker, Kubernetes, Git, CI/CD (GitHub Actions)</p>
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-card-foreground">Soft Skills</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Leadership', 'Public Speaking', 'Cross-Functional Collaboration', 'Strategic Thinking', 'Mentorship', 'Innovation'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 bg-card hover:shadow-glow-soft transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-card-foreground">Certifications</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>AWS Certified Cloud Practitioner</strong> — Amazon Web Services (2023)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Certified Kubernetes Administrator (CKA)</strong> — Linux Foundation (2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>First Prize — Global Hackathon 2024</strong> (AI-Driven Smart Systems)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Speaker — Web Summit 2023, Lisbon</strong> (Topic: Ethical AI in Modern Systems)</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Activities */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8" />
              <h4 className="text-xl font-bold">Volunteer Experience</h4>
            </div>
            <ul className="space-y-3 text-white/90">
              <li>• Mentoring early-career developers and students through open-source and career workshops.</li>
              <li>• Conducting global tech talks and community sessions on scalable systems and AI ethics.</li>
              <li>• Volunteered with non-profits to introduce coding education in underrepresented communities.</li>
              <li>• Organized Apple Community Tech Drives promoting innovation and STEM learning.</li>
            </ul>
          </Card>

          <Card className="p-6 bg-card-dark text-card-dark-foreground border-border-dark hover:shadow-glow-soft transition-all duration-300">
            <h4 className="text-xl font-bold mb-4">Co-Curricular Activities</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Tech Speaker at Global Conferences – Delivered sessions on AI Ethics, System Optimization, and Cloud Infrastructure.</li>
              <li>• Guest Lecturer at Universities – Conducted talks on innovation culture and scalable system design.</li>
              <li>• Tech Club Mentor – Guiding young engineers in leadership and technology strategy.</li>
              <li>• Competitive Programmer – Solved 500+ problems and mentored peers in algorithmic thinking.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
