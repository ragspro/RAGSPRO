'use client'
import { useState } from 'react'

export default function SplineModel() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">Loading 3D Model...</p>
          </div>
        </div>
      )}
      
      <iframe
        src="https://my.spline.design/untitled-23srEjEfgbBjQIle/"
        className="w-full h-full border-0"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
        title="3D Robot Model"
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl">
          <div className="text-center">
            <div className="text-6xl mb-4">🤖</div>
            <p className="text-gray-400">3D Robot</p>
            <p className="text-gray-500 text-sm mt-2">Interactive Experience</p>
          </div>
        </div>
      )}
    </div>
  )
}