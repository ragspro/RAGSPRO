import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function FloatingBrand() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Scroll up = expand, scroll down = compact
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsExpanded(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsExpanded(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { name: 'Services', href: '/#services', isExternal: true },
    { name: 'Pricing', href: '/#pricing', isExternal: true },
    { name: 'About', href: '/#team', isExternal: true },
  ]

  const handleNavClick = (href, isExternal, linkName) => {
    if (linkName === 'Work') {
      // For Work link, check current page
      if (router.pathname === '/') {
        // If on homepage, scroll to projects section
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // If on other pages, go to projects page
        router.push('/projects')
      }
    } else if (isExternal) {
      // For anchor links, use window.location
      window.location.href = href
    } else {
      // For internal pages, use Next.js router for smooth transitions
      router.push(href)
    }
  }

  return (
    <>
      {/* Fixed Floating Bar - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-2 md:top-4 z-[9999] w-full flex justify-center px-2 md:px-4"
      >
        <motion.div
          animate={{
            scale: isExpanded ? 1 : 0.95,
            paddingLeft: isExpanded ? '8px' : '6px',
            paddingRight: isExpanded ? '8px' : '6px',
            paddingTop: isExpanded ? '6px' : '4px',
            paddingBottom: isExpanded ? '6px' : '4px',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-white/10 backdrop-blur-2xl rounded-full shadow-2xl flex items-center gap-1 md:gap-3 border border-white/20 mobile-scale-30"
          style={{
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          {/* Logo - Always Visible */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-1 md:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="RAGSPRO Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-black text-xs md:text-sm">
              RAGSPRO
            </span>
          </button>

          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-1"
              >
                <motion.span
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                    delay: 0,
                  }}
                  className="w-0.5 h-0.5 md:w-1 md:h-1 bg-black rounded-full"
                />
                <motion.span
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                    delay: 0.3,
                  }}
                  className="w-0.5 h-0.5 md:w-1 md:h-1 bg-black rounded-full"
                />
                <motion.span
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                    delay: 0.6,
                  }}
                  className="w-0.5 h-0.5 md:w-1 md:h-1 bg-black rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Links - Show when expanded */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1 md:gap-4 pl-1 md:pl-3 ml-1 md:ml-3 border-l border-gray-200"
              >
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.isExternal, link.name)}
                    className="text-xs md:text-sm font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('/#contact', true)}
                  className="text-xs md:text-sm font-medium text-black hover:text-gray-700 transition-colors whitespace-nowrap"
                >
                  Still not sure?
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 -z-10"
              />

              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 right-0 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 py-2 min-w-[200px]"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    handleNavClick('/#services', true)
                  }}
                  className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50/50 transition-colors w-full text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    handleNavClick('/#pricing', true)
                  }}
                  className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50/50 transition-colors w-full text-left"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    handleNavClick('/#team', true)
                  }}
                  className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50/50 transition-colors w-full text-left"
                >
                  About
                </button>
                <div className="border-t border-gray-200 my-2"></div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    handleNavClick('/#contact', true)
                  }}
                  className="block px-6 py-3 text-sm font-medium text-black hover:bg-gray-50/50 transition-colors w-full text-left"
                >
                  Still not sure?
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}