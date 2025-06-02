"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface DozyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fallback?: string
  animate?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export function DozyImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  priority = false,
  fallback = "/placeholder.jpg",
  animate = true,
  objectFit = "cover"
}: DozyImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      variants={animate ? imageVariants : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate && !isLoading ? "visible" : undefined}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      )}

      {/* Main Image */}
      <Image
        src={hasError ? fallback : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ objectFit }}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Overlay for premium effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  )
}

// Predefined DOZY image paths for easy management
export const DOZY_IMAGES = {
  // Apple Watch Screenshots
  watch: {
    sleepWindow: "/Images/watch-sleep-window.png",
    aiCoaching: "/Images/watch-ai-coaching.png", 
    progress: "/Images/watch-progress.png",
    milestone: "/Images/watch-milestone.png",
    overview: "/Images/watch-overview.png"
  },
  
  // Lifestyle Photos
  lifestyle: {
    parentWithBaby: "/Images/parent-with-baby.jpg",
    familySleeping: "/Images/family-sleeping.jpg",
    morningHappy: "/Images/morning-happy-family.jpg",
    bedtimeRoutine: "/Images/bedtime-routine.jpg"
  },
  
  // Testimonial Photos
  testimonials: {
    sarah: "/Images/testimonial-sarah.jpg",
    mike: "/Images/testimonial-mike.jpg",
    jessica: "/Images/testimonial-jessica.jpg",
    david: "/Images/testimonial-david.jpg"
  },
  
  // Product Images
  product: {
    appIcon: "/Images/dozy-app-icon.png",
    hero: "/Images/hero-background.jpg",
    features: "/Images/features-showcase.png"
  },
  
  // Brand Assets
  brand: {
    logo: "/Images/dozy-logo.png",
    logoWhite: "/Images/dozy-logo-white.png",
    iconMoon: "/Images/dozy-moon-icon.png"
  }
}

// Image Gallery Component for showcasing multiple images
export function ImageGallery({ 
  images, 
  className = "",
  columns = 3 
}: { 
  images: Array<{src: string, alt: string}>
  className?: string
  columns?: number
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
        >
          <DozyImage
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      ))}
    </div>
  )
}