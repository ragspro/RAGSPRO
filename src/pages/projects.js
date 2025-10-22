'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi'
import SEOHead from '../components/SEOHead'
import CustomCursor from '../components/CustomCursor'

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'design', name: 'UI/UX Design' }
  ]
  
  const projects = [
    {
      id: 1,
      title: 'GLOW - AI Photo Transformation',
      category: ['ai', 'web'],
      image: '/images/projects/glow.png',
      description: 'Create a viral AI photo transformation tool for social media users',
      technologies: ['Stable Diffusion', 'Computer Vision', 'React'],
      liveLink: 'https://glow.ragspro.com',
      githubLink: 'https://github.com/ragspro/glow-ai'
    },
    {
      id: 2,
      title: 'Himshakti E-commerce Website',
      category: ['web', 'design'],
      image: '/images/projects/himshakti.jpg',
      description: 'Complete e-commerce solution for Himshakti brand with product catalog, shopping cart and order management.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'PayPal API'],
      liveLink: 'https://himshakti.ragspro.com',
      githubLink: 'https://github.com/ragspro/himshakti-ecommerce'
    },
    {
      id: 3,
      title: 'LAWAI - Legal AI Assistant',
      category: ['web', 'ai'],
      image: '/images/projects/lawai.jpg',
      description: 'AI-powered legal assistant platform providing intelligent legal document analysis and consultation services.',
      technologies: ['Next.js', 'OpenAI API', 'TailwindCSS', 'Node.js'],
      liveLink: 'https://lawai.ragspro.com',
      githubLink: 'https://github.com/ragspro/lawai-legal-assistant'
    },
    {
      id: 4,
      title: 'Maid Service Agency',
      category: ['web', 'design'],
      image: '/images/projects/maid.jpg',
      description: 'Professional maid service booking platform with online scheduling and service management.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'Stripe API'],
      liveLink: 'https://maid-agency.vercel.app',
      githubLink: 'https://github.com/ragspro/maid-agency'
    }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))
  
  return (
    <div className="bg-white page-rails">
      <SEOHead 
        title="All Projects - RAGSPRO | Web Development & AI Solutions"
        description="Explore my complete portfolio showcasing web development, AI projects, and UI/UX design work."
      />
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-white pt-20 pb-16 page-canvas">
        <div className="max-w-7xl mx-auto px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <FiArrowLeft /> Back to Home
            </Link>
          </motion.div>
          
          {/* Simple Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Latest Projects
            </h1>
          </motion.div>
          
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-black group-hover:text-[#22c55e] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 pt-1">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-black hover:text-[#22c55e] transition-colors text-sm font-medium"
                    >
                      <FiExternalLink size={14} /> Live
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-black hover:text-[#22c55e] transition-colors text-sm font-medium"
                    >
                      <FiGithub size={14} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          

        </div>
      </section>

      {/* Bottom Blur Overlay - Same as Landing Page */}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white/40 via-white/10 to-transparent backdrop-blur-[2px] pointer-events-none z-30 rounded-t-[1.25rem]" />
    </div>
  )
}