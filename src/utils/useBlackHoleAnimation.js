import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function useBlackHoleAnimation() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const words = container.querySelectorAll('.floating-word')
    
    // Set initial positions
    words.forEach(word => {
      gsap.set(word, {
        x: gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
        y: gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
        z: gsap.utils.random(-500, -1000),
        opacity: 0,
        scale: 0.5
      })
    })
    
    // Animate words appearing
    gsap.to(words, {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    })
    
    // Create timeline for black hole animation
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2
    })
    
    // Animate words being pulled into the black hole
    tl.to(words, {
      x: 0,
      y: 0,
      z: 500,
      opacity: 0,
      scale: 0.1,
      rotation: () => gsap.utils.random(-180, 180),
      stagger: 0.05,
      duration: 3,
      ease: 'power3.in'
    })
    
    // Reset positions for next animation cycle
    tl.set(words, {
      x: () => gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
      y: () => gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
      z: () => gsap.utils.random(-500, -1000),
      opacity: 0,
      scale: 0.5,
      rotation: 0
    })
    
    // Animate words appearing again
    tl.to(words, {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    })
    
    return () => {
      tl.kill()
    }
  }, [])
  
  return containerRef
}