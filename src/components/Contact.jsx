import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { profile, sectionLabels } from "@/data/portfolioData.js";

export default function Contact() {
  const ref = useRef(null);
  const label = sectionLabels.contact;
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 relative">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Section header */}
        <div ref={ref} className="animate-on-scroll">
          <p className="section-number mb-3">
            {label.number} / {label.title}
          </p>
          <h2 className="section-heading mb-4">Let&apos;s connect.</h2>
          <p className="section-subtext mx-auto mb-10 max-w-xl">
            I&apos;m interested in software engineering opportunities involving
            backend systems, data-intensive applications and AI-powered products.
          </p>

          {/* Email button with copy */}
          <div className="mb-8">
            <button
              onClick={copyEmail}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-all duration-300"
            >
              <Mail size={18} className="text-primary" />
              <span className="text-foreground text-sm font-medium">
                {profile.email}
              </span>
              {copied ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy
                  size={15}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              )}
            </button>
            {copied && (
              <p className="text-xs text-emerald-400 mt-2 font-mono">
                Copied to clipboard
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary text-xs py-2.5 px-5">
              <Mail size={15} />
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2.5 px-5"
            >
              <Linkedin size={15} />
              LinkedIn
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2.5 px-5"
            >
              <Github size={15} />
              GitHub
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
