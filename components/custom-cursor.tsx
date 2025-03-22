"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Reset cursor position when route changes
    setPosition({ x: -100, y: -100 })
  }, [pathname])

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)

      // Check if the element or its parents have cursor:pointer
      const hasPointerCursor = (element: Element | null): boolean => {
        if (!element) return false

        const cursor = window.getComputedStyle(element).cursor
        if (cursor === "pointer") return true

        return element.parentElement ? hasPointerCursor(element.parentElement) : false
      }

      setIsPointer(hasPointerCursor(hoveredElement))
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseover", updateCursorStyle)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseover", updateCursorStyle)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position.x, position.y])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        a, button, [role="button"], [type="button"], [type="submit"], [type="reset"] {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {/* Main cursor */}
        <div
          className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isClicking ? "scale-90" : "scale-100"
          } ${isPointer ? "bg-amber-400/40 w-8 h-8" : "bg-green-500/30 w-6 h-6"}`}
        >
          {/* Leaf shape for pointer cursor */}
          {isPointer && (
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 5.9 16.17C5.9 16.17 5.47 17.17 5.5 18C5.5 18 6.41 17.74 7.25 17.5C8.25 17.2 10 16.5 12 16C17 15 19 11 19 9C19 7 17 8 17 8Z" />
            </svg>
          )}
        </div>

        {/* Dot in center */}
        <div className="absolute w-1 h-1 bg-green-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </>
  )
}

