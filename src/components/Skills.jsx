import { useEffect, useRef } from "react";
import { skillCategories, sectionLabels } from "@/data/portfolioData.js";

export default function Skills() {
  const ref = useRef(null);
  const label = sectionLabels.toolkit;

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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="toolkit" className="py-20 md:py-28 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading mb-3">Technical Toolkit</h2>
        </div>

        {/* Categories Grid - Clean 3-column layout matching resume exactly */}
        <div
          ref={ref}
          className="animate-on-scroll visible grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-xl bg-surface/50 border border-border/80 flex flex-col justify-start"
            >
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-3.5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-normal rounded-md bg-surface-elevated text-foreground/90 border border-border/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
