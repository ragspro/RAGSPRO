import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false
})

export default function SplineModel() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      if (loading) {
        setError(true)
        setLoading(false)
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [loading])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-900 rounded-2xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm">Loading 3D Model...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center relative overflow-hidden border border-accent/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-600/10 rounded-full animate-bounce"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-lg mx-auto mb-2 relative animate-bounce border border-accent/50">
            <div className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-accent"></div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon rounded-full animate-ping"></div>
          </div>
          <div className="text-accent font-bold text-sm animate-pulse mt-4">RAGSPRO</div>
          <div className="text-gray-400 text-xs">AI Development</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">Loading 3D Model...</p>
          </div>
        </div>
      )}
      <Spline 
        scene="https://prod.spline.design/23srEjEfgbBjQIle/scene.splinecode"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
      />
    </div>
  )
}