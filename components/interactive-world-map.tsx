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
    name: "Memphis",
    location: "Memphis, TN",
    volunteers: 30,
    established: "2024",
    contact: "memphis@neuroshine.org",
    coordinates: { lat: 35.1495, lng: -90.0490 },
  },
  {
    id: 2,
    name: "Collierville",
    location: "Collierville, TN",
    volunteers: 20,
    established: "2024",
    contact: "collierville@neuroshine.org",
    coordinates: { lat: 35.0420, lng: -89.6645 },
  },
  {
    id: 3,
    name: "Tampa",
    location: "Tampa, FL",
    volunteers: 25,
    established: "2024",
    contact: "tampa@neuroshine.org",
    coordinates: { lat: 27.9506, lng: -82.4572 },
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
            {/* <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg z-[1000] max-w-xs">
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
            </div> */}

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
