import HeroProjectsSplit from "@/components/hero-projects-split"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import GSAPProvider from "@/components/gsap-provider"
import Research from "@/components/research"

export default function Home() {
  return (
    <GSAPProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroProjectsSplit />
          <About />
          <Projects />
          <Research />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </GSAPProvider>
  )
}
