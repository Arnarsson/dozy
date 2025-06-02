"use client"

import { Moon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Moon className="text-blue-400 w-8 h-8" />
              <span className="text-2xl font-bold tracking-wider text-white">D O Z Y</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your gentle sleep coach, delivering science-backed guidance right to your wrist. Transform exhausting nights into restful dreams.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">15K+</div>
                <div className="text-gray-500 text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">4.9★</div>
                <div className="text-gray-500 text-sm">App Store</div>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Success Stories</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DOZY. All rights reserved. Made with ❤️ for sleep-deprived parents.
          </p>
        </div>
      </div>
    </footer>
  )
}