import { useState } from 'react'
import { FiMonitor, FiLayout, FiCpu, FiTrendingUp, FiPenTool, FiCode } from 'react-icons/fi'

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null)
  
  const services = [
    {
      id: 1,
      icon: <FiMonitor size={32} />,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using modern technologies like React, Next.js, Node.js, and more.',
      features: ['Custom web applications', 'E-commerce solutions', 'API development', 'Database design', 'Performance optimization'],
      price: '₹50K - ₹1.5L',
      timeline: '15-30 days',
      whyChoose: 'Modern tech stack with scalable architecture'
    },
    {
      id: 2,
      icon: <FiLayout size={32} />,
      title: '3D Portfolio Website Design',
      description: 'Eye-catching portfolio websites with 3D elements, animations, and interactive features to showcase your work.',
      features: ['Three.js integration', 'Interactive 3D models', 'Smooth animations', 'Responsive design', 'SEO optimization'],
      price: '₹30K - ₹80K',
      timeline: '7-15 days',
      whyChoose: 'Stand out with stunning 3D visuals'
    },
    {
      id: 3,
      icon: <FiCpu size={32} />,
      title: 'Custom AI Tool Setup',
      description: 'Integration of AI capabilities into your existing systems or development of custom AI-powered tools.',
      features: ['AI chatbots', 'Content generation', 'Data analysis', 'Automation tools', 'Machine learning integration'],
      price: '₹75K - ₹2L',
      timeline: '20-45 days',
      whyChoose: 'AI solutions that actually generate revenue'
    },
    {
      id: 4,
      icon: <FiPenTool size={32} />,
      title: 'Branding & UI/UX Design',
      description: 'Creating cohesive brand identities and intuitive user interfaces that enhance user experience.',
      features: ['Logo design', 'Brand guidelines', 'UI/UX wireframing', 'Prototype development', 'Design systems'],
      price: '₹15K - ₹50K',
      timeline: '5-15 days',
      whyChoose: 'Designs that convert visitors to customers'
    },
    {
      id: 5,
      icon: <FiTrendingUp size={32} />,
      title: 'Blog & SEO Optimization',
      description: 'Optimizing your online presence to improve visibility, traffic, and conversion rates.',
      features: ['Keyword research', 'On-page SEO', 'Content strategy', 'Performance optimization', 'Analytics setup'],
      price: '₹10K - ₹30K',
      timeline: '3-10 days',
      whyChoose: 'Proven strategies for higher rankings'
    },
    {
      id: 6,
      icon: <FiCode size={32} />,
      title: 'Custom Development Solutions',
      description: 'Tailored development solutions to address specific business needs and challenges.',
      features: ['Custom CMS', 'Integration services', 'Legacy system upgrades', 'Technical consulting', 'Maintenance & support'],
      price: '₹40K - ₹1.2L',
      timeline: '15-45 days',
      whyChoose: 'Solutions built specifically for your needs'
    }
  ]
  
  return (
    <section id="services" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium solutions tailored to elevate your digital presence and streamline your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-6 rounded-2xl reveal">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-accent bg-opacity-10 rounded-xl text-accent">
                  {service.icon}
                </div>
                <button 
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className={`transition-transform duration-300 ${
                    activeService === service.id ? 'rotate-180' : ''
                  }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Price Range:</span>
                  <span className="text-accent font-medium">{service.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Timeline:</span>
                  <span className="text-white">{service.timeline}</span>
                </div>
              </div>
              
              <div style={{ display: activeService === service.id ? 'block' : 'none' }}>
                <ul className="mt-4 space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-accent bg-opacity-10 p-3 rounded-lg">
                  <p className="text-sm text-accent font-medium">Why Choose Us:</p>
                  <p className="text-sm text-gray-300">{service.whyChoose}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <button 
            onClick={() => document.getElementById('request-project')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  )
}