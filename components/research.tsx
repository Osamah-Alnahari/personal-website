"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const researchProjects = [
  {
    title: "Arabic Dialect Text Sentiment Transfer using Large Language Models",
    organization: "Research Assistant, JRCAI",
    period: "In Progress",
    description: [
      "In progress: developing sentiment transfer models for Arabic dialect text.",
    ],
  },
  {
    title: "Document-Level Translation from Egyptian Dialect to MSA Using LLMs",
    organization: "Research Assistant, JRCAI",
    period: "Nov 2024 — Feb 2025",
    description: [
      "Improved DeepSeek translation accuracy by 24% (BLEU score) and analyzed multiple LLMs to identify strengths and weaknesses in dialectal Arabic translation.",
      "Developed a novel Egy-MSA parallel dataset with 300 manually translated documents and an 837-word Egyptian–MSA dictionary and applied linguistic rules to ensure consistency and high-quality.",
    ],
  },
  {
    title: "Continuous Saudi Sign Language Dataset Development",
    organization: "Research Assistant, JRCAI",
    period: "Jul 2024 — Aug 2024",
    description: [
      "Collected, annotated, and verified videos of Saudi Sign Language gestures, ensuring accurate labeling and consistency for machine learning use.",
    ],
  },
  {
    title: "Showcase/MVP of Personal Protective Equipment (PPE)",
    organization: "Research Assistant, JRCAI",
    period: "2023 — 2023",
    description: [
      "Curated and preprocessed images of PPE usage, maintaining quality and standardization for model training.",
    ],
  },
];

export default function Research() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const projects = projectsRef.current;

    if (!section || !title || !projects) return;

    // Title animation
    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Projects stagger animation
    const projectCards = projects.querySelectorAll(".research-project");
    gsap.fromTo(
      projectCards,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: projects,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Research Projects
        </h2>

        <div ref={projectsRef} className="space-y-8">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="research-project group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-card/70 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                      {project.organization}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">
                      {project.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {project.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
