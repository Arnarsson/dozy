"use client"

import { Star, Play, Pause } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Emma",
    role: "First-time mom",
    location: "San Francisco, CA",
    problem: "Emma would only sleep 30 minutes at a time",
    solution: "Now sleeps 2-hour naps and 8 hours at night",
    quote: "DOZY gave me my confidence back as a new mom. The AI coaching felt like having a sleep expert right on my wrist.",
    improvement: "90% better sleep in 2 weeks",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael & The Twins",
    role: "Dad of 8-month-old twins",
    location: "Austin, TX",
    problem: "Chaotic sleep schedules, exhausted parents",
    solution: "Synchronized sleep, predictable routine",
    quote: "Managing twins seemed impossible until DOZY. Now they sleep at the same time, and we actually get rest!",
    improvement: "Twins sleeping in sync within 10 days",
    avatar: "👨‍💼",
  },
  {
    id: 3,
    name: "Jenny & Oliver",
    role: "Working mom",
    location: "New York, NY",
    problem: "Unpredictable naps, impossible to plan day",
    solution: "Consistent schedule, reliable sleep windows",
    quote: "As a working mom, DOZY's predictions helped me plan my day. I knew exactly when Oliver would nap.",
    improvement: "Nap duration increased by 300%",
    avatar: "👩‍🎓",
  },
]

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 bg-blue-500/10 border-blue-500/20 text-blue-400"
          >
            Real Parents, Real Results
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Hear from families like yours
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These parents transformed their sleep struggles into success stories with DOZY's guidance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Testimonial */}
          <Card className="mb-12 bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video Placeholder */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{testimonials[activeTestimonial].avatar}</div>
                    <Button 
                      size="lg"
                      className="w-16 h-16 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border-2 border-blue-400"
                    >
                      <Play className="w-8 h-8 text-blue-400 ml-1" />
                    </Button>
                    <p className="mt-4 text-gray-400">Video Testimonial</p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-blue-400 mb-1">{testimonials[activeTestimonial].role}</p>
                    <p className="text-gray-400 text-sm">{testimonials[activeTestimonial].location}</p>
                  </div>

                  <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>

                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-1">Before:</h4>
                      <p className="text-gray-300">{testimonials[activeTestimonial].problem}</p>
                    </div>
                    
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-1">After:</h4>
                      <p className="text-gray-300">{testimonials[activeTestimonial].solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-blue-400 font-semibold text-center">
                      {testimonials[activeTestimonial].improvement}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Selector */}
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-600/20 border-blue-500/50'
                    : 'bg-gray-900/30 border-gray-800 hover:bg-gray-900/50'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{testimonial.avatar}</div>
                  <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{testimonial.role}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}