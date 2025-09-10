import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiCode, FiLayers, FiCpu, FiTrendingUp } from 'react-icons/fi'

export default function AboutSection() {
  const skills = [
    { name: 'Web Development', icon: <FiCode size={24} className="text-accent" />, description: 'Creating responsive, modern web applications with React, Next.js, and more.' },
    { name: 'UI/UX Design', icon: <FiLayers size={24} className="text-accent" />, description: 'Designing intuitive user interfaces with a focus on user experience and accessibility.' },
    { name: 'AI Integration', icon: <FiCpu size={24} className="text-accent" />, description: 'Implementing AI-powered features and tools to enhance digital products.' },
    { name: 'SEO Optimization', icon: <FiTrendingUp size={24} className="text-accent" />, description: 'Optimizing websites for search engines to increase visibility and traffic.' },
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
                About <span className="text-gradient">Me</span>
              </h2>
              
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
                Delhi-based Full Stack Developer with a Bachelor's in Computer Applications (BCA), 
                passionate about creating sleek web apps, stunning portfolios, and automating with AI tools.
              </p>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                As the founder of RAGSPRO, I combine technical expertise with creative vision to deliver 
                premium digital solutions that help businesses and individuals establish a strong online presence.
              </p>
              
              {/* Experience badge */}
              <div className="inline-flex glass-card p-4 rounded-xl">
                <p className="text-sm text-gray-300 mr-4">Experience</p>
                <p className="text-2xl font-bold text-gradient">3+ Years</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center">
                  <div className="flex justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-3">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}