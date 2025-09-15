"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationX: -15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      )

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
          },
        },
      )

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 85%" },
            },
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      title: "ProjectMate",
      description:
        "A platform where undergraduate students can connect and collaborate with students having similar skills, interests, and experience. Led team development with React frontend and Node.js backend.",
      image: "/project-collaboration-platform-interface.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://projectmate-app.vercel.app/",
      githubUrl: "https://github.com/Lixsr/ProjectMate",
    },
    {
      title: "PC-Market",
      description:
        "E-commerce platform for PC components with responsive UI, admin dashboard, order tracking, email notifications, and secure payments via PayPal and credit cards.",
      image: "/pc-components-ecommerce-website.jpg",
      technologies: ["Next.js", "TypeScript", "shadcn/ui", "Prisma", "Jest"],
      liveUrl: "https://pc-market-indol.vercel.app",
      githubUrl: "https://github.com/Lixsr/PC-Market",
    },
    {
      title: "YelpCamp",
      description:
        "Web application for discovering and reviewing camping sites across Saudi Arabia. Features user authentication, reviews, and interactive maps for campsite locations.",
      image: "/camping-sites-review-website-saudi-arabia.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      liveUrl: "https://saudi-yelpcamp.onrender.com/",
      githubUrl: "https://github.com/Lixsr/YelpCamp",
    },
    {
      title: "Computer Graphics Projects",
      description:
        "Collection of computer graphics projects built with Java and GLSL, including 3D rendering, lighting effects, and interactive visualizations demonstrating graphics programming concepts.",
      image: "/3d-computer-graphics-java-opengl.jpg",
      technologies: ["Java", "GLSL", "Computer Graphics", "OpenGL"],
      liveUrl: null,
      githubUrl: "https://github.com/Lixsr/ComputerGraphics-Projects",
    },
    {
      title: "Reads-Studio",
      description:
        "A book platform enabling users to upload books, generate AI-powered summaries, and produce AI-generated illustrative images. Features intelligent content processing and visual storytelling.",
      image: "/book-reading-platform-with-ai.jpg",
      technologies: ["Next.js", "AI/ML", "TypeScript", "OpenAI"],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "Aleem (عليم)",
      description:
        "A Flutter mobile app that allows users to read summarized books with illustrative images, providing an interactive reading experience with AI-generated content and multilingual support.",
      image: "/mobile-book-reading-app.jpg",
      technologies: ["Flutter", "Mobile", "AI", "Dart"],
      liveUrl: null,
      githubUrl: null,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 text-balance"
          >
            Featured Projects
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl 3xl:text-3xl 4xl:text-4xl text-muted-foreground max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto text-pretty leading-relaxed"
          >
            Showcasing innovative solutions in web development, AI integration, and software engineering through
            real-world applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 3xl:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm ring-1 ring-primary/10 border border-transparent shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                />
                {(project.liveUrl || project.githubUrl) ? (
                  <a
                    href={(project.liveUrl || project.githubUrl) || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
                  >
                    <span className="text-white text-sm sm:text-base font-medium tracking-wide">View Project</span>
                  </a>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                    <span className="text-white/80 text-sm sm:text-base font-medium tracking-wide">View Project</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                  <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200 ease-out">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  {project.liveUrl && (
                    <Button
                      className="bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-sm hover:shadow-md"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      className="hover:bg-accent transition-colors duration-200 border bg-transparent text-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
