"use client"

import { useState, useRef } from "react"
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
  x: number
  y: number
}

const chapters: Chapter[] = [
  { id: 1, name: "San Francisco Bay Area", country: "USA", city: "San Francisco, CA", volunteers: 45, established: "2020", email: "sf@neuroshine.org", x: 18, y: 45 },
  { id: 2, name: "Greater Los Angeles", country: "USA", city: "Los Angeles, CA", volunteers: 38, established: "2020", email: "la@neuroshine.org", x: 20, y: 50 },
  { id: 3, name: "Seattle Metro", country: "USA", city: "Seattle, WA", volunteers: 32, established: "2021", email: "seattle@neuroshine.org", x: 16, y: 38 },
  { id: 4, name: "New York City", country: "USA", city: "New York, NY", volunteers: 52, established: "2019", email: "nyc@neuroshine.org", x: 30, y: 40 },
  { id: 5, name: "London", country: "UK", city: "London", volunteers: 41, established: "2020", email: "london@neuroshine.org", x: 48, y: 35 },
  { id: 6, name: "Paris", country: "France", city: "Paris", volunteers: 35, established: "2021", email: "paris@neuroshine.org", x: 50, y: 37 },
  { id: 7, name: "Berlin", country: "Germany", city: "Berlin", volunteers: 29, established: "2021", email: "berlin@neuroshine.org", x: 54, y: 34 },
  { id: 8, name: "Tokyo", country: "Japan", city: "Tokyo", volunteers: 48, established: "2020", email: "tokyo@neuroshine.org", x: 83, y: 42 },
  { id: 9, name: "Sydney", country: "Australia", city: "Sydney", volunteers: 36, established: "2021", email: "sydney@neuroshine.org", x: 90, y: 75 },
  { id: 10, name: "Toronto", country: "Canada", city: "Toronto, ON", volunteers: 40, established: "2020", email: "toronto@neuroshine.org", x: 27, y: 38 },
  { id: 11, name: "Mumbai", country: "India", city: "Mumbai", volunteers: 44, established: "2021", email: "mumbai@neuroshine.org", x: 73, y: 55 },
  { id: 12, name: "Singapore", country: "Singapore", city: "Singapore", volunteers: 33, established: "2022", email: "singapore@neuroshine.org", x: 78, y: 65 },
  { id: 13, name: "São Paulo", country: "Brazil", city: "São Paulo", volunteers: 31, established: "2022", email: "saopaulo@neuroshine.org", x: 30, y: 70 },
  { id: 14, name: "Mexico City", country: "Mexico", city: "Mexico City", volunteers: 37, established: "2021", email: "mexicocity@neuroshine.org", x: 20, y: 55 },
  { id: 15, name: "Dubai", country: "UAE", city: "Dubai", volunteers: 28, established: "2022", email: "dubai@neuroshine.org", x: 65, y: 48 },
]

export function WorldMap() {
  const [selected, setSelected] = useState<Chapter | null>(null)
  const [hovered, setHovered] = useState<Chapter | null>(null)
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 })

  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = -e.deltaY * 0.001
    setZoom(Math.min(Math.max(zoom + delta, 1), 3))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
  }
  const handleMouseUp = () => {
    isDragging.current = false
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      const dx = e.clientX - lastPos.current.x
      const dy = e.clientY - lastPos.current.y
      setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
      lastPos.current = { x: e.clientX, y: e.clientY }
    } else if (hovered) {
      setHoverPos({ x: e.clientX, y: e.clientY })
    }
  }

  return (
    <div className="space-y-8">
      <Card className="border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-blue-50 to-yellow-50">
        <CardContent className="p-8">
          <div
            className="relative w-full aspect-[2/1] bg-cover bg-center rounded-2xl shadow-inner overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
              backgroundImage: "url('/map.png')", // ✅ ensure map.png is in /public
            }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="absolute inset-0 transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transformOrigin: "center center",
              }}
            >
              {chapters.map((chap) => (
                <div
                  key={chap.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${chap.x}%`,
                    top: `${chap.y}%`,
                    transform: `translate(-50%, -50%) scale(${1 / zoom})`,
                  }}
                  onMouseEnter={(e) => {
                    setHovered(chap)
                    setHoverPos({ x: e.clientX, y: e.clientY })
                  }}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(chap)}
                >
                  <div className="absolute inset-0 w-10 h-10 -m-5 bg-secondary rounded-full animate-ping opacity-30" />
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 ${
                      hovered?.id === chap.id || selected?.id === chap.id
                        ? "bg-secondary scale-125 shadow-xl"
                        : "bg-primary shadow-lg"
                    }`}
                  >
                    <MapPinIcon className="text-white" size={18} />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
              <MapPinIcon className="inline mr-2" size={16} />
              Hover or click a marker to view chapter info
            </div>

            {hovered && (
              <div
                className="fixed z-50 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none transition-all duration-100 ease-out"
                style={{
                  top: hoverPos.y + 15,
                  left: hoverPos.x + 15,
                }}
              >
                <div className="font-semibold">{hovered.name}</div>
                <div className="text-xs opacity-80">{hovered.city}</div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {selected && (
        <Card className="border-2 border-secondary shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selected.name}</h3>
                <p className="text-gray-600">{selected.city}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Volunteers</p>
                <p className="font-semibold text-lg text-primary">{selected.volunteers}</p>
              </div>
              <div>
                <p className="text-gray-500">Established</p>
                <p className="font-semibold">{selected.established}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500">Contact</p>
                <p className="font-semibold text-primary">{selected.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
