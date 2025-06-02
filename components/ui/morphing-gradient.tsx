"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MorphingGradientProps {
  className?: string
  intensity?: "subtle" | "medium" | "vibrant"
}

export function MorphingGradient({ className = "", intensity = "medium" }: MorphingGradientProps) {
  const [scrollY, setScrollY] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const timeInterval = setInterval(() => setTime(Date.now()), 100)
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timeInterval)
    }
  }, [])

  // Calculate dynamic colors based on scroll and time
  const getGradientColors = () => {
    const scrollFactor = scrollY / 1000
    const timeFactor = Math.sin(time / 3000) * 0.3
    
    const baseHue = 220 + scrollFactor * 60 + timeFactor * 30
    const saturation = intensity === "subtle" ? 30 : intensity === "medium" ? 50 : 70
    const lightness = intensity === "subtle" ? 5 : intensity === "medium" ? 8 : 12
    
    return {
      color1: `hsl(${baseHue}, ${saturation}%, ${lightness}%)`,
      color2: `hsl(${baseHue + 40}, ${saturation + 10}%, ${lightness + 2}%)`,
      color3: `hsl(${baseHue + 80}, ${saturation - 10}%, ${lightness + 1}%)`,
      color4: `hsl(${baseHue + 120}, ${saturation}%, ${lightness}%)`
    }
  }

  const colors = getGradientColors()

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Primary Gradient Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${colors.color1}, transparent 70%),
                      radial-gradient(ellipse 60% 40% at 0% 100%, ${colors.color2}, transparent 70%),
                      radial-gradient(ellipse 60% 40% at 100% 100%, ${colors.color3}, transparent 70%)`
        }}
        animate={{
          backgroundPosition: [
            "50% 0%, 0% 100%, 100% 100%",
            "60% 10%, 10% 90%, 90% 90%",
            "50% 0%, 0% 100%, 100% 100%"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Animated Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from ${time / 50}deg at 50% 50%, 
                      ${colors.color4}00, ${colors.color1}20, ${colors.color2}10, 
                      ${colors.color3}15, ${colors.color4}00)`
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full opacity-20 blur-xl"
          style={{
            background: `radial-gradient(circle, ${Object.values(colors)[i]}, transparent)`,
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
    </motion.div>
  )
}

// Hook for scroll-based color changes
export function useScrollGradient() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = window.scrollY / totalScroll
      setScrollProgress(Math.min(currentProgress, 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollProgress
}