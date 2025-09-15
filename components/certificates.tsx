"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        },
      )

      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: { trigger: subtitleRef.current, start: "top 80%" },
        },
      )

      cardsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CLF-XXXX",
      link: "#",
    },
    {
      title: "Google Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-ML-XXXX",
      link: "#",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900-XXXX",
      link: "#",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      issuer: "DeepLearning.AI",
      date: "2022",
      credentialId: "TF-DEV-XXXX",
      link: "#",
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera",
      date: "2022",
      credentialId: "FSWD-XXXX",
      link: "#",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Udacity",
      date: "2021",
      credentialId: "DSA-XXXX",
      link: "#",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mb-6 text-balance"
          >
            Certificates
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl 3xl:text-3xl 4xl:text-4xl text-muted-foreground max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto text-pretty leading-relaxed"
          >
            Recognitions and credentials highlighting expertise across cloud platforms, AI, and full-stack development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 3xl:gap-12">
          {certificates.map((cert, i) => (
            <Card
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el
              }}
              className="group border-2 border-transparent hover:border-secondary/10 bg-card/70 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-2 flex flex-row items-center gap-3">
                <div className="p-3 rounded-lg bg-secondary/15 text-secondary border border-secondary/20">
                  <Award size={22} />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-secondary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">{cert.issuer}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    {cert.date}
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">ID: {cert.credentialId}</Badge>
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> View Credential
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
