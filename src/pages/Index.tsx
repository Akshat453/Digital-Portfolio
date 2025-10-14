import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Ethics from "@/components/Ethics";
import Future from "@/components/Future";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Leadership />
      <Ethics />
      <Future />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
