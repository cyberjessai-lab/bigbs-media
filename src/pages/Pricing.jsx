import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCheck, HiArrowRight } from 'react-icons/hi'

const packages = [
  {
    name: 'Starter',
    desc: 'For small businesses getting started with social media.',
    features: [
      '8 posts per month',
      'Content calendar',
      'Monthly analytics report',
      '1 platform managed',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    desc: 'For businesses ready to scale their online presence.',
    features: [
      '16 posts per month',
      'Content creation (photo + video)',
      '2 platforms managed',
      'Monthly strategy call',
      'Ad campaign management',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    desc: 'For brands that want the full entertainment marketing experience.',
    features: [
      'Unlimited posts',
      'All platforms managed',
      'Event coverage (2/month)',
      'Staff training sessions',
      'Weekly strategy calls',
      'Dedicated account manager',
      'Wedding content add-on available',
    ],
    highlight: false,
  },
]

export default function Pricing() {
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mb-14 mx-auto text-center">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--black)] leading-tight mb-6">
              Packages That Fit Your Goals
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Every business is different. Choose a starting point, and we'll customise it to fit your needs.
              All prices available on request.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  pkg.highlight
                    ? 'bg-[var(--black)] text-white ring-2 ring-[var(--gold)] shadow-[0_20px_60px_-15px_rgba(200,162,78,0.3)]'
                    : 'bg-[var(--bg-card)] border border-[var(--border)]'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--gold)] text-[var(--black)] text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold font-['Syne',sans-serif] mb-2">{pkg.name}</h3>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? 'text-gray-400' : 'text-[var(--text-muted)]'}`}>
                    {pkg.desc}
                  </p>
                </div>

                <p className={`text-sm font-semibold mb-6 ${pkg.highlight ? 'text-[var(--gold)]' : 'text-[var(--gold-dark)]'}`}>
                  Contact for pricing
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <HiCheck className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-[var(--gold)]' : 'text-[var(--gold)]'}`} size={16} />
                      <span className={pkg.highlight ? 'text-gray-300' : 'text-[var(--text)]'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-[var(--gold)] text-[var(--black)] hover:shadow-[0_8px_20px_rgba(200,162,78,0.4)]'
                      : 'border-2 border-[var(--border)] text-[var(--text)] hover:border-[var(--gold)] hover:text-[var(--gold)]'
                  }`}
                >
                  Get Started
                  <HiArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--text-light)] mt-10 max-w-lg mx-auto"
          >
            Need something custom? We create tailored proposals for unique projects, events, and campaigns.{' '}
            <Link to="/contact" className="text-[var(--gold)] hover:underline">Let's talk.</Link>
          </motion.p>
        </div>
      </section>
    </div>
  )
}
