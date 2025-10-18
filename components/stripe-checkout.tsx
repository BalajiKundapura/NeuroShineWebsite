"use client"

import { useCallback } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe("pk_live_51Ro6lyFKjHDrBAIHGKoYbpFc7ZLt8vgoFuLAYVNSSpLC5DKTGj7aL7sSh8iZRKQwiZvrNfFn4qcERGPmEiTNaUxB00ITxnuZM")

export default function StripeCheckout({ productId }: { productId: string }) {
  const startCheckoutSessionForProduct = useCallback(() => startCheckoutSession(productId), [productId])

  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret: startCheckoutSessionForProduct }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
