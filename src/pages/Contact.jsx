import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { brand } from '../data/siteData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate with email service
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

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
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--black)] leading-tight mb-6">
              Let's Create Something Together
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Have a project in mind? Need a quote? Or just want to chat about your brand? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      placeholder="+264 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[var(--black)] text-white font-semibold rounded-full hover:shadow-[0_8px_30px_rgba(200,162,78,0.25)] transition-all duration-300"
                >
                  {sent ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-[var(--bg-dark)] text-white">
                <h3 className="font-['Syne',sans-serif] text-xl font-bold mb-6">Contact Details</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <HiMail className="mt-0.5 text-[var(--gold)] flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs text-[var(--text-light)] mb-0.5">Email</p>
                      <a href={`mailto:${brand.email}`} className="text-sm hover:text-[var(--gold)] transition-colors">{brand.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiPhone className="mt-0.5 text-[var(--gold)] flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs text-[var(--text-light)] mb-0.5">Phone</p>
                      <a href={`tel:${brand.phone}`} className="text-sm hover:text-[var(--gold)] transition-colors">{brand.phone}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiLocationMarker className="mt-0.5 text-[var(--gold)] flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs text-[var(--text-light)] mb-0.5">Address</p>
                      <p className="text-sm">{brand.address}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-[var(--text-light)] mb-3">Follow us</p>
                  <div className="flex gap-3">
                    <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--text-light)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
                      <FaInstagram size={16} />
                    </a>
                    <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--text-light)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
                      <FaFacebookF size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
