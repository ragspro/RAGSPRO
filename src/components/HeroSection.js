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
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">Raghav Shah</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
              Full-Stack Developer & Founder of RAGSPRO
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Creating premium web experiences, AI-powered tools, and digital products
              that help businesses stand out in the digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all neon-border"
              >
                Hire Me
              </button>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-transparent border border-accent text-white font-medium rounded-full hover:bg-accent hover:bg-opacity-10 transition-all"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
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