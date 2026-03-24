import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Club Night Launch',
    category: 'Events & Social Media',
    desc: 'Full social media campaign and on-ground promotion for a new club night series in Windhoek.',
    tags: ['Events', 'Content', 'Social Media'],
  },
  {
    title: 'Restaurant Grand Opening',
    category: 'Content Creation',
    desc: 'Launch content package including photography, reels, and a 30-day social media strategy.',
    tags: ['Photography', 'Strategy', 'Reels'],
  },
  {
    title: 'Festival Coverage',
    category: 'Events Management',
    desc: 'End-to-end event management and real-time social media coverage for a weekend music festival.',
    tags: ['Festival', 'Live Coverage', 'Management'],
  },
  {
    title: 'Wedding Content Package',
    category: 'Wedding Content',
    desc: 'Cinematic highlights, same-day edits, and social media teasers for a destination wedding.',
    tags: ['Wedding', 'Video', 'Same-Day Edit'],
  },
  {
    title: 'Lounge Rebrand',
    category: 'Social Media Management',
    desc: 'Complete social media overhaul — new content strategy, visual identity refresh, and ad campaigns.',
    tags: ['Rebrand', 'Strategy', 'Ads'],
  },
  {
    title: 'Staff Training Programme',
    category: 'Training',
    desc: 'Hospitality excellence training for front-of-house staff at a premium Windhoek restaurant.',
    tags: ['Training', 'Hospitality', 'Service'],
  },
]

export default function Portfolio() {
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--black)] leading-tight mb-6">
              Our Work Speaks Louder
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              A selection of projects across events, social media, content creation, and staff training.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--black)] to-[var(--black-muted)] p-7 flex flex-col justify-between min-h-[320px] hover:shadow-[0_20px_60px_-15px_rgba(200,162,78,0.2)] transition-all duration-300"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[var(--gold)]/5 blur-2xl group-hover:bg-[var(--gold)]/10 transition-all duration-500" />

                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-3 block">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-[var(--text-light)] leading-relaxed">{p.desc}</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[var(--gold)]/20 text-[var(--gold-light)]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note for when real work images arrive */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--text-light)] mt-12"
          >
            Client photos and case studies coming soon. Follow us on{' '}
            <a href="https://www.instagram.com/bigbscreativeagency_" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">
              Instagram
            </a>{' '}
            for our latest work.
          </motion.p>
        </div>
      </section>
    </div>
  )
}
