import Link from "next/link"
import { MailIcon, MapPinIcon, HeartIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NeuroShine
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering neurodivergent children through volunteering and innovative apps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/chapters"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Chapters
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Volunteer Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/create-chapter"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Start a Chapter
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MailIcon size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@neuroshinenpo.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPinIcon size={16} className="mt-0.5 flex-shrink-0" />
                <span>Chapters across the nation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <HeartIcon size={16} className="text-red-500 fill-red-500" /> for neurodivergent children
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} NeuroShine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
