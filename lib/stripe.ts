import "server-only"
import Stripe from "stripe"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) throw new Error("Missing STRIPE_SECRET_KEY")

export const stripe = new Stripe(stripeSecretKey, { apiVersion: "2022-11-15" })

// Optional: check connection
async function testStripeConnection() {
  try {
    const account = await stripe.accounts.retrieve()
    console.log("Stripe account loaded:", account.id)
  } catch (err) {
    console.error("Stripe connection failed:", err)
  }
}

testStripeConnection()
