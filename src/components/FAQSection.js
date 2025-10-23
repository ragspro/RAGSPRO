import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqData = [
  {
    id: 1,
    question: "What types of apps do you build?",
    answer: "We specialize in building web applications, mobile apps, AI-powered tools, and custom software solutions. Our expertise spans React, Next.js, Node.js, and modern AI technologies."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    id: 3,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages including bug fixes, updates, security patches, and feature enhancements to keep your application running smoothly."
  },
  {
    id: 4,
    question: "What's your development process like?",
    answer: "We follow an agile methodology with regular check-ins, transparent communication, and iterative development. You'll have full visibility into progress and can provide feedback at every stage."
  },
  {
    id: 5,
    question: "Can you help with AI integration and automation?",
    answer: "Absolutely! We specialize in AI integration, chatbots, automation workflows, and custom AI solutions to help streamline your business processes and enhance user experiences."
  }
]

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4">
            Your questions answered.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - FAQ List */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 cursor-pointer transition-all duration-300 hover:bg-gray-100"
                onClick={() => toggleFAQ(faq.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm font-medium text-gray-500 bg-white px-2 sm:px-3 py-1 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-black mb-2">
                      {faq.question}
                    </h3>
                    
                    <AnimatePresence>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed pt-2">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.button
                    className="ml-2 sm:ml-3 md:ml-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {openFAQ === faq.id ? (
                      <FiMinus size={16} />
                    ) : (
                      <FiPlus size={16} />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - CTA Card */}
          <div className="lg:pl-8">
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100 sticky top-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* User Photo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">R</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Raghav Shah</p>
                  <p className="text-xs text-gray-400">Founder & Developer</p>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-2">Still not sure?</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
                  Book a free discovery call.
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Learn more about how we work and how we can help you and your startup build amazing digital products.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://calendly.com/ragsproai', '_blank')}
              >
                Schedule Now
              </motion.button>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>✓ 30-minute call</span>
                  <span>✓ No commitment</span>
                  <span>✓ Free consultation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection