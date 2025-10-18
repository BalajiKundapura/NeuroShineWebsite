"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPinIcon } from "@/components/icons"

// Leaflet types
interface LatLng {
  lat: number
  lng: number
}

interface Chapter {
  id: number
  name: string
  location: string
  volunteers: number
  established: string
  contact: string
  coordinates: LatLng
}

const chapters: Chapter[] = [
  {
    id: 1,
    name: "San Francisco Bay Area",
    location: "San Francisco, CA",
    volunteers: 45,
    established: "2020",
    contact: "sf@neuroshine.org",
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 2,
    name: "Greater Los Angeles",
    location: "Los Angeles, CA",
    volunteers: 38,
    established: "2020",
    contact: "la@neuroshine.org",
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: "Seattle Metro",
    location: "Seattle, WA",
    volunteers: 32,
    established: "2021",
    contact: "seattle@neuroshine.org",
    coordinates: { lat: 47.6062, lng: -122.3321 },
  },
  {
    id: 4,
    name: "New York City",
    location: "New York, NY",
    volunteers: 52,
    established: "2020",
    contact: "nyc@neuroshine.org",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 5,
    name: "London",
    location: "London, UK",
    volunteers: 41,
    established: "2020",
    contact: "london@neuroshine.org",
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: 6,
    name: "Paris",
    location: "Paris, France",
    volunteers: 35,
    established: "2021",
    contact: "paris@neuroshine.org",
    coordinates: { lat: 48.8566, lng: 2.3522 },
  },
  {
    id: 7,
    name: "Berlin",
    location: "Berlin, Germany",
    volunteers: 29,
    established: "2021",
    contact: "berlin@neuroshine.org",
    coordinates: { lat: 52.52, lng: 13.405 },
  },
  {
    id: 8,
    name: "Tokyo",
    location: "Tokyo, Japan",
    volunteers: 48,
    established: "2020",
    contact: "tokyo@neuroshine.org",
    coordinates: { lat: 35.6762, lng: 139.6503 },
  },
  {
    id: 9,
    name: "Sydney",
    location: "Sydney, Australia",
    volunteers: 36,
    established: "2021",
    contact: "sydney@neuroshine.org",
    coordinates: { lat: -33.8688, lng: 151.2093 },
  },
  {
    id: 10,
    name: "Toronto",
    location: "Toronto, Canada",
    volunteers: 40,
    established: "2020",
    contact: "toronto@neuroshine.org",
    coordinates: { lat: 43.6532, lng: -79.3832 },
  },
  {
    id: 11,
    name: "Mumbai",
    location: "Mumbai, India",
    volunteers: 44,
    established: "2021",
    contact: "mumbai@neuroshine.org",
    coordinates: { lat: 19.076, lng: 72.8777 },
  },
  {
    id: 12,
    name: "Singapore",
    location: "Singapore",
    volunteers: 33,
    established: "2022",
    contact: "singapore@neuroshine.org",
    coordinates: { lat: 1.3521, lng: 103.8198 },
  },
  {
    id: 13,
    name: "São Paulo",
    location: "São Paulo, Brazil",
    volunteers: 31,
    established: "2022",
    contact: "saopaulo@neuroshine.org",
    coordinates: { lat: -23.5505, lng: -46.6333 },
  },
  {
    id: 14,
    name: "Mexico City",
    location: "Mexico City, Mexico",
    volunteers: 37,
    established: "2021",
    contact: "mexicocity@neuroshine.org",
    coordinates: { lat: 19.4326, lng: -99.1332 },
  },
  {
    id: 15,
    name: "Dubai",
    location: "Dubai, UAE",
    volunteers: 28,
    established: "2022",
    contact: "dubai@neuroshine.org",
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
]

export function InteractiveWorldMap() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)
  const [map, setMap] = useState<any>(null)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Leaflet only on client side
    import("leaflet").then((leaflet) => {
      setL(leaflet.default)

      // Fix for default marker icons in Next.js
      delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })
    })
  }, [])

  useEffect(() => {
    if (!L || map) return

    // Initialize map
    const mapInstance = L.map("world-map", {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 18,
      worldCopyJump: true,
    })

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(mapInstance)

    // Custom icon for markers
    const customIcon = L.divIcon({
      className: "custom-marker",
      html: `
        <div class="relative">
          <div class="absolute inset-0 w-8 h-8 -m-4 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
          <div class="relative w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    })

    // Add markers for each chapter
    chapters.forEach((chapter) => {
      const marker = L.marker([chapter.coordinates.lat, chapter.coordinates.lng], {
        icon: customIcon,
      }).addTo(mapInstance)

      // Popup content
      const popupContent = `
        <div class="p-2 min-w-[200px]">
          <h3 class="font-bold text-lg mb-1">${chapter.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${chapter.location}</p>
          <div class="space-y-1 text-sm">
            <p><strong>Volunteers:</strong> ${chapter.volunteers}</p>
            <p><strong>Est.:</strong> ${chapter.established}</p>
            <p><strong>Contact:</strong> ${chapter.contact}</p>
          </div>
        </div>
      `

      marker.bindPopup(popupContent)

      marker.on("click", () => {
        setSelectedChapter(chapter)
      })
    })

    setMap(mapInstance)

    // Cleanup
    return () => {
      mapInstance.remove()
    }
  }, [L])

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="border-2 border-primary/20 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            {/* Leaflet CSS */}
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

            {/* Map */}
            <div id="world-map" className="w-full h-[600px] rounded-lg" />

            {/* Instructions overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg z-[1000] max-w-xs">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900 mb-1">Interactive Map</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Click and drag to pan</li>
                    <li>• Scroll to zoom in/out</li>
                    <li>• Click markers for details</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Chapter count badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full shadow-lg z-[1000] font-semibold">
              {chapters.length} Chapters Worldwide
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Chapter Details */}
      {selectedChapter && (
        <Card className="border-2 border-secondary shadow-lg animate-in slide-in-from-bottom-4">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedChapter.name}</h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <MapPinIcon size={16} />
                  {selectedChapter.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedChapter(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Volunteers</p>
                <p className="text-2xl font-bold text-primary">{selectedChapter.volunteers}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Established</p>
                <p className="text-lg font-bold text-gray-900">{selectedChapter.established}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-4 rounded-lg col-span-3 md:col-span-1">
                <p className="text-sm text-gray-600 mb-1">Contact</p>
                <p className="text-sm font-semibold text-primary break-all">{selectedChapter.contact}</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
              <p>
                <strong>Coordinates:</strong> {selectedChapter.coordinates.lat.toFixed(4)},{" "}
                {selectedChapter.coordinates.lng.toFixed(4)}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add custom styles for markers */}
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-tip {
          display: none;
        }
      `}</style>
    </div>
  )
}
