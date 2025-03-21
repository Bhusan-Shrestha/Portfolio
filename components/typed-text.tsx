"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

interface TypedTextProps {
  strings: string[]
}

export default function TypedText({ strings }: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
        loop: true,
      })
    }

    return () => {
      typed.current?.destroy()
    }
  }, [strings])

  return <span ref={el} className="text-[#420177]" />
}

