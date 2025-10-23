'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMobileAlt, FaLaptopCode, FaFileAlt, FaShieldAlt, FaPaintBrush, FaCube, FaPalette, FaWhatsapp, FaLightbulb } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const services = [
  { title: "Mobile Apps", icon: FaMobileAlt },
  { title: "Web Apps", icon: FaLaptopCode },
  { title: "Landing Pages", icon: FaFileAlt },
  { title: "Data Security", icon: FaShieldAlt },
  { title: "UX / UI Consultation", icon: FaPaintBrush },
  { title: "3D Design", icon: FaCube },
  { title: "Brand Design", icon: FaPalette }
]

export default function ServicesSection() {
  const [containerHover, setContainerHover] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create email content
    const projectTypeLabel = {
      'mobile-app': 'Mobile App (iOS/Android)',
      'web-app': 'Web Application',
      'website': 'Website',
      'ai-solution': 'AI Solution',
      'ui-design': 'UI/UX Design',
      'ecommerce': 'E-commerce Platform',
      'saas': 'SaaS Product',
      'automation': 'Business Automation',
      'other': 'Other'
    }[formData.projectType] || formData.projectType

    const emailBody = `
New Project Request from ${formData.name}

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Project Details:
- Project Type: ${projectTypeLabel}
- Budget: ${formData.budget}

Message:
${formData.message}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:raghav@ragspro.com?subject=New Project Request - ${projectTypeLabel}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Show thank you message
    setIsSubmitted(true)

    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
      budget: ''
    })

    // Auto close after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setShowQuoteForm(false)
    }, 3000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects')
      const footer = document.querySelector('footer')

      if (projectsSection && footer) {
        const projectsRect = projectsSection.getBoundingClientRect()
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Show buttons only if projects section is passed AND footer is not visible
        const shouldShowButtons = projectsRect.bottom < windowHeight * 0.8 && footerRect.top > windowHeight
        setShowButtons(shouldShowButtons)
      }
    }

    const handleOpenQuoteForm = () => {
      setShowQuoteForm(true)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('openQuoteForm', handleOpenQuoteForm)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('openQuoteForm', handleOpenQuoteForm)
    }
  }, [])

  return (
    <section id="services" className="relative min-h-screen bg-white py-8 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-24 items-center">
          {/* LEFT: Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal tracking-tight leading-[1.15]">
              <span className="text-gray-400">Services that</span>
              <br />
              <span className="text-black">you need to start</span>
              <br />
              <span className="text-black">your dream SaaS.</span>
            </h2>
          </div>

          {/* RIGHT: Services List */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="flex items-center gap-2 sm:gap-3 md:gap-4"
              >
                <div className="w-8 sm:w-10 md:w-11 h-8 sm:h-10 md:h-11 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <service.icon className="text-base sm:text-lg" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-black">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Blur Overlay - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white/40 via-white/10 to-transparent backdrop-blur-[2px] pointer-events-none z-30 rounded-t-[1.25rem]" />

      {/* Floating Glass Buttons */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-300 ${showButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="group bg-white/90 backdrop-blur-xl rounded-full p-1 sm:p-1.5 shadow-xl border border-gray-200/50 flex gap-1 sm:gap-1.5 md:hover:gap-2">
          <a
            href="https://wa.me/918700048490?text=Hi%2C%20I%27m%20interested%20in%20your%20development%20services.%20Can%20we%20discuss%20my%20project%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full flex items-center justify-center gap-2 px-3 py-2 sm:py-3 hover:bg-black hover:text-white transition-all duration-300 border border-gray-200 w-auto md:w-10 md:sm:w-12 md:group-hover:w-auto md:group-hover:px-3 md:sm:group-hover:px-4"
            style={{ transformOrigin: 'center' }}
          >
            <FaWhatsapp className="text-sm sm:text-base flex-shrink-0 hover:text-white" />
            <span className="font-medium text-sm whitespace-nowrap opacity-100 w-auto md:opacity-0 md:w-0 md:group-hover:opacity-100 md:group-hover:w-auto transition-all duration-300 overflow-hidden hover:text-white">
              WhatsApp
            </span>
          </a>

          <button
            onClick={() => setShowQuoteForm(true)}
            className="bg-white text-black rounded-full flex items-center justify-center gap-2 px-3 py-2 sm:py-3 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer border border-gray-200 w-auto md:w-10 md:sm:w-12 md:group-hover:w-auto md:group-hover:px-3 md:sm:group-hover:px-4"
            style={{ transformOrigin: 'center' }}
          >
            <FaLightbulb className="text-sm sm:text-base flex-shrink-0 hover:text-white" />
            <span className="font-medium text-sm whitespace-nowrap opacity-100 w-auto md:opacity-0 md:w-0 md:group-hover:opacity-100 md:group-hover:w-auto transition-all duration-300 overflow-hidden hover:text-white">
              Pitch us your idea
            </span>
          </button>
        </div>
      </div>

      {/* Quote Form Sidebar */}
      <AnimatePresence>
        {showQuoteForm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuoteForm(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />

            {/* Sidebar Form */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-2xl z-50 overflow-y-auto flex items-center justify-center"
            >
              <div className="p-4 sm:p-6 w-full max-w-sm mx-auto">
                {/* Close Button */}
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-light"
                >
                  ×
                </button>

                {/* Header */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold mb-2 leading-tight">
                    <span className="text-gray-500">Let's build your</span>
                    <br />
                    <span className="text-black">startup together</span>
                  </h2>
                  <p className="text-gray-600 text-xs">Ready to turn your idea into reality?</p>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-white/80 backdrop-blur-2xl rounded-xl border border-white/40 shadow-lg mx-auto w-fit">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    RS
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-black text-xs">Raghav Shah</p>
                    <p className="text-gray-600 text-[10px]">CEO, RAGSPRO</p>
                    <p className="text-gray-500 text-[10px]">raghav@ragspro.com</p>
                  </div>
                </div>

                {/* Thank You Message or Form */}
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1">Thank you!</h3>
                    <p className="text-gray-600 text-xs">We'll connect with you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-medium text-black mb-1">Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-black mb-1">Phone</label>
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-black mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-black mb-1">Project Type</label>
                      <select
                        value={formData.projectType || ''}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="mobile-app">📱 Mobile App</option>
                        <option value="web-app">💻 Web App</option>
                        <option value="website">🌐 Website</option>
                        <option value="ai-solution">🤖 AI Solution</option>
                        <option value="ui-design">🎨 UI/UX Design</option>
                        <option value="ecommerce">🛒 E-commerce</option>
                        <option value="saas">⚡ SaaS Product</option>
                        <option value="automation">🔧 Automation</option>
                        <option value="other">� OtheEr</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-black mb-1">Message</label>
                      <textarea
                        placeholder="Describe your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-black mb-1">Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="5k-10k">₹5K - ₹10K</option>
                        <option value="10k-25k">₹10K - ₹25K</option>
                        <option value="25k-50k">₹25K - ₹50K</option>
                        <option value="50k+">₹50K+</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                    >
                      Submit Request
                    </button>

                    <p className="text-[10px] text-gray-500 text-center mt-3">
                      By submitting, you agree to our <a href="#" className="text-black underline">Privacy Policy</a> and <a href="#" className="text-black underline">Terms</a>.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
