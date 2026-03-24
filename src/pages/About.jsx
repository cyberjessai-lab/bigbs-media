import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiStar } from 'react-icons/hi'
import { brand } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { title: 'Authenticity', desc: 'We keep it real. No fake metrics, no inflated promises — just genuine results that speak for themselves.' },
  { title: 'Creativity', desc: 'Every brand has a unique story. We find the angle that makes yours impossible to scroll past.' },
  { title: 'Professionalism', desc: 'From the first call to the final deliverable, we operate with precision and respect for your time.' },
  { title: 'Time Management', desc: 'Deadlines aren\'t suggestions. We deliver on time, every time — because your event won\'t wait.' },
]

export default function About() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from(ref.current.querySelectorAll('.reveal'), {
      y: 50, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--black)] leading-tight mb-6">
              The Woman Behind the Brand
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              {brand.yearsInBusiness} years ago, <strong className="text-[var(--text)]">{brand.founder}</strong> saw a gap in Namibia's entertainment
              industry — venues and events with incredible energy but no one capturing it properly.
              Big B's Media Agency was born to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-[var(--bg-warm)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--black)] leading-tight mb-6">
                From Solo Vision to Full-Service Agency
              </h2>
              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  What started as a passion for social media and events has grown into a trusted agency serving
                  restaurants, clubs, lounges, festivals, and weddings across Namibia and South Africa.
                </p>
                <p>
                  As a one-woman powerhouse, Liina brings a rare combination of creative vision and hands-on
                  execution. Every project gets her personal attention — no junior handoffs, no templates,
                  no cookie-cutter campaigns.
                </p>
                <p>
                  Big B's doesn't just manage your socials — we immerse ourselves in your brand's world,
                  understand your audience, and create content that makes people stop scrolling and start engaging.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--black)] to-[var(--black-muted)] p-8 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }} />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-2xl bg-[var(--gold)] flex items-center justify-center mx-auto mb-6">
                    <span className="text-[var(--black)] font-['Syne',sans-serif] font-extrabold text-4xl">B</span>
                  </div>
                  <p className="text-white font-['Syne',sans-serif] font-bold text-2xl mb-2">{brand.founder}</p>
                  <p className="text-[var(--gold)] text-sm">CEO & Founder</p>
                  <p className="text-[var(--text-light)] text-xs mt-2">{brand.tagline}</p>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--black)] leading-tight">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="reveal group p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(200,162,78,0.12)]">
                <div className="flex items-center gap-3 mb-3">
                  <HiStar className="text-[var(--gold)]" size={20} />
                  <h3 className="text-lg font-bold text-[var(--black)]">{v.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
