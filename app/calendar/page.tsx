import { CalendarView } from "@/components/calendar-view"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export default function CalendarPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <CalendarIcon className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary">Events Calendar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join us for workshops, volunteer opportunities, and community events happening across all our chapters.
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              <CalendarView />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
