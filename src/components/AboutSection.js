import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiCode, FiLayers, FiCpu, FiTrendingUp, FiUsers, FiStar, FiZap, FiTrophy } from 'react-icons/fi'

export default function AboutSection() {
  const achievements = [
    { name: '₹2L+ Revenue Generated', icon: <FiTrendingUp size={24} className="text-accent" />, description: 'Total revenue generated for clients across all projects' },
    { name: '500+ Users', icon: <FiUsers size={24} className="text-accent" />, description: 'Active users across our AI products and platforms' },
    { name: '95% Client Satisfaction', icon: <FiStar size={24} className="text-accent" />, description: 'Consistently high ratings from satisfied clients' },
    { name: '60-Day Delivery', icon: <FiZap size={24} className="text-accent" />, description: 'Average project delivery time from concept to launch' },
  ]
  
  const expertise = [
    'AI Product Development (3+ products launched)',
    'Business Process Automation (50+ workflows optimized)',
    'Custom AI Assistant Development',
    'Revenue-Generating Digital Solutions'
  ]
  
  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="w-full reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The RAGSPRO <span className="text-gradient">Story</span>
              </h2>
              
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
                RAGSPRO was founded with one mission: turn innovative ideas into profitable AI businesses.
              </p>
              
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Led by Raghav Shah, a 22-year-old software engineer from Delhi, our team specializes in building AI products that actually generate revenue. We've successfully launched 3 profitable AI products and helped numerous businesses automate their processes.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Our Expertise:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl mb-8 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose RAGSPRO?</h3>
                <p className="text-gray-300 mb-4">
                  We don't just build products - we build profitable businesses. Every project is designed with revenue generation and scalability in mind.
                </p>
                <p className="text-accent font-medium">
                  Our Promise: If your AI product doesn't generate ₹50K+ revenue in 6 months, we'll refund 50% of your investment.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-3">{achievement.name}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}