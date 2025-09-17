import { motion } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'

export default function PricingSection() {
  const packages = [
    {
      id: 1,
      name: 'STARTER PACKAGE',
      price: 'From ₹50K',
      description: 'Perfect for small businesses & startups',
      features: [
        'AI chatbot or simple automation tool',
        'Basic UI/UX design',
        '30-day development timeline',
        '1 month post-launch support',
        'Basic documentation and training'
      ],
      popular: false,
      icon: '🚀',
      buttonText: 'Get Started'
    },
    {
      id: 2,
      name: 'PROFESSIONAL PACKAGE',
      price: 'From ₹1.5L',
      description: 'Ideal for growing businesses',
      features: [
        'Custom AI application development',
        'Advanced features and integrations',
        '60-day development timeline',
        '3 months post-launch support',
        'Revenue optimization consultation',
        'Performance analytics setup'
      ],
      popular: true,
      icon: '⭐',
      buttonText: 'Get Started'
    },
    {
      id: 3,
      name: 'ENTERPRISE PACKAGE',
      price: 'Custom Quote (₹3L+)',
      description: 'Complete digital transformation',
      features: [
        'Full-scale AI solution development',
        'Custom integrations and APIs',
        'Dedicated project manager',
        '6–12 months ongoing support',
        'Revenue sharing opportunities',
        'Priority feature development',
        'Training and documentation'
      ],
      popular: false,
      icon: '🏆',
      buttonText: 'Get Quote'
    },
    {
      id: 4,
      name: 'RETAINER MODEL',
      price: 'From ₹15K/month',
      description: 'Ongoing optimization & support',
      features: [
        'Monthly strategy sessions',
        'Performance monitoring',
        'Feature updates and improvements',
        'Priority technical support',
        'Market trend analysis'
      ],
      popular: false,
      icon: '🔄',
      buttonText: 'Get Quote'
    }
  ]
  
  return (
    <section id="pricing" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your business needs. All packages include our Revenue Guarantee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: pkg.id * 0.1 }}
              className={`glass-card p-6 rounded-2xl relative ${
                pkg.popular ? 'border-2 border-accent' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <FiStar className="mr-1" size={14} />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{pkg.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-gradient mb-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-300">
                    <FiCheck className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              

            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <p className="text-gray-400 mb-4">Not sure which package fits?</p>
          <a 
            href="tel:+918700048490"
            className="inline-block px-8 py-3 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all"
          >
            Book Free Strategy Call
          </a>
          <p className="text-gray-400 text-sm mt-2">and we'll build a custom plan for you.</p>
        </div>
      </div>
    </section>
  )
}