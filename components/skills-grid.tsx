"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Code2, Database, GitBranch, Laptop2, Wrench, Boxes } from "lucide-react"

interface Skill {
  name: string
  icon: string
  svgIcon?: React.ReactNode
}

interface SkillCategory {
  logo?: React.ReactNode
  title: string
  skills: Skill[]
}

export default function SkillsGrid() {
  const categories: SkillCategory[] = [
    {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#011aff] to-[#4a00e0] text-white shadow-md shadow-blue-200">
          <Laptop2 className="h-5 w-5" />
        </span>
      ),
      title: "Frontend",
      skills: [
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
          name: "React",
          icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
        },
        {
          name: "Tailwind CSS",
          icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
        }
      ],
    },
    {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f172a] to-[#334155] text-white shadow-md shadow-slate-200">
          <Code2 className="h-5 w-5" />
        </span>
      ),
      title: "Backend",
      skills: [
        {
          name: "PHP",
          icon: "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
        },
        {
          name: "Spring Boot",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNou7-DlVcN5nOVq73_RDi6OAYZAzOknfzQw&s",
        },
        {
          name: "node js",
          icon: "https://img.icons8.com/color/48/000000/nodejs.png",
        },
      ],
    },
    {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f766e] to-[#14b8a6] text-white shadow-md shadow-teal-200">
          <Database className="h-5 w-5" />
        </span>
      ),
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: "https://futuresolutionsonline.co.uk/wp-content/uploads/2023/04/mySQL-logo.png",
        },
        {
          name: "PostgreSQL",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        },
        {
          name: "MongoDB",
          icon: "https://www.mongodb.com/assets/images/global/favicon.ico",
        },
      ],
    },
    {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white shadow-md shadow-violet-200">
          <GitBranch className="h-5 w-5" />
        </span>
      ),
      title: "Version Control",
      skills: [
        {
          name: "Git",
          icon: "https://img.icons8.com/color/48/000000/git.png",
        },
        {
          name: "GitHub",
          icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
        },
      ],
    },
    {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f766e] to-[#0ea5e9] text-white shadow-md shadow-cyan-200">
          <GitBranch className="h-5 w-5" />
        </span>
      ),
      title: "DevOps",
      skills: [
        {
          name: "Linux",
          icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          name: "CI/CD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "Ansible",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
        },
        {
          name: "Terraform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
        },
      ],
    },
     {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] text-white shadow-md shadow-orange-200">
          <Wrench className="h-5 w-5" />
        </span>
      ),
      title: "Tools",
      skills: [
        {
          name: "Post Man",
          icon: "https://icon.icepanel.io/Technology/svg/Postman.svg",
        },
        {
          name: "Power BI",
          icon: "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000",
        },
        {
          name: "Excel",
          icon: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000",
        },
        {
          name: "Prometheus",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
        },
        {
          name: "Tempo",
          icon: "https://raw.githubusercontent.com/grafana/tempo/main/cmd/tempo/app/static/tempo-icon.png",
        },
        {
          name: "OpenTelemetry",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opentelemetry/opentelemetry-original.svg",
        },
        {
          name: "Loki",
          icon: "https://raw.githubusercontent.com/grafana/loki/main/docs/sources/logo.png",
        },
        {
          name: "Grafana",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
        },
      ],
    },
    {
      logo: (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d4ed8] to-[#60a5fa] text-white shadow-md shadow-blue-200">
          <Boxes className="h-5 w-5" />
        </span>
      ),
      title: "Programming Languages",
      skills: [
        {
          name: "C",
          icon: "https://img.icons8.com/color/48/000000/c-programming.png",
        },
        {
          name: "C++",
          icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
        },
        {
          name: "Java",
          icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
        },
        {
          name: "Python",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "Bash",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="bg-white border-0 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              {category.logo && <span className="inline-flex">{category.logo}</span>}
              <span>{category.title}</span>
            </h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {category.skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-start group">
                  <div className="w-12 h-12 relative mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {skill.svgIcon ? (
                      skill.svgIcon
                    ) : (
                      skill.icon && skill.icon.startsWith("http") ? (
                        // Use a plain <img> for remote icons to avoid optimization/network issues
                        // (Next/Image can sometimes block or require extra config for external hosts)
                        // width/height kept via CSS classes
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      )
                    )}
                  </div>
                  <span className="text-center font-medium text-xs text-gray-500 group-hover:text-gray-900 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
