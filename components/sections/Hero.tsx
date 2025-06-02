"use client"

import React from "react"
import { ArrowRight, Moon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="outline" 
            className="mb-8 bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors duration-300"
          >
            <span className="mr-2">🏆</span>
            #1 Sleep App for Parents
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 leading-tight">
            Turn sleepless nights into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              restful dreams
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-400 mb-4 font-medium">
            Science-backed sleep, right on your wrist
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            DOZY's empathetic AI transforms parenting with personalized sleep guidance delivered directly to your Apple Watch. Say goodbye to exhausting nights and hello to confident parenting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105"
            >
              Get DOZY Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Watch Success Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">15K+</div>
              <div className="text-gray-400">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">90%</div>
              <div className="text-gray-400">Better Sleep Week 1</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 flex items-center justify-center">
                4.9 <Star className="w-6 h-6 ml-1 fill-current text-yellow-400" />
              </div>
              <div className="text-gray-400">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Apple Watch Mock */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <div className="w-48 h-60 bg-gradient-to-b from-gray-800 to-black rounded-[32px] p-2 shadow-2xl">
            <div className="w-full h-full bg-black rounded-[28px] relative overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-b from-gray-900 to-black rounded-[24px] flex flex-col items-center justify-center text-white p-3">
                <Moon className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-center">
                  <div className="text-sm font-bold mb-1">Sleep Window</div>
                  <div className="text-2xl font-bold text-emerald-400 mb-2">15 min</div>
                  <div className="w-full bg-gray-700 h-1 rounded-full mb-2">
                    <div className="bg-blue-400 h-1 rounded-full w-3/4"></div>
                  </div>
                  <div className="text-xs text-blue-400">"Perfect time to start bedtime routine"</div>
                </div>
              </div>
              <div className="absolute right-0 top-12 w-1 h-6 bg-gray-600 rounded-l-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}