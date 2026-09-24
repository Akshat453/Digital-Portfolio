import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#toolkit" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      // Active section
      const sections = navItems.map((i) => i.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Akshat
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="w-px h-6 bg-border mx-2" />

              <a
                href="/Akshat_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Akshat_Singh_Resume.pdf"
                className="btn-primary text-xs py-2 px-4"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-surface transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden pb-6 pt-2 animate-fade-in" role="menu">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/Akshat_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Akshat_Singh_Resume.pdf"
                  className="btn-primary text-xs py-2 px-4 mt-2 justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <FileText size={14} />
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
