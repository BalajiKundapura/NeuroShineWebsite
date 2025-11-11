"use client"

import Link from "next/link"
import { useState } from "react"
import { MenuIcon, XIcon, LogOutIcon, UserIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, loading } = useAuth()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/chapters", label: "Chapters" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/calendar", label: "Calendar" },
    { href: "/donate", label: "Donate" },
  ]

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 group">
        <img
          src="/favicon.png"
          alt="NeuroShine logo"
          className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform"
        />
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
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                      <UserIcon size={16} className="text-primary" />
                      <span className="text-sm font-medium">{user.displayName || user.email}</span>
                    </div>
                    <Button onClick={handleLogout} variant="outline" size="sm" className="rounded-full bg-transparent">
                      <LogOutIcon size={16} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline" size="sm" className="rounded-full bg-transparent">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </>
            )}
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
            <div className="px-4 pt-2 space-y-2">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg mb-2">
                        <UserIcon size={16} className="text-primary" />
                        <span className="text-sm font-medium">{user.displayName || user.email}</span>
                      </div>
                      <Button onClick={handleLogout} variant="outline" className="w-full rounded-full bg-transparent">
                        <LogOutIcon size={16} className="mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="outline" className="w-full rounded-full bg-transparent">
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      >
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
