"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

interface PhotoCollageProps {
  onSpecialMessage: () => void
}

export default function PhotoCollage({ onSpecialMessage }: PhotoCollageProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Your beautiful photos together
  const photos = [
    { id: 1, src: "/1.jpeg", title: "First image of us together" },
    { id: 2, src: "/2.jpeg", title: "First Days of ours" },
    { id: 3, src: "/3.jpeg", title: "Stories of collage" },
    { id: 4, src: "/4.jpeg", title: "Long Drivess" },
    { id: 5, src: "/5.jpeg", title: "Navratriiii" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
        setIsTransitioning(false)
      }, 500) // Smoother transition timing
    }, 5000) // Longer display time to appreciate each photo

    return () => clearInterval(interval)
  }, [photos.length])

  const handlePrevious = () => {
    if (isTransitioning) return // Prevent rapid clicks during transition
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
      setIsTransitioning(false)
    }, 500)
  }

  const handleNext = () => {
    if (isTransitioning) return // Prevent rapid clicks during transition
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
      setIsTransitioning(false)
    }, 500)
  }

  const currentPhoto = photos[currentPhotoIndex]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      {/* Floating balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-10 rounded-full opacity-30"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              backgroundColor: ["#d946ef", "#ec4899", "#f472b6", "#d946ef"][i % 4],
              animationName: "float",
              animationDuration: `${4 + i}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: i * 0.3 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-2xl flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
            Our Beautiful Moments
          </h2>
          <p className="text-white/90 text-xl drop-shadow-lg">Memories we cherish together 💕</p>
        </div>

        <div className="relative inline-block max-w-2xl mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-black/20">
          <div className="relative w-auto h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] max-h-[600px] md:max-h-[800px] bg-gradient-to-br from-purple-100/20 to-pink-100/20 flex items-center justify-center">
            <Image
              src={currentPhoto.src}
              alt={`Memory ${currentPhoto.id}`}
              width={800}
              height={600}
              className={`w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500 ease-in-out ${
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              }`}
              priority={currentPhotoIndex === 0}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
            />
          </div>

          {/* Decorative frame */}
          <div className="absolute inset-0 border-4 border-white/30 rounded-3xl pointer-events-none" />

          {/* Photo counter */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-purple-600 shadow-lg">
            {currentPhotoIndex + 1} / {photos.length}
          </div>

          {/* Photo title overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-3xl">
            <p className="text-white text-lg font-semibold drop-shadow-lg">
              {currentPhoto.title}
            </p>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="p-4 rounded-full bg-white/95 backdrop-blur shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white/20"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Photo indicators */}
          <div className="flex gap-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentPhotoIndex(index)
                    setIsTransitioning(false)
                  }, 500)
                }}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex 
                    ? "bg-pink-500 w-10 h-3 shadow-lg" 
                    : "bg-white/60 w-3 h-3 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="p-4 rounded-full bg-white/95 backdrop-blur shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white/20"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <button
          onClick={onSpecialMessage}
          className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/20"
        >
          <MessageCircle size={20} />
          Special Message
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  )
}
