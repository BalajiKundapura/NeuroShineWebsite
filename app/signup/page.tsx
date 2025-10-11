import { SignUpForm } from "@/components/signup-form"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Calendar, Sparkles } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Heart className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Become a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Volunteer</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Make a real difference in the lives of neurodivergent children. Join our community of dedicated volunteers
            today.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 text-center">
            <CardContent className="pt-6 space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-bold">Community</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Join a supportive network of volunteers</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-6 space-y-3">
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center">
                <Calendar className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="font-bold">Flexible Schedule</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Volunteer on your own time</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-6 space-y-3">
              <div className="w-12 h-12 mx-auto bg-accent/10 rounded-xl flex items-center justify-center">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="font-bold">Make Impact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">See the difference you make</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <SignUpForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
