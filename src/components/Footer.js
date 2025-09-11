import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiMapPin, FiHeart } from 'react-icons/fi'

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
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gradient mb-4">RAGSPRO</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into digital reality. Specializing in premium web development, 
              AI solutions, and innovative digital products that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ragspro/raghav-portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhupederpratap/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://x.com/ragsproai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
              >
                <FiTwitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/ragsproai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('resume')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Resume
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
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('request-project')}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center"
                >
                  Request Project
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMapPin className="text-accent mr-3" size={16} />
                <span className="text-gray-400">Delhi, India</span>
              </div>
              <div className="flex items-center">
                <FiMail className="text-accent mr-3" size={16} />
                <a 
                  href="mailto:ragsproai@gmail.com" 
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  ragsproai@gmail.com
                </a>
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 bg-accent hover:bg-opacity-80 text-white text-sm font-medium rounded-lg transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm flex items-center">
              &copy; {currentYear} RAGSPRO. Made with <FiHeart className="text-red-500 mx-1" size={14} /> in Delhi, India
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => alert('Privacy Policy page coming soon!')}
                className="text-gray-500 hover:text-accent text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('Terms of Service page coming soon!')}
                className="text-gray-500 hover:text-accent text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}