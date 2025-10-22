'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  { id: 1, name: 'Glow', image: '/images/projects/glow.png', url: 'https://glow.ragspro.com' },
  { id: 2, name: 'HimShakti', image: '/images/projects/himshakti.jpg', url: 'https://himshakti.ragspro.com' },
  { id: 3, name: 'LawAI', image: '/images/projects/lawai.jpg', url: 'https://lawai.ragspro.com' },
  { id: 4, name: 'Maid Service', image: '/images/projects/maid.jpg', url: 'https://maid-agency.vercel.app' }
]

export default function HeroSection() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [targets, setTargets] = useState([])
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleProjectClick = (url) => {
    window.open(url, '_blank')
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  // Lower the hero stack beneath projects after landing
  const heroZ = useTransform(scrollYProgress, [0, 0.7, 0.85, 1], [20, 20, 1, -1])

  useEffect(() => {
    const readTargets = () => {
      const published = window.__projectTargets
      if (!published || !published.targets) return
      setTargets(published.targets)

      // Track scroll direction
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }

    readTargets()
    window.addEventListener('resize', readTargets)
    window.addEventListener('scroll', readTargets)

    return () => {
      window.removeEventListener('resize', readTargets)
      window.removeEventListener('scroll', readTargets)
    }
  }, [lastScrollY])

  return (
    <section
      ref={containerRef}
      className="h-[200vh] bg-white relative z-0 benji-section"
    >
      <div ref={canvasRef} className="sticky top-0 h-screen flex items-start overflow-visible pt-12 pb-20" style={{ zIndex: heroZ }}>
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-2 gap-8 items-start">
          <div className="max-w-3xl pt-4 relative" style={{ zIndex: 2000 }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs mb-6 mt-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-gray-700 font-medium">50+ USERS IN 60 DAYS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[48px] md:text-[60px] lg:text-[68px] font-normal leading-[1.05] tracking-tight mb-6">
              <span className="text-gray-400">We build your</span>
              <br />
              <span className="text-black">startup in 20 days.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base text-gray-600 mb-8">
              <span className="text-black font-semibold">Yes, it is true.</span> RAGSPRO by Raghav Shah delivers complete startup solutions - web apps, mobile apps, AI integration & business automation in just 20 days.
            </p>

            {/* CTA Button with Avatars */}
            <button
              onClick={() => {
                // Trigger the quote form in ServicesSection
                const event = new CustomEvent('openQuoteForm')
                window.dispatchEvent(event)
              }}
              className="group inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-lg mb-16 text-sm"
            >
              <div className="flex -space-x-2 relative">
                {/* User 1 Circle */}
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="User 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User 2 Circle */}
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face"
                    alt="User 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* '+ you' Circle - Appears on hover */}
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center group-hover:scale-100 group-hover:opacity-100 opacity-0 scale-0 transition-all duration-300">
                  <span className="text-black text-[8px] font-bold">+ you</span>
                </div>
              </div>

              <span className="text-white">Build your app now</span>
            </button>

            {/* Social Proof */}
            <div className="flex items-center gap-2 mb-12">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                    alt="Client 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                    alt="Client 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                    alt="Client 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                    alt="Client 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                    alt="Client 5"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div
                  className="flex gap-0.5 mb-0.5 cursor-pointer testimonial-area"
                  onClick={() => {
                    const testimonialsSection = document.querySelector('#testimonials') || document.querySelector('[class*="testimonial"]')
                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="text-black hover:scale-110 transition-transform" style={{ fontSize: '10px' }}>★</span>
                  ))}
                </div>
                <p className="text-[10px] text-gray-600 font-medium">50+ Happy clients</p>
              </div>
            </div>


          </div>

          {/* Right Column - Floating Project Cards */}
          <div className="relative w-full h-[600px] pt-4" style={{ perspective: '1500px', zIndex: 1000 }}>
            {projects.map((project, index) => {
              // start positions on the left side stack
              const start = {
                x: 40 + (index % 2) * 40,
                y: 80 + index * 40,
                s: 0.85
              }
              const t = targets[index]
              // Smooth bidirectional animation
              const p = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1])
              const targetX = t ? t.cx - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0) - 250 : start.x
              const x = useTransform(p, [0, 0.8, 1], [start.x, targetX, targetX])

              // Align cards in 2x2 grid: top row (index 0,1) and bottom row (index 2,3)
              const isTopRow = index < 2
              const baseY = t ? t.cy - 260 : start.y
              const alignedY = isTopRow ? baseY : baseY - 30 // Negative gap to bring cards closer
              const y = useTransform(p, [0, 0.8, 1], [start.y, alignedY, alignedY])
              const scaleCard = useTransform(p, [0, 1], [start.s, 1])
              const rotateY = useTransform(p, [0, 1], [8, 0])
              const rotateX = useTransform(p, [0, 1], [0, 0])
              // Keep cards always visible
              const cardOpacity = 1

              return (
                <motion.div
                  key={project.id}
                  style={{
                    y,
                    x,
                    rotateY,
                    rotateX,
                    scale: scaleCard,
                    opacity: cardOpacity,
                    zIndex: 1500 + index,
                    transformStyle: 'preserve-3d'
                  }}
                  className="absolute top-0 left-0 w-[450px] h-[280px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer project-card"
                  onClick={() => handleProjectClick(project.url)}
                  data-project="true"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <p className="text-white text-sm font-semibold">{project.name}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tech Stack Section - Full Width */}
      <div className="w-full -mt-72 py-2 overflow-hidden">
        <div
          className="flex tech-logos-scroll gap-12 items-center hover:pause-animation"
          style={{
            width: 'max-content',
            animation: 'scrollLogos 15s linear infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running'
          }}
        >
          {/* Tech logos */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />

          {/* Duplicate for seamless loop */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-8 w-8 opacity-100 hover:scale-110 transition-all" />
        </div>
      </div>

      {/* Latest Projects Heading */}
      <h2
        className="text-5xl md:text-6xl lg:text-7xl font-normal text-black tracking-tight mt-28 relative"
        style={{
          zIndex: 3000,
          position: 'relative',
          whiteSpace: 'nowrap'
        }}
      >
        Latest Projects.
      </h2>
    </section>
  )
}