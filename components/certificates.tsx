"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink, Eye, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
        }
      );

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
        }
      );

      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
            delay: 0,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certificates = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issued: "Sep 2025",
      expires: "Sep 2028",
      credentialId: "81652708-f5f7-413c-8963-efd1e84a7a45",
      image: "/certificates/AWS Certified Solutions Architect.png",
      category: "Cloud Architecture",
      link: "",
    },
    {
      title: "Meta Full-Stack Developer",
      issuer: "Meta",
      issued: "Aug 2025",
      credentialId: "XBW7BTE271GO",
      image: "/certificates/Meta Full-Stack Developer.jpg",
      category: "Full-Stack Development",
      link: "",
    },
    {
      title: "Financial Sustainability",
      issuer: "BSF",
      issued: "Jan 2025",
      credentialId: "",
      image: "/certificates/Financial Sustainability.png",
      category: "Business",
      link: "",
    },
    {
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      issuer: "Udemy",
      issued: "Jan 2025",
      credentialId: "UC-967bfdee-bae8-433d-aca1-e7c8ca2ab5a2",
      image:
        "/certificates/React - The Complete Guide 2025 (incl. Next.js, Redux).jpg",
      category: "Frontend Development",
      link: "",
    },
    {
      title: "The Web Developer Bootcamp 2025",
      issuer: "Udemy",
      issued: "Sep 2024",
      credentialId: "UC-617ee518-65d0-4664-a41c-cec36d32ddc6",
      image: "/certificates/The Web Developer Bootcamp 2024.jpg",
      category: "Web Development",
      link: "",
    },
    {
      title: "Research Skills",
      issuer: "King Fahd University of Petroleum & Minerals (KFUPM)",
      issued: "Jul 2024",
      expired: "Jul 2024",
      credentialId: "SSC316_233001",
      image: "/certificates/Research Skills Cert.png",
      category: "Research",
      link: "",
    },
    {
      title: "Principles of Project Management",
      issuer: "King Fahd University of Petroleum & Minerals (KFUPM)",
      issued: "Jun 2023",
      expired: "Jun 2023",
      credentialId: "SSC_223001",
      image: "/certificates/Project Management Cert.png",
      category: "Project Management",
      link: "",
    },
  ];

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
            Recognitions and credentials highlighting expertise across cloud
            platforms, AI, and full-stack development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 3xl:gap-12">
          {certificates.map((cert, i) => (
            <Card
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group glass-morphism border border-white/10 dark:border-white/5 hover:border-secondary/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2 rounded-2xl backdrop-blur-xl"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
                {cert.image && !cert.image.endsWith(".pdf") ? (
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/10 to-accent/10">
                    <Award size={48} className="text-secondary/60" />
                  </div>
                )}

                {/* Category Badge */}
                {cert.category && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-secondary/90 text-secondary-foreground border-0 text-xs font-medium">
                      {cert.category}
                    </Badge>
                  </div>
                )}

                {/* View Certificate Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedCert(cert.image)}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white"
                    size="sm"
                  >
                    <Eye size={16} className="mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="space-y-2">
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-medium">
                    {cert.issuer}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5"
                  >
                    Issued {cert.issued}
                  </Badge>
                  {cert.expires && (
                    <Badge
                      variant="outline"
                      className="border-accent/30 text-accent bg-accent/5"
                    >
                      Expires {cert.expires}
                    </Badge>
                  )}
                </div>

                {cert.credentialId && (
                  <div className="text-xs text-muted-foreground font-mono bg-muted/30 p-2 rounded border">
                    <span className="font-semibold">ID:</span>{" "}
                    {cert.credentialId}
                  </div>
                )}

                {cert.link && (
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                      asChild
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Credential
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              aria-label="Close certificate view"
            >
              <X size={20} />
            </button>

            {selectedCert.endsWith(".pdf") ? (
              <div className="p-8 text-center">
                <Award size={64} className="mx-auto mb-4 text-secondary" />
                <p className="text-lg font-medium mb-4">PDF Certificate</p>
                <Button asChild className="bg-secondary hover:bg-secondary/90">
                  <a
                    href={selectedCert}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Open PDF
                  </a>
                </Button>
              </div>
            ) : (
              <div className="relative">
                <Image
                  src={selectedCert}
                  alt="Certificate"
                  width={1200}
                  height={800}
                  className="max-w-full h-auto"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
