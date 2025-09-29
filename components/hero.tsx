"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

    // Floating animation for the scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Hi, I'm <span className="text-primary">Osamah Alnahari</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
        >
          Software Engineer specializing in cloud-native and AI-powered web
          development
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary transition-colors"
            asChild
          >
            <a
              href="https://github.com/Osamah-Alnahari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary transition-colors"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/osamah-alnahari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary transition-colors"
            asChild
          >
            <a href="mailto:osama142494@gmail.com">
              <Mail size={24} />
            </a>
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
      >
        <ArrowDown className="text-primary animate-bounce" size={32} />
      </button>
    </section>
  );
}
