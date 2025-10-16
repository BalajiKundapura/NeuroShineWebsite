import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"
import { AuthProvider } from "@/contexts/auth-context"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NeuroShine - Empowering Neurodivergent Children",
  description:
    "A non-profit dedicated to helping neurodivergent children through volunteering and innovative app development.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <AuthProvider>
          <FloatingParticles />
          <Navigation />
          <main className="min-h-screen pt-16 relative z-10">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
