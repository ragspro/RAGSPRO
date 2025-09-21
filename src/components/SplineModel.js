import { useState, useEffect } from 'react'

export default function SplineModel() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl flex items-center justify-center relative overflow-hidden border border-accent/20">
      {!showFallback ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm">Loading 3D Model...</p>
        </div>
      ) : (
        <>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-600/10 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-accent/5 to-transparent rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-lg mx-auto mb-2 relative animate-bounce border border-accent/50" style={{animationDuration: '3s'}}>
                <div className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-accent"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon rounded-full animate-ping"></div>
              </div>
              
              <div className="w-20 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mx-auto mb-2 relative border border-accent/30">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-accent/20 rounded border border-accent/50">
                  <div className="w-full h-0.5 bg-accent animate-pulse mt-2"></div>
                  <div className="w-3/4 h-0.5 bg-accent/60 animate-pulse mt-1 mx-auto"></div>
                </div>
                <div className="absolute top-6 left-1 w-2 h-4 bg-accent/40 rounded animate-pulse"></div>
                <div className="absolute top-6 right-1 w-2 h-4 bg-accent/40 rounded animate-pulse"></div>
              </div>
              
              <div className="absolute top-16 -left-6 w-3 h-10 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-16 -right-6 w-3 h-10 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div className="flex justify-center gap-2">
                <div className="w-4 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="w-4 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              <div className="flex justify-center gap-2 mt-1">
                <div className="w-5 h-2 bg-accent/60 rounded-full"></div>
                <div className="w-5 h-2 bg-accent/60 rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute -top-8 -left-8 w-4 h-4 border-2 border-accent rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
            <div className="absolute -top-4 -right-8 w-3 h-3 bg-neon rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 -left-6 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-accent font-bold text-sm animate-pulse">RAGSPRO</div>
            <div className="text-gray-400 text-xs">AI Development</div>
          </div>
        </>
      )}
    </div>
  )
}