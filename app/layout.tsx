import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Osamah Alnahari - AI & Cloud Technology Expert",
  description:
    "Software Engineer specializing in AI, machine learning, and cloud technologies. Expertise in full-stack development, NLP, and scalable cloud solutions.",
  generator: "v0.app",
  keywords: ["AI", "Machine Learning", "Cloud Computing", "Software Engineer", "Full Stack Developer", "NLP", "AWS"],
  authors: [{ name: "Osamah Alnahari" }],
  openGraph: {
    title: "Osamah Alnahari - AI & Cloud Technology Expert",
    description: "Software Engineer specializing in AI, machine learning, and cloud technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
