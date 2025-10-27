"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  HeartIcon as Heart,
  UsersIcon as Users,
  SparklesIcon as Sparkles,
  DollarSignIcon as DollarSign,
  GiftIcon as Gift,
} from "@/components/icons"
import { DONATION_PRODUCTS } from "@/lib/donation-products"
import StripeCheckout from "@/components/stripe-checkout"

export default function DonatePage() {
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null)

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-4">
            <Heart className="text-secondary-foreground" size={20} />
            <span className="text-sm font-medium text-secondary-foreground">Support Our Mission</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Help Us{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Make a Difference
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your donation helps us provide free apps, volunteer programs, and support for neurodivergent children across
            the country.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Your Impact in Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-primary">$50</p>
                  <p className="text-sm text-muted-foreground">Provides materials for one workshop</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-primary">$150</p>
                  <p className="text-sm text-muted-foreground">Funds volunteer training for 5 people</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-secondary-foreground">$500</p>
                  <p className="text-sm text-muted-foreground">Supports app development for one month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stripe Checkout Integration */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Donate Now</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every contribution, no matter the size, makes a real difference
            </p>
          </div>

          {!selectedDonation ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DONATION_PRODUCTS.map((product) => (
                <Card
                  key={product.id}
                  className="border-2 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedDonation(product.id)}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Heart className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">{product.name}</h3>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full">
                      Select Amount
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Complete Your Donation</h3>
                  <Button variant="outline" onClick={() => setSelectedDonation(null)} className="rounded-full">
                    Change Amount
                  </Button>
                </div>
                <StripeCheckout productId={selectedDonation} />
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Other Ways to Give</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">There are many ways to support our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold">Volunteer Your Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your time and skills are just as valuable as financial contributions. Join our volunteer team.
                </p>
                <Button asChild variant="outline" className="rounded-full border-2 bg-transparent">
                  <a href="/signup">Become a Volunteer</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Gift className="text-secondary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold">Corporate Sponsorship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partner with us to make a larger impact. We offer various sponsorship opportunities.
                </p>
                <Button asChild variant="outline" className="rounded-full border-2 bg-transparent">
                  <a href="mailto:info@neuroshinenpo.com">Contact Us</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold">In-Kind Donations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Donate supplies, equipment, or services that support our programs and events.
                </p>
                <Button asChild variant="outline" className="rounded-full border-2 bg-transparent">
                  <a href="mailto:info@neuroshinenpo.com">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Where Your Money Goes</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're committed to transparency in how we use donations
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-medium">Programs & Services</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">70%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: "70%" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Direct support for volunteer programs, events, and app development
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="font-medium">Operations</span>
                  </div>
                  <span className="text-2xl font-bold text-secondary-foreground">20%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full" style={{ width: "20%" }} />
                </div>
                <p className="text-sm text-muted-foreground">Infrastructure, technology, and administrative costs</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="font-medium">Growth & Outreach</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full" style={{ width: "10%" }} />
                </div>
                <p className="text-sm text-muted-foreground">Expanding to new communities and raising awareness</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tax Information */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="max-w-4xl mx-auto border-2 bg-muted/30">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <DollarSign className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Tax-Deductible Donations</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              NeuroShine is a registered 501(c)(3) non-profit organization. Your donation is tax-deductible to the
              extent allowed by law. Tax ID: 33-2935754
            </p>
            <p className="text-sm text-muted-foreground">
              You will receive a receipt for your donation via email for your tax records.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
