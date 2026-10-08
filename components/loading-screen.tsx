"use client"

import { useEffect, useState } from "react"
import {
  Activity,
  Beaker,
  Check,
  Cloud,
  Search,
  Wrench,
} from "lucide-react"
import { cn } from "@/lib/utils"

const pipelineStages = [
  { label: "Research", icon: Search },
  { label: "Build", icon: Wrench },
  { label: "Test", icon: Beaker },
  { label: "Release", icon: Check },
  { label: "Deploy", icon: Cloud },
  { label: "Monitor", icon: Activity },
]

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"preparing" | "pipeline">("preparing")
  const [activeStage, setActiveStage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    let pipelineTimer: number | undefined
    const preparationTimer = window.setTimeout(() => {
      setPhase("pipeline")
      pipelineTimer = window.setInterval(() => {
        setActiveStage((current) => {
          if (current >= pipelineStages.length - 1) {
            if (pipelineTimer) {
              window.clearInterval(pipelineTimer)
            }
            return current
          }
          return current + 1
        })
      }, 1300)
    }, 2500)

    const finishTimer = window.setTimeout(() => {
      setIsLeaving(true)
      window.setTimeout(() => setIsVisible(false), 500)
    }, 9500)

    return () => {
      window.clearTimeout(preparationTimer)
      if (pipelineTimer) {
        window.clearInterval(pipelineTimer)
      }
      window.clearTimeout(finishTimer)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      aria-label="Loading portfolio"
      aria-live="polite"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-50 text-slate-950 transition-opacity duration-500 dark:bg-background dark:text-white",
        isLeaving && "pointer-events-none opacity-0",
      )}
    >
      <div className="absolute inset-0 bg-slate-50 dark:bg-background" />
      <div className="relative z-10 w-full max-w-5xl px-6">
        {phase === "preparing" ? (
          <div className="animate-in fade-in duration-500 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-sky-300">
              Launching portfolio
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Preparing the delivery pipeline...
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-sky-300">
                CI/CD pipeline
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                From idea to production
              </h1>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Preparing the delivery pipeline...</p>
            </div>
            <div className="relative grid grid-cols-2 gap-y-8 md:grid-cols-6 md:gap-4">
              <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-slate-300 dark:bg-slate-700 md:block">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${Math.max(activeStage, 0) * 20}%` }}
                />
              </div>
              {pipelineStages.map(({ label, icon: Icon }, index) => (
                <div key={label} className="relative flex flex-col items-center gap-3">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full border bg-white/80 dark:bg-slate-900 transition-all duration-500",
                      index <= activeStage
                        ? "border-sky-600 text-sky-700 shadow-[0_0_24px_rgba(56,189,248,0.35)] dark:border-sky-300 dark:text-sky-300"
                        : "border-slate-300 text-slate-400 dark:border-slate-700 dark:text-slate-600",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors duration-500",
                      index <= activeStage ? "text-slate-800 dark:text-slate-100" : "text-slate-500 dark:text-slate-600",
                    )}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                <span>Completion</span>
                <span className="text-sky-700 dark:text-sky-300">
                  {Math.round(((Math.max(activeStage, 0) + 1) / pipelineStages.length) * 100)}%
                </span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-800"
                role="progressbar"
                aria-label="CI/CD pipeline completion"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(((Math.max(activeStage, 0) + 1) / pipelineStages.length) * 100)}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 shadow-[0_0_16px_rgba(56,189,248,0.55)] transition-all duration-500"
                  style={{
                    width: `${((Math.max(activeStage, 0) + 1) / pipelineStages.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-slate-600 dark:text-slate-500">
              {activeStage >= pipelineStages.length - 1
                ? "Pipeline complete"
                : `${pipelineStages[Math.max(activeStage, 0)].label} in progress`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
