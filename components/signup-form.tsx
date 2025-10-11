"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle } from "lucide-react"

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      chapter: formData.get("chapter"),
      experience: formData.get("experience"),
      availability: formData.get("availability"),
      message: formData.get("message"),
      formType: "Volunteer Sign Up",
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("There was an error submitting your form. Please try again.")
      }
    } catch (error) {
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <CheckCircle className="text-primary" size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Thank You!</h3>
          <p className="text-muted-foreground leading-relaxed">
            We've received your volunteer application. Our team will review it and get back to you within 2-3 business
            days.
          </p>
        </div>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full bg-transparent">
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Volunteer Application</h2>
        <p className="text-muted-foreground">Fill out the form below to join our volunteer team.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="chapter">Preferred Chapter *</Label>
        <Input id="chapter" name="chapter" placeholder="San Francisco Bay Area" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Previous Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="Tell us about any relevant experience working with children or in volunteer roles..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability *</Label>
        <Input id="availability" name="availability" placeholder="Weekends, evenings, etc." required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Why do you want to volunteer with NeuroShine? *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share your motivation and what you hope to contribute..."
          rows={4}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={20} />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  )
}
