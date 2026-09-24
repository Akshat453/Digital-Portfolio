import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education, sectionLabels } from "@/data/portfolioData.js";

export default function Education() {
  const ref = useRef(null);
  const label = sectionLabels.education;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-16 md:py-24 px-6 bg-surface/20 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading">Education</h2>
        </div>

        {/* Polished horizontal row/card */}
        <div ref={ref} className="animate-on-scroll">
          <div className="card-base p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <GraduationCap size={18} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Degree
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {education.university}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium mt-1">
                {education.degree}
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-border font-mono text-xs text-muted-foreground">
              <span>{education.period}</span>
              <span className="text-primary font-medium">
                CGPA {education.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
