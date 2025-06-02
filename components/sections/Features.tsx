"use client"

import { Moon, Sparkles, BarChart3, Heart, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Smart Sleep Windows",
    description: "AI predicts optimal nap times based on your baby's unique patterns",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Gentle Coaching",
    description: "Real-time guidance like 'Dim lights now' delivered to your wrist",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Progress Tracking",
    description: "Visualize sleep improvements and celebrate every milestone",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Empathetic Support",
    description: "Encouraging messages tailored to your toughest moments",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 bg-blue-500/10 border-blue-500/20 text-blue-400"
          >
            AI-Powered Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Your personalized sleep companion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DOZY combines cutting-edge AI with pediatric sleep science to create a personalized experience for your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 backdrop-blur-sm group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Watch Demo Section */}
        <div className="mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Your gentle sleep coach, always with you
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                DOZY lives on your Apple Watch, providing real-time guidance exactly when you need it. No more fumbling with your phone at 3 AM or trying to remember complex sleep schedules.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white">Perfect Timing</h4>
                    <p className="text-gray-300">
                      Gentle haptic alerts notify you of optimal sleep windows before your baby shows overtired signs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white">Empathetic Guidance</h4>
                    <p className="text-gray-300">
                      Supportive coaching that understands the emotional journey of helping your baby sleep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Watch and Phone Mock */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-gradient-to-b from-gray-800 to-black rounded-[40px] p-3 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[36px] relative overflow-hidden">
                    <div className="absolute inset-3 bg-gradient-to-b from-gray-900 to-black rounded-[32px] flex flex-col items-center justify-center text-white p-4">
                      <Moon className="w-10 h-10 text-blue-400 mb-3" />
                      <div className="text-center">
                        <div className="text-xl font-bold mb-1">Sleep Window</div>
                        <div className="text-3xl font-bold text-emerald-400 mb-2">15 min</div>
                        <div className="w-full bg-gray-700 h-1 rounded-full mb-3">
                          <div className="bg-blue-400 h-1 rounded-full w-3/4"></div>
                        </div>
                        <div className="text-sm text-blue-400">"Perfect time to start bedtime routine"</div>
                      </div>
                    </div>
                    <div className="absolute right-0 top-16 w-2 h-8 bg-gray-600 rounded-l-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}