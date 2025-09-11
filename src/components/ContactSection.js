import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function ContactSection() {
  
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'ragsproai@gmail.com',
      link: 'mailto:ragsproai@gmail.com'
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '+91 8700048490',
      link: 'tel:+918700048490'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Website',
      value: 'ragspro.com',
      link: 'https://ragspro.com'
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl reveal">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target={item.title === 'Location' ? '_blank' : ''}
                  rel={item.title === 'Location' ? 'noopener noreferrer' : ''}
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