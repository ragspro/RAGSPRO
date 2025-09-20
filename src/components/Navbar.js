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
    { name: 'Home', href: '/', isExternal: false },
    { name: 'Services', href: '/#services', isExternal: false },
    { name: 'Projects', href: '/#projects', isExternal: false },
    { name: 'Pricing', href: '/#pricing', isExternal: false },
    { name: 'Get Quote', href: '/#request-project', isExternal: false },
    { name: 'Contact', href: '/#contact', isExternal: false },
    { name: 'Meet Founder', href: '/meet-founder', isExternal: false },
  ]
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 safe-area-top ${
      scrolled ? 'py-2 sm:py-3 glass-card bg-opacity-80' : 'py-3 sm:py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
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
            <Link key={link.name} href={link.href}>
              <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        
        <button 
          className="md:hidden text-white p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
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
          className="md:hidden glass-card mt-2 py-4 px-4 mx-4 rounded-lg"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors w-full text-left py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 min-h-[44px] flex items-center cursor-pointer"
                >
                  {link.name}
                </span>
              </Link>
            ))}
            

          </div>
        </motion.div>
      )}
    </header>
  )
}