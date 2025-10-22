import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="py-16 md:py-32 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 md:mb-16"
          >
            <span className="text-gray-400">We documented our</span>
            <br />
            <span className="text-black">journey from zero to one.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16"
          >
            {/* Video 1 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold">building in public</h3>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                80K USERS in 6 Months!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
