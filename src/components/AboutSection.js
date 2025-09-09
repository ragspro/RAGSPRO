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
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 reveal"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="w-full h-[400px] bg-secondary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  Profile Image Placeholder
                </div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -right-5 -bottom-5 glass-card p-4 rounded-xl">
                <p className="text-sm text-gray-300">Experience</p>
                <p className="text-2xl font-bold text-gradient">3+ Years</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 w-24 h-24 border-t-2 border-l-2 border-accent opacity-50" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 border-b-2 border-r-2 border-neon opacity-50" />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 reveal"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Delhi-based Full Stack Developer with a Bachelor's in Computer Applications (BCA), 
              passionate about creating sleek web apps, stunning portfolios, and automating with AI tools.
            </p>
            
            <p className="text-gray-400 mb-8">
              As the founder of RAGSPRO, I combine technical expertise with creative vision to deliver 
              premium digital solutions that help businesses and individuals establish a strong online presence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card p-4 rounded-xl">
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h3 className="ml-3 font-semibold text-white">{skill.name}</h3>
                  </div>
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