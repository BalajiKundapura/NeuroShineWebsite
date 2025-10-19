"use server"

import { stripe } from "@/lib/stripe"
import { DONATION_PRODUCTS } from "@/lib/donation-products"

export async function startCheckoutSession(productId: string) {
  console.log("[v0] Server action called with productId:", productId)

  // Find the donation product in your array
  const product = DONATION_PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    console.error("[v0] Product not found:", productId)
    throw new Error(`Donation tier with id "${productId}" not found`)
  }

  console.log("[v0] Found product:", product.name, product.priceId)

  try {
    // Create Stripe Checkout Session using the pre-created Price ID
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      redirect_on_completion: "never",
      line_items: [
        {
          price: product.priceId, // ✅ Use Stripe Price ID
          quantity: 1,
        },
      ],
      mode: "payment",
    })

    console.log("[v0] Checkout session created:", session.id)
    console.log("[v0] Client secret exists:", !!session.client_secret)

    if (!session.client_secret) {
      throw new Error("Stripe session client_secret is missing")
    }

    return session.client_secret
  } catch (error) {
    console.error("[v0] Error creating checkout session:", error)
    throw error
  }
}
