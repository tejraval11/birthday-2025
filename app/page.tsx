"use client"

import { useState, useRef } from "react"
import LandingScreen from "@/components/landing-screen"
import PhotoCollage from "@/components/photo-collage"
import MessageScreen from "@/components/message-screen"
import TimelineScreen from "@/components/timeline-screen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const collageRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const handleCelebrate = () => {
    setCurrentScreen(1)
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleSpecialMessage = () => {
    setCurrentScreen(3)
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleTimelineNext = () => {
    setCurrentScreen(2)
    setTimeout(() => {
      collageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleTimeline = () => {
    setCurrentScreen(3)
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="w-full overflow-hidden relative">
      {/* Landing Screen */}
      <div className="min-h-screen w-full relative z-10">
        <LandingScreen onCelebrate={handleCelebrate} />
      </div>

      {/* Photo Collage Screen */}
      <div ref={collageRef} className="min-h-screen w-full relative z-10">
        <PhotoCollage onSpecialMessage={handleSpecialMessage} />
      </div>

      {/* Message Screen */}
      <div ref={messageRef} className="min-h-screen w-full relative z-10">
        <MessageScreen />
      </div>

      {/* Timeline Screen */}
      <div ref={timelineRef} className="min-h-screen w-full relative z-10">
        <TimelineScreen onNext={handleTimelineNext} />
      </div>
    </main>
  )
}
