import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { Megaphone, Camera, PartyPopper, Heart, GraduationCap, Target } from 'lucide-react'
import { services } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const iconMap = { Megaphone, Camera, PartyPopper, Heart, GraduationCap, Target }

/* Map service IDs to relevant images */
const serviceImages = {
  'social-media': '/images/portfolio/party-girls.jpeg',
  'content-creation': '/images/events/performer.jpeg',
  'events': '/images/events/crowd-bw.jpeg',
  'weddings': '/images/portfolio/event-crowd-color.jpeg',
  'training': '/images/portfolio/bartending.jpeg',
  'ad-campaigns': '/images/portfolio/vehicle-branding.jpeg',
}

export default function Services() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from(ref.current.querySelectorAll('.svc-card'), {
      y: 60, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <div className="pt-20 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg)]">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--black)] leading-tight mb-6">
              Everything Your Brand Needs to Shine
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              We specialise in the entertainment space — restaurants, clubs, lounges, festivals, and weddings.
              Every service is designed to amplify your presence and pack your venues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              const img = serviceImages[service.id]
              return (
                <div key={service.id} className="svc-card group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(200,162,78,0.15)] overflow-hidden">
                  {/* Service image */}
                  {img && (
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                      {/* Number badge */}
                      <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--black)]/80 backdrop-blur-sm flex items-center justify-center font-['Syne',sans-serif] text-sm font-bold text-[var(--gold)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 p-8 md:p-10">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/20 transition-colors">
                      {Icon && <Icon size={26} className="text-[var(--gold)]" />}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[var(--black)] mb-3">{service.title}</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">{service.description}</p>

                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--text)]">
                          <HiCheck className="text-[var(--gold)] flex-shrink-0" size={16} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors group/link"
                    >
                      Enquire About This Service
                      <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" size={14} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
