'use client'
import { useRef, useState, useEffect, useCallback } from "react";
import { UPPERCASE_ALPHABET } from "../constants";

export const useAnimatedName = () => {
  const [text, setText] = useState('WONG KINHOW')
  const [intervalId] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const ref = useRef<HTMLHeadingElement | null>(null)

  const handleMouseOver = useCallback(() => {
    if (isAnimating) return

    let iteration = 0

    if (intervalId !== null) {
      clearTimeout(intervalId)
    }

    const animate = () => {
      setIsAnimating(true)
      setText(prevText =>
        prevText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index]
            }
            return UPPERCASE_ALPHABET[Math.floor(Math.random() * UPPERCASE_ALPHABET?.length)]
          })
          .join('')
      )

      if (iteration < text.length) {
        iteration += 1 / 3
        setTimeout(animate, 30)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }, [intervalId, isAnimating, text])

  useEffect(() => {
    const currentRef = ref.current

    if (currentRef) {
      currentRef.addEventListener('mouseover', handleMouseOver)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseover', handleMouseOver)
      }
    }
  }, [handleMouseOver, ref])

  return { ref, text }
}
