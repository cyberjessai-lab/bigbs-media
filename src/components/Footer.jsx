import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { brand, navigation } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[var(--bg-dark)] text-[var(--text-on-dark)] grain overflow-hidden">
      {/* Gold top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo/bigbs-logo.jpeg"
                alt="Big B's Creative Agency"
                className="w-11 h-11 rounded-lg object-cover"
              />
              <span className="font-['Syne',sans-serif] font-bold text-xl text-white">{brand.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-light)] mb-6">
              {brand.tagline}. {brand.yearsInBusiness} years of crafting unforgettable experiences in Namibia's entertainment industry.
            </p>
            <div className="flex gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-light)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-200"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-light)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-200"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[var(--text-light)] hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/faq" className="text-sm text-[var(--text-light)] hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {['Social Media', 'Content Creation', 'Events Management', 'Wedding Content', 'Staff Training', 'Ad Campaigns'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-[var(--text-light)] hover:text-white transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiMail className="mt-0.5 text-[var(--gold)] flex-shrink-0" size={16} />
                <a href={`mailto:${brand.email}`} className="text-sm text-[var(--text-light)] hover:text-white transition-colors">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiPhone className="mt-0.5 text-[var(--gold)] flex-shrink-0" size={16} />
                <a href={`tel:${brand.phone}`} className="text-sm text-[var(--text-light)] hover:text-white transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="mt-0.5 text-[var(--gold)] flex-shrink-0" size={16} />
                <span className="text-sm text-[var(--text-light)]">{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[var(--border-dark)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-light)]">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-light)]">
            Built by{' '}
            <a href="https://nova-cx.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">
              Nova CX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
