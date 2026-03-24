import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/264857433617"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-wa-pulse" style={{ backgroundColor: '#25D366' }} />
      {/* Icon with bounce */}
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
      >
        <FaWhatsapp size={28} className="text-white relative z-10" />
      </motion.span>
    </motion.a>
  )
}
