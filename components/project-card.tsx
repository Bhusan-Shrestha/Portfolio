import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  liveUrl?: string
  codeUrl?: string
}

export default function ProjectCard({ title, description, image, liveUrl, codeUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
      <div className="h-48 relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#000031]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 relative">
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#2506ad] to-[#4a00e0]"></div>
        <h3 className="text-xl font-bold text-[#0e2431] mb-2 dark:text-slate-100">{title}</h3>
        <p className="text-gray-700 mb-6 text-sm dark:text-slate-300">{description}</p>
        <div className="flex gap-3">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-[#2506ad] hover:text-white hover:border-[#2506ad] transition-colors duration-300"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View
              </Button>
            </Link>
          )}
          {codeUrl && (
            <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-[#2506ad] hover:text-white hover:border-[#2506ad] transition-colors duration-300"
              >
                Code
                <Code className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
