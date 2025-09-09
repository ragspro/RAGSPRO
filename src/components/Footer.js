import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">RAGSPRO</h3>
            <p className="text-gray-400 mb-4">
              Premium web development, AI solutions, and digital products.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/raghavshah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/raghavshah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com/ragspro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com/ragspro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Delhi, India</p>
            <a href="mailto:ragsproai@gmail.com" className="text-accent hover:text-neon transition-colors">
              ragsproai@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} RAGSPRO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => alert('Privacy Policy page coming soon!')}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert('Terms of Service page coming soon!')}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}