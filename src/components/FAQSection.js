'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: "What types of apps do you build?",
    answer: "We specialize in building web applications, mobile apps, AI-powered tools, and custom software solutions. Our expertise spans React, Next.js, Node.js, and modern AI technologies."
  },
  {
    question: "How long does it take to build an app?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular check-ins, transparent communication, and iterative development. You'll have full visibility into progress and can provide feedback at every stage."
  },
  {
    question: "How much does it cost to build an app?",
    answer: "App development costs vary widely based on features, complexity, and platforms. We provide custom quotes tailored to your specific project requirements after our initial consultation."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your app continues to perform optimally after launch. This includes bug fixes, performance optimizations, feature updates, and compatibility with new OS versions. We offer flexible maintenance packages tailored to your needs."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your questions <span className="text-gradient">answered.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Column - Left Side */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-accent font-bold text-lg mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white font-semibold text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-accent text-2xl ml-4">
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-20">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Card - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-24">
              <div className="glass-card p-8 rounded-2xl border border-gray-800">
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    RS
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  Still not sure?
                </h3>
                <p className="text-accent font-semibold mb-4">
                  Book a free discovery call
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Let's discuss your project requirements and explore how we can bring your vision to life. No commitment required.
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="block w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors mb-6"
                >
                  Schedule Now
                </a>

                {/* Trust Indicators */}
                <div className="space-y-3 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>30-minute free consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No obligation quote</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
