import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UsersIcon, CalendarIcon, MailIcon, ArrowRightIcon, MapPinIcon } from "@/components/icons"
import Link from "next/link"
import { WorldMap } from "@/components/world-map"

const chapters = [
  {
    name: "San Francisco Bay Area",
    location: "San Francisco, CA",
    volunteers: 45,
    established: "2020",
    contact: "sf@neuroshine.org",
  },
  {
    name: "Greater Los Angeles",
    location: "Los Angeles, CA",
    volunteers: 38,
    established: "2020",
    contact: "la@neuroshine.org",
  },
  {
    name: "Seattle Metro",
    location: "Seattle, WA",
    volunteers: 32,
    established: "2021",
    contact: "seattle@neuroshine.org",
  },
  {
    name: "New York City",
    location: "New York, NY",
    volunteers: 52,
    established: "2020",
    contact: "nyc@neuroshine.org",
  },
  {
    name: "London",
    location: "London, UK",
    volunteers: 41,
    established: "2020",
    contact: "london@neuroshine.org",
  },
  {
    name: "Paris",
    location: "Paris, France",
    volunteers: 35,
    established: "2021",
    contact: "paris@neuroshine.org",
  },
  {
    name: "Berlin",
    location: "Berlin, Germany",
    volunteers: 29,
    established: "2021",
    contact: "berlin@neuroshine.org",
  },
  {
    name: "Tokyo",
    location: "Tokyo, Japan",
    volunteers: 48,
    established: "2020",
    contact: "tokyo@neuroshine.org",
  },
  {
    name: "Sydney",
    location: "Sydney, Australia",
    volunteers: 36,
    established: "2021",
    contact: "sydney@neuroshine.org",
  },
  {
    name: "Toronto",
    location: "Toronto, Canada",
    volunteers: 40,
    established: "2020",
    contact: "toronto@neuroshine.org",
  },
  {
    name: "Mumbai",
    location: "Mumbai, India",
    volunteers: 44,
    established: "2021",
    contact: "mumbai@neuroshine.org",
  },
  {
    name: "Singapore",
    location: "Singapore",
    volunteers: 33,
    established: "2022",
    contact: "singapore@neuroshine.org",
  },
  {
    name: "São Paulo",
    location: "São Paulo, Brazil",
    volunteers: 31,
    established: "2022",
    contact: "saopaulo@neuroshine.org",
  },
  {
    name: "Mexico City",
    location: "Mexico City, Mexico",
    volunteers: 37,
    established: "2021",
    contact: "mexicocity@neuroshine.org",
  },
  {
    name: "Dubai",
    location: "Dubai, UAE",
    volunteers: 28,
    established: "2022",
    contact: "dubai@neuroshine.org",
  },
]

export default function ChaptersPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
            <MapPinIcon className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary">Our Chapters</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global</span>{" "}
            Community
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            NeuroShine chapters around the world bring together volunteers, families, and communities to support
            neurodivergent children locally.
          </p>
        </div>
      </section>

      {/* Interactive World Map */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <WorldMap />
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 text-center bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-6 space-y-2">
              <p className="text-4xl font-bold text-primary">{chapters.length}</p>
              <p className="text-muted-foreground">Active Chapters</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="pt-6 space-y-2">
              <p className="text-4xl font-bold text-secondary-foreground">
                {chapters.reduce((sum, chapter) => sum + chapter.volunteers, 0)}+
              </p>
              <p className="text-muted-foreground">Total Volunteers</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center bg-gradient-to-br from-blue-50 to-yellow-50">
            <CardContent className="pt-6 space-y-2">
              <p className="text-4xl font-bold text-primary">12</p>
              <p className="text-muted-foreground">Countries Worldwide</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chapters List */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">All Chapters</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Find a chapter near you or start your own</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <Card key={chapter.name} className="border-2 hover:shadow-lg transition-all hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{chapter.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon size={16} />
                      <span>{chapter.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <UsersIcon size={16} />
                      <span>{chapter.volunteers} volunteers</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarIcon size={16} />
                      <span>Est. {chapter.established}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MailIcon size={16} />
                      <span className="truncate">{chapter.contact}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 bg-transparent hover:bg-primary/10 hover:border-primary"
                  >
                    Contact Chapter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Chapter CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/30">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Don't See a Chapter Near You?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start your own NeuroShine chapter and bring our mission to your community. We provide training, resources,
              and ongoing support to help you succeed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              <Link href="/create-chapter">
                Start a Chapter <ArrowRightIcon className="ml-2" size={20} />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
