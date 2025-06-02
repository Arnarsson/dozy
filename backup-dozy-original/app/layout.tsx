import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DOZY - AI-Powered Sleep Coaching for Parents",
  description:
    "Transform your nights with DOZY's empathetic AI sleep coaching on Apple Watch. Science-backed guidance for better family sleep.",
  keywords: "sleep coach, baby sleep, Apple Watch app, parenting, AI sleep tracking",
  openGraph: {
    title: "DOZY - AI-Powered Sleep Coaching",
    description: "Transform your nights with DOZY's empathetic AI sleep coaching for Apple Watch.",
    images: ["/placeholder.svg?height=630&width=1200&text=DOZY"],
    url: "https://dozy.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOZY - AI-Powered Sleep Coaching",
    description: "Transform your nights with DOZY's empathetic AI sleep coaching for Apple Watch.",
    images: ["/placeholder.svg?height=630&width=1200&text=DOZY"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/placeholder.svg?height=32&width=32&text=🌙" />
        <link rel="apple-touch-icon" href="/placeholder.svg?height=180&width=180&text=DOZY" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
