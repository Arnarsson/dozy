"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Clock, Heart, Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { DozyImage, DOZY_IMAGES } from "./dozy-image"

interface WatchScreen {
  id: string
  title: string
  content?: React.ReactNode
  imageSrc?: string
  fallbackContent: React.ReactNode
  bgColor: string
}

export function EnhancedAppleWatchDemo() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [useRealImages, setUseRealImages] = useState(true)

  const screens: WatchScreen[] = [
    {
      id: "sleep-window",
      title: "Sleep Window",
      imageSrc: DOZY_IMAGES.watch.sleepWindow,
      bgColor: "from-blue-900 to-indigo-900",
      fallbackContent: (
        <div className="text-center">
          <Moon className="w-8 h-8 text-blue-400 mb-2 mx-auto" />
          <div className="text-sm font-bold mb-1">Sleep Window</div>
          <div className="text-2xl font-bold text-emerald-400 mb-2">15 min</div>
          <div className="w-full bg-gray-700 h-1 rounded-full mb-2">
            <motion.div 
              className="bg-blue-400 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          <div className="text-xs text-blue-400">"Perfect time to start bedtime routine"</div>
        </div>
      )
    },
    {
      id: "ai-coaching",
      title: "AI Coaching",
      imageSrc: DOZY_IMAGES.watch.aiCoaching,
      bgColor: "from-purple-900 to-pink-900",
      fallbackContent: (
        <div className="text-center">
          <Heart className="w-8 h-8 text-pink-400 mb-2 mx-auto animate-pulse" />
          <div className="text-sm font-bold mb-2">AI Coach Says:</div>
          <motion.div 
            className="text-xs text-pink-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            "Baby seems restless. Try the gentle rock motion for 2-3 minutes."
          </motion.div>
          <motion.div 
            className="mt-2 px-2 py-1 bg-pink-500/20 rounded-lg text-xs"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            90% success rate
          </motion.div>
        </div>
      )
    },
    {
      id: "sleep-progress",
      title: "Sleep Progress",
      imageSrc: DOZY_IMAGES.watch.progress,
      bgColor: "from-emerald-900 to-teal-900",
      fallbackContent: (
        <div className="text-center">
          <Star className="w-8 h-8 text-emerald-400 mb-2 mx-auto" />
          <div className="text-sm font-bold mb-1">Tonight's Progress</div>
          <div className="text-lg font-bold text-emerald-400 mb-2">2h 45m</div>
          <div className="grid grid-cols-3 gap-1 mb-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                className={`h-4 rounded ${i <= 4 ? 'bg-emerald-400' : 'bg-gray-600'}`}
                initial={{ height: 0 }}
                animate={{ height: 16 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="text-xs text-emerald-400">Best night this week!</div>
        </div>
      )
    },
    {
      id: "milestone",
      title: "Milestone",
      imageSrc: DOZY_IMAGES.watch.milestone,
      bgColor: "from-yellow-900 to-orange-900",
      fallbackContent: (
        <div className="text-center">
          <motion.div
            className="text-4xl mb-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🏆
          </motion.div>
          <div className="text-sm font-bold mb-1">Congratulations!</div>
          <div className="text-xs text-yellow-400 mb-2">7 nights of improved sleep</div>
          <motion.div 
            className="text-xs bg-yellow-500/20 rounded-lg px-2 py-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            You're a sleep champion!
          </motion.div>
        </div>
      )
    }
  ]

  // Auto-advance screens
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, screens.length])

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length)
  }

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length)
  }

  return (
    <div className="relative group">
      {/* Apple Watch Frame */}
      <motion.div 
        className="w-64 h-80 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Watch Case */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-black rounded-[48px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[42px] relative overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-2 rounded-[36px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  {/* Try to load real image first */}
                  {useRealImages && screens[currentScreen].imageSrc ? (
                    <div className="relative w-full h-full">
                      <DozyImage
                        src={screens[currentScreen].imageSrc!}
                        alt={screens[currentScreen].title}
                        width={240}
                        height={300}
                        className="w-full h-full rounded-[36px]"
                        objectFit="cover"
                        fallback=""
                        animate={false}
                      />
                      {/* Fallback overlay if image fails */}
                      <div className={`absolute inset-0 bg-gradient-to-b ${screens[currentScreen].bgColor} rounded-[36px] flex flex-col items-center justify-center text-white p-4 opacity-0 hover:opacity-90 transition-opacity duration-300`}>
                        {screens[currentScreen].fallbackContent}
                      </div>
                    </div>
                  ) : (
                    /* Fallback to animated content */
                    <div className={`w-full h-full bg-gradient-to-b ${screens[currentScreen].bgColor} rounded-[36px] flex flex-col items-center justify-center text-white p-4`}>
                      {screens[currentScreen].fallbackContent}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Screen Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                {screens.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${index === currentScreen ? 'bg-white' : 'bg-white/30'}`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentScreen(index)}
                  />
                ))}
              </div>
            </div>

            {/* Digital Crown */}
            <div className="absolute right-0 top-16 w-2 h-8 bg-gray-600 rounded-l-md"></div>
            <div className="absolute right-0 top-28 w-1.5 h-6 bg-gray-700 rounded-l-md"></div>
          </div>
        </div>

        {/* Interactive Controls */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm z-10"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
            whileTap={{ scale: 0.95 }}
            onClick={prevScreen}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <motion.button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm z-10"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextScreen}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Auto-play Control */}
        <motion.button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAutoPlay(!isAutoPlay)}
        >
          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </motion.button>

        {/* Image Mode Toggle */}
        <motion.button
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.7)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setUseRealImages(!useRealImages)}
        >
          {useRealImages ? "Screenshots" : "Animation"}
        </motion.button>
      </motion.div>

      {/* Screen Title */}
      <motion.div 
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-lg font-bold text-white mb-1">
          {screens[currentScreen].title}
        </div>
        <div className="text-sm text-gray-400">
          {useRealImages ? "Real DOZY screenshots" : "Interactive simulation"}
        </div>
      </motion.div>

      {/* Interaction Hint */}
      <motion.div 
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-xs text-blue-400 opacity-70 text-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✨ Click, swipe, or hover to explore
      </motion.div>
    </div>
  )
}