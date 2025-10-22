'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "My business was struggling to get online presence, RAGSPRO's team really helped me establish digital presence and started generating leads consistently.",
    author: "Rajesh Kumar",
    role: "Founder of Digital Solutions (50K+ followers)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "While building my startup, I worked with RAGSPRO's team to build my web application. They delivered super fast, saved me thousands in development costs.",
    author: "Priya Sharma",
    role: "CEO of TechStart India",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "RAGSPRO has been an incredible long-term partner for us. When we were considering starting our mobile app, we ultimately chose RAGSPRO for their unbeatable turnaround times and competitive pricing.",
    author: "Amit Singh",
    role: "CEO of StartupHub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "RAGSPRO's team has been a game-changer—helped me deliver 3+ UI/UX projects, sharpen my product management skills, and land amazing tech roles.",
    author: "Sneha Patel",
    role: "Product Manager at TechCorp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
]



export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 ml-0 md:ml-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">Hear from what the<br />founders have to say.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-0 md:ml-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
