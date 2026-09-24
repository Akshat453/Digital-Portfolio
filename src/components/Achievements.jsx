import { useEffect, useRef } from "react";
import { Award } from "lucide-react";
import { achievements, sectionLabels } from "@/data/portfolioData.js";

export default function Achievements() {
  const ref = useRef(null);
  const label = sectionLabels.achievements;

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
    <section id="achievements" className="py-16 md:py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading">Achievements</h2>
        </div>

        {/* Compact row */}
        <div ref={ref} className="animate-on-scroll space-y-4">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="card-base p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-primary">
                  <Award size={18} />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {item.organization}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="font-mono text-xs text-primary/80 pt-2 md:pt-0">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
