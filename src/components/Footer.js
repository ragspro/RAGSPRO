import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiMapPin, FiHeart } from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-gradient mb-4">RAGSPRO</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              RAGSPRO - Building profitable AI products since 2023. 
              Turning innovative ideas into revenue-generating digital businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ragspro/raghav-portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
                aria-label="Visit RAGSPRO GitHub profile"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhupederpratap/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
                aria-label="Connect with RAGSPRO on LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://x.com/ragsproai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
                aria-label="Follow RAGSPRO on Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/ragsproai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
                aria-label="Follow RAGSPRO on Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-0">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link href="/meet-founder">
                  <span className="text-gray-400 hover:text-accent transition-colors flex items-center cursor-pointer">
                    Meet Founder
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/our-story">
                  <span className="text-gray-400 hover:text-accent transition-colors flex items-center cursor-pointer">
                    Our Story
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://glow.ragspro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  GLOW
                </a>
              </li>
              <li>
                <a 
                  href="https://lawai.ragspro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  LAW-AI
                </a>
              </li>
              <li>
                <a 
                  href="https://maid-agency.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Maid Agency
                </a>
              </li>
              <li>
                <a 
                  href="https://elito-premium-shoes.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Elito Shoes
                </a>
              </li>
              <li>
                <a 
                  href="https://himshakti.ragspro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Himshakti
                </a>
              </li>
            </ul>
          </div>
          
          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMail className="text-accent mr-3" size={16} />
                <a 
                  href="mailto:raghav@ragspro.com" 
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  raghav@ragspro.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-3" size={16}>📱</span>
                <a 
                  href="tel:+918700048490" 
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  +91-8700048490
                </a>
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-accent mr-3" size={16} />
                <span className="text-gray-400">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm flex items-center">
              &copy; {currentYear} RAGSPRO. Made with <FiHeart className="text-red-500 mx-1" size={14} /> in Delhi, India
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy">
                <span className="text-gray-300 hover:text-accent text-sm transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms-of-service">
                <span className="text-gray-300 hover:text-accent text-sm transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}