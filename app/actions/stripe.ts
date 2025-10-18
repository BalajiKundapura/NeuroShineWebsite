"use server"

import { stripe } from "@/lib/stripe"
import { DONATION_PRODUCTS } from "@/lib/donation-products"

export async function startCheckoutSession(productId: string) {
  console.log("[v0] Server action called with productId:", productId)

  // Simulate finding the product from your DONATION_PRODUCTS array
  const product = { id: productId, name: "Test Donation", priceInCents: 2500 }
  console.log("[v0] Found product:", product.name, product.priceInCents)

  try {
    // Simulate a network delay like a real Stripe request
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return a fake client secret
    const fakeClientSecret = "pi_test_fake_client_secret_123456"
    console.log("[v0] Returning fake client secret:", fakeClientSecret)

    return fakeClientSecret
  } catch (error) {
    console.error("[v0] Error creating checkout session:", error)
    throw error
  }
}
