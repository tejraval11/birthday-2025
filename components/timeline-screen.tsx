"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Heart, Calendar, MessageCircle, Star, Sparkles } from "lucide-react"

interface TimelineScreenProps {
  onNext: () => void
}

export default function TimelineScreen({ onNext }: TimelineScreenProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineEvents = [
    {
      date: "16 Feb 2024",
      title: "The First Text 💌",
      description: "I texted her for the first time, little did I know this would change everything",
      icon: MessageCircle,
      color: "from-pink-500 to-purple-500"
    },
    {
      date: "March 2024",
      title: "Our First Meeting 👫",
      description: "We met for the first time - the beginning of something beautiful",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      hasPhoto: true,
      image: "/timeline/1.jpeg"
    },
    {
      date: "April 2024",
      title: "She Said Yes! 💕",
      description: "The moment that changed everything - she said yes to being with me",
      icon: Star,
      color: "from-pink-500 to-red-500",
      hasPhoto: true,
      image: "/timeline/2.jpeg"
    },
    {
      date: "May 2024",
      title: "Countless Sleepless Nights 🌙",
      description: "Endless conversations, getting to know each other, falling in love through texts",
      icon: MessageCircle,
      color: "from-blue-500 to-purple-500"
    },
    {
      date: "June 2024",
      title: "Our First Kiss 💋",
      description: "The magical moment that sealed our love",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      date: "July - August 2024",
      title: "Summer of Love ☀️",
      description: "Growing closer, building memories, falling deeper in love",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      date: "September 2024",
      title: "Countless Hours Together 💬",
      description: "Talking for hours, sharing dreams, planning our future",
      icon: MessageCircle,
      color: "from-green-500 to-blue-500"
    },
    {
      date: "October 2024",
      title: "Navratri Celebrations 🎭",
      description: "Dancing together, celebrating our culture, making beautiful memories",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      hasPhoto: true,
      image: "/timeline/3.jpeg"
    },
    {
      date: "October 2024",
      title: "Navratri Day 2 🎭",
      description: "Continuing our celebrations, more beautiful moments together",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      hasPhoto: true,
      image: "/timeline/4.jpeg"
    },
    {
      date: "Her Birthday",
      title: "Her Special Day 🎂",
      description: "Celebrating the most important person in my life",
      icon: Heart,
      color: "from-pink-500 to-purple-500",
      hasPhoto: true
    },
    {
      date: "January 2025",
      title: "New Year Together 🎊",
      description: "Starting the new year with the love of my life",
      icon: Star,
      color: "from-blue-500 to-purple-500",
      hasPhoto: true,
      image: "/timeline/5.jpeg"
    },
    {
      date: "February 2025",
      title: "Valentine's Week 💝",
      description: "A week full of love, surprises, and precious moments",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      hasPhoto: true,
      multiplePhotos: true
    },
    {
      date: "11 March 2025",
      title: "My Birthday - Made Special by Her 🎉",
      description: "She made my birthday the most special day with her love and surprises",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      hasPhoto: true
    },
    {
      date: "April/May 2025",
      title: "College Days Together 🎓",
      description: "Meeting in college, studying together, building our future",
      icon: Heart,
      color: "from-green-500 to-blue-500",
      hasPhoto: true,
      images: ["/timeline/College1.jpeg", "/timeline/College2.jpeg"]
    },
    {
      date: "Summer 2025",
      title: "Beautiful Days Together ☀️",
      description: "Countless beautiful days spent together, creating memories",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      hasPhoto: true,
      images: ["/timeline/Days1.jpeg", "/timeline/Days2.jpeg", "/timeline/Days3.jpeg", "/timeline/Days4.jpeg"]
    },
    {
      date: "This Navratri",
      title: "Navratri 2025 - Day 1 🎭",
      description: "Celebrating our traditions together, creating new memories",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      hasPhoto: true,
      image: "/timeline/Nav-2-1.jpeg"
    },
    {
      date: "This Navratri",
      title: "Navratri 2025 - Day 2 🎭",
      description: "More celebrations, more beautiful moments together",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      hasPhoto: true,
      image: "/timeline/Nav-2-2.jpeg"
    },
    {
      date: "October 2025",
      title: "Our Latest Meeting 💕",
      description: "The most recent memory of us together, still making new memories",
      icon: Heart,
      color: "from-pink-500 to-purple-500",
      hasPhoto: true,
      image: "/timeline/Latest.jpeg"
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/20 animate-pulse"
            size={Math.random() * 30 + 20}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: i * 0.3 + "s",
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4">
            Our Love Story
          </h1>
          <p className="text-xl text-white/90 drop-shadow-lg">
            A journey of love, laughter, and countless beautiful memories 💕
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 rounded-full"></div>
          
          {/* Timeline events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg border-4 border-white/30`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  {/* Event content */}
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="text-pink-300" size={20} />
                      <span className="text-pink-200 font-semibold text-lg">{event.date}</span>
                      {event.hasPhoto && (
                        <div className="flex items-center gap-1">
                          <span className="text-green-300 text-sm">📸</span>
                          {event.multiplePhotos && <span className="text-green-300 text-sm">📸📸📸📸📸</span>}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                      {event.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Display single image */}
                    {event.image && (
                      <div className="mt-4 rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    {/* Display multiple images */}
                    {event.images && event.images.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {event.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
                            <Image
                              src={img}
                              alt={`${event.title} - Image ${imgIndex + 1}`}
                              width={200}
                              height={150}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Next button */}
        <div className="text-center mt-12">
          <button
            onClick={onNext}
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/20"
          >
            See Our Photos 💕
          </button>
        </div>
      </div>
    </div>
  )
}
