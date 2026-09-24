import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolioData.js";

const networkNodes = [
  { label: "API", x: 15, y: 25 },
  { label: "Django", x: 35, y: 18 },
  { label: "RAG", x: 55, y: 30 },
  { label: "Qdrant", x: 75, y: 20 },
  { label: "Kafka", x: 18, y: 70 },
  { label: "Spark", x: 50, y: 60 },
  { label: "PostgreSQL", x: 72, y: 55 },
  { label: "React", x: 88, y: 40 },
];

const networkEdges = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6],
  [3, 7], [6, 7], [1, 5], [2, 6],
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      {/* Network visualization — hidden on mobile */}
      <svg
        className="hero-network absolute inset-0 w-full h-full hidden lg:block"
        viewBox="0 0 100 80"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Edges */}
        {networkEdges.map(([from, to], i) => (
          <line
            key={`e-${i}`}
            x1={networkNodes[from].x}
            y1={networkNodes[from].y}
            x2={networkNodes[to].x}
            y2={networkNodes[to].y}
            stroke="hsl(185 75% 48% / 0.06)"
            strokeWidth="0.15"
          />
        ))}

        {/* Nodes */}
        {networkNodes.map((node, i) => (
          <g key={`n-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r="0.4"
              fill="hsl(185 75% 48% / 0.2)"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <text
              x={node.x}
              y={node.y - 1.5}
              textAnchor="middle"
              fill="hsl(185 75% 48% / 0.12)"
              fontSize="1.4"
              fontFamily="JetBrains Mono, monospace"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Animated packets */}
        {[0, 3, 6].map((edgeIdx) => {
          const [from, to] = networkEdges[edgeIdx];
          const n1 = networkNodes[from];
          const n2 = networkNodes[to];
          return (
            <circle key={`p-${edgeIdx}`} r="0.3" fill="hsl(185 75% 48% / 0.35)">
              <animateMotion
                dur={`${4 + edgeIdx}s`}
                repeatCount="indefinite"
                path={`M${n1.x},${n1.y} L${n2.x},${n2.y}`}
              />
            </circle>
          );
        })}
      </svg>

      {/* Gradient accent orb */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04]"
        style={{ background: "hsl(185 75% 48%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Akshat Singh</span>
          </h1>

          {/* Descriptor */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-4 max-w-2xl">
            {profile.tagline}
          </p>

          {/* Supporting text */}
          <p className="text-sm sm:text-base text-muted-foreground/70 leading-relaxed mb-10 max-w-xl">
            {profile.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#work" className="btn-primary">
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Akshat_Singh_Resume.pdf"
              className="btn-outline bg-background"
            >
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="w-px h-5 bg-border" />
            <span className="text-xs font-mono text-muted-foreground/50">
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
        style={{ animationDuration: "2s" }}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
