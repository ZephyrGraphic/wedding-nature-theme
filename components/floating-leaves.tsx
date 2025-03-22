"use client"

import { useEffect, useState, useRef } from "react"

interface Leaf {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  rotation: number
  rotationSpeed: number
  swayFactor: number
  swaySpeed: number
  type: number
}

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const animationRef = useRef<number | null>(null)
  const lastUpdateTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    // Create initial leaves
    const initialLeaves: Leaf[] = Array.from({ length: 20 }, (_, i) => createLeaf(i))
    setLeaves(initialLeaves)

    // Animation loop using requestAnimationFrame for smoother animation
    const animate = (time: number) => {
      const now = Date.now()
      const deltaTime = now - lastUpdateTimeRef.current

      if (deltaTime > 16) {
        // Cap at roughly 60fps
        lastUpdateTimeRef.current = now

        setLeaves((prevLeaves) => {
          // Move leaves
          const updatedLeaves = prevLeaves.map((leaf) => {
            // Calculate sway movement
            const swayX = Math.sin(now * 0.001 * leaf.swaySpeed) * leaf.swayFactor

            return {
              ...leaf,
              y: leaf.y - leaf.speed * (deltaTime / 16),
              x: leaf.x + swayX * (deltaTime / 16),
              rotation: leaf.rotation + leaf.rotationSpeed * (deltaTime / 16),
              opacity: leaf.y < 200 ? Math.max(0, leaf.opacity - 0.001 * (deltaTime / 16)) : leaf.opacity,
            }
          })

          // Remove leaves that are out of view or fully transparent
          const filteredLeaves = updatedLeaves.filter((leaf) => leaf.y > -100 && leaf.opacity > 0)

          // Add new leaves if needed
          if (filteredLeaves.length < 20) {
            const newLeavesCount = 20 - filteredLeaves.length
            const maxId = Math.max(...filteredLeaves.map((h) => h.id), 0)

            const newLeaves = Array.from({ length: newLeavesCount }, (_, i) => createLeaf(maxId + i + 1))

            return [...filteredLeaves, ...newLeaves]
          }

          return filteredLeaves
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const createLeaf = (id: number): Leaf => {
    return {
      id,
      x: Math.random() * 100, // percentage across screen
      y: 100 + Math.random() * 100, // start below the screen
      size: 15 + Math.random() * 25,
      opacity: 0.2 + Math.random() * 0.5,
      speed: 0.05 + Math.random() * 0.15, // slower for more natural movement
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5, // slower rotation
      swayFactor: (Math.random() - 0.5) * 0.2, // how much it sways
      swaySpeed: 0.5 + Math.random() * 2, // speed of the sway
      type: Math.floor(Math.random() * 4), // 4 different leaf types
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            opacity: leaf.opacity,
            transform: `scale(${leaf.size / 20}) rotate(${leaf.rotation}deg)`,
            transition: "opacity 1s ease",
            filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1))",
          }}
        >
          {leaf.type === 0 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="#4ade80"
              />
              <path d="M12 7L16 12H8L12 7Z" fill="#4ade80" />
            </svg>
          )}
          {leaf.type === 1 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 8C8 10 5.9 16.17 5.9 16.17C5.9 16.17 5.47 17.17 5.5 18C5.5 18 6.41 17.74 7.25 17.5C8.25 17.2 10 16.5 12 16C17 15 19 11 19 9C19 7 17 8 17 8Z"
                fill="#15803d"
              />
              <path
                d="M14.5 9.5C14.5 9.5 13.5 14 9 15.5C9 15.5 10.5 16 12.5 15.5C14.5 15 16.5 13 16.5 11C16.5 9 14.5 9.5 14.5 9.5Z"
                fill="#15803d"
              />
            </svg>
          )}
          {leaf.type === 2 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                fill="#65a30d"
              />
              <path d="M12 7L7 12H17L12 7Z" fill="#65a30d" />
            </svg>
          )}
          {leaf.type === 3 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 12H9V22H15V12H20L12 2Z" fill="#84cc16" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

