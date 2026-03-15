"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Personal Skills", href: "#personal-skills" },
    { name: "Projects", href: "#projects" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set up Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Triggers when element is somewhat near middle of viewport
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections mentioned in navLinks
    navLinks.forEach((link) => {
      const id = link.href.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [navLinks]) // Re-run if navLinks change

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Set active section immediately on click for better UX
    setActiveSection(href)

    // Extract the id from the href
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Scroll to the element
      element.scrollIntoView({
        behavior: "smooth",
      })

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            Bhusan Shrestha
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] hover:pb-1",
                  "text-[#0e2431]", // Always use dark color for text readability 
                  activeSection === link.href 
                    ? "text-[#011aff] border-b-2 border-[#011aff] pb-1" // Active state styles
                    : ""
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={cn(
                    "py-2 transition-colors",
                    activeSection === link.href
                      ? "text-[#011aff] font-bold"
                      : "text-slate-900 dark:text-white hover:text-[#011aff]"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

