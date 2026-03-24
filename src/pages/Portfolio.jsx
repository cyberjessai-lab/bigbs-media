import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from '../components/Lightbox'

const categories = ['All', 'Events', 'Nightlife', 'Content Creation', 'Marketing']

const projects = [
  {
    title: 'Club Night Launch',
    category: 'Events',
    image: '/images/events/crowd-bw.jpeg',
    tags: ['Events', 'Content', 'Social Media'],
  },
  {
    title: 'Nightclub Vibes',
    category: 'Nightlife',
    image: '/images/portfolio/nightclub-90.jpeg',
    tags: ['Nightlife', 'Photography'],
  },
  {
    title: 'Party Energy',
    category: 'Events',
    image: '/images/portfolio/party-girls.jpeg',
    tags: ['Events', 'Content'],
  },
  {
    title: 'Live Performance',
    category: 'Events',
    image: '/images/events/performer.jpeg',
    tags: ['Events', 'Live Coverage'],
  },
  {
    title: 'Bartender Training',
    category: 'Content Creation',
    image: '/images/portfolio/bartending.jpeg',
    tags: ['Training', 'Content'],
  },
  {
    title: 'Vehicle Branding',
    category: 'Marketing',
    image: '/images/portfolio/vehicle-branding.jpeg',
    tags: ['Branding', 'Marketing'],
  },
  {
    title: 'Nelu Wholesaler Design',
    category: 'Marketing',
    image: '/images/portfolio/nelu-design.jpeg',
    tags: ['Design', 'Marketing'],
  },
  {
    title: 'Concert Crowd',
    category: 'Events',
    image: '/images/events/concert-crowd.jpeg',
    tags: ['Events', 'Festival'],
  },
  {
    title: 'Good Times',
    category: 'Nightlife',
    image: '/images/portfolio/party-laughs.jpeg',
    tags: ['Nightlife', 'Content'],
  },
  {
    title: 'Lounge Atmosphere',
    category: 'Nightlife',
    image: '/images/portfolio/lounge-guys.jpeg',
    tags: ['Nightlife', 'Content'],
  },
  {
    title: 'Dance Floor',
    category: 'Events',
    image: '/images/portfolio/party-dance.jpeg',
    tags: ['Events', 'Nightlife'],
  },
  {
    title: 'Crowd Energy',
    category: 'Events',
    image: '/images/events/crowd-vibes.jpeg',
    tags: ['Events', 'Festival'],
  },
  {
    title: 'Lounge Vibes',
    category: 'Nightlife',
    image: '/images/portfolio/lounge-vibes.jpeg',
    tags: ['Nightlife', 'Content'],
  },
  {
    title: 'Performer & Crowd',
    category: 'Events',
    image: '/images/events/performer-crowd.jpeg',
    tags: ['Events', 'Live Coverage'],
  },
  {
    title: 'Colour Event',
    category: 'Events',
    image: '/images/portfolio/event-crowd-color.jpeg',
    tags: ['Events', 'Festival'],
  },
]

/* Add the numbered event gallery photos */
const eventGallery = Array.from({ length: 35 }, (_, i) => ({
  title: `Event ${i + 1}`,
  category: i % 3 === 0 ? 'Nightlife' : i % 3 === 1 ? 'Events' : 'Content Creation',
  image: `/images/portfolio/event-${i + 1}.jpeg`,
  tags: ['Events'],
}))

const allProjects = [...projects, ...eventGallery]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter)

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length)
  }, [filtered.length])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  return (
    <div className="pt-20 md:pt-28">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg)]">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--black)] leading-tight mb-6">
              Our Work Speaks Louder
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              A selection of projects across events, social media, content creation, and marketing.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[var(--black)] text-white shadow-[0_4px_20px_rgba(200,162,78,0.25)]'
                    : 'bg-[var(--bg-warm)] text-[var(--text-muted)] hover:bg-[var(--border)] hover:text-[var(--text)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Photo grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title + p.image}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    i % 7 === 0 ? 'row-span-2 sm:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(i)}
                >
                  <div className={`relative w-full ${i % 7 === 0 ? 'h-full min-h-[300px] sm:min-h-[400px]' : 'aspect-square'}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-['Syne',sans-serif] font-bold text-sm md:text-base">{p.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--gold)]/40 text-[var(--gold-light)]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--text-light)] mt-12"
          >
            Follow us on{' '}
            <a href="https://www.instagram.com/bigbscreativeagency_" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">
              Instagram
            </a>{' '}
            for our latest work.
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filtered}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}
