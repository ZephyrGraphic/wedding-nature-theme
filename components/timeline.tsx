"use client"

import { useState } from "react"
import Image from "next/image"

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const timelineEvents = [
    {
      id: 1,
      title: "First Met",
      date: "June 2020",
      description:
        "We met during a hiking trip in the mountains. We were both admiring the same view and started talking about our love for nature.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "First Date",
      date: "July 2020",
      description:
        "Our first official date was at the botanical gardens. We spent hours exploring the different plant species and getting to know each other.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Moved In Together",
      date: "March 2022",
      description:
        "After dating for almost two years, we decided to take the next step and move in together in a cozy cottage near the forest.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "The Proposal",
      date: "December 2024",
      description:
        "John proposed during a sunrise hike to our favorite mountain peak. It was magical with the golden light illuminating the valley below.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="py-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

        {/* Timeline events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-4`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 border-4 border-white z-10"></div>

              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <div
                  className={`bg-white p-4 rounded-lg shadow-md transition-all duration-300 border border-green-200 ${activeIndex === index ? "transform scale-105" : ""}`}
                >
                  <h3 className="text-xl font-serif text-green-700">{event.title}</h3>
                  <p className="text-sm text-green-500 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

