'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FAQItem from './FAQItem'
import RaghavAvatar from './RaghavAvatar'

const teamMembers = [
  {
    name: "Raghav Shah",
    role: "Founder & CEO",
    website: "ragspro.com",
    description: "full-stack developer and Solo founder from Delhi, India. I single-handedly built RAGSPRO agency and launched 5+ successful SaaS products including lawai.ragspro.com (AI Legal Assistant), glow.ragspro.com (AI Photo Editor), and himshakti.ragspro.com (E-commerce Platform). I documenting my entrepreneurial journey and building products that solve real problems."
  }
]

export default function TeamSection() {
  const [expandedTestimonial, setExpandedTestimonial] = useState(null)

  const testimonials = [
    {
      quote: "My business was struggling to get online presence, RAGSPRO's team really helped me establish digital presence and started generating leads consistently.",
      name: "Rajesh Kumar",
      title: "Founder of Digital Solutions (50K+ followers)",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "While building my startup, I worked with RAGSPRO's team to build my web application. They delivered super fast, saved me thousands in development costs.",
      name: "Priya Sharma",
      title: "CEO of TechStart India",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "RAGSPRO has been an incredible long-term partner for us. When we were considering starting our mobile app, we ultimately chose RAGSPRO for their unbeatable turnaround times and competitive pricing.",
      name: "Amit Singh",
      title: "CEO of StartupHub",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "RAGSPRO's team has been a game-changer—helped me deliver 3+ UI/UX projects, sharpen my product management skills, and land amazing tech roles.",
      name: "Sneha Patel",
      title: "Product Manager at TechCorp",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "In just one week, RAGSPRO's team automated our business processes—eliminating manual work and dramatically boosting efficiency. Highly recommend for business automation!",
      name: "Vikram Mehta",
      title: "CEO of Business Solutions",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "RAGSPRO delivered an exceptional e-commerce platform for my business. Their attention to detail and quick turnaround time exceeded my expectations. Highly professional team!",
      name: "Ananya Gupta",
      title: "Founder of StyleHub",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section id="team" className="pt-10 sm:pt-20 pb-16 sm:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-left mb-12 -mt-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            <span className="text-gray-500">Developing SaaS</span>
            <br />
            <span className="text-black">that solve real problems.</span>
          </h2>
        </div>

        {/* Team Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Side - Team Info */}
          <div className="text-left">
            {/* Avatar Centered */}
            <div className="flex justify-center mb-12 mt-8">
              <RaghavAvatar
                size="md"
                variant="square-xl"
                priority={true}
              />
            </div>
            
            {/* Info */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">{teamMembers[0].name}</h3>
              <p className="text-lg text-gray-600 mb-4">{teamMembers[0].role}</p>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed mb-6">
                {teamMembers[0].description}
              </p>
              
              {/* Stats */}
              <div className="flex flex-col gap-2 text-sm text-gray-500 mb-6">
                <span>• 8+ SaaS Products Launched</span>
                <span>• 500+ Total Users</span>
                <span>• Solo Entrepreneur</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://instagram.com/raghavshahhh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://linkedin.com/in/bhupender-pratap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a 
                  href="https://youtube.com/@raghavshahh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <a 
                  href="https://wa.me/918700048490" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Lawai Project */}
          <div className="flex flex-col items-center space-y-6 mt-16">
            <div
              className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('https://lawai.ragspro.com', '_blank')}
            >
              <img 
                src="/images/projects/lawai.jpg" 
                alt="Lawai - AI Legal Assistant"
                className="w-[480px] h-[270px] object-cover rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Try Now Button */}
            <button
              onClick={() => window.open('https://lawai.ragspro.com', '_blank')}
              className="bg-black text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Try Now
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="mt-56">
          <h2 className="text-4xl md:text-6xl font-medium mb-36">
            What Founders Say About RAGSPRO
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12">
            <span className="text-gray-500">Hear from what the</span><br />
            <span className="text-black">founders have to say.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl">
            {[
              {
                quote: "RAGSPRO's web development team helped us build our startup app in record time. My business was struggling to get online presence, and they really helped me establish digital presence and started generating leads consistently.",
                name: "Rajesh Kumar",
                title: "Founder of Digital Solutions (50K+ followers)",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "RAGSPRO's startup app development team helped me build my web application fast. While building my startup, I worked with their team and they delivered super fast, saved me thousands in development costs.",
                name: "Priya Sharma",
                title: "CEO of TechStart India",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "RAGSPRO's AI app development team has been an incredible long-term partner for us. When we were considering starting our mobile app, we ultimately chose RAGSPRO for their unbeatable turnaround times and competitive pricing.",
                name: "Amit Singh",
                title: "CEO of StartupHub",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "RAGSPRO's team has been a game-changer—helped me deliver 3+ UI/UX projects, sharpen my product management skills, and land amazing tech roles.",
                name: "Sneha Patel",
                title: "Product Manager at TechCorp",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "In just one week, RAGSPRO's team automated our business processes—eliminating manual work and dramatically boosting efficiency. Highly recommend for business automation!",
                name: "Vikram Mehta",
                title: "CEO of Business Solutions",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "RAGSPRO delivered an exceptional e-commerce platform for my business. Their attention to detail and quick turnaround time exceeded my expectations. Highly professional team!",
                name: "Ananya Gupta",
                title: "Founder of StyleHub",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/85 transition-all max-w-xs"
              >
                {/* Black Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-xs leading-relaxed mb-3">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                {/* Profile with Avatar */}
                <div className="flex items-center gap-2.5 border-t border-gray-100 pt-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-black text-xs">{testimonial.name}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-72">
          <h2 className="text-5xl md:text-6xl font-medium mb-12 ml-16">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 ml-16">
            <span className="text-gray-500">Your questions</span><br />
            <span className="text-black">answered.</span>
          </p>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {/* FAQ Column - Left Side */}
            <div className="lg:col-span-2 space-y-2 sm:space-y-3 max-w-full lg:max-w-md ml-0 lg:ml-16">
              {[
                {
                  question: "What types of apps do you build?",
                  answer: "We specialize in building web applications, mobile apps, AI-powered tools, and custom software solutions. Our expertise spans React, Next.js, Node.js, and modern AI technologies."
                },
                {
                  question: "How long does it take to build an app?",
                  answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our discovery phase."
                },
                {
                  question: "What is your development process?",
                  answer: "We follow an agile methodology with regular check-ins, transparent communication, and iterative development. You'll have full visibility into progress and can provide feedback at every stage."
                },
                {
                  question: "How much does it cost to build an app?",
                  answer: "App development costs vary widely based on features, complexity, and platforms. We provide custom quotes tailored to your specific project requirements after our initial consultation."
                },
                {
                  question: "Do you provide ongoing maintenance and support?",
                  answer: "Yes, we offer ongoing maintenance and support services to ensure your app continues to perform optimally after launch. This includes bug fixes, performance optimizations, feature updates, and compatibility with new OS versions. We offer flexible maintenance packages tailored to your needs."
                }
              ].map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>

            {/* CTA Card - Right Side */}
            <div className="lg:col-span-1 mt-4 lg:-mt-48 ml-0 lg:-ml-48 mr-0 lg:mr-16">
              <div className="lg:sticky lg:-top-64">
                <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-lg sm:rounded-xl border border-gray-200 shadow-lg min-h-[280px] sm:min-h-[320px] max-w-full lg:max-w-sm">
                  {/* Avatar */}
                  <div className="mb-4">
                    <RaghavAvatar
                      size="sm"
                      variant="circle-gradient"
                      priority={false}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-500 mb-1">
                    Still not sure?
                  </h3>
                  <p className="text-black font-semibold mb-3 text-lg sm:text-xl">
                    Book a free discovery call.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Learn more about how we work and how we can help you and your startup.
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      const event = new CustomEvent('openQuoteForm')
                      window.dispatchEvent(event)
                    }}
                    className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all text-sm cursor-pointer"
                  >
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
