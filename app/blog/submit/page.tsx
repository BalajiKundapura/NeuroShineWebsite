import { Card, CardContent } from "@/components/ui/card"
import { BlogSubmitForm } from "@/components/blog-submit-form"

export default function BlogSubmitPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Share Your Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Submit a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog Post</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We welcome stories from volunteers, parents, educators, and anyone passionate about supporting
            neurodivergent children. Your voice matters!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <BlogSubmitForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
