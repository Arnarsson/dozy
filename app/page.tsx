"use client"

import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
