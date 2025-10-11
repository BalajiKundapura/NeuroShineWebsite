"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPinIcon } from "@/components/icons"

interface Chapter {
  id: number
  name: string
  country: string
  city: string
  volunteers: number
  established: string
  email: string
  x: number // X position on map (percentage)
  y: number // Y position on map (percentage)
}

const chapters: Chapter[] = [
  {
    id: 1,
    name: "San Francisco Bay Area",
    country: "USA",
    city: "San Francisco, CA",
    volunteers: 45,
    established: "Est. 2020",
    email: "sf@neuroshine.org",
    x: 15,
    y: 42,
  },
  {
    id: 2,
    name: "Greater Los Angeles",
    country: "USA",
    city: "Los Angeles, CA",
    volunteers: 38,
    established: "Est. 2020",
    email: "la@neuroshine.org",
    x: 16,
    y: 48,
  },
  {
    id: 3,
    name: "Seattle Metro",
    country: "USA",
    city: "Seattle, WA",
    volunteers: 32,
    established: "Est. 2021",
    email: "seattle@neuroshine.org",
    x: 14,
    y: 35,
  },
  {
    id: 4,
    name: "New York City",
    country: "USA",
    city: "New York, NY",
    volunteers: 52,
    established: "Est. 2019",
    email: "nyc@neuroshine.org",
    x: 28,
    y: 40,
  },
  {
    id: 5,
    name: "London",
    country: "UK",
    city: "London",
    volunteers: 41,
    established: "Est. 2020",
    email: "london@neuroshine.org",
    x: 49,
    y: 38,
  },
  {
    id: 6,
    name: "Paris",
    country: "France",
    city: "Paris",
    volunteers: 35,
    established: "Est. 2021",
    email: "paris@neuroshine.org",
    x: 50,
    y: 40,
  },
  {
    id: 7,
    name: "Berlin",
    country: "Germany",
    city: "Berlin",
    volunteers: 29,
    established: "Est. 2021",
    email: "berlin@neuroshine.org",
    x: 52,
    y: 37,
  },
  {
    id: 8,
    name: "Tokyo",
    country: "Japan",
    city: "Tokyo",
    volunteers: 48,
    established: "Est. 2020",
    email: "tokyo@neuroshine.org",
    x: 82,
    y: 45,
  },
  {
    id: 9,
    name: "Sydney",
    country: "Australia",
    city: "Sydney",
    volunteers: 36,
    established: "Est. 2021",
    email: "sydney@neuroshine.org",
    x: 85,
    y: 75,
  },
  {
    id: 10,
    name: "Toronto",
    country: "Canada",
    city: "Toronto, ON",
    volunteers: 40,
    established: "Est. 2020",
    email: "toronto@neuroshine.org",
    x: 25,
    y: 35,
  },
  {
    id: 11,
    name: "Mumbai",
    country: "India",
    city: "Mumbai",
    volunteers: 44,
    established: "Est. 2021",
    email: "mumbai@neuroshine.org",
    x: 67,
    y: 55,
  },
  {
    id: 12,
    name: "Singapore",
    country: "Singapore",
    city: "Singapore",
    volunteers: 33,
    established: "Est. 2022",
    email: "singapore@neuroshine.org",
    x: 75,
    y: 60,
  },
  {
    id: 13,
    name: "São Paulo",
    country: "Brazil",
    city: "São Paulo",
    volunteers: 31,
    established: "Est. 2022",
    email: "saopaulo@neuroshine.org",
    x: 34,
    y: 70,
  },
  {
    id: 14,
    name: "Mexico City",
    country: "Mexico",
    city: "Mexico City",
    volunteers: 37,
    established: "Est. 2021",
    email: "mexicocity@neuroshine.org",
    x: 20,
    y: 55,
  },
  {
    id: 15,
    name: "Dubai",
    country: "UAE",
    city: "Dubai",
    volunteers: 28,
    established: "Est. 2022",
    email: "dubai@neuroshine.org",
    x: 60,
    y: 52,
  },
]

export function WorldMap() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* Interactive World Map */}
      <Card className="border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-blue-50 to-yellow-50">
        <CardContent className="p-8">
          <div className="relative w-full aspect-[2/1] bg-white rounded-2xl shadow-inner overflow-hidden">
            {/* World Map SVG Background */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            >
              {/* Simplified world map continents */}
              <g fill="#e0f2fe" stroke="#93c5fd" strokeWidth="1">
                {/* North America */}
                <path d="M 50,150 L 150,100 L 250,120 L 280,180 L 250,250 L 200,280 L 150,260 L 100,220 Z" />
                {/* South America */}
                <path d="M 250,300 L 300,280 L 320,350 L 300,420 L 260,400 L 240,350 Z" />
                {/* Europe */}
                <path d="M 450,150 L 520,140 L 550,180 L 530,220 L 480,210 L 460,180 Z" />
                {/* Africa */}
                <path d="M 480,240 L 550,230 L 580,300 L 560,380 L 500,390 L 470,320 Z" />
                {/* Asia */}
                <path d="M 550,100 L 750,120 L 800,180 L 780,250 L 700,280 L 600,260 L 560,200 Z" />
                {/* Australia */}
                <path d="M 750,350 L 850,340 L 880,380 L 850,410 L 770,400 Z" />
              </g>
            </svg>

            {/* Chapter Markers */}
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${chapter.x}%`, top: `${chapter.y}%` }}
                onMouseEnter={() => setHoveredChapter(chapter.id)}
                onMouseLeave={() => setHoveredChapter(null)}
                onClick={() => setSelectedChapter(chapter)}
              >
                {/* Pulsing ring animation */}
                <div className="absolute inset-0 w-8 h-8 -m-4 bg-secondary rounded-full animate-ping opacity-30" />

                {/* Marker */}
                <div
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    hoveredChapter === chapter.id || selectedChapter?.id === chapter.id
                      ? "bg-secondary scale-125 shadow-lg"
                      : "bg-primary shadow-md"
                  }`}
                >
                  <MapPinIcon className="text-white" size={16} />
                </div>

                {/* Hover tooltip */}
                {hoveredChapter === chapter.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-xl z-10">
                    <div className="font-semibold">{chapter.name}</div>
                    <div className="text-xs opacity-90">{chapter.city}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Instruction overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
              <MapPinIcon className="inline mr-2" size={16} />
              Click or hover over markers to see chapter details
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Chapter Details */}
      {selectedChapter && (
        <Card className="border-2 border-secondary shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedChapter.name}</h3>
                <p className="text-gray-600">{selectedChapter.city}</p>
              </div>
              <button
                onClick={() => setSelectedChapter(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Volunteers</p>
                <p className="font-semibold text-lg text-primary">{selectedChapter.volunteers}</p>
              </div>
              <div>
                <p className="text-gray-500">Established</p>
                <p className="font-semibold">{selectedChapter.established}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500">Contact</p>
                <p className="font-semibold text-primary">{selectedChapter.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
