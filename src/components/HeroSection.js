import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SplineModel from './SplineModel'

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black hero-section pt-16 xs:pt-20 md:pt-0">
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 flex flex-col md:flex-row items-center relative w-full">
        <div className="w-full md:w-1/2 text-left mb-4 xs:mb-6 md:mb-0 hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight">
              <span className="text-white block">RAGSPRO</span>
              <span className="text-gradient block">#1 AI Product Development Agency</span>
            </h1>
            
            <h2 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-gray-300 mb-3 md:mb-6 leading-relaxed">
              Premium Web Development & AI Solutions by Raghav Shah | Delhi, India
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 md:mb-8 max-w-lg leading-relaxed">
              <strong>RAGSPRO</strong> - Leading AI Product Development Agency in Delhi. We build profitable AI products, automation solutions, and premium websites that generate ₹50K+ monthly recurring revenue. Expert in Next.js, React, Three.js development.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 xs:px-6 py-2 xs:py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all neon-border text-xs xs:text-sm"
              >
                Book Free Strategy Call
              </button>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 xs:px-6 py-2 xs:py-3 bg-transparent border border-accent text-white font-medium rounded-full hover:bg-accent hover:bg-opacity-10 transition-all text-xs xs:text-sm"
              >
                View Our Work
              </button>
            </div>
            
            <div className="mt-2 xs:mt-4 text-center xs:text-left">
              <p className="text-xs xs:text-sm text-gray-500">Usually ₹5K consultation - FREE this week</p>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 h-[250px] xs:h-[300px] sm:h-[400px] md:h-[600px] relative three-canvas">
          <SplineModel />
        </div>
      </div>
    </section>
  )
}