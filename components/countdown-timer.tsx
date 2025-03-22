"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-green-700 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shadow-md transform transition-transform hover:scale-110 hover:rotate-3">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</span>
        </div>
        <span className="text-sm mt-2 text-green-700 font-medium">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-600 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shadow-md transform transition-transform hover:scale-110 hover:-rotate-3">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</span>
        </div>
        <span className="text-sm mt-2 text-green-700 font-medium">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-500 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shadow-md transform transition-transform hover:scale-110 hover:rotate-3">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</span>
        </div>
        <span className="text-sm mt-2 text-green-700 font-medium">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shadow-md transform transition-transform hover:scale-110 hover:-rotate-3">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds}</span>
        </div>
        <span className="text-sm mt-2 text-green-700 font-medium">Seconds</span>
      </div>
    </div>
  )
}

