import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiCode, FiLayers, FiCpu, FiTrendingUp, FiUsers, FiStar, FiZap, FiTrophy, FiArrowRight, FiHeart, FiTarget, FiAward } from 'react-icons/fi'
import SEOHead from '../components/SEOHead'
import CustomCursor from '../components/CustomCursor'

export default function OurStory() {
  const [activeSection, setActiveSection] = useState(0)
  
  const achievements = [
    { 
      name: '₹5L+ Revenue Generated', 
      icon: <FiTrendingUp size={28} />, 
      description: 'Total revenue generated across our AI products and client projects',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      name: '2000+ Users', 
      icon: <FiUsers size={28} />, 
      description: 'Active users across GLOW, LAW-AI, and other AI products',
      color: 'from-blue-400 to-cyan-600'
    },
    { 
      name: '98% Client Satisfaction', 
      icon: <FiStar size={28} />, 
      description: 'Consistently high ratings from satisfied clients and users',
      color: 'from-yellow-400 to-orange-600'
    },
    { 
      name: '15-Day Fast Delivery', 
      icon: <FiZap size={28} />, 
      description: 'Average project delivery time from concept to launch',
      color: 'from-purple-400 to-pink-600'
    },
  ]
  
  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'RAGSPRO was founded with a vision to democratize AI technology for businesses of all sizes.',
      icon: <FiTarget size={24} />
    },
    {
      year: '2023',
      title: 'First AI Product Launch',
      description: 'Launched GLOW - AI photo transformation tool that gained 2000+ users within months.',
      icon: <FiZap size={24} />
    },
    {
      year: '2024',
      title: 'Expanding Horizons',
      description: 'Launched LAW-AI for legal professionals and RAGS AI for business automation.',
      icon: <FiTrophy size={24} />
    },
    {
      year: '2024',
      title: 'Revenue Milestone',
      description: 'Crossed ₹5L+ in revenue while maintaining 98% client satisfaction rate.',
      icon: <FiAward size={24} />
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and creating solutions that don\'t exist yet.',
      icon: <FiCpu size={32} />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We build with revenue generation in mind.',
      icon: <FiHeart size={32} />,
      gradient: 'from-pink-500 to-red-600'
    },
    {
      title: 'Fast Execution',
      description: 'Speed matters in business. We deliver quality solutions in record time.',
      icon: <FiZap size={32} />,
      gradient: 'from-yellow-500 to-orange-600'
    }
  ]

  const expertise = [
    'AI Product Development (GLOW, LAW-AI, RAGS AI launched)',
    'Business Process Automation (100+ workflows optimized)',
    'Custom AI Assistant Development (Voice & Text based)',
    'Revenue-Generating Digital Solutions (₹5L+ generated)',
    'Startup MVP Development (20-day delivery)',
    'Full-Stack Web & Mobile Applications'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % timeline.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <SEOHead 
        title="Our Story - RAGSPRO | From Vision to ₹5L+ Revenue in AI Solutions"
        description="Discover the RAGSPRO journey - how Raghav Shah built a profitable AI agency in Delhi, generating ₹5L+ revenue with 2000+ users across GLOW, LAW-AI, and RAGS AI products."
        keywords="ragspro story, raghav shah journey, ai agency delhi, startup success story, glow ai, law ai, profitable ai products"
        url="https://ragspro.com/our-story"
      />
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a single vision to <span className="font-semibold text-black">₹5L+ revenue</span> - 
              the journey of building profitable AI solutions that actually work.
            </p>
          </motion.div>

          {/* Founder Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Meet Raghav Shah</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A passionate software engineer from Delhi with a BCA degree, Raghav founded RAGSPRO in 2023 
                  with one clear mission: <span className="font-semibold text-black">turn innovative ideas into profitable AI businesses.</span>
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What started as a vision has now become a reality - we've successfully launched multiple 
                  profitable AI products including GLOW, LAW-AI, and RAGS AI, helping businesses automate 
                  their processes and increase revenue.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Based in Delhi, India
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    BCA Graduate
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">👨‍💻</div>
                  <h3 className="font-semibold text-black mb-2">Raghav Shah</h3>
                  <p className="text-gray-600 text-sm">Founder & CEO, RAGSPRO</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">AI Enthusiast</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">Full-Stack Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From inception to success - here's how we built a profitable AI agency
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at RAGSPRO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in building AI solutions that generate real revenue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Success Story?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join the businesses that have already transformed their operations with our AI solutions. 
              Let's build something profitable together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918700048490?text=Hi, I'm interested in RAGSPRO's AI development services and would like to book a free consultation to discuss my project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 group"
              >
                Book Free Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
            
            <div className="mt-8 flex justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                15-30 Day Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Revenue-Focused
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                98% Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}