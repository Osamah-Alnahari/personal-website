"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Brain, Cloud, Zap } from "lucide-react"
import { gsap } from "gsap"

export default function HeroProjectsSplit() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftSideRef = useRef<HTMLDivElement>(null)
  const rightSideRef = useRef<HTMLDivElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)
  const firstRowAnimation = useRef<gsap.core.Tween | null>(null)
  const secondRowAnimation = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    gsap.set(".tech-icon", { opacity: 0, scale: 0 })
    gsap.to(".tech-icon", {
      opacity: 0.6,
      scale: 1,
      duration: 2,
      stagger: 0.3,
      ease: "back.out(1.7)",
    })

    gsap.to(".tech-icon", {
      y: "+=20",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5,
    })

    // Animate left side intro
    tl.fromTo(leftSideRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" })
      // Animate right side projects
      .fromTo(
        rightSideRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8",
      )

    // First row scrolls right to left (slower)
    if (firstRowRef.current) {
      const firstRowWidth = firstRowRef.current.scrollWidth / 2 // Half because we duplicated projects
      firstRowAnimation.current = gsap.fromTo(
        firstRowRef.current,
        { x: 0 },
        {
          x: -firstRowWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
        },
      )
    }

    // Second row scrolls left to right (slower)
    if (secondRowRef.current) {
      const secondRowWidth = secondRowRef.current.scrollWidth / 2 // Half because we duplicated projects
      secondRowAnimation.current = gsap.fromTo(
        secondRowRef.current,
        { x: -secondRowWidth },
        {
          x: 0,
          duration: 45,
          ease: "none",
          repeat: -1,
        },
      )
    }

    // Floating animation for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })
  }, [])

  const handleFirstRowMouseEnter = () => {
    if (firstRowAnimation.current) {
      gsap.to(firstRowAnimation.current, { timeScale: 0, duration: 0.5, ease: "power2.out" })
    }
  }

  const handleFirstRowMouseLeave = () => {
    if (firstRowAnimation.current) {
      gsap.to(firstRowAnimation.current, { timeScale: 1, duration: 0.5, ease: "power2.out" })
    }
  }

  const handleSecondRowMouseEnter = () => {
    if (secondRowAnimation.current) {
      gsap.to(secondRowAnimation.current, { timeScale: 0, duration: 0.5, ease: "power2.out" })
    }
  }

  const handleSecondRowMouseLeave = () => {
    if (secondRowAnimation.current) {
      gsap.to(secondRowAnimation.current, { timeScale: 1, duration: 0.5, ease: "power2.out" })
    }
  }

  const allProjects = [
    {
      title: "ProjectMate",
      description:
        "A platform where undergraduate students can connect and collaborate with students having similar skills, interests, and experience.",
      image: "/images/projectmate.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/Lixsr/ProjectMate",
      demoLink: "https://projectmate-app.vercel.app/",
    },
    {
      title: "PC-Market",
      description: "A platform where users can buy PC accessories, items, and prebuilt builds.",
      image: "/images/pc-market.png",
      technologies: ["Next.js", "TypeScript", "shadcn/ui", "Prisma"],
      githubLink: "https://github.com/Lixsr/PC-Market",
      demoLink: "https://pc-market-indol.vercel.app",
    },
    {
      title: "YelpCamp",
      description: "A web application for discovering and reviewing camping sites across Saudi Arabia.",
      image: "/images/yelpcamp.png",
      technologies: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/Lixsr/YelpCamp",
      demoLink: "https://saudi-yelpcamp.onrender.com/",
    },
    {
      title: "Computer Graphics Projects",
      description: "Various computer graphics projects built with Java and GLSL.",
      image: "/images/computer-graphics.jpg",
      technologies: ["Java", "GLSL", "Computer Graphics"],
      githubLink: "https://github.com/Lixsr/ComputerGraphics-Projects",
    },
    {
      title: "Reads-Studio",
      description:
        "A book platform enabling users to upload books, generate AI-powered summaries, and produce AI-generated illustrative images.",
      image: "/book-reading-platform-with-ai.jpg",
      technologies: ["Next.js", "AI/ML", "TypeScript"],
    },
    {
      title: "Aleem (عليم)",
      description:
        "A Flutter mobile app that allows users to read summarized books with illustrative images, providing an interactive reading experience.",
      image: "/mobile-book-reading-app.jpg",
      technologies: ["Flutter", "Mobile", "AI"],
    },
  ]

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>

      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Brain className="tech-icon absolute top-20 left-20 text-primary/30" size={32} />
        <Cloud className="tech-icon absolute top-40 right-32 text-accent/30" size={28} />
        <Zap className="tech-icon absolute bottom-40 left-32 text-secondary/30" size={24} />
        <Brain className="tech-icon absolute bottom-20 right-20 text-primary/20" size={36} />
        <Cloud className="tech-icon absolute top-60 left-1/2 text-accent/20" size={30} />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-16 3xl:gap-20 4xl:gap-24 5xl:gap-28 items-center min-h-[80vh] my-0 h-96 w-full self-stretch">
          <div ref={leftSideRef} className="space-y-6 lg:space-y-8 lg:col-span-2 text-center lg:text-left pl-[30px]">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 3xl:text-7xl 4xl:text-7xl 5xl:text-8xl font-bold text-foreground text-balance">
                Hi, I'm{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Osamah Alnahari
                </span>
              </h1>

              <p className="text-base xs:text-lg sm:text-xl md:text-xl 3xl:text-2xl 4xl:text-2xl text-muted-foreground font-medium">
                AI & Cloud Solutions Engineer
              </p>

              <p className="text-sm xs:text-base sm:text-lg md:text-lg 3xl:text-xl 4xl:text-xl text-muted-foreground max-w-lg lg:max-w-lg 3xl:max-w-2xl 4xl:max-w-3xl text-pretty leading-relaxed mx-auto lg:mx-0">
                Architecting intelligent systems that leverage cutting-edge AI models, cloud infrastructure, and
                scalable full-stack solutions
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border-primary/30 text-primary"
              >
                <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                AI/ML Research
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border-accent/30 text-accent"
              >
                <Cloud className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Cloud Architecture
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border-secondary/30 text-secondary"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Full-Stack Dev
              </Badge>
            </div>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
                <a href="https://github.com/Lixsr" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
                <a href="https://www.linkedin.com/in/osamah-alnahari/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
                <a href="mailto:osama142494@gmail.com">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </a>
              </Button>
            </div>
          </div>

          <div ref={rightSideRef} className="space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-none lg:col-span-3">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 3xl:space-y-12 4xl:space-y-16 w-auto self-stretch bg-transparent rounded-2xl sm:rounded-3xl p-4 border-0 shadow-none hover:shadow-none hover:border-transparent transition-all duration-500">
              <div
                className="overflow-hidden w-full rounded-xl sm:rounded-2xl"
                onMouseEnter={handleFirstRowMouseEnter}
                onMouseLeave={handleFirstRowMouseLeave}
              >
                <div ref={firstRowRef} className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 3xl:gap-12 4xl:gap-16 w-full">
                  {[...allProjects, ...allProjects].map((project, index) => (
                    <div
                      key={`row1-${index}`}
                      className="bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 3xl:p-10 4xl:p-12 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group flex-shrink-0 w-[320px] xs:w-[360px] sm:w-[420px] md:w-[480px] lg:w-[560px] xl:w-[620px] 2xl:w-[680px] 3xl:w-[760px] 4xl:w-[820px] 5xl:w-[880px] ring-0 hover:ring hover:ring-primary/20 hover:-translate-y-0.5"
                    >
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 3xl:gap-10 4xl:gap-12">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 3xl:w-36 3xl:h-36 4xl:w-40 4xl:h-40 aspect-square object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 3xl:space-y-6 text-center sm:text-left">
                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl 3xl:text-xl 4xl:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-sm 3xl:text-base 4xl:text-base text-muted-foreground text-pretty line-clamp-2 mt-1 sm:mt-2">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-primary text-primary-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 justify-center sm:justify-start">
                            {project.demoLink ? (
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
                              >
                                <ExternalLink size={14} className="mr-1 sm:mr-2" />
                                Live Demo
                              </a>
                            ) : (
                              <span className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium opacity-50 cursor-not-allowed bg-muted text-muted-foreground">
                                <ExternalLink size={14} className="mr-1 sm:mr-2" />
                                Live Demo
                              </span>
                            )}
                            {project.githubLink ? (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                              >
                                <Github size={14} className="mr-1 sm:mr-2" />
                                View Code
                              </a>
                            ) : (
                              <span className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium opacity-50 cursor-not-allowed bg-muted text-muted-foreground">
                                <Github size={14} className="mr-1 sm:mr-2" />
                                View Code
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="overflow-hidden w-full rounded-xl sm:rounded-2xl"
                onMouseEnter={handleSecondRowMouseEnter}
                onMouseLeave={handleSecondRowMouseLeave}
              >
                <div ref={secondRowRef} className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
                  {[...allProjects.slice().reverse(), ...allProjects.slice().reverse()].map((project, index) => (
                    <div
                      key={`row2-${index}`}
                      className="bg-gradient-to-br from-secondary/20 via-accent/15 to-primary/20 backdrop-blur-sm border border-secondary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 cursor-pointer group flex-shrink-0 w-[320px] xs:w-[360px] sm:w-[420px] md:w-[480px] lg:w-[560px] xl:w-[620px] 2xl:w-[680px] 3xl:w-[760px] 4xl:w-[820px] 5xl:w-[880px] ring-0 hover:ring hover:ring-secondary/20 hover:-translate-y-0.5"
                    >
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 aspect-square object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-center sm:text-left">
                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-sm text-muted-foreground text-pretty line-clamp-2 mt-1 sm:mt-2">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-accent text-accent-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 justify-center sm:justify-start">
                            {project.demoLink ? (
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90"
                              >
                                <ExternalLink size={14} className="mr-1 sm:mr-2" />
                                Live Demo
                              </a>
                            ) : (
                              <span className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium opacity-50 cursor-not-allowed bg-muted text-muted-foreground">
                                <ExternalLink size={14} className="mr-1 sm:mr-2" />
                                Live Demo
                              </span>
                            )}
                            {project.githubLink ? (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
                              >
                                <Github size={14} className="mr-1 sm:mr-2" />
                                View Code
                              </a>
                            ) : (
                              <span className="inline-flex items-center justify-center px-3 py-2 rounded-md text-xs sm:text-sm font-medium opacity-50 cursor-not-allowed bg-muted text-muted-foreground">
                                <Github size={14} className="mr-1 sm:mr-2" />
                                View Code
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
      >
        <ArrowDown className="text-primary animate-bounce" size={24} />
      </button>
    </section>
  )
}
