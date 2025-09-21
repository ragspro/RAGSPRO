import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineModel() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">Loading 3D Model...</p>
          </div>
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl">
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-gray-400">3D Experience</p>
            <p className="text-gray-500 text-sm mt-2">Interactive model loading...</p>
          </div>
        </div>
      ) : (
        <Spline 
          scene="https://prod.spline.design/23srEjEfgbBjQIle/scene.splinecode"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false)
            setError(true)
          }}
        />
      )}
    </div>
  )
}