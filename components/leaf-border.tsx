"use client"

import { type ReactNode, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface LeafBorderProps {
  children: ReactNode
  variant?: "default" | "small" | "medium" | "large" | "card"
  animationDelay?: number
}

export default function LeafBorder({ children, variant = "default", animationDelay = 0 }: LeafBorderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, animationDelay)

      return () => clearTimeout(timer)
    }
  }, [inView, animationDelay])

  const getCornerLeaves = () => {
    const animationClass = isVisible ? "opacity-100" : "opacity-0"
    const transitionClass = "transition-all duration-700 ease-out"

    switch (variant) {
      case "small":
        return (
          <>
            <div
              className={`absolute -top-4 -left-4 w-16 h-16 transform rotate-0 ${animationClass} ${transitionClass} transition-delay-100`}
            >
              <LeafCorner />
            </div>
            <div
              className={`absolute -top-4 -right-4 w-16 h-16 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-200`}
            >
              <LeafCorner />
            </div>
            <div
              className={`absolute -bottom-4 -right-4 w-16 h-16 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-300`}
            >
              <LeafCorner />
            </div>
            <div
              className={`absolute -bottom-4 -left-4 w-16 h-16 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-400`}
            >
              <LeafCorner />
            </div>
          </>
        )
      case "medium":
        return (
          <>
            <div
              className={`absolute -top-6 -left-6 w-24 h-24 transform rotate-0 ${animationClass} ${transitionClass} transition-delay-100`}
            >
              <LeafCorner size="medium" />
            </div>
            <div
              className={`absolute -top-6 -right-6 w-24 h-24 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-200`}
            >
              <LeafCorner size="medium" />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-300`}
            >
              <LeafCorner size="medium" />
            </div>
            <div
              className={`absolute -bottom-6 -left-6 w-24 h-24 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-400`}
            >
              <LeafCorner size="medium" />
            </div>
          </>
        )
      case "large":
        return (
          <>
            <div
              className={`absolute -top-8 -left-8 w-32 h-32 transform rotate-0 ${animationClass} ${transitionClass} transition-delay-100`}
            >
              <LeafCorner size="large" />
            </div>
            <div
              className={`absolute -top-8 -right-8 w-32 h-32 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-200`}
            >
              <LeafCorner size="large" />
            </div>
            <div
              className={`absolute -bottom-8 -right-8 w-32 h-32 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-300`}
            >
              <LeafCorner size="large" />
            </div>
            <div
              className={`absolute -bottom-8 -left-8 w-32 h-32 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-400`}
            >
              <LeafCorner size="large" />
            </div>
          </>
        )
      case "card":
        return (
          <>
            <div
              className={`absolute -top-3 -left-3 w-12 h-12 transform rotate-0 ${animationClass} ${transitionClass} transition-delay-100`}
            >
              <LeafCorner size="small" />
            </div>
            <div
              className={`absolute -top-3 -right-3 w-12 h-12 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-200`}
            >
              <LeafCorner size="small" />
            </div>
            <div
              className={`absolute -bottom-3 -right-3 w-12 h-12 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-300`}
            >
              <LeafCorner size="small" />
            </div>
            <div
              className={`absolute -bottom-3 -left-3 w-12 h-12 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-400`}
            >
              <LeafCorner size="small" />
            </div>
          </>
        )
      default:
        return (
          <>
            <div
              className={`absolute -top-6 -left-6 w-24 h-24 transform rotate-0 ${animationClass} ${transitionClass} transition-delay-100`}
            >
              <LeafCorner size="medium" />
            </div>
            <div
              className={`absolute -top-6 -right-6 w-24 h-24 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-200`}
            >
              <LeafCorner size="medium" />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-300`}
            >
              <LeafCorner size="medium" />
            </div>
            <div
              className={`absolute -bottom-6 -left-6 w-24 h-24 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-400`}
            >
              <LeafCorner size="medium" />
            </div>
          </>
        )
    }
  }

  const getBorderLeaves = () => {
    if (variant === "card" || variant === "small") {
      return null
    }

    const animationClass = isVisible ? "opacity-100" : "opacity-0"
    const transitionClass = "transition-all duration-700 ease-out"

    return (
      <>
        <div
          className={`absolute top-1/4 -left-3 w-6 h-12 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-300 animate-leafSway`}
        >
          <SingleLeaf />
        </div>
        <div
          className={`absolute top-3/4 -left-3 w-6 h-12 transform -rotate-90 ${animationClass} ${transitionClass} transition-delay-400 animate-leafSway`}
        >
          <SingleLeaf />
        </div>
        <div
          className={`absolute top-1/4 -right-3 w-6 h-12 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-300 animate-leafSway`}
        >
          <SingleLeaf />
        </div>
        <div
          className={`absolute top-3/4 -right-3 w-6 h-12 transform rotate-90 ${animationClass} ${transitionClass} transition-delay-400 animate-leafSway`}
        >
          <SingleLeaf />
        </div>
        <div
          className={`absolute left-1/4 -top-3 w-12 h-6 ${animationClass} ${transitionClass} transition-delay-100 animate-leafSway`}
        >
          <SingleLeaf horizontal />
        </div>
        <div
          className={`absolute left-3/4 -top-3 w-12 h-6 ${animationClass} ${transitionClass} transition-delay-200 animate-leafSway`}
        >
          <SingleLeaf horizontal />
        </div>
        <div
          className={`absolute left-1/4 -bottom-3 w-12 h-6 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-500 animate-leafSway`}
        >
          <SingleLeaf horizontal />
        </div>
        <div
          className={`absolute left-3/4 -bottom-3 w-12 h-6 transform rotate-180 ${animationClass} ${transitionClass} transition-delay-500 animate-leafSway`}
        >
          <SingleLeaf horizontal />
        </div>
      </>
    )
  }

  const contentClasses = isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"

  return (
    <div className="relative" ref={ref}>
      {getCornerLeaves()}
      {getBorderLeaves()}
      <div
        className={`relative bg-white rounded-lg overflow-hidden border border-green-200 transition-all duration-700 ease-out ${contentClasses}`}
        style={{ transitionDelay: `${animationDelay + 200}ms` }}
      >
        {children}
      </div>
    </div>
  )
}

function LeafCorner({ size = "default" }: { size?: "small" | "default" | "medium" | "large" }) {
  const getSize = () => {
    switch (size) {
      case "small":
        return "w-12 h-12"
      case "medium":
        return "w-24 h-24"
      case "large":
        return "w-32 h-32"
      default:
        return "w-16 h-16"
    }
  }

  return (
    <div className={`${getSize()} relative animate-leafSway`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M95 5C95 5 65 5 50 20C35 35 35 65 5 95" stroke="#15803d" strokeWidth="4" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
            M95 5C95 5 65 5 50 20C35 35 35 65 5 95;
            M95 5C95 5 65 8 48 22C32 38 32 65 5 95;
            M95 5C95 5 65 5 50 20C35 35 35 65 5 95"
          />
        </path>
        <path d="M75 5C75 5 55 5 45 15C35 25 35 45 5 75" stroke="#15803d" strokeWidth="3" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
            M75 5C75 5 55 5 45 15C35 25 35 45 5 75;
            M75 5C75 5 55 8 43 17C33 28 33 45 5 75;
            M75 5C75 5 55 5 45 15C35 25 35 45 5 75"
          />
        </path>
        <path d="M55 5C55 5 45 5 40 10C35 15 35 25 5 55" stroke="#15803d" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
            M55 5C55 5 45 5 40 10C35 15 35 25 5 55;
            M55 5C55 5 45 7 38 12C33 18 33 25 5 55;
            M55 5C55 5 45 5 40 10C35 15 35 25 5 55"
          />
        </path>
        <path d="M95 25C95 25 75 25 65 35C55 45 55 65 25 95" stroke="#15803d" strokeWidth="3" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="13s"
            repeatCount="indefinite"
            values="
            M95 25C95 25 75 25 65 35C55 45 55 65 25 95;
            M95 25C95 25 75 28 63 37C53 48 53 65 25 95;
            M95 25C95 25 75 25 65 35C55 45 55 65 25 95"
          />
        </path>
        <path d="M95 45C95 45 85 45 80 50C75 55 75 65 45 95" stroke="#15803d" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
            M95 45C95 45 85 45 80 50C75 55 75 65 45 95;
            M95 45C95 45 85 48 78 52C73 58 73 65 45 95;
            M95 45C95 45 85 45 80 50C75 55 75 65 45 95"
          />
        </path>
        <path d="M20 5C20 5 20 25 30 35C40 45 60 45 90 15" stroke="#65a30d" strokeWidth="3" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="11s"
            repeatCount="indefinite"
            values="
            M20 5C20 5 20 25 30 35C40 45 60 45 90 15;
            M20 5C20 5 20 28 28 37C38 48 58 48 90 15;
            M20 5C20 5 20 25 30 35C40 45 60 45 90 15"
          />
        </path>
        <path d="M40 5C40 5 40 15 45 20C50 25 60 25 90 35" stroke="#65a30d" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
            M40 5C40 5 40 15 45 20C50 25 60 25 90 35;
            M40 5C40 5 40 18 43 22C48 28 58 28 90 35;
            M40 5C40 5 40 15 45 20C50 25 60 25 90 35"
          />
        </path>
        <path d="M5 20C5 20 25 20 35 30C45 40 45 60 15 90" stroke="#65a30d" strokeWidth="3" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
            M5 20C5 20 25 20 35 30C45 40 45 60 15 90;
            M5 20C5 20 25 23 33 32C43 43 43 60 15 90;
            M5 20C5 20 25 20 35 30C45 40 45 60 15 90"
          />
        </path>
        <path d="M5 40C5 40 15 40 20 45C25 50 25 60 35 90" stroke="#65a30d" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
            M5 40C5 40 15 40 20 45C25 50 25 60 35 90;
            M5 40C5 40 15 43 18 47C23 53 23 60 35 90;
            M5 40C5 40 15 40 20 45C25 50 25 60 35 90"
          />
        </path>
        <circle cx="5" cy="5" r="5" fill="#84cc16">
          <animate attributeName="r" dur="4s" repeatCount="indefinite" values="5;5.5;5" />
        </circle>
        <circle cx="95" cy="95" r="5" fill="#84cc16">
          <animate attributeName="r" dur="4s" repeatCount="indefinite" values="5;5.5;5" />
        </circle>
      </svg>
    </div>
  )
}

function SingleLeaf({ horizontal = false }: { horizontal?: boolean }) {
  if (horizontal) {
    return (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 25C5 25 35 5 50 5C65 5 95 25 95 25" stroke="#15803d" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
            M5 25C5 25 35 5 50 5C65 5 95 25 95 25;
            M5 25C5 25 35 8 50 8C65 8 95 25 95 25;
            M5 25C5 25 35 5 50 5C65 5 95 25 95 25"
          />
        </path>
        <path d="M5 35C5 35 35 20 50 20C65 20 95 35 95 35" stroke="#65a30d" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
            M5 35C5 35 35 20 50 20C65 20 95 35 95 35;
            M5 35C5 35 35 23 50 23C65 23 95 35 95 35;
            M5 35C5 35 35 20 50 20C65 20 95 35 95 35"
          />
        </path>
        <circle cx="50" cy="45" r="5" fill="#84cc16">
          <animate attributeName="r" dur="4s" repeatCount="indefinite" values="5;5.5;5" />
        </circle>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5C25 5 5 35 5 50C5 65 25 95 25 95" stroke="#15803d" strokeWidth="2" strokeLinecap="round">
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
          M25 5C25 5 5 35 5 50C5 65 25 95 25 95;
          M25 5C25 5 8 35 8 50C8 65 25 95 25 95;
          M25 5C25 5 5 35 5 50C5 65 25 95 25 95"
        />
      </path>
      <path d="M35 5C35 5 20 35 20 50C20 65 35 95 35 95" stroke="#65a30d" strokeWidth="2" strokeLinecap="round">
        <animate
          attributeName="d"
          dur="12s"
          repeatCount="indefinite"
          values="
          M35 5C35 5 20 35 20 50C20 65 35 95 35 95;
          M35 5C35 5 23 35 23 50C23 65 35 95 35 95;
          M35 5C35 5 20 35 20 50C20 65 35 95 35 95"
        />
      </path>
      <circle cx="45" cy="50" r="5" fill="#84cc16">
        <animate attributeName="r" dur="4s" repeatCount="indefinite" values="5;5.5;5" />
      </circle>
    </svg>
  )
}

