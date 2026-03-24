import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowRight, HiStar } from 'react-icons/hi'
import { Megaphone, Camera, PartyPopper, Heart, GraduationCap, Target, Quote } from 'lucide-react'
import { services, stats, brand } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const iconMap = { Megaphone, Camera, PartyPopper, Heart, GraduationCap, Target }

/* ─── Floating geometric shapes ─── */
function GeoShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[15%] left-[8%] w-20 h-20 border border-[var(--gold)]/20 rotate-45 animate-float" />
      <div className="absolute top-[25%] right-[12%] w-14 h-14 rounded-full border border-[var(--gold)]/15 animate-float-reverse" />
      <div className="absolute bottom-[30%] left-[15%] w-10 h-10 bg-[var(--gold)]/5 rotate-12 animate-float-slow" />
      <div className="absolute top-[60%] right-[8%] w-24 h-1 bg-gradient-to-r from-[var(--gold)]/20 to-transparent animate-float" />
      <div className="absolute bottom-[15%] right-[25%] w-6 h-6 rounded-full bg-[var(--gold)]/10 animate-float-reverse" />
    </div>
  )
}

/* ─── 3D Tilt Card ─── */
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

/* Gallery images for the marquee — two rows */
const marqueeRow1 = [
  { src: '/images/events/crowd-bw.jpeg', alt: 'Concert crowd' },
  { src: '/images/portfolio/party-girls.jpeg', alt: 'Party vibes' },
  { src: '/images/events/performer.jpeg', alt: 'Live performer' },
  { src: '/images/portfolio/nightclub-90.jpeg', alt: '90 Night Club' },
  { src: '/images/events/concert-crowd.jpeg', alt: 'Concert energy' },
  { src: '/images/portfolio/lounge-guys.jpeg', alt: 'Lounge guys' },
  { src: '/images/portfolio/event-1.jpeg', alt: 'Event moment' },
  { src: '/images/portfolio/party-dance.jpeg', alt: 'Dance floor' },
  { src: '/images/portfolio/event-2.jpeg', alt: 'Event vibes' },
  { src: '/images/portfolio/bartending.jpeg', alt: 'Bartending' },
]

const marqueeRow2 = [
  { src: '/images/portfolio/lounge-vibes.jpeg', alt: 'Lounge vibes' },
  { src: '/images/events/crowd-vibes.jpeg', alt: 'Crowd vibes' },
  { src: '/images/portfolio/vehicle-branding.jpeg', alt: 'Vehicle branding' },
  { src: '/images/portfolio/party-laughs.jpeg', alt: 'Good times' },
  { src: '/images/events/performer-crowd.jpeg', alt: 'Performer and crowd' },
  { src: '/images/portfolio/nelu-design.jpeg', alt: 'Nelu design' },
  { src: '/images/portfolio/event-3.jpeg', alt: 'Event highlight' },
  { src: '/images/portfolio/event-crowd-color.jpeg', alt: 'Colour event' },
  { src: '/images/portfolio/event-4.jpeg', alt: 'Event moment' },
  { src: '/images/portfolio/event-5.jpeg', alt: 'Event energy' },
]

/* ─── Hero Section ─── */
function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[var(--bg)]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <GeoShapes />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-xs font-semibold tracking-wider uppercase text-[var(--gold-dark)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                {brand.yearsInBusiness} Years of Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[var(--black)] mb-6"
            >
              We Make Brands{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)]">
                  Unforgettable
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-lg mb-8"
            >
              Social media management, content creation, events, and staff training for
              Namibia's entertainment industry. From restaurants and clubs to festivals and weddings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--black)] text-white font-semibold rounded-full hover:shadow-[0_8px_30px_rgba(200,162,78,0.25)] transition-all duration-300 group"
              >
                Start Your Project
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[var(--border)] text-[var(--text)] font-semibold rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right — Founder hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="perspective-container hidden lg:block"
          >
            <TiltCard className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                <img
                  src="/images/founder/liina-laptop.jpeg"
                  alt="Liina — Founder of Big B's Creative Agency"
                  className="w-full h-[520px] object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/images/logo/bigbs-logo.jpeg"
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-white font-['Syne',sans-serif] font-bold text-sm">Big B's Creative Agency</p>
                      <p className="text-[var(--gold)] text-xs">{brand.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Social Media', 'Events', 'Content', 'Weddings', 'Training'].map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/20 text-white/80 backdrop-blur-sm bg-white/5"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Mobile hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:hidden"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
              <img
                src="/images/founder/liina-laptop.jpeg"
                alt="Liina — Founder of Big B's Creative Agency"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-['Syne',sans-serif] font-bold text-sm">{brand.founder}</p>
                <p className="text-[var(--gold)] text-xs">CEO & Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-light)]">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-[var(--text-light)]/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-[var(--gold)]"
          />
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from(ref.current.querySelectorAll('.stat-item'), {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="relative py-16 bg-[var(--bg-dark)] grain overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center">
              <p className="font-['Syne',sans-serif] text-3xl md:text-4xl font-extrabold text-[var(--gold)]">
                {s.value}
              </p>
              <p className="text-sm text-[var(--text-light)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Gallery Strip — Infinite Marquee ─── */
function GalleryStrip() {
  return (
    <section className="py-12 md:py-16 bg-[var(--bg-warm)] overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)]">
          Moments We've Captured
        </span>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-container mb-3">
        <div className="marquee-track marquee-left">
          {[...marqueeRow1, ...marqueeRow1].map((img, i) => (
            <div key={`r1-${i}`} className="marquee-item">
              <img
                src={img.src}
                alt={img.alt}
                className="w-auto h-[200px] md:h-[250px] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-container">
        <div className="marquee-track marquee-right">
          {[...marqueeRow2, ...marqueeRow2].map((img, i) => (
            <div key={`r2-${i}`} className="marquee-item">
              <img
                src={img.src}
                alt={img.alt}
                className="w-auto h-[200px] md:h-[250px] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Services Preview ─── */
function ServicesPreview() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from(ref.current.querySelectorAll('.service-card'), {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <GeoShapes />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--black)] leading-tight mb-4">
            Services Built for Entertainment
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            From the dance floor to the feed — we handle every touchpoint of your brand's presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <TiltCard key={service.id} className="service-card">
                <div className="group relative h-full p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(200,162,78,0.15)]">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors">
                    {Icon && <Icon size={22} className="text-[var(--gold)]" />}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--black)] mb-2">{service.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg-warm)] text-[var(--text-muted)]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors group"
          >
            View All Services
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials Section ─── */
const testimonials = [
  {
    quote: "Big B's transformed our club's social media presence. Our Friday nights went from half-empty to packed in just two months.",
    name: 'Michael N.',
    role: 'Club Owner',
    business: 'Windhoek',
    stars: 5,
  },
  {
    quote: "The wedding content was absolutely stunning. Liina captured every special moment — our families still watch the highlight reel on repeat.",
    name: 'Sarah & Tomas K.',
    role: 'Newlyweds',
    business: 'Swakopmund',
    stars: 5,
  },
  {
    quote: "Our restaurant's Instagram went from 200 followers to over 3,000 in three months. The content quality is unmatched in Namibia.",
    name: 'Daphne M.',
    role: 'Restaurant Manager',
    business: 'Joe\'s Beerhouse, Windhoek',
    stars: 5,
  },
  {
    quote: "Professional, creative, and genuinely passionate about what they do. The staff training programme elevated our entire service experience.",
    name: 'James P.',
    role: 'Hospitality Director',
    business: 'Windhoek',
    stars: 5,
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[var(--bg-warm)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--black)] leading-tight">
            Trusted by Namibia's Best Venues
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Gold quote mark */}
          <Quote size={48} className="text-[var(--gold)]/30 mx-auto mb-6" />

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: i === current ? 1 : 0,
                  y: i === current ? 0 : 20,
                  position: i === current ? 'relative' : 'absolute',
                }}
                transition={{ duration: 0.5 }}
                className={`text-center w-full ${i === current ? '' : 'pointer-events-none absolute inset-0'}`}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <HiStar key={si} size={20} className="text-[var(--gold)]" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-[var(--text)] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>

                <div>
                  <p className="font-['Syne',sans-serif] font-bold text-[var(--black)]">{t.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{t.role}, {t.business}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-[var(--gold)] w-8' : 'bg-[var(--border)] hover:bg-[var(--gold)]/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--black)] via-[var(--black-soft)] to-[var(--black-muted)] p-10 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--gold)] blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--gold)] blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Ready to Make Some Noise?
            </h2>
            <p className="text-[var(--text-light)] max-w-lg mx-auto mb-8 leading-relaxed">
              Let's turn your brand into the talk of the town. Get in touch for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--black)] font-bold rounded-full hover:shadow-[0_8px_30px_rgba(200,162,78,0.4)] transition-all duration-300 group"
              >
                Get a Free Quote
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <GalleryStrip />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
