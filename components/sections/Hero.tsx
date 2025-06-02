"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Moon, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EnhancedAppleWatchDemo } from "@/components/ui/enhanced-apple-watch-demo"
import { MorphingGradient } from "@/components/ui/morphing-gradient"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Morphing Background */}
      <MorphingGradient intensity="medium" />
      
      {/* Static Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                variant="outline" 
                className="mb-8 bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <motion.span 
                  className="mr-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🏆
                </motion.span>
                #1 Sleep App for Parents
              </Badge>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Turn sleepless nights into{" "}
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                restful dreams
              </motion.span>
            </motion.h1>

            {/* Subtitle with Typewriter Effect */}
            <motion.p 
              className="text-xl md:text-2xl text-blue-400 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Science-backed sleep, right on your wrist
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              DOZY's empathetic AI transforms parenting with personalized sleep guidance delivered directly to your Apple Watch. Say goodbye to exhausting nights and hello to confident parenting.
            </motion.p>

            {/* CTA Buttons with Hover Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center">
                    Get DOZY Now
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:border-gray-500"
                >
                  Watch Success Stories
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats with Counter Animation */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7, type: "spring" }}
                >
                  15K+
                </motion.div>
                <div className="text-gray-400">Happy Families</div>
              </motion.div>
              
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9, type: "spring" }}
                >
                  90%
                </motion.div>
                <div className="text-gray-400">Better Sleep Week 1</div>
              </motion.div>
              
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 flex items-center justify-center lg:justify-start"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.1, type: "spring" }}
                >
                  4.9 
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 ml-1 fill-current text-yellow-400" />
                  </motion.div>
                </motion.div>
                <div className="text-gray-400">App Store Rating</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Enhanced Interactive Apple Watch Demo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <EnhancedAppleWatchDemo />
              
              {/* Floating Elements around Watch */}
              <motion.div
                className="absolute -top-8 -left-8 text-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -right-8 text-2xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🌙
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-12 text-xl"
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                💤
              </motion.div>

              {/* "Try It" Call-to-action */}
              <motion.div
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                👆 Try the interactive demo!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Explore DOZY</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
            whileHover={{ borderColor: "#60a5fa" }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}