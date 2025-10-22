'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { name: "GLOW - AI Photo Transformation", type: "AI Project", image: "/images/projects/glow.png", url: "https://glow.ragspro.com" },
  { name: "Himshakti E-commerce", type: "Web App", image: "/images/projects/himshakti.jpg", url: "https://himshakti.ragspro.com" },
  { name: "LAWAI - Legal AI Assistant", type: "AI Project", image: "/images/projects/lawai.jpg", url: "https://lawai.ragspro.com" },
  { name: "Maid Service Agency", type: "Web App", image: "/images/projects/maid.jpg", url: "https://maid-agency.vercel.app" }
]

export default function FloatingProjects() {
  const handleProjectClick = (url) => {
    console.log('Clicking project:', url)
    window.open(url, '_blank')
  }

  return (
    <div className="relative h-[500px]">
      <div className="absolute top-0 w-full h-[500px] z-50">
        <div className="absolute right-[5%] top-0 w-[650px] h-full">
          {/* GLOW AI - Top Left (16:9) */}
          <motion.div
            initial={{ opacity: 0, rotate: -8 }}
            animate={{ opacity: 1, rotate: -5 }}
            transition={{ delay: 0.7 }}
            className="absolute left-0 top-[5%] w-[200px] h-[112px] rounded-xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform z-10"
            onClick={(e) => {
              e.stopPropagation()
              handleProjectClick(projects[0].url)
            }}
          >
            <Image src={projects[0].image} alt="GLOW AI" fill className="object-cover" />
          </motion.div>

          {/* Himshakti - Center Top (16:9) */}
          <motion.div
            initial={{ opacity: 0, rotate: 3 }}
            animate={{ opacity: 1, rotate: 2 }}
            transition={{ delay: 0.8 }}
            className="absolute left-[140px] top-0 w-[240px] h-[135px] rounded-xl overflow-hidden shadow-2xl z-20 cursor-pointer hover:scale-105 transition-transform"
            onClick={(e) => {
              e.stopPropagation()
              handleProjectClick(projects[1].url)
            }}
          >
            <Image src={projects[1].image} alt="Himshakti" fill className="object-cover" />
          </motion.div>

          {/* LAWAI - Bottom Left (16:9) */}
          <motion.div
            initial={{ opacity: 0, rotate: -6 }}
            animate={{ opacity: 1, rotate: -4 }}
            transition={{ delay: 0.9 }}
            className="absolute left-[30px] bottom-[5%] w-[200px] h-[112px] rounded-xl overflow-hidden shadow-2xl z-10 cursor-pointer hover:scale-105 transition-transform"
            onClick={(e) => {
              e.stopPropagation()
              handleProjectClick(projects[2].url)
            }}
          >
            <Image src={projects[2].image} alt="LAWAI" fill className="object-cover" />
          </motion.div>

          {/* Maid Service - Right Side Large (16:9) */}
          <motion.div
            initial={{ opacity: 0, rotate: 4 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ delay: 1.0 }}
            className="absolute right-0 top-[100px] w-[300px] h-[169px] rounded-xl overflow-hidden shadow-2xl z-30 cursor-pointer hover:scale-105 transition-transform"
            onClick={(e) => {
              e.stopPropagation()
              handleProjectClick(projects[3].url)
            }}
          >
            <Image src={projects[3].image} alt="Maid Service" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
