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
  const [hovered, setHovered] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = -e.deltaY * 0.001
    const newZoom = Math.min(Math.max(zoom + delta, 1), 3)
    setZoom(newZoom)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
  }
  const handleMouseUp = () => {
    isDragging.current = false
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
    lastPos.current = { x: e.clientX, y: e.clientY }
  }

  return (
    <div className="space-y-8">
      <Card className="border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-blue-50 to-yellow-50">
        <CardContent className="p-8">
          <div
            className="relative w-full aspect-[2/1] rounded-2xl shadow-inner overflow-hidden cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <svg
              viewBox="0 0 200 100"
              className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transformOrigin: "center center",
              }}
            >
              {/* World land paths — simplified and aesthetic vector map */}
              <path
                d="M15 40 L20 38 L25 45 L22 50 L15 47 Z M30 38 L40 35 L45 40 L43 45 L35 43 Z M50 35 L60 33 L65 38 L63 42 L55 40 Z M70 40 L80 38 L85 45 L80 48 L72 46 Z M90 55 L100 52 L105 58 L100 60 L92 58 Z M120 35 L130 33 L135 38 L132 42 L125 40 Z M150 42 L160 40 L165 45 L160 48 L152 46 Z M175 65 L185 63 L188 68 L185 70 L177 68 Z"
                fill="#B5E4FF"
                stroke="#60A5FA"
                strokeWidth="0.4"
              />

              {/* Chapter markers */}
              {chapters.map((chap) => (
                <g
                  key={chap.id}
                  transform={`translate(${chap.x * 2}, ${chap.y})`}
                  onMouseEnter={() => setHovered(chap.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(chap)}
                  className="cursor-pointer"
                >
                  <circle
                    r="1.6"
                    fill={hovered === chap.id || selected?.id === chap.id ? "#FACC15" : "#2563EB"}
                  />
                  {hovered === chap.id && (
                    <foreignObject x="-40" y="-22" width="80" height="20">
                      <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 text-center shadow-xl">
                        {chap.name}
                      </div>
                    </foreignObject>
                  )}
                </g>
              ))}
            </svg>

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
              <MapPinIcon className="inline mr-2" size={16} />
              Hover or click a marker to view chapter info
            </div>
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
