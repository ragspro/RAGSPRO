import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiCheck } from 'react-icons/fi'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      alert('Subscription failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl reveal">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to my <span className="text-gradient">Newsletter</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates on web development, AI tools, and exclusive offers directly to your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-secondary bg-opacity-50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSubmitted}
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'bg-accent hover:bg-opacity-80 text-white'
                  }`}
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <FiCheck className="mr-2" />
                      Subscribed!
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
              
              <p className="text-gray-500 text-xs mt-4">
                By subscribing, you agree to our Privacy Policy. No spam, unsubscribe anytime.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Placeholder for newsletter illustration */}
                <div className="h-64 bg-secondary bg-opacity-30 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">✉️</div>
                    <p className="text-gray-400">Newsletter Illustration</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-b-2 border-r-2 border-accent opacity-50" />
                <div className="absolute -left-4 -top-4 w-24 h-24 border-t-2 border-l-2 border-neon opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}