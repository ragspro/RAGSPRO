import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-50 loader-container">
      <div className="flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gradient loader-title text-center">
            RAGSPRO
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "min(300px, 80vw)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-accent to-neon rounded-full max-w-xs w-full"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 text-xs xs:text-sm text-gray-400 text-center"
        >
          Code. Create. Dominate.
        </motion.p>
      </div>
    </div>
  )
}