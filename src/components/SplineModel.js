import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm">Loading 3D Model...</p>
      </div>
    </div>
  )
})

export default function SplineModel() {
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      <div className="flex items-center justify-center h-full bg-gray-900 rounded-2xl">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-gray-400">3D Experience</p>
          <p className="text-gray-500 text-sm mt-2">Interactive model</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <Spline 
        scene="https://prod.spline.design/61258380-4c9f-4385-8ec7-40a272326816/scene.splinecode"
        onError={() => setError(true)}
      />
    </div>
  )
}