"use client"

import { useState } from "react"
import { MapPinIcon } from "@/components/icons"

interface Chapter {
  name: string
  location: string
  coordinates: { lat: number; lng: number }
  volunteers: number
  established: string
  contact: string
}

interface InteractiveMapProps {
  chapters: Chapter[]
}

export function InteractiveMap({ chapters }: InteractiveMapProps) {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)

  // Calculate map bounds
  const lats = chapters.map((c) => c.coordinates.lat)
  const lngs = chapters.map((c) => c.coordinates.lng)
  const minLat = Math.min(...lats)
  const maxLat = Math.max(...lats)
  const minLng = Math.min(...lngs)
  const maxLng = Math.max(...lngs)

  // Convert lat/lng to SVG coordinates
  const latToY = (lat: number) => {
    return ((maxLat - lat) / (maxLat - minLat)) * 100
  }

  const lngToX = (lng: number) => {
    return ((lng - minLng) / (maxLng - minLng)) * 100
  }

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      {/* SVG Map */}
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        <g opacity="0.1">
          {chapters.map((chapter, i) =>
            chapters
              .slice(i + 1)
              .map((otherChapter, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={lngToX(chapter.coordinates.lng)}
                  y1={latToY(chapter.coordinates.lat)}
                  x2={lngToX(otherChapter.coordinates.lng)}
                  y2={latToY(otherChapter.coordinates.lat)}
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-primary"
                />
              )),
          )}
        </g>

        {/* Chapter markers */}
        {chapters.map((chapter, index) => {
          const x = lngToX(chapter.coordinates.lng)
          const y = latToY(chapter.coordinates.lat)
          const isSelected = selectedChapter?.name === chapter.name

          return (
            <g
              key={chapter.name}
              transform={`translate(${x}, ${y})`}
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => setSelectedChapter(chapter)}
              onMouseEnter={() => setSelectedChapter(chapter)}
            >
              {/* Pulse animation for selected */}
              {isSelected && <circle r="2" fill="currentColor" className="text-primary opacity-30 animate-ping" />}

              {/* Marker circle */}
              <circle
                r="1.5"
                fill="currentColor"
                className={isSelected ? "text-secondary" : "text-primary"}
                stroke="white"
                strokeWidth="0.3"
              />

              {/* Label */}
              <text
                y="3"
                textAnchor="middle"
                className="text-[2px] font-medium fill-current"
                style={{ pointerEvents: "none" }}
              >
                {chapter.location.split(",")[0]}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Info Card */}
      {selectedChapter && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-card border-2 rounded-xl shadow-xl p-6 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold">{selectedChapter.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPinIcon size={14} />
                {selectedChapter.location}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedChapter(null)
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">{selectedChapter.volunteers}</span> active volunteers
            </p>
            <p className="text-muted-foreground">
              Established in <span className="font-medium text-foreground">{selectedChapter.established}</span>
            </p>
            <p className="text-muted-foreground">
              Contact: <span className="font-medium text-foreground">{selectedChapter.contact}</span>
            </p>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border rounded-lg px-4 py-2 text-sm text-muted-foreground">
        Click or hover over markers to see chapter details
      </div>
    </div>
  )
}
