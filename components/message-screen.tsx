"use client"

import { useEffect, useState } from "react"
import { Heart, Sparkles } from "lucide-react"

export default function MessageScreen() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-purple-300 opacity-20"
            size={Math.random() * 40 + 20}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationName: "float",
              animationDuration: `${5 + Math.random() * 3}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: i * 0.2 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-20 max-w-4xl text-center space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Decorative top */}
        <div className="flex justify-center gap-4">
          <Sparkles className="text-pink-300 animate-spin drop-shadow-lg" size={32} />
          <Heart className="text-pink-400 animate-pulse drop-shadow-lg" size={32} />
          <Sparkles className="text-pink-300 animate-spin drop-shadow-lg" size={32} />
        </div>

        {/* Main message */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
            A Special Message
          </h2>

          <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <p className="text-pink-200 font-semibold italic text-2xl mb-6 drop-shadow-lg">"On your special day, I want you to know..."</p>

              <div className="space-y-6 text-white/95">
                <p className="text-lg md:text-xl leading-relaxed">
                  You make every single day brighter just by being in it. Your smile, your laugh, your kindness they mean
                  everything to me bachchaaa.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  Thank you for all the beautiful moments we've shared, and I can't wait to create a thousand more memories
                  with you jaannn.
                </p>

                <p className="text-pink-200 font-semibold text-xl leading-relaxed">
                  You deserve all the happiness in the world, and I'm so grateful to celebrate this special day with you i know i am not with you right now but i promise to make this day very special for you when i will be with you jaannn.
                </p>

                <p className="text-pink-100 italic text-2xl font-bold mt-8">Happy Birthday to the love of my life. 💕</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="flex justify-center gap-4">
          <Sparkles className="text-pink-300 animate-spin drop-shadow-lg" size={32} />
          <Heart className="text-pink-400 animate-pulse drop-shadow-lg" size={32} />
          <Sparkles className="text-pink-300 animate-spin drop-shadow-lg" size={32} />
        </div>

        {/* Footer message */}
        <div className="pt-8 border-t-2 border-pink-300/50">
          <p className="text-lg text-pink-200 font-semibold drop-shadow-lg">Forever yours 💕</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-60px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(15px);
          }
        }
      `}</style>
    </div>
  )
}
