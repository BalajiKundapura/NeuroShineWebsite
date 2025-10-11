"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function BlogSubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      title: formData.get("title"),
      category: formData.get("category"),
      content: formData.get("content"),
      type: "blog_submission",
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting blog:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
        <div className="p-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Thank You for Your Submission!</h3>
          <p className="text-muted-foreground leading-relaxed">
            We've received your blog post and our team will review it shortly. We'll be in touch via email within 3-5
            business days.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              window.location.reload()
            }}
            variant="outline"
            className="rounded-full border-2"
          >
            Submit Another Story
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Blog Post Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
          placeholder="My Experience as a NeuroShine Volunteer"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium">
          Category *
        </label>
        <select
          id="category"
          name="category"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors bg-white"
        >
          <option value="">Select a category</option>
          <option value="volunteer-story">Volunteer Story</option>
          <option value="parent-perspective">Parent Perspective</option>
          <option value="education">Education & Resources</option>
          <option value="community">Community Updates</option>
          <option value="product">Product & App Updates</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-medium">
          Blog Content *
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={12}
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors resize-y"
          placeholder="Share your story, insights, or experiences with the NeuroShine community..."
        />
        <p className="text-sm text-muted-foreground">Minimum 200 words recommended</p>
      </div>

      <div className="bg-blue-50 border-2 border-primary/20 rounded-lg p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          By submitting this blog post, you agree to allow NeuroShine to publish your content on our website and social
          media channels. We may edit for clarity and length.
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg"
      >
        {isSubmitting ? "Submitting..." : "Submit Blog Post"}
      </Button>
    </form>
  )
}
