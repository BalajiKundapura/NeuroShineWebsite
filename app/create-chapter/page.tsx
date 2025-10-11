import { CreateChapterForm } from "@/components/create-chapter-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Heart, Sparkles } from "lucide-react"

export default function CreateChapterPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-4">
            <MapPin className="text-secondary-foreground" size={20} />
            <span className="text-sm font-medium text-secondary-foreground">Start a Chapter</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Bring NeuroShine to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Community
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start a local chapter and help neurodivergent children in your area. We'll provide training, resources, and
            ongoing support.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Training & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive training program and ongoing mentorship from experienced chapter leaders.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-secondary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold">Resources & Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access to our library of activities, educational materials, and program guides.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">National Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with other chapter leaders and share best practices across the country.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Marketing Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Branding materials, social media templates, and promotional resources for your chapter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <CreateChapterForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
