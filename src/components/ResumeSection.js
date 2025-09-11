import { useState } from 'react'
import { FiDownload, FiBookOpen, FiBriefcase, FiAward } from 'react-icons/fi'

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState('education')
  
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Delhi University',
      duration: '2022 - 2025',
      description: 'Focusing on software development, web technologies, and computer science fundamentals.'
    }
  ]
  
  const experience = [
    {
      id: 1,
      position: 'Founder & Lead Developer',
      company: 'RAGSPRO',
      duration: '2022 - Present',
      description: 'Founded a creative tech agency offering premium web development, AI tools, and digital products.',
      achievements: [
        'Developed 20+ client websites and applications',
        'Created a suite of digital products generating passive income',
        'Established partnerships with design agencies and startups'
      ]
    },
    {
      id: 2,
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      duration: '2020 - 2022',
      description: 'Provided web development services to clients across various industries.',
      achievements: [
        'Built responsive websites for small businesses',
        'Developed e-commerce solutions using modern technologies',
        'Optimized existing websites for performance and SEO'
      ]
    }
  ]
  
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Three.js', 'Tailwind CSS', 'GSAP']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Design',
      items: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Wireframing', 'Prototyping']
    },
    {
      category: 'Other',
      items: ['Git', 'Agile', 'SEO', 'Performance Optimization', 'Technical Writing', 'AI Integration']
    }
  ]
  
  const certifications = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2021',
      credential: 'UC-1234567'
    },
    {
      id: 2,
      name: 'React - The Complete Guide',
      issuer: 'Academind',
      date: '2022',
      credential: 'AC-7654321'
    },
    {
      id: 3,
      name: 'Three.js Journey',
      issuer: 'Bruno Simon',
      date: '2023',
      credential: 'TJ-9876543'
    }
  ]
  
  const tabs = [
    { id: 'education', label: 'Education', icon: <FiBookOpen /> },
    { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> }
  ]
  
  return (
    <section id="resume" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A summary of my education, work experience, and skills.
          </p>
          <button 
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/documents/Raghav_Shah_Resume.pdf'
              link.download = 'Raghav_Shah_Resume.pdf'
              link.target = '_blank'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
            className="mt-6 px-6 py-2 bg-accent hover:bg-opacity-80 text-white font-medium rounded-full transition-all inline-flex items-center"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 reveal">
          <div className="flex bg-secondary rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                  activeTab === tab.id 
                    ? 'bg-accent text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.id} className="glass-card p-6 rounded-2xl reveal">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                    <span className="text-accent font-mono">{item.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{item.institution}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
              
              <div className="glass-card p-6 rounded-2xl reveal">
                <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="border-l-2 border-accent pl-4">
                      <h4 className="text-white font-medium">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                      <p className="text-gray-500 text-xs">Credential ID: {cert.credential}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={item.id} className="glass-card p-6 rounded-2xl reveal">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{item.position}</h3>
                    <span className="text-accent font-mono">{item.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{item.company}</p>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  
                  {item.achievements && (
                    <div>
                      <h4 className="text-white text-sm font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl reveal">
                  <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-sm font-medium text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}