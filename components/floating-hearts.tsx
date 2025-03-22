"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  color: string
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Create initial hearts
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => createHeart(i))
    setHearts(initialHearts)

    // Animation loop
    const interval = setInterval(() => {
      setHearts((prevHearts) => {
        // Move hearts upward
        const updatedHearts = prevHearts.map((heart) => ({
          ...heart,
          y: heart.y - heart.speed,
          opacity: heart.y < 200 ? heart.opacity - 0.01 : heart.opacity,
        }))

        // Remove hearts that are out of view or fully transparent
        const filteredHearts = updatedHearts.filter((heart) => heart.y > -100 && heart.opacity > 0)

        // Add new hearts if needed
        if (filteredHearts.length < 15) {
          const newHeartsCount = 15 - filteredHearts.length
          const maxId = Math.max(...filteredHearts.map((h) => h.id), 0)

          const newHearts = Array.from({ length: newHeartsCount }, (_, i) => createHeart(maxId + i + 1))

          return [...filteredHearts, ...newHearts]
        }

        return filteredHearts
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const createHeart = (id: number): Heart => {
    return {
      id,
      x: Math.random() * 100, // percentage across screen
      y: 100 + Math.random() * 100, // start below the screen
      size: 10 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.5,
      speed: 0.1 + Math.random() * 0.3,
      color: getRandomHeartColor(),
    }
  }

  const getRandomHeartColor = () => {
    const colors = [
      "#f43f5e", // rose-500
      "#e11d48", // rose-600
      "#be123c", // rose-700
      "#fb7185", // rose-400
      "#fda4af", // rose-300
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            opacity: heart.opacity,
            transform: `scale(${heart.size / 20}) rotate(${Math.random() * 60 - 30}deg)`,
            transition: "top 0.5s linear, opacity 1s linear",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={heart.color}
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

