'use client'
import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTextHovering, setIsTextHovering] = useState(false)
  const [isProjectHovering, setIsProjectHovering] = useState(false)
  const [isTestimonialHovering, setIsTestimonialHovering] = useState(false)
  const animationRef = useRef()
  const cursorRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      setDotPosition(prev => {
        const dx = cursorRef.current.x - prev.x
        const dy = cursorRef.current.y - prev.y
        
        return {
          x: prev.x + dx * 0.15, // Slower follow speed
          y: prev.y + dy * 0.15
        }
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()

    const handleMouseEnter = (e) => {
      if (e.target.closest('.testimonial-area') || e.target.closest('[data-testimonial]')) {
        setIsTestimonialHovering(true)
        setIsProjectHovering(false)
        setIsHovering(false)
        setIsTextHovering(false)
      } else if (e.target.closest('.project-card') || e.target.dataset.project) {
        setIsProjectHovering(true)
        setIsHovering(false)
        setIsTextHovering(false)
        setIsTestimonialHovering(false)
      } else if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true)
        setIsTextHovering(false)
        setIsProjectHovering(false)
        setIsTestimonialHovering(false)
      } else if (e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.tagName === 'P' || e.target.tagName === 'SPAN') {
        setIsTextHovering(true)
        setIsHovering(false)
        setIsProjectHovering(false)
        setIsTestimonialHovering(false)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.closest('.testimonial-area') || e.target.closest('[data-testimonial]')) {
        setIsTestimonialHovering(false)
      } else if (e.target.closest('.project-card') || e.target.dataset.project) {
        setIsProjectHovering(false)
      } else if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(false)
      } else if (e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.tagName === 'P' || e.target.tagName === 'SPAN') {
        setIsTextHovering(false)
      }
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Normal cursor ko upar rakhne ke liye CSS */}
      <style jsx global>{`
        * {
          cursor: auto !important;
        }
        body {
          cursor: auto !important;
        }
      `}</style>
      
      {/* Black dot - piche rakha gaya */}
      <div
        id="cursor-dot"
        className={`fixed pointer-events-none z-[9998] mix-blend-difference ${
          isTestimonialHovering
            ? 'bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center whitespace-nowrap'
            : isProjectHovering 
            ? 'bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center whitespace-nowrap'
            : isHovering 
            ? 'w-6 h-6 bg-white rounded-full'
            : isTextHovering
            ? 'w-3 h-3 bg-white rounded-full'
            : 'w-4 h-4 bg-white rounded-full'
        }`}
        style={{
          left: isTestimonialHovering ? dotPosition.x - 50 : isProjectHovering ? dotPosition.x - 45 : dotPosition.x - (isHovering ? 12 : isTextHovering ? 6 : 8) + 5, // cursor ke end ke paas
          top: isTestimonialHovering ? dotPosition.y - 12 : isProjectHovering ? dotPosition.y - 12 : dotPosition.y - (isHovering ? 12 : isTextHovering ? 6 : 8) + 30 // cursor ke end se aur niche
        }}
      >
        {isTestimonialHovering && 'Testimonials'}
        {isProjectHovering && 'View Project'}
      </div>
    </>
  )
}
