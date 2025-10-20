import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon, UsersIcon, SparklesIcon, ArrowRightIcon, CalendarIcon, MapPinIcon } from "@/components/icons"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6">
              Empowering Neurodivergent Children
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            To give everyone an{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              equal chance
            </span>{" "}
            to shine
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            NeuroShine is a non-profit dedicated to helping neurodivergent children through community volunteering and
            developing innovative, accessible apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg px-8"
            >
              <Link href="/signup">
                Join as Volunteer <ArrowRightIcon className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-8 border-2 hover:bg-secondary/10 bg-transparent"
            >
              <Link href="/create-chapter">Start a Chapter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-primary">80+</h3>
              <p className="text-muted-foreground">Active Volunteers</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <MapPinIcon className="text-secondary-foreground" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-secondary-foreground"></h3>
              <p className="text-muted-foreground">Chapters Nationwide</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <SparklesIcon className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-primary">1</h3>
              <p className="text-muted-foreground">Apps Developed</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We create opportunities and tools that make a real difference in the lives of neurodivergent children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-colors overflow-hidden group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HeartIcon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Community Volunteering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our volunteers work directly with neurodivergent children, providing mentorship, tutoring, and
                  companionship. We organize events, workshops, and activities that foster inclusion and understanding.
                </p>
                <Button asChild variant="link" className="text-primary p-0 h-auto">
                  <Link href="/signup">
                    Become a Volunteer <ArrowRightIcon className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors overflow-hidden group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-300 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <SparklesIcon className="text-secondary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold">App Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We design and build accessible apps specifically for neurodivergent children. From educational tools
                  to sensory-friendly games, our apps are created with input from experts, parents, and the children
                  themselves.
                </p>
                <Button asChild variant="link" className="text-secondary-foreground p-0 h-auto">
                  <Link href="/products">
                    Explore Our Apps <ArrowRightIcon className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you want to volunteer, start a chapter in your community, or support our mission, there are many
              ways to get involved with NeuroShine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                <Link href="/signup">Sign Up to Volunteer</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-2 bg-transparent">
                <Link href="/donate">Support Our Mission</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Upcoming Events Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us at our next community event or workshop
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-2 bg-transparent">
            <Link href="/calendar">
              <CalendarIcon className="mr-2" size={20} />
              View Full Calendar
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
