"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { gsap } from "gsap";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const p = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log("Downloading resume...");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "glass-morphism professional-shadow border-b border-border/20"
          : "bg-background/5 backdrop-blur-sm"
      }`}
      style={{
        backdropFilter: scrolled
          ? "blur(20px) saturate(180%)"
          : "blur(10px) saturate(120%)",
        WebkitBackdropFilter: scrolled
          ? "blur(20px) saturate(180%)"
          : "blur(10px) saturate(120%)",
      }}
    >
      <div className="relative max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20">
        <div className="flex justify-between items-center py-4 3xl:py-6 4xl:py-8">
          <div className="text-xl sm:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold gradient-text">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 3xl:space-x-12 4xl:space-x-16">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm lg:text-base 3xl:text-lg 4xl:text-xl px-4 py-2 rounded-xl transition-all duration-300 font-medium relative ${
                  active === item.href
                    ? "text-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 shadow-md"
                    : "text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:via-transparent hover:to-primary/5 hover:shadow-sm"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className="ml-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/30 text-primary hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:shadow-md transition-all duration-300 hover-lift"
            >
              <Download size={16} className="mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden glass-morphism border-t border-border/20 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-xl transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadResume}
                className="w-full mt-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/30 text-primary hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 h-1 rounded-full bg-primary/10 w-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-lg"
            style={{ width: `${progress}%`, transition: "width 0.1s ease-out" }}
          />
        </div>
      </div>
    </nav>
  );
}
