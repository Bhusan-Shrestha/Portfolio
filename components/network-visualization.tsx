"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export default function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = 300
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class
    class Node {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      connected: Node[]

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.connected = []
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Draw glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }

      update(width: number, height: number) {
        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off walls
        if (this.x < this.radius || this.x > width - this.radius) {
          this.vx = -this.vx
        }

        if (this.y < this.radius || this.y > height - this.radius) {
          this.vy = -this.vy
        }
      }

      connect(ctx: CanvasRenderingContext2D, node: Node) {
        const distance = Math.hypot(this.x - node.x, this.y - node.y)
        const maxDistance = 150

        if (distance < maxDistance) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / maxDistance})`
          ctx.lineWidth = 1
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        }
      }
    }

    // Create nodes
    const nodeCount = Math.floor(canvas.width / 100) + 5
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 2 + 2
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius

      // Different colors for nodes
      const colors = ["#3B82F6", "#60A5FA", "#93C5FD", "#2563EB", "#1D4ED8"]
      const color = colors[Math.floor(Math.random() * colors.length)]

      nodes.push(new Node(x, y, radius, color))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      for (const node of nodes) {
        node.update(canvas.width, canvas.height)
        node.draw(ctx)
      }

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          nodes[i].connect(ctx, nodes[j])
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <Card className="w-full overflow-hidden border-none bg-transparent">
      <canvas ref={canvasRef} className="w-full h-[300px]" />
    </Card>
  )
}

