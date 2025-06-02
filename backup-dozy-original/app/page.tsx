"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Moon,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Menu,
  X,
  ArrowRight,
  Clock,
  BarChart3,
  Sparkles,
  Heart,
  MessageCircle,
  CheckCircle,
  Award,
  Shield,
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [emailInput, setEmailInput] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Emma",
      role: "First-time mom",
      location: "San Francisco, CA",
      problem: "Emma would only sleep 30 minutes at a time",
      solution: "Now sleeps 2-hour naps and 8 hours at night",
      quote:
        "DOZY gave me my confidence back as a new mom. The AI coaching felt like having a sleep expert right on my wrist.",
      improvement: "90% better sleep in 2 weeks",
      videoUrl: "/placeholder.svg?height=720&width=1280&text=Sarah+and+Emma+Video+Testimonial",
      thumbnailUrl: "/placeholder.svg?height=400&width=600&text=Sarah+and+Emma+Thumbnail",
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
      videoUrl: "/placeholder.svg?height=720&width=1280&text=Michael+and+Twins+Video+Testimonial",
      thumbnailUrl: "/placeholder.svg?height=400&width=600&text=Michael+and+Twins+Thumbnail",
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
      videoUrl: "/placeholder.svg?height=720&width=1280&text=Jenny+and+Oliver+Video+Testimonial",
      thumbnailUrl: "/placeholder.svg?height=400&width=600&text=Jenny+and+Oliver+Thumbnail",
      avatar: "👩‍🎓",
    },
  ]

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

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setVideoProgress(progress)
    }
  }

  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index)
    setIsPlaying(false)
    setVideoProgress(0)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput) {
      alert(`Thank you! We'll send DOZY information to ${emailInput}`)
      setEmailInput("")
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("bg-opacity-90", "backdrop-blur-md", "shadow-md")
        } else {
          headerRef.current.classList.remove("bg-opacity-90", "backdrop-blur-md", "shadow-md")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080A0F] to-[#0F1A2A] text-white">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#080A0F] bg-opacity-80"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Moon className="text-[#258CF9] w-8 h-8" />
            <span className="text-2xl font-bold tracking-wider">D O Z Y</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
              Success Stories
            </a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#258CF9] hover:bg-[#1976D2] text-white rounded-full px-6 py-2"
            >
              Get DOZY Now
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#080A0F] bg-opacity-95 border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Night+Sky+Background')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">
              🏆 #1 Sleep App for Parents
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn sleepless nights into restful dreams
            </h1>

            <p className="text-xl md:text-2xl text-[#258CF9] mb-4 font-medium">
              Science-backed sleep, right on your wrist
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              DOZY's empathetic AI transforms parenting with personalized sleep guidance delivered directly to your
              Apple Watch. Say goodbye to exhausting nights and hello to confident parenting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-[#258CF9] hover:bg-[#1976D2] text-white rounded-full px-8 py-6 text-lg font-semibold"
              >
                Get DOZY Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Watch Success Stories
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#32D74B]">15K+</div>
                <div className="text-white/60">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#32D74B]">90%</div>
                <div className="text-white/60">Better Sleep Week 1</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#32D74B] flex items-center justify-center">
                  4.9 <Star className="w-5 h-5 ml-1 fill-current" />
                </div>
                <div className="text-white/60">App Store Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Demo Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your gentle sleep coach, always with you</h2>
              <p className="text-white/80 mb-8 text-lg">
                DOZY lives on your Apple Watch, providing real-time guidance exactly when you need it. No more fumbling
                with your phone at 3 AM or trying to remember complex sleep schedules.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#258CF9]/20 p-2 rounded-full">
                    <Clock className="w-6 h-6 text-[#258CF9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Perfect Timing</h3>
                    <p className="text-white/70">
                      Gentle haptic alerts notify you of optimal sleep windows before your baby shows overtired signs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#258CF9]/20 p-2 rounded-full">
                    <MessageCircle className="w-6 h-6 text-[#258CF9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Empathetic Guidance</h3>
                    <p className="text-white/70">
                      Supportive coaching that understands the emotional journey of helping your baby sleep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-gradient-to-b from-gray-800 to-black rounded-[40px] p-3 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[36px] relative overflow-hidden">
                    {/* Watch Screen Content */}
                    <div className="absolute inset-3 bg-gradient-to-b from-[#0F1A2A] to-[#0F1A2A] rounded-[32px] flex flex-col items-center justify-center text-white p-4">
                      <Moon className="w-10 h-10 text-[#258CF9] mb-3" />
                      <div className="text-center">
                        <div className="text-xl font-bold mb-1">Sleep Window</div>
                        <div className="text-3xl font-bold text-[#32D74B] mb-2">15 min</div>
                        <div className="w-full bg-white/20 h-1 rounded-full mb-3">
                          <div className="bg-[#258CF9] h-1 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <div className="text-sm text-[#258CF9]">"Perfect time to start bedtime routine"</div>
                      </div>
                    </div>
                    {/* Digital Crown */}
                    <div className="absolute right-0 top-16 w-2 h-8 bg-gray-600 rounded-l-lg"></div>
                  </div>
                </div>
                {/* Phone Screen */}
                <div className="absolute -right-16 top-10 w-48 h-96 bg-gradient-to-b from-gray-800 to-black rounded-[24px] p-2 shadow-xl hidden md:block">
                  <div className="w-full h-full bg-[#0F1A2A] rounded-[20px] p-3 overflow-hidden">
                    <div className="text-xs text-white/70 mb-2">Today's Sleep</div>
                    <div className="text-lg font-bold mb-4">Emma's Progress</div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Morning Nap</span>
                          <span className="text-[#32D74B]">Completed</span>
                        </div>
                        <Progress value={100} className="h-1" />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Afternoon Nap</span>
                          <span className="text-[#32D74B]">Completed</span>
                        </div>
                        <Progress value={100} className="h-1" />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Bedtime</span>
                          <span className="text-[#FF9F0A]">Coming up</span>
                        </div>
                        <Progress value={0} className="h-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">AI-Powered Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your personalized sleep companion</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              DOZY combines cutting-edge AI with pediatric sleep science to create a personalized experience for your
              family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-[#258CF9] mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">
              Real Parents, Real Results
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Hear from families like yours</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These parents transformed their sleep struggles into success stories with DOZY's guidance.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Featured Video */}
            <div className="mb-12">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Video Player */}
                    <div className="relative bg-black">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover min-h-[400px]"
                        poster={testimonials[activeTestimonial].thumbnailUrl}
                        onTimeUpdate={handleTimeUpdate}
                      >
                        <source src={testimonials[activeTestimonial].videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Video Controls Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-6">
                        {/* Center Play Button */}
                        <div className="flex-1 flex items-center justify-center">
                          <Button
                            onClick={handlePlayPause}
                            size="lg"
                            className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50"
                          >
                            {isPlaying ? (
                              <Pause className="w-8 h-8 text-white" />
                            ) : (
                              <Play className="w-8 h-8 text-white ml-1" />
                            )}
                          </Button>
                        </div>

                        {/* Bottom Controls */}
                        <div className="space-y-3">
                          {/* Progress Bar */}
                          <div className="w-full bg-white/20 rounded-full h-1">
                            <div
                              className="bg-[#258CF9] h-1 rounded-full transition-all duration-300"
                              style={{ width: `${videoProgress}%` }}
                            />
                          </div>

                          {/* Control Buttons */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <Button
                                onClick={handlePlayPause}
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/20"
                              >
                                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                              </Button>
                              <Button
                                onClick={handleMute}
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/20"
                              >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
                          <div>
                            <h3 className="text-2xl font-bold">{testimonials[activeTestimonial].name}</h3>
                            <p className="text-[#258CF9]">{testimonials[activeTestimonial].role}</p>
                            <p className="text-white/60 text-sm">{testimonials[activeTestimonial].location}</p>
                          </div>
                        </div>

                        <blockquote className="text-xl text-white/90 mb-6 italic">
                          "{testimonials[activeTestimonial].quote}"
                        </blockquote>
                      </div>

                      {/* Before/After */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#FF453A]/20 p-4 rounded-lg border border-[#FF453A]/30">
                          <h4 className="text-[#FF453A] font-semibold mb-2">Before DOZY</h4>
                          <p className="text-white/80 text-sm">{testimonials[activeTestimonial].problem}</p>
                        </div>
                        <div className="bg-[#32D74B]/20 p-4 rounded-lg border border-[#32D74B]/30">
                          <h4 className="text-[#32D74B] font-semibold mb-2">After DOZY</h4>
                          <p className="text-white/80 text-sm">{testimonials[activeTestimonial].solution}</p>
                        </div>
                      </div>

                      <Badge className="bg-[#32D74B]/20 text-[#32D74B] border-[#32D74B]/30 w-fit">
                        ✨ {testimonials[activeTestimonial].improvement}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial Thumbnails */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`bg-white/10 backdrop-blur-md border-white/20 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    index === activeTestimonial ? "ring-2 ring-[#258CF9]" : ""
                  }`}
                  onClick={() => handleTestimonialChange(index)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={testimonial.thumbnailUrl || "/placeholder.svg"}
                        alt={`${testimonial.name} testimonial`}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm mb-2">{testimonial.role}</p>
                      <p className="text-white/80 text-sm line-clamp-2">{testimonial.quote}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">Simple Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your path to restful nights</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Four simple steps to transform your family's sleep with DOZY's intelligent guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Create Profile", desc: "Add your baby's details for personalized sleep plans" },
              { step: 2, title: "Receive Alerts", desc: "Get timely notifications for optimal sleep windows" },
              { step: 3, title: "Follow AI Coaching", desc: "Real-time tips delivered directly to your wrist" },
              { step: 4, title: "Track Progress", desc: "Celebrate milestones and improvements together" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#258CF9] to-[#1976D2] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Trusted by pediatric experts and parents alike</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              DOZY combines cutting-edge AI with established sleep science to deliver results you can trust.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Pediatric+Sleep+Association"
                alt="Pediatric Sleep Association"
                className="max-h-12"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Parent+Magazine"
                alt="Parent Magazine"
                className="max-h-12"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Baby+Tech+Awards"
                alt="Baby Tech Awards"
                className="max-h-12"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Sleep+Foundation"
                alt="Sleep Foundation"
                className="max-h-12"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-[#32D74B] w-5 h-5" />
              <span className="text-white/80">Pediatrician approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-[#32D74B] w-5 h-5" />
              <span className="text-white/80">Science-backed methods</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-[#32D74B] w-5 h-5" />
              <span className="text-white/80">Privacy focused</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-[#32D74B] w-5 h-5" />
              <span className="text-white/80">7-day free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">Simple Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sleep better for less</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Affordable plans with a 7-day free trial. No credit card required to start.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 border-2 border-[#258CF9]/50">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">Most Popular</Badge>
                <div className="text-5xl font-bold mb-2">$9.99</div>
                <div className="text-white/60 mb-6">per month</div>

                <div className="space-y-4 mb-8">
                  {[
                    "Unlimited AI coaching",
                    "Real-time notifications",
                    "Personalized sleep windows",
                    "Progress tracking",
                    "24/7 support",
                    "7-day free trial",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-[#32D74B] mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#258CF9] hover:bg-[#1976D2] text-white py-4 rounded-full text-lg font-semibold"
                >
                  Start Free Trial
                </Button>

                <p className="text-sm text-white/60 mt-4">vs. $200+/hour for traditional sleep consultants</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#258CF9]/20 to-[#32D74B]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for better sleep?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who've transformed their nights with DOZY's gentle sleep coaching.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-[#258CF9] hover:bg-[#1976D2] text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            Get DOZY Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#080A0F] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Moon className="text-[#258CF9] w-8 h-8" />
                <span className="text-2xl font-bold tracking-wider">D O Z Y</span>
              </div>
              <p className="text-white/60">AI-powered sleep coaching for your family</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#features" className="block text-white/60 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#pricing" className="block text-white/60 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Download
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Community
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  About
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/60">© 2025 DOZY. Restful nights, one family at a time.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge className="bg-[#32D74B]/20 text-[#32D74B] border-[#32D74B]/30">
                <Shield className="w-4 h-4 mr-1" />
                COPPA Compliant
              </Badge>
              <Badge className="bg-[#258CF9]/20 text-[#258CF9] border-[#258CF9]/30">
                <Award className="w-4 h-4 mr-1" />
                4.9★ Rated
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Get DOZY Now</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#258CF9]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#258CF9] hover:bg-[#1976D2] text-white py-4 rounded-lg text-lg font-semibold"
                >
                  Start Free Trial
                </Button>
              </form>

              <p className="text-sm text-white/60 text-center mt-4">No credit card required. Cancel anytime.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
