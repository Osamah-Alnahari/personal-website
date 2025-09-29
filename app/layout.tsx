import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osamah Alnahari | AI & Cloud Solutions Engineer",
  description:
    "Professional AI Research Engineer and Cloud Solutions Architect specializing in intelligent systems, scalable cloud infrastructure, and full-stack development. Expert in Python, AWS, Next.js, and modern AI/ML technologies.",
  generator: "Next.js",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Cloud Architecture",
    "AWS Solutions",
    "Full Stack Developer",
    "Python Developer",
    "Next.js Expert",
    "NLP Engineer",
    "Software Architect",
    "DevOps Engineer",
  ],
  authors: [
    { name: "Osamah Alnahari", url: "https://github.com/Osamah-Alnahari" },
  ],
  creator: "Osamah Alnahari",
  openGraph: {
    title: "Osamah Alnahari | AI & Cloud Solutions Engineer",
    description:
      "Professional AI Research Engineer and Cloud Solutions Architect specializing in intelligent systems and scalable infrastructure.",
    type: "website",
    locale: "en_US",
    siteName: "Osamah Alnahari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osamah Alnahari | AI & Cloud Solutions Engineer",
    description:
      "Professional AI Research Engineer and Cloud Solutions Architect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
