'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function ProjectsSection() {
  const sectionRef = useRef(null)
  const anchorRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  const [buttonHover, setButtonHover] = useState(false)

  useEffect(() => {
    const publishTargets = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const targets = anchorRefs.map((r) => {
        const el = r.current
        if (!el) return null
        const b = el.getBoundingClientRect()
        return {
          // viewport centers
          cx: b.left + b.width / 2,
          cy: b.top + b.height / 2,
        }
      })
      // expose for HeroSection to consume
      window.__projectTargets = { targets, sectionTop: rect.top }
    }

    publishTargets()
    window.addEventListener('resize', publishTargets)
    window.addEventListener('scroll', publishTargets)
    return () => {
      window.removeEventListener('resize', publishTargets)
      window.removeEventListener('scroll', publishTargets)
    }
  }, [])

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative z-10 bg-transparent"
    >
      {/* Invisible 2x2 landing anchors (no layout change) */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 pb-2 max-w-6xl mx-auto px-8">
          {[0,1,2,3].map((i) => (
            <div key={i} ref={anchorRefs[i]} className="h-[320px] w-full rounded-2xl" />
          ))}
        </div>
        
      </div>

      {/* View All Button positioned below the actual cards */}
      <div className="max-w-7xl mx-auto px-8 text-center -mt-[800px] sm:-mt-[850px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            href="/projects"
            className="inline-block"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-xl border border-gray-200/50 flex items-center gap-2 hover:bg-white transition-all">
              <span className="font-medium text-sm text-black whitespace-nowrap">
                View all projects
              </span>
              <FaArrowRight className="text-sm text-black" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
