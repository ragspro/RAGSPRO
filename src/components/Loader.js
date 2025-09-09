import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-50">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">RAGSPRO</h1>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-accent to-neon rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 text-sm text-gray-400"
        >
          Code. Create. Dominate.
        </motion.p>
      </div>
    </div>
  )
}