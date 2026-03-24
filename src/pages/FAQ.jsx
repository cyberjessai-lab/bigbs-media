import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { faqs } from '../data/siteData'

function AccordionItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-[var(--gold)]' : 'text-[var(--text)]'}`}>
          {faq.q}
        </span>
        <HiChevronDown
          className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--gold)]' : 'text-[var(--text-light)]'}`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="pt-20 md:pt-28">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg)]">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-14 text-center">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--black)] leading-tight mb-6">
              Common Questions
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-6 md:p-8"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
