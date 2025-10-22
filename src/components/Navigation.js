'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        height: isScrolled ? 64 : 80,
        paddingTop: isScrolled ? 12 : 20,
        paddingBottom: isScrolled ? 12 : 20
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          animate={{ scale: isScrolled ? 0.95 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <button 
            onClick={() => window.location.href = '/'}
            className="font-bold text-xl text-black hover:text-[#22c55e] transition-colors duration-300 cursor-pointer"
          >
            RAGSPRO
          </button>
        </motion.div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Work</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>About</NavLink>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
          >
            Still not sure?
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="relative text-gray-900 font-medium hover:text-[#22c55e] transition-colors group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22c55e] group-hover:w-full transition-all duration-300" />
    </button>
  )
}
