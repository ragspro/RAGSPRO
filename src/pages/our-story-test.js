import { motion } from 'framer-motion'
import { FiTrendingUp } from 'react-icons/fi'

export default function OurStoryTest() {
  const achievements = [
    {
      icon: <FiTrendingUp size={28} />,
      name: 'Test Achievement',
      description: 'Test description'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-black mb-8">Test Page</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-black mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">{achievement.name}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

