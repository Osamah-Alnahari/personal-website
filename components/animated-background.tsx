"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating AI/cloud icons
    const icons = ["🤖", "☁️", "⚡", "🔮", "💎", "🌐", "🚀", "⭐", "💫", "🔥"]

    // Generate random floating elements
    for (let i = 0; i < 15; i++) {
      const element = document.createElement("div")
      element.textContent = icons[Math.floor(Math.random() * icons.length)]
      element.className = "absolute text-2xl opacity-20 pointer-events-none select-none"
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      containerRef.current.appendChild(element)

      // Animate floating movement
      gsap.to(element, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: 360,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
      })

      // Fade in/out animation
      gsap.to(element, {
        opacity: 0.1 + Math.random() * 0.3,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }

    // Create geometric shapes
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement("div")
      shape.className = "absolute border border-primary/10 rounded-full pointer-events-none"
      const size = 20 + Math.random() * 60
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.left = `${Math.random() * 100}%`
      shape.style.top = `${Math.random() * 100}%`
      containerRef.current.appendChild(shape)

      gsap.to(shape, {
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 300 - 150}`,
        rotation: 360,
        scale: 0.5 + Math.random() * 1.5,
        duration: 15 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
      })
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.1) 0%, transparent 50%)
        `,
      }}
    />
  )
}
