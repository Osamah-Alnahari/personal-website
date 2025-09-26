"use client"

import React from "react"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Brain, Code, GraduationCap, Zap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      title: "AI Research Engineer",
      company: "JRCAI (SDAIA-KFUPM)",
      location: "Dhahran, Saudi Arabia",
      period: "Nov 2024 - Present",
      description:
        "Leading research on Arabic NLP and Large Language Models at Saudi Arabia's premier AI research center. Achieved 24% improvement in DeepSeek translation accuracy and developed novel Egy-MSA parallel dataset with 300+ manually translated documents. Working with transformer architectures and multilingual AI systems.",
      technologies: ["Python", "PyTorch", "Transformers", "LLMs", "NLP", "Arabic AI", "Research"],
      icon: <Brain className="w-5 h-5" />,
      type: "research",
    },
    {
      title: "Full-Stack Developer",
      company: "Niamah",
      location: "Saudi Arabia",
      period: "Jun 2025 - Aug 2025",
      description:
        "Architected and developed Qader platform for Qudrat exam preparation using modern cloud-native technologies. Built scalable front-end with Next.js and Tailwind CSS, implemented comprehensive testing suites, and deployed on cloud infrastructure with CI/CD pipelines.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloud Deployment", "Testing", "CI/CD"],
      icon: <Code className="w-5 h-5" />,
      type: "development",
    },
    {
      title: "Software Engineering Student",
      company: "King Fahd University of Petroleum and Minerals",
      location: "Dhahran, Saudi Arabia",
      period: "Aug 2021 - Dec 2025",
      description:
        "Pursuing Bachelor's in Software Engineering with specialization in AI and cloud computing. Completed advanced coursework in Machine Learning, Deep Learning, Cloud Architecture, and Software Engineering. Active contributor to research projects and open-source initiatives.",
      technologies: ["Java", "Python", "Machine Learning", "Cloud Computing", "Software Architecture", "Research"],
      icon: <GraduationCap className="w-5 h-5" />,
      type: "education",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.set(".floating-bg-icon", { opacity: 0, scale: 0 })
      gsap.to(".floating-bg-icon", {
        opacity: 0.1,
        scale: 1,
        duration: 2,
        stagger: 0.3,
        ease: "back.out(1.7)",
      })

      gsap.to(".floating-bg-icon", {
        y: "+=20",
        rotation: "+=10",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      })

      // Timeline animations
      gsap.fromTo(
        ".timeline-card",
        { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50), scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Timeline dots animation
      gsap.fromTo(
        ".timeline-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Continuous pulse animation for timeline dots
      gsap.to(".timeline-dot", {
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "research":
        return "text-primary border-primary/30"
      case "development":
        return "text-accent border-accent/30"
      case "education":
        return "text-secondary border-secondary/30"
      default:
        return "text-primary border-primary/30"
    }
  }

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-muted/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Brain className="floating-bg-icon absolute top-20 left-10 text-primary" size={32} />
        <Code className="floating-bg-icon absolute top-40 right-20 text-accent" size={28} />
        <Zap className="floating-bg-icon absolute bottom-40 left-20 text-secondary" size={30} />
        <GraduationCap className="floating-bg-icon absolute bottom-20 right-10 text-primary" size={26} />
        <Brain className="floating-bg-icon absolute top-60 right-1/3 text-accent" size={24} />
      </div>

      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2 className="text-3xl xs:text-4xl md:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold text-foreground mb-6 gsap-fade-up">
            Experience
          </h2>
          <p className="text-lg xs:text-xl 3xl:text-2xl 4xl:text-3xl text-muted-foreground max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto gsap-fade-up text-pretty">
            My journey through AI research, cloud development, and software engineering that shaped my expertise in
            intelligent systems
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 3xl:w-1 4xl:w-1.5 h-full bg-gradient-to-b from-primary via-accent to-secondary opacity-60"></div>

          <div className="space-y-8 md:space-y-12 3xl:space-y-16 4xl:space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="timeline-dot absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14 bg-card border-2 sm:border-4 3xl:border-6 border-primary rounded-full z-10 flex items-center justify-center shadow-lg shadow-primary/20">
                  {React.cloneElement(exp.icon, {
                    className: "w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 text-primary",
                  })}
                </div>

                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-6 lg:pr-8 3xl:pr-12 4xl:pr-16" : "md:pl-6 lg:pl-8 3xl:pl-12 4xl:pl-16"} ml-12 sm:ml-16 md:ml-0`}
                >
                  <Card className="timeline-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6 3xl:p-8 4xl:p-10">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className={`px-3 py-1 text-xs ${getTypeColor(exp.type)}`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </Badge>
                      </div>

                      <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-2 text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-muted-foreground mb-2 3xl:mb-4">
                        <div className="flex items-center space-x-2 mb-1 xs:mb-0">
                          <Calendar size={14} className="sm:w-4 sm:h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} className="sm:w-4 sm:h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl 3xl:text-2xl 4xl:text-3xl font-bold text-foreground mb-1 3xl:mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-base sm:text-lg 3xl:text-xl 4xl:text-2xl text-primary mb-3 sm:mb-4 3xl:mb-6">
                        {exp.company}
                      </h4>

                      <p className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl text-muted-foreground mb-3 sm:mb-4 3xl:mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 3xl:gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg px-2 sm:px-3 3xl:px-4 py-1 3xl:py-2 bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
