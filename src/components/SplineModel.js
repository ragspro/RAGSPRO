import { useEffect, useRef } from 'react'

export default function SplineModel() {
  const robotRef = useRef()
  
  useEffect(() => {
    const robot = robotRef.current
    if (!robot) return
    
    const handleMouseMove = (e) => {
      const rect = robot.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      
      robot.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`
    }
    
    robot.addEventListener('mousemove', handleMouseMove)
    robot.addEventListener('mouseleave', () => {
      robot.style.transform = 'rotateY(0deg) rotateX(0deg)'
    })
    
    return () => {
      robot.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/5 to-purple-600/5 rounded-2xl flex items-center justify-center border border-accent/10 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div 
        ref={robotRef}
        className="relative transition-transform duration-300 ease-out cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-xl mx-auto mb-3 relative animate-bounce border-2 border-accent/30" style={{ animationDuration: '4s' }}>
            <div className="absolute top-5 left-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-5 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-accent"></div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon rounded-full animate-ping"></div>
          </div>
          
          <div className="w-24 h-28 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mx-auto mb-3 relative border-2 border-accent/20">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-accent/20 rounded border border-accent/50">
              <div className="w-full h-1 bg-accent animate-pulse mt-3"></div>
              <div className="w-3/4 h-1 bg-accent/60 animate-pulse mt-2 mx-auto"></div>
            </div>
            <div className="absolute top-8 left-2 w-3 h-6 bg-accent/40 rounded animate-pulse"></div>
            <div className="absolute top-8 right-2 w-3 h-6 bg-accent/40 rounded animate-pulse"></div>
          </div>
          
          <div className="absolute top-20 -left-8 w-5 h-14 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-20 -right-8 w-5 h-14 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="flex justify-center gap-3">
            <div className="w-6 h-18 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="w-6 h-18 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="flex justify-center gap-3 mt-2">
            <div className="w-8 h-4 bg-accent/60 rounded-full"></div>
            <div className="w-8 h-4 bg-accent/60 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute -top-10 -left-10 w-5 h-5 border-2 border-accent rounded-full animate-spin" style={{ animationDuration: '6s' }}></div>
        <div className="absolute -top-6 -right-10 w-4 h-4 bg-neon rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-6 -left-8 w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s' }}></div>
    </div>
  )
}