import { useEffect, useRef } from "react";
import { sectionLabels } from "@/data/portfolioData.js";

export default function About() {
  const ref = useRef(null);
  const label = sectionLabels.about;

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
    <section id="about" className="py-20 md:py-28 px-6 bg-surface/30 relative">
      <div className="absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div
          ref={ref}
          className="animate-on-scroll grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start"
        >
          {/* Main prose */}
          <div className="space-y-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
            <p>
              I&apos;m Akshat Singh, a Computer Engineering student at Pandit
              Deendayal Energy University interested in building software
              across backend systems, data, and full-stack applications.
            </p>
            <p>
              My experience includes working on a Retrieval-Augmented Generation
              platform at Indium Tech and contributing to CloudCV&apos;s EvalAI
              through Google Summer of Code 2025.
            </p>
            <p>
              I enjoy understanding how different parts of a system fit together
              from APIs and databases to retrieval, real-time processing, and
              the interface people eventually use.
            </p>
          </div>

          {/* Lightweight supporting area */}
          <div className="card-base p-6 md:p-8 space-y-6">
            {/* Photo + Current */}
            <div className="flex items-center gap-5 pb-6 border-b border-border">
              <img
                src="/my-photo-2.jpg"
                alt="Akshat Singh"
                className="w-16 h-16 rounded-xl object-cover border border-primary/20 shrink-0"
                loading="lazy"
                width="64"
                height="64"
              />
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                  Currently
                </p>
                <p className="text-sm font-semibold text-foreground">
                  B.Tech · Computer Engineering
                </p>
                <p className="text-xs text-muted-foreground">
                  PDEU · 2023–2027
                </p>
              </div>
            </div>

            {/* Focus areas */}
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "Backend Development",
                  "RAG / Retrieval Systems",
                  "Data Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-surface-elevated text-foreground/90 border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
