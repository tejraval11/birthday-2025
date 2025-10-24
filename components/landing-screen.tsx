"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

interface LandingScreenProps {
  onCelebrate: () => void
}

export default function LandingScreen({ onCelebrate }: LandingScreenProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)

  const handleCelebrate = () => {
    setIsAnimating(true)
    playWishAudio()
    playHappyBirthdaySound()
    createConfetti()
    setTimeout(() => {
      onCelebrate()
    }, 1500)
  }

  const playWishAudio = () => {
    try {
      const audio = new Audio('/Wish.mp3')
      audio.volume = 0.8
      
      // Handle audio loading
      audio.addEventListener('canplaythrough', () => {
        setAudioLoaded(true)
      })
      
      audio.addEventListener('error', (e) => {
        console.log('Audio loading failed:', e)
        setAudioLoaded(false)
      })
      
      audio.play().catch((error) => {
        console.log('Audio play failed:', error)
        // Fallback to the existing sound if audio fails
      })
    } catch (error) {
      console.log('Audio creation failed:', error)
    }
  }

  const playHappyBirthdaySound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

    // Better happy birthday melody with more notes
    const notes = [
      { freq: 262, duration: 0.4 }, // C
      { freq: 262, duration: 0.4 }, // C
      { freq: 294, duration: 0.8 }, // D
      { freq: 262, duration: 0.8 }, // C
      { freq: 349, duration: 0.8 }, // F
      { freq: 330, duration: 1.6 }, // E
      { freq: 262, duration: 0.4 }, // C
      { freq: 262, duration: 0.4 }, // C
      { freq: 294, duration: 0.8 }, // D
      { freq: 262, duration: 0.8 }, // C
      { freq: 392, duration: 0.8 }, // G
      { freq: 349, duration: 1.6 }, // F
    ]

    let currentTime = audioContext.currentTime

    notes.forEach(({ freq, duration }) => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = freq
      oscillator.type = "triangle" // Changed to triangle for warmer sound
      filter.type = "lowpass"
      filter.frequency.value = 2000

      gainNode.gain.setValueAtTime(0.25, currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + duration * 0.9)

      oscillator.start(currentTime)
      oscillator.stop(currentTime + duration)

      currentTime += duration * 0.95
    })
  }

  const createConfetti = () => {
    const confettiPieces = 50
    for (let i = 0; i < confettiPieces; i++) {
      const confetti = document.createElement("div")
      confetti.className = "fixed pointer-events-none"
      confetti.style.left = Math.random() * 100 + "%"
      confetti.style.top = "-10px"
      confetti.style.width = Math.random() * 8 + 4 + "px"
      confetti.style.height = confetti.style.width
      confetti.style.backgroundColor = ["#d946ef", "#ec4899", "#f472b6", "#f0abfc", "#d946ef"][
        Math.floor(Math.random() * 5)
      ]
      confetti.style.borderRadius = "50%"
      confetti.style.animationName = "fall"
      confetti.style.animationDuration = `${2 + Math.random() * 1}s`
      confetti.style.animationTimingFunction = "linear"
      confetti.style.animationFillMode = "forwards"
      confetti.style.opacity = "0.8"
      document.body.appendChild(confetti)

      setTimeout(() => confetti.remove(), 3000)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/30 animate-pulse"
            size={Math.random() * 60 + 40}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: i * 0.5 + "s",
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center space-y-8 max-w-4xl mx-auto">
        {/* Animated title */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl animate-pulse">
            Happy Birthday
          </h1>
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 drop-shadow-lg">
            Sayani 💕
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-lg">
            To the most amazing person in my life ✨
          </p>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-pink-300 rounded-full" />
          <Heart className="text-pink-300 drop-shadow-lg" size={32} />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-pink-300 rounded-full" />
        </div>

        {/* Celebrate button */}
        <div className="pt-4">
          <button
            onClick={handleCelebrate}
            disabled={isAnimating}
            className="relative px-10 py-5 md:px-16 md:py-6 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed shadow-2xl border-2 border-white/20"
          >
            {isAnimating ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin">🎵</div>
                <span>Playing your wish...</span>
              </div>
            ) : (
              "Celebrate 🎉"
            )}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <p className="text-lg text-white/80 mb-3 drop-shadow-lg">Click to celebrate</p>
          <div className="text-3xl text-white/60">↓</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
