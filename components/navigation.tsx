"use client"

import Link from "next/link"
import { useState } from "react"
import { MenuIcon, XIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/chapters", label: "Chapters" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/calendar", label: "Calendar" },
    { href: "/donate", label: "Donate" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              N
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NeuroShine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
