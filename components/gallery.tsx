"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Sample gallery images - replace with your actual images
  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=600&width=800`,
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`aspect-[4/3] bg-white p-2 shadow-md rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-green-200 ${inView ? "animate-scaleIn" : "opacity-0"}`}
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-lg transition-transform duration-1000 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors transition-bounce hover:scale-110"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 text-white hover:text-amber-300 transition-colors transition-bounce hover:scale-110"
            onClick={() => setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
            disabled={selectedImage === 0}
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          <button
            className="absolute right-4 text-white hover:text-amber-300 transition-colors transition-bounce hover:scale-110"
            onClick={() =>
              setSelectedImage((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : prev))
            }
            disabled={selectedImage === galleryImages.length - 1}
          >
            <ChevronRight className="h-12 w-12" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full animate-scaleIn">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="absolute bottom-4 text-white text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

