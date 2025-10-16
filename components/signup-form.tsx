"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2Icon, CheckCircleIcon } from "@/components/icons"
import { useAuth } from "@/contexts/auth-context"

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const { signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const displayName = `${formData.get("firstName")} ${formData.get("lastName")}`

    try {
      await signup(email, password, displayName)

      const volunteerData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email,
        phone: formData.get("phone"),
        chapter: formData.get("chapter"),
        experience: formData.get("experience"),
        availability: formData.get("availability"),
        message: formData.get("message"),
        formType: "Volunteer Sign Up",
      }

      await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(volunteerData),
      })

      setIsSubmitted(true)
      setTimeout(() => {
        router.push("/blog")
      }, 2000)
    } catch (err: any) {
      setError(err.message || "There was an error creating your account. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <CheckCircleIcon className="text-primary" size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Account Created!</h3>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to NeuroShine! Redirecting you to your dashboard...
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Create Your Account</h2>
        <p className="text-muted-foreground">Join our volunteer team and make a difference.</p>
      </div>

      {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}

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
        <Label htmlFor="password">Password *</Label>
        <Input id="password" name="password" type="password" placeholder="••••••••" required minLength={6} />
        <p className="text-xs text-muted-foreground">Must be at least 6 characters</p>
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
            <Loader2Icon className="mr-2" size={20} />
            Creating Account...
          </>
        ) : (
          "Create Account & Join"
        )}
      </Button>
    </form>
  )
}
