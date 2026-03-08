"use client"

import { useState, useEffect, useRef } from "react"

export default function ProjectPreview({
  images,
}: {
  images: string[]
}) {

  const extended = [images[images.length - 1], ...images, images[0]]

  const [index, setIndex] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startX = useRef(0)
  const endX = useRef(0)

  const startSlide = () => {

    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 3000)

  }

  const stopSlide = () => {

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

  }

  useEffect(() => {
    return () => stopSlide()
  }, [])

  useEffect(() => {

    if (index === extended.length - 1) {

      setTimeout(() => {
        setAnimate(false)
        setIndex(1)
      }, 700)

    }

    if (index === 0) {

      setTimeout(() => {
        setAnimate(false)
        setIndex(images.length)
      }, 700)

    }

    setTimeout(() => setAnimate(true), 750)

  }, [index])

  const handleTouchStart = (e: any) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: any) => {
    endX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {

    const diff = startX.current - endX.current

    if (diff > 50) setIndex((prev) => prev + 1)
    if (diff < -50) setIndex((prev) => prev - 1)

  }

  useEffect(() => {

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false)
    }

    window.addEventListener("keydown", esc)

    return () => window.removeEventListener("keydown", esc)

  }, [])

  if (!images || images.length === 0) return null

  const activeImage = images[(index - 1 + images.length) % images.length]

  return (

    <>
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-md cursor-zoom-in"
        onMouseEnter={startSlide}
        onMouseLeave={stopSlide}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setFullscreen(true)}
      >

        <div
          className={`flex ${
            animate
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >

          {extended.map((img, i) => (

            <img
              key={i}
              src={img}
              className="w-full flex-shrink-0 object-cover"
            />

          ))}

        </div>

        {/* DOTS */}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

          {images.map((_, i) => (

            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === (index - 1 + images.length) % images.length
                  ? "bg-white"
                  : "bg-white/40"
              }`}
            />

          ))}

        </div>

      </div>

      {/* FULLSCREEN VIEWER */}

      {fullscreen && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setFullscreen(false)}
        >

          <img
            src={activeImage}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />

        </div>

      )}

    </>
  )
}