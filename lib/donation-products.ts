export interface DonationProduct {
  id: string
  name: string
  description: string
  priceInCents: number
  impact: string
}

// This is the source of truth for all donation tiers
export const DONATION_PRODUCTS: DonationProduct[] = [
  {
    id: "donation-25",
    name: "$25 Donation",
    description: "Support Workshop Materials",
    priceInCents: 2500,
    impact: "Provides materials for one workshop",
  },
  {
    id: "donation-50",
    name: "$50 Donation",
    description: "Fund Volunteer Training",
    priceInCents: 5000,
    impact: "Funds volunteer training for 2 people",
  },
  {
    id: "donation-100",
    name: "$100 Donation",
    description: "Support App Development",
    priceInCents: 10000,
    impact: "Supports app development for one week",
  },
  {
    id: "donation-250",
    name: "$250 Donation",
    description: "Chapter Support",
    priceInCents: 25000,
    impact: "Funds a chapter event for 20 children",
  },
  {
    id: "donation-500",
    name: "$500 Donation",
    description: "Monthly Development Fund",
    priceInCents: 50000,
    impact: "Supports app development for one month",
  },
  {
    id: "donation-1000",
    name: "$1000 Donation",
    description: "Major Impact Donor",
    priceInCents: 100000,
    impact: "Launches a new chapter in a community",
  },
]
