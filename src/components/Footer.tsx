import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest)] text-[var(--color-paper)] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <h2 className="text-4xl font-serif font-bold tracking-widest uppercase leading-none">
              Keshav<span className="text-[var(--color-gold)]">.</span>
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-[var(--color-sand)] mt-2">
              Travels & Holidays
            </p>
          </div>
          <p className="text-[var(--color-sand)] max-w-md leading-relaxed mb-8 font-light">
            Crafting unforgettable travel experiences for over 10 years. Embark on a journey that transforms the way you see the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] font-semibold mb-6 text-[var(--color-gold)]">Quick Links</h3>
          <ul className="space-y-4 text-[var(--color-sand)] font-light">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] font-semibold mb-6 text-[var(--color-gold)]">Contact</h3>
          <ul className="space-y-4 text-[var(--color-sand)] font-light">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-[var(--color-gold)]" />
              <span>123 Explorer Street, Adventure City, AC 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0 text-[var(--color-gold)]" />
              <span>+91 9522366366</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0 text-[var(--color-gold)]" />
              <span>hello@keshavtravels.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--color-sand)]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-sand)] uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Keshav Travels & Holidays. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
