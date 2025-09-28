"use client";

import React from "react";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cloud, Code, Database, Cpu, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Python/PyTorch", level: 88 },
        { name: "TensorFlow/Keras", level: 82 },
        { name: "Hugging Face", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "OpenAI APIs", level: 90 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS Services", level: 85 },
        { name: "Docker/Kubernetes", level: 82 },
        { name: "Serverless/Lambda", level: 88 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Microservices", level: 78 },
      ],
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Node.js/Express", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "GraphQL/REST", level: 82 },
      ],
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL/MongoDB", level: 85 },
        { name: "Redis/Caching", level: 80 },
        { name: "Data Pipelines", level: 78 },
        { name: "Vector Databases", level: 75 },
        { name: "Analytics/Monitoring", level: 82 },
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".skill-icon", { opacity: 0, scale: 0, rotation: -180 });
      gsap.to(".skill-icon", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      // Continuous floating animation for icons
      gsap.to(".skill-icon", {
        y: "+=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3,
      });

      // Animate skill bars
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          gsap.fromTo(
            `.skill-bar-${categoryIndex}-${skillIndex}`,
            { width: "0%" },
            {
              width: `${skill.level}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: `.skill-bar-${categoryIndex}-${skillIndex}`,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      gsap.set(".skill-card", { scale: 1 });

      document.querySelectorAll(".skill-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <Cpu className="absolute top-20 left-10 text-primary" size={40} />
        <Zap className="absolute top-40 right-20 text-accent" size={35} />
        <Database
          className="absolute bottom-40 left-20 text-secondary"
          size={45}
        />
        <Brain className="absolute bottom-20 right-10 text-primary" size={38} />
      </div>

      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2 className="text-3xl xs:text-4xl md:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold gradient-text mb-6 gsap-fade-up">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg xs:text-xl 3xl:text-2xl 4xl:text-3xl text-muted-foreground max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto gsap-fade-up text-pretty leading-relaxed">
            Cutting-edge expertise in AI research, cloud architecture, and
            scalable software engineering built through academic excellence and
            industry experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 3xl:gap-12 4xl:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="skill-card professional-shadow hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/30 glass-morphism hover-lift"
            >
              <CardHeader className="pb-4 3xl:pb-6 4xl:pb-8 text-center">
                <div className="skill-icon flex justify-center mb-3">
                  <div className="w-12 h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    {React.cloneElement(category.icon, {
                      className:
                        "w-6 h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 text-primary",
                    })}
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl 3xl:text-2xl 4xl:text-3xl text-center text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 3xl:space-y-8 p-4 sm:p-6 3xl:p-8 4xl:p-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2 3xl:mb-3">
                      <span className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm 3xl:text-base 4xl:text-lg text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-3 3xl:h-4 4xl:h-5 shadow-inner">
                      <div
                        className={`skill-bar-${categoryIndex}-${skillIndex} bg-gradient-to-r from-primary via-accent to-secondary h-full rounded-full relative overflow-hidden shadow-lg`}
                        style={{ width: "0%" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
