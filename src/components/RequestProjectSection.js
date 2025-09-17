import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck, FiCode, FiSmartphone, FiGlobe, FiZap, FiCpu, FiTrendingUp } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../utils/emailConfig'

export default function RequestProjectSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  
  const projectTypes = [
    { id: 'ai-product', name: 'AI Product Development', icon: <FiCpu /> },
    { id: 'automation', name: 'Business Automation', icon: <FiZap /> },
    { id: 'ai-assistant', name: 'Custom AI Assistant', icon: <FiSmartphone /> },
    { id: 'optimization', name: 'Revenue Optimization', icon: <FiTrendingUp /> },
    { id: 'other', name: 'Other', icon: <FiCode /> }
  ]
  
  const budgetRanges = [
    '₹50K-₹1L',
    '₹1L-₹3L',
    '₹3L-₹5L',
    '₹5L+'
  ]
  
  const timelines = [
    'Rush - 30 days',
    'Standard - 60 days',
    'Flexible - 90+ days'
  ]
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.projectType) newErrors.projectType = 'Project type is required'
    if (!formData.description.trim()) newErrors.description = 'Project description is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setIsSubmitting(true)
    
    const projectTypeLabel = projectTypes.find(type => type.id === formData.projectType)?.name || formData.projectType
    
    const mailtoLink = `mailto:raghav@ragspro.com?subject=Project Request - ${projectTypeLabel}&body=${encodeURIComponent(
      `New Project Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nProject Type: ${projectTypeLabel}\nBudget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}\n\nProject Description:\n${formData.description}`
    )}`
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project_type: projectTypeLabel,
      budget: formData.budget,
      timeline: formData.timeline,
      description: formData.description,
      to_name: 'Raghav Shah'
    }
    
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((response) => {
      console.log('Project request sent successfully:', response)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', timeline: '', description: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    })
    .catch((error) => {
      console.error('EmailJS failed, opening mailto:', error)
      setIsSubmitting(false)
      
      window.open(mailtoLink, '_blank')
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', timeline: '', description: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    })
  }
  
  return (
    <section id="request-project" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Profitable <span className="text-gradient">AI Product?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get a free 30-minute consultation to discuss your project
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl reveal">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-6 text-center"
              >
                <FiCheck size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                <p className="text-gray-300">We'll review your project and get back to you within 4 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-secondary bg-opacity-50 border ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-secondary bg-opacity-50 border ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                        className={`p-3 rounded-lg border transition-all text-center ${
                          formData.projectType === type.id
                            ? 'border-accent bg-accent bg-opacity-10 text-accent'
                            : 'border-gray-700 text-gray-300 hover:border-accent hover:text-accent'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <span className="mb-1">{type.icon}</span>
                          <span className="text-xs">{type.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-secondary bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-secondary bg-opacity-50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full bg-secondary bg-opacity-50 border ${
                      errors.description ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent`}
                    placeholder="Describe your project in detail. What do you want to build? What features do you need? Any specific requirements?"
                  ></textarea>
                  {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-lg transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Book Free Strategy Call
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}