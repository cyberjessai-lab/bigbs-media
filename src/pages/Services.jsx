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
    gsap.from(ref.current.querySelectorAll('.svc-row'), {
      y: 80, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
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

      {/* Magazine Layout Services */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="space-y-0">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              const img = serviceImages[service.id]
              const isEven = i % 2 === 1
              const num = String(i + 1).padStart(2, '0')

              return (
                <div key={service.id}>
                  <div className={`svc-row grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-16 ${isEven ? 'md:direction-rtl' : ''}`}>
                    {/* Image side */}
                    <div className={`relative overflow-hidden rounded-2xl ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      {img && (
                        <div className="relative group">
                          <img
                            src={img}
                            alt={service.title}
                            className="w-full h-[280px] md:h-[400px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                          {/* Large faded number */}
                          <span className="absolute bottom-4 right-6 font-['Syne',sans-serif] text-[120px] md:text-[160px] font-extrabold leading-none text-white/10 select-none pointer-events-none">
                            {num}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text side */}
                    <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center">
                          {Icon && <Icon size={26} className="text-[var(--gold)]" />}
                        </div>
                        <span className="font-['Syne',sans-serif] text-4xl md:text-5xl font-extrabold text-[var(--gold)]/15 select-none">
                          {num}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--black)] mb-4">{service.title}</h3>
                      <p className="text-[var(--text-muted)] leading-relaxed mb-6 text-base md:text-lg">{service.description}</p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-[var(--text)]">
                            <HiCheck className="text-[var(--gold)] flex-shrink-0" size={18} />
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

                  {/* Separator line */}
                  {i < services.length - 1 && (
                    <div className="border-b border-[var(--border)]" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
