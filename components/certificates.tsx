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
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issued: "Sep 2025",
      expires: "Sep 2028",
      credentialId: "81652708-f5f7-413c-8963-efd1e84a7a45",
      link: "",
    },
    {
      title: "Meta Full-Stack Developer",
      issuer: "Meta",
      issued: "Aug 2025",
      credentialId: "XBW7BTE271GO",
      link: "",
    },
    {
      title: "Financial Sustainability",
      issuer: "BSF",
      issued: "Jan 2025",
      credentialId: "",
      link: "",
    },
    {
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      issuer: "Udemy",
      issued: "Jan 2025",
      credentialId: "UC-967bfdee-bae8-433d-aca1-e7c8ca2ab5a2",
      link: "",
    },
    {
      title: "The Web Developer Bootcamp 2025",
      issuer: "Udemy",
      issued: "Sep 2024",
      credentialId: "UC-617ee518-65d0-4664-a41c-cec36d32ddc6",
      link: "",
    },
    {
      title: "رائد متقدم",
      issuer: "أكاديمية الفوزان",
      issued: "Aug 2024",
      credentialId: "",
      link: "",
    },
    {
      title: "Research Skills",
      issuer: "King Fahd University of Petroleum & Minerals (KFUPM)",
      issued: "Jul 2024",
      expired: "Jul 2024",
      credentialId: "SSC316_233001",
      link: "",
    },
    {
      title: "Principles of Project Management",
      issuer: "King Fahd University of Petroleum & Minerals (KFUPM)",
      issued: "Jun 2023",
      expired: "Jun 2023",
      credentialId: "SSC_223001",
      link: "",
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
              className="group border-2 border-transparent hover:border-secondary/10 bg-card/70 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-md rounded-2xl"
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
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline" className="border-secondary/30 text-secondary">Issued {cert.issued || cert.date}</Badge>
                  {cert.credentialId && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent">ID: {cert.credentialId}</Badge>
                  )}
                </div>

                {cert.link ? (
                  <div className="pt-2">
                    <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" /> View Credential
                      </a>
                    </Button>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
