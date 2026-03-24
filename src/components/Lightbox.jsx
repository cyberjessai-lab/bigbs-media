import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }, [isOpen, onClose, onNext, onPrev])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, isOpen])

  const current = images[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <HiX size={24} />
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous image"
          >
            <HiChevronLeft size={24} />
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next image"
          >
            <HiChevronRight size={24} />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {/* Title */}
            <p className="mt-4 text-white font-['Syne',sans-serif] font-bold text-sm md:text-base text-center">
              {current.title}
            </p>
            <p className="text-white/50 text-xs mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
