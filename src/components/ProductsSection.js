import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart, FiStar } from 'react-icons/fi'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      title: 'SaaS Website Templates',
      image: '/images/products/saas-templates.jpg',
      price: 79.99,
      rating: 4.9,
      reviews: 156,
      description: 'Complete SaaS website templates with landing pages, dashboards, and user portals.',
      features: [
        'Modern SaaS designs',
        'Dashboard components',
        'Payment integration ready',
        'User authentication',
        'Mobile responsive'
      ]
    },
    {
      id: 2,
      title: 'E-commerce Store Builder',
      image: '/images/products/ecommerce-builder.jpg',
      price: 99.99,
      rating: 4.8,
      reviews: 203,
      description: 'Full-featured e-commerce website template with cart, checkout, and admin panel.',
      features: [
        'Product catalog system',
        'Shopping cart & checkout',
        'Admin dashboard',
        'Payment gateway ready',
        'Inventory management'
      ]
    },
    {
      id: 3,
      title: 'Business Website Kit',
      image: '/images/products/business-kit.jpg',
      price: 59.99,
      rating: 4.7,
      reviews: 89,
      description: 'Professional business website templates for agencies, startups, and corporations.',
      features: [
        'Multiple industry designs',
        'Contact forms & CRM',
        'SEO optimized',
        'Blog system included',
        'Team & portfolio pages'
      ]
    },
    {
      id: 4,
      title: 'Restaurant & Food Delivery',
      image: '/images/products/restaurant-template.jpg',
      price: 69.99,
      rating: 4.6,
      reviews: 74,
      description: 'Complete restaurant website with online ordering and delivery management.',
      features: [
        'Online menu & ordering',
        'Table reservation system',
        'Delivery tracking',
        'Customer reviews',
        'Multi-location support'
      ]
    }
  ]
  
  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready-to-use website templates and SaaS solutions to launch your business faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="glass-card rounded-2xl overflow-hidden reveal"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 bg-gray-800">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <FiStar className="text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-300">{product.rating} ({product.reviews})</span>
                  </div>
                  <span className="text-lg font-bold text-white">${product.price}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                  {product.features.length > 3 && (
                    <li className="text-xs text-accent">+ {product.features.length - 3} more features</li>
                  )}
                </ul>
                
                <button 
                  onClick={() => alert(`Added ${product.title} to cart!`)}
                  className="w-full py-2 bg-accent hover:bg-opacity-80 text-white font-medium rounded-lg transition-all flex items-center justify-center"
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <button 
            onClick={() => alert('Products store coming soon!')}
            className="px-8 py-3 bg-transparent border border-accent text-white font-medium rounded-full hover:bg-accent hover:bg-opacity-10 transition-all inline-flex items-center"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}