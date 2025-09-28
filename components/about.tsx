"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cloud, Cpu, Database, Zap, Bot } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "Developing intelligent systems with LLMs, NLP, and deep learning frameworks like TensorFlow and PyTorch",
    },
    {
      icon: <Cloud className="w-8 h-8 text-accent" />,
      title: "Cloud Architecture",
      description:
        "Designing scalable infrastructure with AWS, Docker, Kubernetes, and serverless technologies",
    },
    {
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      title: "Full-Stack Engineering",
      description:
        "Building end-to-end solutions with React, Next.js, Node.js, and modern development practices",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background elements
      gsap.set(".floating-icon", { opacity: 0, scale: 0 });
      gsap.to(".floating-icon", {
        opacity: 0.1,
        scale: 1,
        duration: 2,
        stagger: 0.3,
        ease: "back.out(1.7)",
      });

      gsap.to(".floating-icon", {
        y: "+=30",
        rotation: "+=15",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      });

      // Scroll-triggered animations
      gsap.fromTo(
        ".gsap-fade-up",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".gsap-fade-left",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".highlight-card",
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Bot
          className="floating-icon absolute top-20 left-10 text-primary"
          size={24}
        />
        <Database
          className="floating-icon absolute top-40 right-20 text-accent"
          size={28}
        />
        <Cpu
          className="floating-icon absolute bottom-40 left-20 text-secondary"
          size={32}
        />
        <Cloud
          className="floating-icon absolute bottom-20 right-10 text-primary"
          size={26}
        />
        <Brain
          className="floating-icon absolute top-60 left-1/3 text-accent"
          size={30}
        />
        <Zap
          className="floating-icon absolute bottom-60 right-1/3 text-secondary"
          size={22}
        />
      </div>

      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2 className="text-3xl xs:text-4xl md:text-4xl 3xl:text-5xl 4xl:text-5xl 5xl:text-6xl font-bold gradient-text mb-6 gsap-fade-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-base xs:text-lg 3xl:text-xl 4xl:text-xl text-muted-foreground max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto gsap-fade-up text-pretty leading-relaxed">
            AI Research Engineer and Software Developer specializing in
            intelligent systems, cloud architecture, and scalable applications
            that bridge cutting-edge research with real-world solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 3xl:gap-16 4xl:gap-20 5xl:gap-24 items-center">
          <div className="gsap-fade-left">
            <h3 className="text-xl sm:text-2xl 3xl:text-2xl 4xl:text-3xl font-bold text-foreground mb-4 md:mb-6 3xl:mb-8">
              My Journey
            </h3>
            <p className="text-sm sm:text-base 3xl:text-base 4xl:text-lg text-muted-foreground mb-4 md:mb-6 3xl:mb-8 leading-relaxed">
              Im an AI & Cloud Solutions Engineer from KFUPM, building Arabic
              NLP and LLM3driven products at JRCAI. I design cloud3native
              systems that turn research into reliable, scalable software.
            </p>
            <p className="text-sm sm:text-base 3xl:text-base 4xl:text-lg text-muted-foreground leading-relaxed">
              From data and training to deployment and observability, I deliver
              end3to3end ML pipelines and full3stack apps on AWS and Kubernetes
              with Next.js and TypeScriptfocused on performance, resilience, and
              a great developer experience.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid gap-4 md:gap-6 3xl:gap-8 4xl:gap-10"
          >
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="highlight-card professional-shadow hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/30 glass-morphism hover-lift"
              >
                <CardContent className="p-4 sm:p-6 3xl:p-8 4xl:p-10">
                  <div className="flex items-start space-x-3 sm:space-x-4 3xl:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14 flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl professional-shadow">
                        {React.cloneElement(highlight.icon, {
                          className: "w-full h-full",
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg 3xl:text-lg 4xl:text-xl font-semibold text-foreground mb-2 3xl:mb-3">
                        {highlight.title}
                      </h4>
                      <p className="text-sm sm:text-base 3xl:text-base 4xl:text-base text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
