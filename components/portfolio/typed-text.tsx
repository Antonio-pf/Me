"use client"

import { useEffect, useState } from "react"

interface TypedTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseAfterType?: number
  pauseAfterDelete?: number
  className?: string
}

export function TypedText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseAfterType = 2000,
  pauseAfterDelete = 400,
  className = "",
}: TypedTextProps) {
  const [displayed, setDisplayed] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing")

  useEffect(() => {
    const current = texts[textIndex]

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      } else {
        setPhase("pausing")
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase(texts.length > 1 ? "deleting" : "pausing"), pauseAfterType)
      return () => clearTimeout(t)
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setPhase("waiting")
      }
    }

    if (phase === "waiting") {
      const t = setTimeout(() => {
        setTextIndex((i) => (i + 1) % texts.length)
        setPhase("typing")
      }, pauseAfterDelete)
      return () => clearTimeout(t)
    }
  }, [displayed, phase, textIndex, texts, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete])

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse ml-0.5 text-primary">|</span>
    </span>
  )
}
