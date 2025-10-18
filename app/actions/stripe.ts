"use server"

import { stripe } from "@/lib/stripe"
import { DONATION_PRODUCTS } from "@/lib/donation-products"

export async function startCheckoutSession(productId: string) {
  const product = DONATION_PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    throw new Error(`Donation tier with id "${productId}" not found`)
  }

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

  return session.client_secret
}
