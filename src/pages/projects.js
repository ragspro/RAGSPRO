import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function AllProjects() {
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
      title: 'GLOW - AI Photo Transformation',
      category: ['ai', 'web'],
      image: '/images/projects/glow.png',
      description: 'Create a viral AI photo transformation tool for social media users',
      technologies: ['Stable Diffusion', 'Computer Vision', 'React'],
      challenge: 'Create a viral AI photo transformation tool for social media users',
      solution: 'Built custom AI pipeline with user-friendly interface and social sharing features',
      results: '2000+ transformations created, viral social media presence, recurring user base',
      timeline: '45 days',
      revenueImpact: '₹30K+ monthly potential',
      liveLink: 'https://glow.ragspro.com',
      githubLink: 'https://github.com/ragspro/glow-ai'
    },
    {
      id: 5,
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
    <>
      <Head>
        <title>All Projects - RAGSPRO</title>
      </Head>
      
      <section className="min-h-screen bg-primary pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my complete portfolio showcasing web development, design, and AI integration capabilities.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl overflow-hidden"
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
                  
                  {project.challenge ? (
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-sm text-accent font-medium">Challenge:</p>
                        <p className="text-gray-400 text-sm">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-accent font-medium">Solution:</p>
                        <p className="text-gray-400 text-sm">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm text-accent font-medium">Results:</p>
                        <p className="text-gray-400 text-sm">{project.results}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Timeline: {project.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-green-400 font-medium">{project.revenueImpact}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 mb-6">{project.description}</p>
                  )}
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-accent hover:text-neon transition-colors"
                    >
                      <FiExternalLink className="mr-1" /> {project.challenge ? 'View Live' : 'Live Demo'}
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
        </div>
      </section>
    </>
  )
}