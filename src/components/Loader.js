import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-primary z-50 loader-container" style={{ height: '100vh', height: '100dvh' }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gradient loader-title text-center whitespace-nowrap">
            RAGSPRO
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 240 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-accent to-neon rounded-full"
          style={{ width: 'min(240px, 70vw)' }}
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="mt-4 text-xs xs:text-sm text-gray-400 text-center"
        >
          Code. Create. Dominate.
        </motion.p>
      </div>
    </div>
  )
}