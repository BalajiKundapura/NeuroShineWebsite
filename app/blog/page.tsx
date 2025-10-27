import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, UserIcon, ArrowRightIcon } from "@/components/icons"

// Sample blog posts - in production, this would come from a database
const blogPosts = [
  {
    id: 1,
    title: "",
    excerpt: "",
    author: "",
    date: "",
    category: "",
    image: "",
  },
]

export default function BlogPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-secondary-foreground">NeuroShine Blog</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Stories, Updates &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay connected with the latest news, volunteer stories, and resources from the NeuroShine community.
          </p>
        </div>
      </section>

      {/* Submit Blog CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Have a Story to Share?</h3>
                <p className="text-muted-foreground">
                  We'd love to hear from volunteers, parents, and community members.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 whitespace-nowrap"
              >
                <Link href="/blog/submit">Submit Your Story</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="border-2 hover:shadow-xl transition-all overflow-hidden group hover:border-primary/50"
            >
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-full ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <UserIcon size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <Button
                      asChild
                      variant="link"
                      className="text-primary p-0 h-auto w-fit group-hover:gap-3 transition-all"
                    >
                      <Link href={`/blog/${post.id}`}>
                        Read Full Story <ArrowRightIcon className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-blue-50 to-yellow-50 border-2 border-primary/20">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter to receive the latest blog posts, event updates, and community news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-full border-2 border-primary/30 focus:outline-none focus:border-primary"
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
