import Navigation from "@/components/Navigation.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Experience from "@/components/Experience.jsx";
import Projects from "@/components/Projects.jsx";
import Skills from "@/components/Skills.jsx";
import Education from "@/components/Education.jsx";
import Achievements from "@/components/Achievements.jsx";
import Leadership from "@/components/Leadership.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
