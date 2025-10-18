"use client"

import { useCallback, useEffect } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function StripeCheckout({ productId }: { productId: string }) {
  useEffect(() => {
    console.log("[v0] StripeCheckout mounted with productId:", productId)
    console.log("[v0] Stripe publishable key exists:", !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }, [productId])

  const startCheckoutSessionForProduct = useCallback(async () => {
    console.log("[v0] Starting checkout session for product:", productId)
    try {
      const clientSecret = await startCheckoutSession(productId)
      console.log("[v0] Received client secret:", clientSecret ? "✓" : "✗")
      return clientSecret
    } catch (error) {
      console.error("[v0] Error starting checkout session:", error)
      throw error
    }
  }, [productId])

  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret: startCheckoutSessionForProduct }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
