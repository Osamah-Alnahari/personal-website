"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
            start: "top 95%",
            end: "bottom 20%",
          },
        }
      );

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
            start: "top 95%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 95%" },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "ProjectMate",
      description:
        "A platform where undergraduate students can connect and collaborate with students having similar skills, interests, and experience. Led team development with React frontend and Node.js backend.",
      image: "/ProjectMate.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://projectmate.osamahdev.com/",
      githubUrl: "https://github.com/Osamah-Alnahari/ProjectMate",
    },
    {
      title: "PC-Market",
      description:
        "E-commerce platform for PC components with responsive UI, admin dashboard, order tracking, email notifications, and secure payments via PayPal and credit cards.",
      image: "/pc-market.png",
      technologies: ["Next.js", "TypeScript", "shadcn/ui", "Prisma", "Jest"],
      liveUrl: "https://pc-market.osamahdev.com",
      githubUrl: "https://github.com/Osamah-Alnahari/PC-Market",
    },
    {
      title: "YelpCamp",
      description:
        "Web application for discovering and reviewing camping sites across Saudi Arabia. Features user authentication, reviews, and interactive maps for campsite locations.",
      image: "/YelpCamp.png",
      technologies: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      liveUrl: "https://yelpcamp.osamahdev.com/",
      githubUrl: "https://github.com/Osamah-Alnahari/YelpCamp",
    },
    {
      title: "Computer Graphics Projects",
      description:
        "Collection of computer graphics projects built with Java and GLSL, including 3D rendering, lighting effects, and interactive visualizations demonstrating graphics programming concepts.",
      image: "/ComputerGraphics.png",
      technologies: ["Java", "GLSL", "Computer Graphics", "OpenGL"],
      liveUrl: null,
      githubUrl: "https://github.com/Osamah-Alnahari/ComputerGraphics-Projects",
    },
    {
      title: "Qader",
      description:
        "Qader is an innovative educational platform designed to support students preparing for the Qudrat exam. The mission is to empower students as they take meaningful steps toward achieving their academic goals and building a brighter future. I contributed to Qader as part of a collaborative initiative with Niamah Commercial Supply Corporation, working hands-on with Next.js and Django to develop scalable, high-performance solutions for real-world challenges in education. From building robust backend APIs to crafting seamless user interfaces, every step strengthened my technical skills and sharpened my problem-solving mindset.",
      image: "/Qader.png",
      technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Django", "AI"],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "Wamdha Studio",
      description:
        "A book platform enabling users to upload books, generate AI-powered summaries, and produce AI-generated illustrative images. Features intelligent content processing and visual storytelling.",
      image: "/Wamdha.png",
      technologies: ["Next.js", "AI/ML", "TypeScript", "OpenAI"],
      liveUrl: "https://wamdha.app",
      githubUrl: "https://github.com/Osamah-Alnahari/wamdha-studio",
    },
    {
      title: "Wamdha",
      description:
        "A Flutter mobile app that allows users to read summarized books with illustrative images, providing an interactive reading experience with AI-generated content and multilingual support.",
      image: "/Wamdha.png",
      technologies: ["Flutter", "Mobile", "AI", "Dart"],
      liveUrl: null,
      githubUrl: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold gradient-text mb-6 text-balance"
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl 3xl:text-3xl 4xl:text-4xl text-muted-foreground max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto text-pretty leading-relaxed"
          >
            Showcasing innovative solutions in web development, AI integration,
            and software engineering through real-world applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 3xl:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group overflow-hidden rounded-2xl bg-card/90 backdrop-blur-lg border border-border/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] relative"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                {project.liveUrl || project.githubUrl ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30">
                        <span className="text-white text-base font-semibold">
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                        <span className="text-white/80 text-base font-medium">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-30">
                  <div className="bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <ExternalLink size={16} className="text-white" />
                      </div>
                    )}
                    {project.githubUrl && (
                      <div className="w-10 h-10 bg-[#24292f] rounded-full flex items-center justify-center border border-white/30">
                        <Github size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4 pt-6">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 pb-6">
                <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/80 text-xs font-medium rounded-full border border-border/50 hover:from-primary/10 hover:to-secondary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  {project.liveUrl && (
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 rounded-xl font-semibold"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      className={`${
                        project.liveUrl ? "flex-1" : "w-full"
                      } bg-[#24292f] hover:bg-[#24292f]/90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold`}
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
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
  );
}
