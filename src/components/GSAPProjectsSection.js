import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function GSAPProjectsSection() {
  const projectsRef = useRef([])
  const spotRef = useRef(null)

  const projects = [
    { title: 'E-commerce Platform', tech: 'React, Node.js', image: '/images/project1.jpg' },
    { title: 'AI Dashboard', tech: 'Next.js, Python', image: '/images/project2.jpg' },
    { title: 'Mobile App', tech: 'React Native', image: '/images/project3.jpg' }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    projectsRef.current.forEach((card, i) => {
      if (!card) return

      gsap.set(card, { opacity: 0, y: 60, scale: 0.95 })

      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        onEnter: () => {
          const spot = spotRef.current?.getBoundingClientRect()
          const rect = card.getBoundingClientRect()

          if (spot && rect) {
            const dx = spot.left + spot.width/2 - (rect.left + rect.width/2)
            const dy = spot.top + spot.height/2 - (rect.top + rect.height/2)
            const scale = Math.min(1, (spot.width / rect.width) * 0.98)

            gsap.to(card, {
              duration: 0.9,
              x: dx,
              y: dy,
              scale: scale,
              opacity: 1,
              ease: 'power3.out'
            })
          }
        },
        onLeaveBack: () => {
          gsap.to(card, { duration: 0.6, x: 0, y: 0, scale: 0.95, opacity: 0 })
        }
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Flying Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={el => projectsRef.current[i] = el}
              className="project-card bg-white p-6 rounded-lg shadow-lg"
              style={{ transformOrigin: 'center', willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={spotRef}
        className="landing-spot fixed right-[10%] top-[20%] w-[420px] h-[260px] pointer-events-none opacity-20 border-2 border-dashed border-gray-400"
      />
    </section>
  )
}