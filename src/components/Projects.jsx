import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects, sectionLabels } from "@/data/portfolioData.js";

export default function Projects() {
  const ref = useRef(null);
  const label = sectionLabels.work;
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
    <section id="work" className="py-20 md:py-28 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-14 md:mb-20">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading mb-4">Selected Work</h2>
        </div>

        {/* Project List styled as cards matching Experience */}
        <div ref={ref} className="animate-on-scroll space-y-10 md:space-y-12">
          {projects.map((project, i) => {
            const isHovered = hoveredIdx === i;
            const hasHover = hoveredIdx !== null;

            return (
              <div
                key={project.slug}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group rounded-2xl p-6 sm:p-8 transition-all duration-300 border border-transparent hover:border-border hover:bg-surface/60 ${
                  hasHover && !isHovered ? "opacity-60" : "opacity-100"
                }`}
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start">
                  {/* Left Column: Number & Date */}
                  <div className="pt-1 space-y-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors block">
                      {String(i + 1).padStart(2, "0")} / PROJECT
                    </span>
                    {project.date && (
                      <span className="font-mono text-xs text-muted-foreground/60 block">
                        {project.date}
                      </span>
                    )}
                  </div>

                  {/* Right Column: Details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1.5">
                        <span>
                          {project.name} · {project.subtitle}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-primary"
                        />
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl font-normal">
                      {project.description}
                    </p>

                    {/* Technology chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-5 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={14} />
                          <span>GitHub</span>
                          <ArrowUpRight size={13} className="opacity-60" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={14} />
                          <span>Live Site</span>
                          <ArrowUpRight size={13} className="opacity-60" />
                        </a>
                      )}
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
