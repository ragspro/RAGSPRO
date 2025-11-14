import { useEffect } from 'react'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return <>{children}</>
}