import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/60 hover:border-gray-300 hover:bg-white/90 transition-all cursor-pointer shadow-md hover:shadow-xl"
    >
      <div className="px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-black font-bold text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h4 className="text-black font-semibold text-sm flex-1">{faq.question}</h4>
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="text-black text-lg"
          >
            +
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 leading-relaxed text-xs mt-2 pl-6">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
