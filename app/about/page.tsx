import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon, TargetIcon, EyeIcon, UsersIcon } from "@/components/icons"

const teamMembers = [
  {
    name: "Satvik Koya",
    role: "President",
    bio: "",
    image: "/satvikPP.png",
  },
  {
    name: "Balaji Kundapura",
    role: "Vice President",
    bio: "",
    image: "/balaji.jpeg",
  },
  {
    name: "Sathvik Jampana",
    role: "Treasurer",
    bio: "",
    image: "/sathvik.jpeg",
  }
]

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NeuroShine</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe every child deserves the opportunity to shine, regardless of how their brain works.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <TargetIcon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower neurodivergent children through community support, innovative technology, and inclusive
                programs that celebrate their unique strengths and abilities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <EyeIcon className="text-secondary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where neurodivergent children are understood, supported, and given equal opportunities to thrive
                in their communities and reach their full potential.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <HeartIcon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Inclusion, empathy, innovation, and community. We celebrate neurodiversity and work to create spaces
                where every child feels valued and understood.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">How NeuroShine began</p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
              NeuroShine was founded in 2024 and student led. NeuroShine recognized the need for more inclusive support systems for neurodivergent children.
              </p>
              <p>
              What started as a small volunteer initiative has quickly expanded into a nationwide nonprofit organization, driven by the belief that every neurodivergent child deserves the opportunity to thrive.
              </p>
              <p>
              We combine neuroscience, technology, and community service to create meaningful impact — from developing accessible apps and assistive tools to connecting volunteers across the country with programs that support neurodivergent learners.
              </p>
              <p>
              Through research collaborations, innovative technology projects, and advocacy efforts, NeuroShine empowers children to learn, communicate, and grow in environments designed for their strengths.
              </p>
              <p>
              And we’re only getting started. Every day, we continue to innovate, expand, and advocate — building a future where neurodiversity is understood, supported, and celebrated, ensuring every child has the chance to shine in their own way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <UsersIcon className="text-primary" size={20} />
              <span className="text-sm font-medium text-primary">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">The People Behind NeuroShine</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our dedicated leadership team brings together expertise in education, technology, non-profit management,
              and community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-2 hover:shadow-lg transition-shadow overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
              <div className="space-y-2">
                <p className="text-5xl font-bold text-primary">2,500+</p>
                <p className="text-muted-foreground">Children Helped</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-primary">80+</p>
                <p className="text-muted-foreground">Active Volunteers</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-secondary-foreground">25</p>
                <p className="text-muted-foreground">Chapters</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-secondary-foreground">12</p>
                <p className="text-muted-foreground">Apps Created</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
