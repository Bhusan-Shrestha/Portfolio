"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Server, Zap, Clock } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  duration?: number
}

function StatCounter({ icon, value, label, suffix = "", duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Math.min(value, 9999)
    const incrementTime = Math.max(Math.floor(duration / end), 5)

    // Don't run if value is zero
    if (end === 0) return

    // Reset count when value changes
    setCount(0)

    const timer = setInterval(() => {
      start += 1
      setCount(Math.min(start, end))

      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <Card className="border-none bg-white/5 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-blue-900/30">{icon}</div>
        <div className="text-3xl font-bold mb-1">
          {count}
          {suffix}
        </div>
        <p className="text-sm text-blue-200">{label}</p>
      </CardContent>
    </Card>
  )
}

export default function NetworkStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <StatCounter icon={<Shield className="h-6 w-6 text-blue-400" />} value={99} suffix="%" label="Network Uptime" />
      <StatCounter
        icon={<Server className="h-6 w-6 text-blue-400" />}
        value={150}
        suffix="+"
        label="Networks Secured"
      />
      <StatCounter icon={<Zap className="h-6 w-6 text-blue-400" />} value={500} suffix="+" label="Threats Blocked" />
      <StatCounter icon={<Clock className="h-6 w-6 text-blue-400" />} value={5} suffix="+" label="Years Experience" />
    </div>
  )
}

