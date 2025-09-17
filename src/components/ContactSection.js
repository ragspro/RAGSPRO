import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function ContactSection() {
  
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'raghav@ragspro.com',
      link: 'mailto:raghav@ragspro.com?subject=AI Product Development Inquiry'
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '+91-8700048490',
      link: 'tel:+918700048490'
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/></svg>,
      title: 'WhatsApp',
      value: '+91-8700048490',
      link: 'https://wa.me/918700048490?text=Hi, I\'m interested in RAGSPRO\'s AI development services'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Delhi, India',
      link: '#'
    }
  ]
  
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch for a free 30-minute consultation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl reveal">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Contact Information</h3>
            
            <div className="text-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div>
                  <p className="text-sm text-gray-400">WhatsApp:</p>
                  <a href="https://wa.me/918700048490?text=Hi, I'm interested in RAGSPRO's AI development services" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-neon transition-colors">+91-8700048490</a>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Response Time:</p>
                  <p className="text-white">Within 4 hours</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target={item.title === 'Location' ? '' : item.title === 'Phone' ? '' : '_blank'}
                  rel={item.title === 'Email' ? 'noopener noreferrer' : ''}
                  className="flex flex-col items-center text-center hover:text-accent transition-colors group"
                >
                  <div className="p-4 bg-accent bg-opacity-10 rounded-xl text-accent mb-4 group-hover:bg-opacity-20 transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-400 text-sm mb-1">{item.title}</h4>
                  <p className="text-white font-medium">{item.value}</p>
                </a>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/ragspro/raghav-portfolio" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:bg-opacity-10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/bhupederpratap/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:bg-opacity-10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://x.com/ragsproai" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:bg-opacity-10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ragsproai/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:bg-opacity-10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}