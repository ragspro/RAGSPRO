import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#projects' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/meet-founder' },
    { name: 'Still not sure?', href: '/#contact' },
  ]
  
  return (
    <motion.nav
      animate={{
        height: scrolled ? 64 : 80,
        paddingTop: scrolled ? 12 : 20,
        paddingBottom: scrolled ? 12 : 20,
      }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled 
          ? 'bg-white/20 backdrop-blur-xl shadow-lg border-white/20' 
          : 'bg-white/10 backdrop-blur-lg border-white/10'
        }
        border-b
      `}
    >
      <div className="container mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          animate={{ scale: scrolled ? 0.9 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-black group-hover:text-[#21b30b] transition-colors duration-300 cursor-pointer">
              RAGSPRO
            </span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="text-gray-900 font-medium hover:text-[#21b30b] transition-colors cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
        >
          Get Started
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 font-medium hover:text-[#21b30b] transition-colors block py-2 cursor-pointer"
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors text-center"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
