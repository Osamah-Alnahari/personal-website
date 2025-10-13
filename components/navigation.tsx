"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { gsap } from "gsap";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
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
    // Create an invisible anchor to download the CV from the public folder
    const href = "/Osamah_Alnahari_CV.pdf";
    const fileName = "Osamah_Alnahari_CV";
    const a = document.createElement("a");
    a.href = href;
    a.setAttribute("download", fileName);
    // For cross-browser safety, append to body
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "glass-morphism professional-shadow border-b border-border/30 bg-background/20"
          : "bg-background/15 backdrop-blur-md border-b border-border/10"
      }`}
      style={{
        backdropFilter: scrolled
          ? "blur(25px) saturate(200%)"
          : "blur(15px) saturate(140%)",
        WebkitBackdropFilter: scrolled
          ? "blur(25px) saturate(200%)"
          : "blur(15px) saturate(140%)",
      }}
    >
      <div className="relative w-[70%] mx-auto px-6 sm:px-8 lg:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        <div className="flex justify-between items-center py-3 3xl:py-4 4xl:py-5">
          {/* Left: Portfolio */}
          <div className="text-xl sm:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold gradient-text">
            Portfolio
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 3xl:space-x-10 4xl:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm lg:text-base 3xl:text-lg 4xl:text-xl px-5 py-2.5 rounded-xl transition-all duration-300 font-medium relative ${
                  active === item.href
                    ? "text-primary bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 shadow-lg border border-primary/20"
                    : "text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/8 hover:via-primary/4 hover:to-primary/8 hover:shadow-md hover:border hover:border-primary/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right: CV Download Button */}
          <Button
            variant="outline"
            size="default"
            onClick={handleDownloadResume}
            className="hidden md:flex items-center justify-center whitespace-nowrap px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-primary/8 to-secondary/8 border-primary/40 text-primary hover:from-primary/15 hover:to-secondary/15 hover:border-primary/60 hover:shadow-lg transition-all duration-300 hover-lift"
          >
            <Download size={16} className="mr-2" />
            Download CV
          </Button>

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
                Download CV
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
