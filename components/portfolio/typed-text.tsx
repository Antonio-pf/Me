"use client"

import { useEffect, useState } from 'react'

interface TypedTextProps {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
  cursorClassName?: string
}

export function TypedText({
  text,
  speed = 100,
  className = '',
  showCursor = true,
  cursorClassName = 'animate-pulse'
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayText('')
    setIsComplete(false)

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i])
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={`${cursorClassName} ${isComplete ? 'opacity-0' : ''}`}>
          |
        </span>
      )}
    </span>
  )
}
