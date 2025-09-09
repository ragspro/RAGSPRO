import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('EN')
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'HI' : 'EN')
  }
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const navLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Services', action: () => scrollToSection('services') },
    { name: 'Projects', action: () => scrollToSection('projects') },
    { name: 'Products', action: () => scrollToSection('products') },
    { name: 'Resume', action: () => scrollToSection('resume') },
    { name: 'Contact', action: () => scrollToSection('contact') },
  ]
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'py-3 glass-card bg-opacity-80' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient"
          >
            RAGSPRO
          </motion.span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={link.action}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <FiGlobe className="mr-1" />
            {language}
          </button>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-card mt-2 py-4 px-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => { link.action(); setIsOpen(false); }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                {link.name}
              </button>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <FiGlobe className="mr-1" />
              {language === 'EN' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}