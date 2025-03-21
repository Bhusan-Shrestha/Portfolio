"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Wrench, Brain, Lightbulb, MessageSquare, BookOpen, Users, FolderKanban, UserPlus } from "lucide-react"

interface Skill {
  name: string
  icon?: string
  svgIcon?: React.ReactNode
}

export default function PersonalSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    {
      name: "Troubleshooting",
      svgIcon: <Wrench className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Problem Solving",
      svgIcon: <Brain className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Adaptability",
      svgIcon: <Lightbulb className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Communication",
      svgIcon: <MessageSquare className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Quick Learner",
      svgIcon: <BookOpen className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Teamwork",
      svgIcon: <Users className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Organizing",
      svgIcon: <FolderKanban className="h-10 w-10 text-[#420177]" />,
    },
    {
      name: "Collaboration",
      svgIcon: <UserPlus className="h-10 w-10 text-[#420177]" />,
    },
  ])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="bg-white border border-gray-200 hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 relative mb-4 group flex items-center justify-center">
              <div className="absolute inset-0 bg-[#420177]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {skill.svgIcon ? (
                skill.svgIcon
              ) : (
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              )}
            </div>
            <span className="text-center font-medium text-sm text-gray-800">{skill.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

