import { motion } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'

export default function PricingSection() {
  const packages = [
    {
      id: 1,
      name: 'STARTER PACKAGE',
      price: 'From ₹20K',
      timeline: '2-5 days',
      description: 'Perfect for small businesses & startups',
      features: [
        'Landing page or basic website',
        'Mobile responsive design',
        'Basic SEO setup',
        '7 days free support',
        'Contact form integration'
      ],
      popular: false,
      icon: '🚀',
      buttonText: 'Get Started',
      note: 'Timeline may vary based on requirements'
    },
    {
      id: 2,
      name: 'PROFESSIONAL PACKAGE',
      price: 'From ₹75K',
      timeline: '5-10 days',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-page website or web app',
        'Advanced features & integrations',
        'CMS or admin panel',
        '30 days free support',
        'Performance optimization'
      ],
      popular: true,
      icon: '⭐',
      buttonText: 'Get Started',
      note: 'Complex features may extend timeline'
    },
    {
      id: 3,
      name: 'AI AUTOMATION PACKAGE',
      price: 'From ₹1.5L',
      timeline: '10-15 days',
      description: 'AI-powered business solutions',
      features: [
        'Custom AI tool development',
        'Business process automation',
        'API integrations',
        '60 days free support',
        'Training & documentation'
      ],
      popular: false,
      icon: '🤖',
      buttonText: 'Get Quote',
      note: 'AI complexity affects delivery time'
    },
    {
      id: 4,
      name: 'ENTERPRISE SOLUTION',
      price: 'Custom Quote',
      timeline: '15+ days',
      description: 'Complete digital transformation',
      features: [
        'Full-scale custom development',
        'Dedicated project management',
        'Ongoing maintenance & updates',
        '90+ days support included',
        'Priority technical assistance'
      ],
      popular: false,
      icon: '🏆',
      buttonText: 'Discuss Project',
      note: 'Timeline depends on project scope'
    }
  ]
  
  return (
    <section id="pricing" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Transparent pricing with no hidden costs. Final pricing may vary based on specific requirements.
          </p>
          <div className="glass-card p-4 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-gray-300">
              <strong className="text-accent">Important:</strong> All timelines are estimates and may vary based on project complexity. 
              Support covers bug fixes and minor adjustments only. Major feature additions are quoted separately.
            </p>
          </div>
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
                <div className="text-2xl font-bold text-gradient mb-1">{pkg.price}</div>
                <div className="text-sm text-accent mb-2">{pkg.timeline}</div>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-300">
                    <FiCheck className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {pkg.note && (
                <div className="text-xs text-gray-500 mb-4 p-2 bg-gray-800/50 rounded">
                  <strong>Note:</strong> {pkg.note}
                </div>
              )}
              

              

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