import { useState, useEffect } from 'react'

/**
 * Auto-rotating image slideshow for project previews.
 * Cycles through images every `interval` ms.
 */
export default function PreviewSlideshow({ images, interval = 2000, className = '' }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!images || images.length < 2) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images, interval])

  if (!images || images.length === 0) return null

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Invisible spacer to maintain aspect ratio */}
      <img src={images[0]} alt="" className="w-full h-full object-cover invisible" />
    </div>
  )
}
