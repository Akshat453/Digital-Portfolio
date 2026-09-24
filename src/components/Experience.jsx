import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { experiences, sectionLabels } from "@/data/portfolioData.js";

export default function Experience() {
  const ref = useRef(null);
  const label = sectionLabels.experience;
  const [hoveredIdx, setHoveredIdx] = useState(null);

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
    <section id="experience" className="py-20 md:py-28 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-14 md:mb-20">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading mb-4">Experience</h2>
          <p className="section-subtext">
            Professional and open-source engineering focused on retrieval platforms,
            backend systems, and automated testing.
          </p>
        </div>

        {/* Experience List */}
        <div ref={ref} className="animate-on-scroll space-y-10 md:space-y-12">
          {experiences.map((exp, i) => {
            const isHovered = hoveredIdx === i;
            const hasHover = hoveredIdx !== null;

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group rounded-2xl p-6 sm:p-8 transition-all duration-300 border border-transparent hover:border-border hover:bg-surface/60 ${
                  hasHover && !isHovered ? "opacity-60" : "opacity-100"
                }`}
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start">
                  {/* Date column */}
                  <div className="pt-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                      {exp.date}
                    </span>
                  </div>

                  {/* Details column */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1.5">
                        <span>{exp.primaryTitle}</span>
                        <ArrowUpRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-primary"
                        />
                      </h3>
                      {exp.secondaryRole && (
                        <p className="text-sm font-medium text-muted-foreground/80 mt-1">
                          {exp.secondaryRole}
                        </p>
                      )}
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl font-normal">
                      {exp.description}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
