import { useEffect, useRef } from 'react'

export default function CustomCircleCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const cursor = cursorRef.current
    if (!cursor) return

    let mx = 0, my = 0

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }

    const handleMouseEnter = () => cursor.style.opacity = '1'
    const handleMouseLeave = () => cursor.style.opacity = '0'
    
    const handleHover = () => cursor.classList.add('hover')
    const handleUnhover = () => cursor.classList.remove('hover')

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Add hover effects for interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleUnhover)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleUnhover)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-circle-cursor opacity-0"
    />
  )
}