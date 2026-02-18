"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certification {
  name: string
  issuer: string
  date: string
  category: string
}

export default function CertificationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const certifications: Certification[] = [
    {
      name: "Data Analysis And Data Science Techniques",
      issuer: "AITC International Pvt. Ltd.",
      date: "2025",
      category: "Programming",
    },
    {
      name: "Introduction To Data Science Using Python",
      issuer: "Himalayan Whitehouse International College",
      date: "2023",
      category: "Programming",
    },
    {
      name: "Cybersecurity Architecture Fundamentals And Tools",
      issuer: "Mind Luster",
      date: "2023",
      category: "Security",
    },
    {
      name: "Network Security",
      issuer: "Great Learning",
      date: "2022",
      category: "Security",
    },
    {
      name: "Encryption Basics",
      issuer: "Great Learning",
      date: "2022",
      category: "Security",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certifications.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certifications.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    // Auto-advance slides
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const pauseSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const resumeSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto py-8" onMouseEnter={pauseSlider} onMouseLeave={resumeSlider}>
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certifications.map((cert, index) => (
            <Card key={index} className="min-w-full border border-gray-200 bg-white">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Badge className="mb-4 bg-[#420177]/20 text-[#420177] hover:bg-[#420177]/30">{cert.category}</Badge>
                <h3 className="text-2xl font-bold text-[#0e2431] mb-2">{cert.name}</h3>
                <p className="text-[#011aff] mb-1">Issued by {cert.issuer}</p>
                <p className="text-gray-600 text-sm">Obtained in {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {certifications.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

