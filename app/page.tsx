import HeroProjectsSplit from "@/components/hero-projects-split";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import GSAPProvider from "@/components/gsap-provider";
import Research from "@/components/research";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <GSAPProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroProjectsSplit />
          <About />
          <Research />
          <Projects />
          <Skills />
          <Certificates />
          <Experience />
          <Contact />
        </main>
      </div>
    </GSAPProvider>
  );
}
