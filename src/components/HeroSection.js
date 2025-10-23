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
  
  // Mobile-specific scroll progress
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
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
      className="h-[110vh] sm:h-[120vh] md:h-[140vh] lg:h-[200vh] bg-white relative z-0 main-section"
    >
      <div ref={canvasRef} className="sticky top-0 h-screen flex items-start overflow-visible pt-1 sm:pt-4 md:pt-6 lg:pt-12 pb-1 sm:pb-4 md:pb-6 lg:pb-20" style={{ zIndex: heroZ }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-start">
          <div className="max-w-full md:max-w-3xl pt-16 sm:pt-1 md:pt-2 lg:pt-4 relative" style={{ zIndex: 2000 }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1.5 bg-white border border-gray-200 rounded-full text-[10px] sm:text-[10px] md:text-xs mb-3 sm:mb-3 md:mb-6 mt-2 sm:mt-2 md:mt-4">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-gray-700 font-medium">50+ USERS IN 60 DAYS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[44px] sm:text-[24px] md:text-[32px] lg:text-[48px] xl:text-[68px] font-normal leading-[1.05] tracking-tight mb-3 sm:mb-3 md:mb-6">
              <span className="text-gray-400">We build your</span>
              <br />
              <span className="text-black">startup in 20 days.</span>
            </h1>

            {/* Subheading */}
            <p className="text-[12px] sm:text-xs md:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 md:mb-8 mt-4 sm:mt-2">
              <span className="text-black font-semibold">Yes, it is true.</span> RAGSPRO by Raghav Shah delivers complete startup solutions - web apps, mobile apps, AI integration & business automation in just 20 days.
            </p>

            {/* CTA Button with Avatars */}
            <button
              onClick={() => {
                // Trigger the quote form in ServicesSection
                const event = new CustomEvent('openQuoteForm')
                window.dispatchEvent(event)
              }}
              className="group inline-flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-1.5 md:py-2 lg:py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-lg mb-6 sm:mb-6 md:mb-8 lg:mb-16 text-[10px] sm:text-[10px] md:text-xs lg:text-sm mt-4 sm:mt-6"
            >
              <div className="flex -space-x-0.5 sm:-space-x-1 md:-space-x-2 relative">
                {/* User 1 Circle */}
                <div className="w-4 sm:w-5 md:w-6 lg:w-8 h-4 sm:h-5 md:h-6 lg:h-8 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="User 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User 2 Circle */}
                <div className="w-4 sm:w-5 md:w-6 lg:w-8 h-4 sm:h-5 md:h-6 lg:h-8 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face"
                    alt="User 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* '+ you' Circle - Appears on hover */}
                <div className="w-4 sm:w-5 md:w-6 lg:w-8 h-4 sm:h-5 md:h-6 lg:h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center group-hover:scale-100 group-hover:opacity-100 opacity-0 scale-0 transition-all duration-300">
                  <span className="text-black text-[4px] sm:text-[5px] md:text-[6px] lg:text-[8px] font-bold">+ you</span>
                </div>
              </div>

              <span className="text-white">Build your app now</span>
            </button>

            {/* Social Proof - Compact for mobile */}
            <div className="flex items-center gap-2 sm:gap-1 md:gap-2 mb-3 sm:mb-4 md:mb-8 lg:mb-12 -mt-2 sm:mt-0">
              <div className="flex -space-x-0.5">
                <div className="w-3 sm:w-3 md:w-4 lg:w-5 h-3 sm:h-3 md:h-4 lg:h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                    alt="Client 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3 sm:w-3 md:w-4 lg:w-5 h-3 sm:h-3 md:h-4 lg:h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                    alt="Client 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3 sm:w-3 md:w-4 lg:w-5 h-3 sm:h-3 md:h-4 lg:h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                    alt="Client 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3 sm:w-3 md:w-4 lg:w-5 h-3 sm:h-3 md:h-4 lg:h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                    alt="Client 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3 sm:w-3 md:w-4 lg:w-5 h-3 sm:h-3 md:h-4 lg:h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                    alt="Client 5"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-left ml-1.5">
                <div
                  className="flex gap-0 sm:gap-0.5 justify-center sm:justify-start mb-0 sm:mb-0.5 cursor-pointer testimonial-area"
                  onClick={() => {
                    const testimonialsSection = document.querySelector('#testimonials') || document.querySelector('[class*="testimonial"]')
                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="text-black hover:scale-110 transition-transform text-[8px] sm:text-[5px] md:text-[6px] lg:text-[8px]">★</span>
                  ))}
                </div>
                <p className="text-[7px] sm:text-[6px] md:text-[8px] lg:text-[10px] text-gray-600 font-medium -mt-8 sm:mt-0">50+ Happy clients</p>
              </div>
            </div>


          </div>

          {/* Right Column - Floating Project Cards - Hidden on Mobile */}
          <div className="relative w-full h-[200px] sm:h-[180px] md:h-[240px] lg:h-[350px] xl:h-[600px] pt-1 sm:pt-2 md:pt-4 hidden md:block" style={{ perspective: '1500px', zIndex: 1000 }}>
            {projects.map((project, index) => {
              // Use state-based mobile detection
              const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024

              const start = {
                x: isMobileDevice ? -10 + (index % 2) * 80 : isTablet ? 20 + (index % 2) * 20 : 40 + (index % 2) * 40,
                y: isMobileDevice ? 20 + Math.floor(index / 2) * 35 : isTablet ? 30 + index * 15 : 80 + index * 40,
                s: 0.85
              }
              const t = targets[index]
              // More aggressive scroll range for mobile
              const scrollRange = isMobileDevice ? [0, 0.3, 0.8] : [0, 0.6, 1]
              const p = useTransform(scrollYProgress, scrollRange, [0, 1, 1])

              // Fixed positioning for mobile to land properly
              let targetX, alignedY

              if (isMobileDevice) {
                // Use same target system as laptop but with tighter mobile spacing
                const isLeftCard = index % 2 === 0
                const offsetX = isLeftCard ? -110 : -70  // Move cards even more to the left
                targetX = t ? t.cx - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0) + offsetX : start.x

                const isTopRow = index < 2
                const offsetY = -160  // Closer to text
                const baseY = t ? t.cy + offsetY : start.y
                const gap = -180  // Proper spacing between top and bottom cards
                alignedY = isTopRow ? baseY : baseY + gap
              } else {
                // Original logic for tablet/desktop
                const offsetX = isTablet ? -80 : -250
                targetX = t ? t.cx - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0) + offsetX : start.x

                const isTopRow = index < 2
                const offsetY = isTablet ? -100 : -260
                const baseY = t ? t.cy + offsetY : start.y
                const gap = isTablet ? -10 : -30
                alignedY = isTopRow ? baseY : baseY + gap
              }

              const x = useTransform(p, [0, 0.8, 1], [start.x, targetX, targetX])
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
                  className="absolute top-0 left-0 w-[160px] sm:w-[150px] md:w-[200px] lg:w-[280px] xl:w-[450px] h-[96px] sm:h-[90px] md:h-[120px] lg:h-[170px] xl:h-[280px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl cursor-pointer project-card"
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
                  <div className="absolute bottom-0.5 sm:bottom-1 md:bottom-2 lg:bottom-3 left-0.5 sm:left-1 md:left-2 lg:left-3 bg-black/80 backdrop-blur-sm px-0.5 sm:px-1 md:px-2 lg:px-3 py-0.5 sm:py-0.5 md:py-1 lg:py-1.5 rounded-sm sm:rounded-md md:rounded-lg">
                    <p className="text-white text-[6px] sm:text-[8px] md:text-xs lg:text-sm font-semibold">{project.name}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tech Stack Section - Full Width */}
      <div className="w-full -mt-[20rem] sm:-mt-48 md:-mt-56 lg:-mt-64 xl:-mt-72 py-0.5 sm:py-1 md:py-2 overflow-hidden">
        <div
          className="flex tech-logos-scroll gap-3 sm:gap-6 md:gap-8 lg:gap-12 items-center hover:pause-animation"
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
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />

          {/* Duplicate for seamless loop */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-3 sm:h-4 md:h-6 lg:h-8 w-3 sm:w-4 md:w-6 lg:w-8 opacity-100 hover:scale-110 transition-all" />
        </div>
      </div>

      {/* Latest Projects Heading */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal text-black tracking-tight mt-8 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-28 relative px-2 sm:px-4 md:px-6 lg:px-8"
        style={{
          zIndex: 3000,
          position: 'relative'
        }}
      >
        Latest Projects.
      </h2>

      {/* Static Project Cards for Mobile */}
      <div className="block sm:hidden px-4 mt-6">
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.url)}
              className="w-full h-24 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}