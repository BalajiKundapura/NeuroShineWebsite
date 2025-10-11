"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Plus, MapPin, Clock, Users, Edit, Trash2, Lock } from "lucide-react"

interface Event {
  id: string
  title: string
  date: Date
  time: string
  location: string
  chapter: string
  description: string
  attendees?: number
}

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Sensory-Friendly Art Workshop",
    date: new Date(2025, 9, 15),
    time: "2:00 PM - 4:00 PM",
    location: "San Francisco Community Center",
    chapter: "San Francisco Bay Area",
    description: "A calming art session designed for neurodivergent children with sensory considerations.",
    attendees: 24,
  },
  {
    id: "2",
    title: "Volunteer Training Session",
    date: new Date(2025, 9, 18),
    time: "10:00 AM - 12:00 PM",
    location: "Online (Zoom)",
    chapter: "All Chapters",
    description: "Learn best practices for working with neurodivergent children. Open to all new volunteers.",
    attendees: 45,
  },
  {
    id: "3",
    title: "Family Game Night",
    date: new Date(2025, 9, 22),
    time: "6:00 PM - 8:00 PM",
    location: "Los Angeles Recreation Center",
    chapter: "Greater Los Angeles",
    description: "Board games and activities for the whole family in an inclusive, welcoming environment.",
    attendees: 32,
  },
  {
    id: "4",
    title: "App Development Workshop",
    date: new Date(2025, 9, 25),
    time: "1:00 PM - 3:00 PM",
    location: "Seattle Tech Hub",
    chapter: "Seattle Metro",
    description: "Join our developers to learn about creating accessible apps for neurodivergent children.",
    attendees: 18,
  },
  {
    id: "5",
    title: "Outdoor Adventure Day",
    date: new Date(2025, 9, 28),
    time: "9:00 AM - 2:00 PM",
    location: "Golden Gate Park",
    chapter: "San Francisco Bay Area",
    description: "Nature walks, scavenger hunts, and outdoor activities designed for all abilities.",
    attendees: 28,
  },
]

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)) // October 2025
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [showAdminDialog, setShowAdminDialog] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [showEventDialog, setShowEventDialog] = useState(false)

  // Calendar logic
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const getEventsForDay = (day: number) => {
    return events.filter((event) => {
      return event.date.getDate() === day && event.date.getMonth() === month && event.date.getFullYear() === year
    })
  }

  const handleAdminLogin = () => {
    // Simple password check (in production, use proper authentication)
    if (adminPassword === "admin123") {
      setIsAdmin(true)
      setShowAdminDialog(false)
      setAdminPassword("")
    } else {
      alert("Incorrect password")
    }
  }

  const handleAddEvent = (formData: FormData) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: formData.get("title") as string,
      date: new Date(formData.get("date") as string),
      time: formData.get("time") as string,
      location: formData.get("location") as string,
      chapter: formData.get("chapter") as string,
      description: formData.get("description") as string,
    }
    setEvents([...events, newEvent])
    setShowEventDialog(false)
  }

  const handleEditEvent = (formData: FormData) => {
    if (!editingEvent) return
    const updatedEvents = events.map((event) =>
      event.id === editingEvent.id
        ? {
            ...event,
            title: formData.get("title") as string,
            date: new Date(formData.get("date") as string),
            time: formData.get("time") as string,
            location: formData.get("location") as string,
            chapter: formData.get("chapter") as string,
            description: formData.get("description") as string,
          }
        : event,
    )
    setEvents(updatedEvents)
    setEditingEvent(null)
    setShowEventDialog(false)
  }

  const handleDeleteEvent = (eventId: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== eventId))
    }
  }

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDay(day)
    const isToday = new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year

    days.push(
      <div
        key={day}
        className={`aspect-square border border-border p-2 ${isToday ? "bg-primary/5 border-primary" : "bg-card"} hover:bg-muted/50 transition-colors`}
      >
        <div className="text-sm font-medium mb-1">{day}</div>
        <div className="space-y-1">
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded truncate cursor-pointer hover:bg-primary/20 transition-colors"
              title={event.title}
            >
              {event.title}
            </div>
          ))}
        </div>
      </div>,
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with Admin Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={previousMonth} className="rounded-full bg-transparent">
            <ChevronLeft size={20} />
          </Button>
          <h2 className="text-2xl font-bold">
            {monthNames[month]} {year}
          </h2>
          <Button variant="outline" size="icon" onClick={nextMonth} className="rounded-full bg-transparent">
            <ChevronRight size={20} />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {!isAdmin ? (
            <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  <Lock size={16} className="mr-2" />
                  Admin Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Admin Login</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Enter admin password"
                      onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                    />
                    <p className="text-xs text-muted-foreground">Demo password: admin123</p>
                  </div>
                  <Button onClick={handleAdminLogin} className="w-full rounded-full">
                    Login
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <>
              <span className="text-sm text-muted-foreground">Admin Mode</span>
              <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    onClick={() => setEditingEvent(null)}
                  >
                    <Plus size={16} className="mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{editingEvent ? "Edit Event" : "Add New Event"}</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      editingEvent ? handleEditEvent(formData) : handleAddEvent(formData)
                    }}
                    className="space-y-4 pt-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="title">Event Title</Label>
                      <Input
                        id="title"
                        name="title"
                        defaultValue={editingEvent?.title}
                        placeholder="Sensory-Friendly Workshop"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          defaultValue={editingEvent?.date.toISOString().split("T")[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          name="time"
                          defaultValue={editingEvent?.time}
                          placeholder="2:00 PM - 4:00 PM"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        defaultValue={editingEvent?.location}
                        placeholder="Community Center"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chapter">Chapter</Label>
                      <Input
                        id="chapter"
                        name="chapter"
                        defaultValue={editingEvent?.chapter}
                        placeholder="San Francisco Bay Area"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        defaultValue={editingEvent?.description}
                        placeholder="Event details and information..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-full">
                      {editingEvent ? "Update Event" : "Add Event"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="sm" onClick={() => setIsAdmin(false)} className="rounded-full">
                Logout
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="border-2 border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-7 bg-muted">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-3 text-center font-semibold text-sm">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">{days}</div>
      </div>

      {/* Upcoming Events List */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events
            .filter((event) => event.date >= new Date())
            .sort((a, b) => a.date.getTime() - b.date.getTime())
            .map((event) => (
              <Card key={event.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">{event.title}</h4>
                      <p className="text-sm text-primary font-medium">{event.chapter}</p>
                    </div>
                    {isAdmin && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-transparent"
                          onClick={() => {
                            setEditingEvent(event)
                            setShowEventDialog(true)
                          }}
                        >
                          <Edit size={14} />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full text-destructive hover:text-destructive bg-transparent"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>
                        {event.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} •{" "}
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

                  <Button variant="outline" className="w-full rounded-full border-2 bg-transparent">
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
