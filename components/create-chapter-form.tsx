"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle } from "lucide-react"

export function CreateChapterForm() {
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
      city: formData.get("city"),
      state: formData.get("state"),
      experience: formData.get("experience"),
      motivation: formData.get("motivation"),
      timeline: formData.get("timeline"),
      resources: formData.get("resources"),
      formType: "Create Chapter",
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
        <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
          <CheckCircle className="text-secondary-foreground" size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Application Received!</h3>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for your interest in starting a NeuroShine chapter. Our team will review your application and
            contact you within 5-7 business days to discuss next steps.
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
        <h2 className="text-2xl font-bold">Chapter Application</h2>
        <p className="text-muted-foreground">Tell us about yourself and your vision for a local chapter.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="Jane" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Smith" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input id="city" name="city" placeholder="Portland" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Input id="state" name="state" placeholder="Oregon" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Leadership Experience *</Label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="Describe your experience in leadership, community organizing, or working with children..."
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">Why Start a Chapter? *</Label>
        <Textarea
          id="motivation"
          name="motivation"
          placeholder="What motivates you to bring NeuroShine to your community?"
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Proposed Timeline *</Label>
        <Input id="timeline" name="timeline" placeholder="When would you like to launch?" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resources">Available Resources</Label>
        <Textarea
          id="resources"
          name="resources"
          placeholder="Do you have access to meeting spaces, volunteers, or other resources?"
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
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
