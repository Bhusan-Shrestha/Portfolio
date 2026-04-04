import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://bhusan-shrestha.github.io"),
  title: {
    default: "Bhusan Shrestha | IT Portfolio",
    template: "%s | Bhusan Shrestha",
  },
  description:
    "Portfolio of Bhusan Shrestha, an aspiring IT professional focused on AI, data analysis, DevOps, and machine learning projects.",
  keywords: [
    "Bhusan Shrestha",
    "IT portfolio",
    "AI projects",
    "data analysis",
    "machine learning",
    "DevOps",
    "Nepal developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhusan Shrestha | IT Portfolio",
    description:
      "Explore projects and skills in AI, data analysis, web development, and DevOps by Bhusan Shrestha.",
    url: "/",
    siteName: "Bhusan Shrestha Portfolio",
    type: "website",
    images: [
      {
        url: "/hero-bhusan.jpg",
        width: 1200,
        height: 630,
        alt: "Bhusan Shrestha portfolio cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhusan Shrestha | IT Portfolio",
    description:
      "Explore projects and skills in AI, data analysis, web development, and DevOps by Bhusan Shrestha.",
    images: ["/hero-bhusan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
