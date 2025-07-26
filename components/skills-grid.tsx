"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Network, Github } from "lucide-react"

interface Skill {
  name: string
  icon: string
  svgIcon?: React.ReactNode
}

export default function SkillsGrid() {
  const [skills, setSkills] = useState<Skill[]>([
    // {
    //   name: "Cisco Networking",
    //   icon: "https://cdn-icons-png.flaticon.com/512/882/882730.png",
    // },
    {
      name: "TCP/IP",
      icon: "https://img.icons8.com/color/48/000000/networking-manager.png",
    },
    {
      name: "Wireshark",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/768px-Wireshark_icon_new.png",
    },
    // {
    //   name: "VPN Technologies",
    //   icon: "https://cdn-icons-png.flaticon.com/128/2665/2665268.png",
    // },
    {
      name: "Routing & Switching",
      icon: "https://cdn-icons-png.flaticon.com/128/2248/2248677.png",
    },
    {
      name: "Subnetting",
      icon: "https://cdn-icons-png.flaticon.com/128/18983/18983852.png",
      // svgIcon: <Network className="h-10 w-10 text-[#420177]" />,
    },
    // {
    //   name: "Firewalls",
    //   icon: "https://img.icons8.com/color/48/000000/firewall.png",
    // },
    {
      name: "Linux",
      icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
    },
    {
      name: "GitHub",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
      // svgIcon: <Github className="h-10 w-10 text-[#333]" />,
    },
    {
      name: "SQL",
      icon: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png",
    },
    {
      name: "Python",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      name: "C++",
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      name: "C",
      icon: "https://img.icons8.com/color/48/000000/c-programming.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    },
    {
      name: "HTML5",
      icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    },
    {
      name: "CSS3",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      name: "JavaScript",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
        {
      name: "PHP",
      icon: "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
    },
    {
      name: "WordPress",
      icon: "https://img.icons8.com/color/48/000000/wordpress.png",
    },
    // {
    //   name: "Netlify",
    //   icon: "https://www.svgrepo.com/show/373874/netlify.svg",
    // },
    // {
    //   name: "Bootstrap",
    //   icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    // },
  ])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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

