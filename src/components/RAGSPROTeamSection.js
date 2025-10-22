'use client'
import { motion } from 'framer-motion'

export default function RAGSPROTeamSection() {
  const teamMembers = [
    {
      initials: 'RP',
      name: 'Raghav Pratap',
      role: 'Founder & CEO',
      website: 'ragspro.com',
      description: 'Raghav launched and scaled products to 50K+ total users, and generated 10M+ social views. He built RAGSPRO where he launched 10+ apps in a span of few months, with 5K+ newsletter subscribers & documenting his journey on social media.',
      bgColor: 'bg-black'
    },
    {
      initials: 'TT',
      name: 'Tech Team',
      role: 'Development Team',
      website: 'ragspro.com',
      description: 'Our experienced team of developers and designers who bring your ideas to life with cutting-edge technology and innovative solutions.',
      bgColor: 'bg-gray-800'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Developing SaaS<br />
            that solve real problems.
          </h2>
          <div className="space-y-2">
            <p className="text-xl text-gray-600 font-medium">The Team @ RAGSPRO</p>
            <p className="text-gray-500">Based in Delhi, India</p>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar & Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`${member.bgColor} text-white w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold`}>
                  {member.initials}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{member.website}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold">
              ⚖️
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-black mb-2">lawai.ragspro.com</h3>
              <p className="text-blue-600 font-medium mb-3">AI-Powered Legal Assistant</p>
              <p className="text-gray-700 leading-relaxed">
                One of our flagship products - an AI-powered platform that helps lawyers and legal professionals 
                streamline their work with intelligent document analysis, case research, and legal consultation tools.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Live Product
              </div>
              <a 
                href="https://lawai.ragspro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Visit Site →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-lg font-medium">Trusted by founders</p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <span className="text-gray-600 text-sm ml-3">50+ satisfied clients</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}