export const brand = {
  name: "Big B's Media Agency",
  tagline: 'Home of Acme Marketing',
  email: 'bigbsmediaagency@gmail.com',
  phone: '+264857433617',
  address: 'Monte Vista No. 19, Avis, Windhoek, Namibia',
  instagram: 'https://www.instagram.com/bigbscreativeagency_?igsh=MTJ3N3JlNTB2a2Rjaw==',
  facebook: 'https://www.facebook.com/profile.php?id=61556244354706',
  founder: 'Liina Busiswa Ndasimana Emvula',
  yearFounded: 2019,
  get yearsInBusiness() {
    return new Date().getFullYear() - this.yearFounded
  },
}

export const services = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Strategic content planning, scheduling, and community management that keeps your audience engaged and your brand top of mind.',
    icon: 'Megaphone',
    features: ['Content calendars', 'Community management', 'Analytics reporting', 'Platform optimisation'],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Scroll-stopping visuals, reels, and branded content that captures the energy of your venue, event, or brand.',
    icon: 'Camera',
    features: ['Photography', 'Videography', 'Reels & short-form', 'Brand storytelling'],
  },
  {
    id: 'events',
    title: 'Events Management',
    description: 'End-to-end event planning and execution — from intimate brand launches to large-scale festivals and club nights.',
    icon: 'PartyPopper',
    features: ['Event planning', 'Vendor coordination', 'On-ground execution', 'Post-event coverage'],
  },
  {
    id: 'weddings',
    title: 'Wedding Content',
    description: 'Cinematic wedding content that captures every moment — from the ceremony to the dance floor.',
    icon: 'Heart',
    features: ['Wedding videography', 'Same-day edits', 'Social media coverage', 'Highlight reels'],
  },
  {
    id: 'training',
    title: 'Staff Training',
    description: 'Professional hospitality training for waitresses, bartenders, and front-of-house staff to elevate your customer experience.',
    icon: 'GraduationCap',
    features: ['Service excellence', 'Upselling techniques', 'Brand representation', 'Customer interaction'],
  },
  {
    id: 'ad-campaigns',
    title: 'Ad Campaigns',
    description: 'Targeted digital advertising campaigns that put your brand in front of the right audience at the right time.',
    icon: 'Target',
    features: ['Meta ads', 'Google ads', 'Campaign strategy', 'Performance tracking'],
  },
]

export const stats = [
  { value: `${new Date().getFullYear() - 2019}+`, label: 'Years Experience' },
  { value: '50+', label: 'Clients Served' },
  { value: '200+', label: 'Events Covered' },
  { value: '100%', label: 'Passion' },
]

export const faqs = [
  {
    q: 'What industries do you specialise in?',
    a: 'We focus on the entertainment space — restaurants, clubs, lounges, festivals, and weddings. We understand the energy and pace of nightlife and events.',
  },
  {
    q: 'How quickly can you start a project?',
    a: 'We can typically begin within one week of signing. For urgent campaigns or events, we offer expedited timelines.',
  },
  {
    q: 'Do you work outside of Windhoek?',
    a: 'Absolutely. While based in Windhoek, we travel across Namibia and South Africa for events and client projects.',
  },
  {
    q: 'What makes you different from other agencies?',
    a: 'Seven years of hands-on experience in entertainment marketing, a one-woman powerhouse who knows every detail of your project, and a commitment to authenticity over trends.',
  },
  {
    q: 'Do you offer packages or custom pricing?',
    a: 'Both. We have standard packages for common services, and we create custom proposals for unique projects. Contact us for a quote.',
  },
  {
    q: 'Can you manage our social media full-time?',
    a: 'Yes. We offer monthly retainer packages for ongoing social media management, including content creation, scheduling, and analytics.',
  },
]

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]
