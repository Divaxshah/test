import { Facebook, Linkedin, Twitter, Phone, Mail } from 'lucide-react';

const PHONE = '+91 9522366366, +91 9575303220';
const EMAIL = 'Holidays@keshavtravels.com';

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export default function TopBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-12 bg-[var(--color-forest)] text-white overflow-x-hidden"
      role="banner"
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Social links */}
        <div className="flex items-center gap-2 sm:gap-5 shrink-0">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white font-semibold hover:text-[var(--color-gold)] transition-colors duration-300 p-0.5"
            >
              <Icon size={16} strokeWidth={1.5} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          ))}
        </div>
        {/* Contact: phone + email */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-semibold text-white min-w-0">
          <a
            href="tel:+919522366366"
            className="flex items-center gap-1 sm:gap-2 text-white hover:text-[var(--color-gold)] transition-colors shrink-0"
          >
            <Phone size={14} className="shrink-0 w-[14px] h-[14px] sm:w-4 sm:h-4" />
            <span className="md:hidden">+91 9522366366</span>
            <span className="hidden md:inline">{PHONE}</span>
          </a>
          <span className="w-px h-3 sm:h-4 bg-white/50 shrink-0" aria-hidden />
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-1 sm:gap-2 text-white hover:text-[var(--color-gold)] transition-colors min-w-0"
          >
            <Mail size={14} className="shrink-0 w-[14px] h-[14px] sm:w-4 sm:h-4" />
            <span className="hidden sm:inline truncate max-w-[140px] md:max-w-none">{EMAIL}</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
