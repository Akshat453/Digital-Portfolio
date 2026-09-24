import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            Designed & built by Akshat Singh · {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-muted-foreground/40 font-mono hidden sm:inline">
              React · Vite · Tailwind
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground/50 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
