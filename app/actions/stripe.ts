"use server"

import { stripe } from "@/lib/stripe"
import { DONATION_PRODUCTS } from "@/lib/donation-products"

export async function startCheckoutSession(productId: string) {
  console.log("[v0] Server action called with productId:", productId)

  const product = DONATION_PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    console.error("[v0] Product not found:", productId)
    throw new Error(`Donation tier with id "${productId}" not found`)
  }

  console.log("[v0] Found product:", product.name, product.priceInCents)

  try {
    // Create Checkout Sessions with embedded UI
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      redirect_on_completion: "never",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
    })

    console.log("[v0] Checkout session created:", session.id)
    console.log("[v0] Client secret exists:", !!session.client_secret)

    return session.client_secret
  } catch (error) {
    console.error("[v0] Error creating checkout session:", error)
    throw error
  }
}
