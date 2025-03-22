"use client"

import { useEffect, useRef } from "react"

interface LocationMapProps {
  coordinates: {
    lat: number
    lng: number
  }
}

export default function LocationMap({ coordinates }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for an actual map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet
    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = mapRef.current.clientHeight
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a placeholder map with a more elegant design
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, "#f0fdf4") // green-50
        gradient.addColorStop(1, "#dcfce7") // green-100
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some decorative elements
        ctx.strokeStyle = "#bbf7d0" // green-200
        ctx.lineWidth = 2

        // Draw a decorative border
        ctx.beginPath()
        ctx.rect(10, 10, canvas.width - 20, canvas.height - 20)
        ctx.stroke()

        // Draw some roads
        ctx.strokeStyle = "#86efac" // green-300
        ctx.lineWidth = 3

        // Horizontal roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 5))
          ctx.lineTo(canvas.width, canvas.height * (i / 5))
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 5), 0)
          ctx.lineTo(canvas.width * (i / 5), canvas.height)
          ctx.stroke()
        }

        // Draw a marker for the venue
        const markerX = canvas.width / 2
        const markerY = canvas.height / 2

        // Draw a leaf as the marker
        ctx.fillStyle = "#15803d" // green-700
        const leafSize = 20

        // Leaf shape
        ctx.beginPath()
        ctx.moveTo(markerX, markerY - leafSize)
        ctx.bezierCurveTo(
          markerX + leafSize,
          markerY - leafSize,
          markerX + leafSize,
          markerY + leafSize,
          markerX,
          markerY + leafSize,
        )
        ctx.bezierCurveTo(
          markerX - leafSize,
          markerY + leafSize,
          markerX - leafSize,
          markerY - leafSize,
          markerX,
          markerY - leafSize,
        )
        ctx.fill()

        // Leaf vein
        ctx.beginPath()
        ctx.moveTo(markerX, markerY - leafSize + 5)
        ctx.lineTo(markerX, markerY + leafSize - 5)
        ctx.strokeStyle = "#dcfce7" // green-100
        ctx.lineWidth = 1
        ctx.stroke()

        // Add text
        ctx.fillStyle = "#166534" // green-800
        ctx.font = "bold 16px serif"
        ctx.textAlign = "center"
        ctx.fillText("Wedding Venue", markerX, markerY + 30)

        // Add coordinates text
        ctx.font = "12px sans-serif"
        ctx.fillStyle = "#14532d" // green-900
        ctx.fillText(`Lat: ${coordinates.lat.toFixed(4)}, Lng: ${coordinates.lng.toFixed(4)}`, markerX, markerY + 50)

        // Add a decorative compass
        const compassX = canvas.width - 50
        const compassY = 50
        const compassRadius = 20

        ctx.beginPath()
        ctx.arc(compassX, compassY, compassRadius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()
        ctx.strokeStyle = "#15803d" // green-700
        ctx.lineWidth = 1
        ctx.stroke()

        // Compass directions
        ctx.fillStyle = "#15803d" // green-700
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("N", compassX, compassY - compassRadius + 12)
        ctx.fillText("S", compassX, compassY + compassRadius - 4)
        ctx.fillText("E", compassX + compassRadius - 4, compassY + 4)
        ctx.fillText("W", compassX - compassRadius + 4, compassY + 4)

        // Compass needle
        ctx.beginPath()
        ctx.moveTo(compassX, compassY - compassRadius + 5)
        ctx.lineTo(compassX + 2, compassY)
        ctx.lineTo(compassX, compassY + 5)
        ctx.lineTo(compassX - 2, compassY)
        ctx.closePath()
        ctx.fillStyle = "#15803d" // green-700
        ctx.fill()

        // Add some trees
        drawTree(ctx, 50, 50, 15)
        drawTree(ctx, canvas.width - 50, canvas.height - 50, 20)
        drawTree(ctx, 70, canvas.height - 70, 12)
        drawTree(ctx, canvas.width - 70, 70, 18)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [coordinates])

  const drawTree = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    // Tree trunk
    ctx.fillStyle = "#92400e" // amber-800
    ctx.beginPath()
    ctx.rect(x - size / 6, y, size / 3, size)
    ctx.fill()

    // Tree foliage
    ctx.fillStyle = "#16a34a" // green-600
    ctx.beginPath()
    ctx.arc(x, y - size / 2, size, 0, Math.PI * 2)
    ctx.fill()
  }

  return (
    <div ref={mapRef} className="w-full h-full bg-green-50 relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-green-500">Map loading...</p>
      </div>
    </div>
  )
}

