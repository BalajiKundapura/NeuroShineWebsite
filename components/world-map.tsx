"use client"

import { useState, useRef } from "react"
import Image from "next/image"

const chapters = [
  { name: "San Francisco Bay Area", x: 18, y: 45 },
  { name: "New York City", x: 30, y: 40 },
  { name: "London", x: 48, y: 35 },
  { name: "Paris", x: 50, y: 37 },
  { name: "Berlin", x: 54, y: 34 },
  { name: "Tokyo", x: 83, y: 42 },
  { name: "Sydney", x: 88, y: 75 },
  { name: "Toronto", x: 27, y: 38 },
  { name: "Mumbai", x: 73, y: 55 },
  { name: "Singapore", x: 78, y: 65 },
  { name: "São Paulo", x: 30, y: 70 },
  { name: "Mexico City", x: 20, y: 55 },
  { name: "Dubai", x: 65, y: 48 },
]

export function WorldMap() {
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const newZoom = Math.min(Math.max(zoom - e.deltaY * 0.001, 1), 2.5)
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
    setOffset((prev) => ({
      x: prev.x + (e.clientX - lastPos.current.x),
      y: prev.y + (e.clientY - lastPos.current.y),
    }))
    lastPos.current = { x: e.clientX, y: e.clientY }
  }

  return (
    <div
      className="relative w-full aspect-[2/1] bg-center bg-cover overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
      style={{
        backgroundImage: "url('/images/world-map-flat.png')", // <-- add this image
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Map Transform Layer */}
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      >
        {/* Markers */}
        {chapters.map((chapter) => (
          <div
            key={chapter.name}
            title={chapter.name}
            className="absolute flex items-center justify-center group"
            style={{
              left: `${chapter.x}%`,
              top: `${chapter.y}%`,
              transform: `translate(-50%, -50%) scale(${1 / zoom})`,
            }}
          >
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-125" />
            <span className="absolute bottom-6 px-2 py-1 text-xs bg-white/80 text-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
              {chapter.name}
            </span>
          </div>
        ))}
      </div>

      {/* Optional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10 pointer-events-none" />
    </div>
  )
}
