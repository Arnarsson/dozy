"use client"

import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"
import { PageTransition, ScrollReveal } from "@/components/ui/page-transition"
import { MorphingGradient } from "@/components/ui/morphing-gradient"

export default function Home() {
  return (
    <PageTransition className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Global Background */}
      <MorphingGradient intensity="subtle" className="fixed inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          
          <ScrollReveal>
            <Features />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Testimonials />
          </ScrollReveal>
        </main>
        
        <ScrollReveal delay={0.2}>
          <Footer />
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
