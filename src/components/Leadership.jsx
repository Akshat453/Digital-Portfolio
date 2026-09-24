import { useEffect, useRef } from "react";
import { Users } from "lucide-react";
import { leadership, sectionLabels } from "@/data/portfolioData.js";

export default function Leadership() {
  const ref = useRef(null);
  const label = sectionLabels.leadership;

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
    <section id="leadership" className="py-16 md:py-24 px-6 bg-surface/20 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading">Leadership</h2>
        </div>

        {/* Compact row */}
        <div ref={ref} className="animate-on-scroll">
          <div className="card-base p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Users size={18} />
              <span className="font-mono text-xs uppercase tracking-wider">
                {leadership.organization}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {leadership.role}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-normal leading-relaxed max-w-2xl">
              {leadership.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
