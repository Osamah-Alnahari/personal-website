"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface GSAPProviderProps {
  children: React.ReactNode
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Global GSAP animations
    gsap.fromTo(
      ".gsap-fade-up",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".gsap-fade-up",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".gsap-fade-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".gsap-fade-left",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".gsap-fade-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".gsap-fade-right",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".gsap-scale",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".gsap-scale",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return <>{children}</>
}
