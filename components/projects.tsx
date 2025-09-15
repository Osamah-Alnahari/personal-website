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
          // Initial entrance animation
          gsap.fromTo(
            card,
            {
              y: 80,
              opacity: 0,
              scale: 0.9,
              rotationY: -15,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            },
          )

          const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            gsap.to(card, {
              x: x * 0.05,
              y: y * 0.05,
              rotationX: y * 0.02,
              rotationY: x * 0.02,
              duration: 0.25,
              ease: "power2.out",
            })
          }

          const handleMouseLeave = () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              duration: 0.5,
              ease: "power2.out",
            })
          }

          card.addEventListener("mousemove", handleMouseMove)
          card.addEventListener("mouseleave", handleMouseLeave)

          return () => {
            card.removeEventListener("mousemove", handleMouseMove)
            card.removeEventListener("mouseleave", handleMouseLeave)
          }
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

        <div className="grid md:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12 3xl:gap-16 4xl:gap-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="overflow-hidden rounded-2xl ring-1 ring-primary/10 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 bg-card/70 backdrop-blur-sm py-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover transition-all duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
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
