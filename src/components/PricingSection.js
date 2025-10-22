'use client'
import { motion } from 'framer-motion'
import { FiCheck, FiZap } from 'react-icons/fi'

export default function PricingSection() {
  const steps = [
    {
      title: 'Request',
      desc: 'Fill out our form and let us know what you want to build, literally anything.'
    },
    {
      title: 'Meet the Team',
      desc: 'Meet our developers and set up step-by-step clear roadmap for your startup.'
    },
    {
      title: 'Receive',
      desc: 'Receive your app within 20 days.'
    }
  ]

  const features = [
    'Fully designed User Interface',
    'Highest level of data security', 
    'All tech stack supported',
    'Unlimited iteration process',
    '20 days turnaround',
    'Distribution to 150K subscribers'
  ]

  return (
    <section id="pricing" className="w-full bg-white text-black py-20 px-6 md:px-16">
      {/* 3-Step Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Steps + Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-5xl font-semibold leading-tight tracking-tight">
            Simple pricing.<br/> 
            <span className="text-gray-600">Standout SaaS.</span>
          </h3>
          <p className="text-gray-500">
            Clear costs, no hidden fees. Select from monthly subscriptions or individual project rates.
          </p>
          
          {/* Black Gradient Card */}
          <motion.div 
            whileHover={{ rotate: -2, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-gradient-to-b from-neutral-900 to-black text-white p-6 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <p className="text-sm opacity-80">Always know what you are getting</p>
            </div>
            <h4 className="text-xl font-medium leading-tight">
              Development services<br/>for people who move fast.
            </h4>
          </motion.div>
          
          {/* White Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-4 rounded-2xl border border-gray-200 shadow-sm bg-white"
          >
            <div className="flex items-center gap-2 mb-2">
              <FiZap className="text-yellow-500" size={16} />
              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-sm text-gray-500">Slots available</p>
            </div>
            <h4 className="text-lg font-medium mb-1">Hire us today</h4>
            <p className="text-gray-500 text-sm">
              Skip the typical agency markup and work directly with a team of experienced developers.
            </p>
          </motion.div>
        </motion.div>

        {/* Middle + Right Column: Build Your App */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="rounded-2xl border border-gray-200 p-8 bg-white shadow-sm">
            <h4 className="text-2xl font-medium mb-2">Build Your App</h4>
            <p className="text-gray-500 text-sm mb-6">
              Different apps would have different levels of complexity. Consult us about pricing with your specific requirements.
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <h2 className="text-4xl font-semibold mb-1">$1K-50K</h2>
              <p className="text-sm text-gray-500">USD</p>
            </div>
            
            {/* Features Grid */}
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600 mb-8">
              {features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
