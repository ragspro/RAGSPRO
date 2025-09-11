import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'design', name: 'UI/UX Design' }
  ]
  
  const projects = [
    {
      id: 1,
      title: 'LAWAI - Legal AI Assistant',
      category: ['web', 'ai'],
      image: '/images/projects/lawai.jpg',
      description: 'AI-powered legal assistant platform providing intelligent legal document analysis and consultation services.',
      technologies: ['Next.js', 'OpenAI API', 'TailwindCSS', 'Node.js'],
      liveLink: 'https://lawai.ragspro.com',
      githubLink: 'https://github.com/ragspro/lawai-legal-assistant'
    },
    {
      id: 2,
      title: 'Maid Agency Website',
      category: ['web', 'design'],
      image: '/images/projects/maid.jpg',
      description: 'Professional maid service booking platform with online scheduling and service management.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'Stripe API'],
      liveLink: 'https://maid-agency.vercel.app',
      githubLink: 'https://github.com/ragspro/maid-agency'
    },
    {
      id: 3,
      title: 'E-commerce Shoes Website',
      category: ['web', 'design'],
      image: '/images/projects/shoes.jpg',
      description: 'Modern online shoe store with advanced filtering, cart functionality and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveLink: 'https://elito-premium-shoes.vercel.app',
      githubLink: 'https://github.com/ragspro/Elito-premium-shoes-'
    },
    {
      id: 4,
      title: 'Himshakti E-commerce Website',
      category: ['web', 'design'],
      image: '/images/projects/himshakti.jpg',
      description: 'Complete e-commerce solution for Himshakti brand with product catalog, shopping cart and order management.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'PayPal API'],
      liveLink: 'https://himshakti.ragspro.com',
      githubLink: 'https://github.com/ragspro/himshakti-ecommerce'
    }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))
  
  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work showcasing web development, design, and AI integration capabilities.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 reveal">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id 
                    ? 'bg-accent text-white' 
                    : 'bg-secondary text-gray-300 hover:bg-accent hover:bg-opacity-10'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden reveal"
            >
              <div className="relative h-64 bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-xs font-medium text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:text-neon transition-colors"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:text-neon transition-colors"
                  >
                    <FiGithub className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <button 
            onClick={() => alert('All projects page coming soon!')}
            className="px-8 py-3 bg-transparent border border-accent text-white font-medium rounded-full hover:bg-accent hover:bg-opacity-10 transition-all inline-flex items-center"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}