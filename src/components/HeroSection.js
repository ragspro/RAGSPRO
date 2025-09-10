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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black hero-section">
      
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative">
        <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-white block xs:inline">Hi, I'm </span>
              <span className="text-gradient block xs:inline">Raghav Shah</span>
            </h1>
            
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-4 md:mb-6 leading-relaxed">
              Full-Stack Developer & Founder of RAGSPRO
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed">
              Creating premium web experiences, AI-powered tools, and digital products
              that help businesses stand out in the digital landscape.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 xs:px-8 py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all neon-border text-sm xs:text-base"
              >
                Hire Me
              </button>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 xs:px-8 py-3 bg-transparent border border-accent text-white font-medium rounded-full hover:bg-accent hover:bg-opacity-10 transition-all text-sm xs:text-base"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[600px] relative three-canvas">
          <SplineModel />
        </div>
      </div>

      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}