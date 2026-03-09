import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-[var(--color-paper)]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col z-50">
          <span className="text-2xl font-serif font-bold tracking-widest uppercase leading-none">
            Keshav<span className="text-[var(--color-gold)]">.</span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] font-semibold text-[var(--color-ink)]/70 mt-1">
            Travels & Holidays
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-[0.15em] font-medium hover:text-[var(--color-gold)] transition-colors relative group"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-[var(--color-gold)]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-[var(--color-ink)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-[var(--color-paper)] flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.1 + i * 0.1 : 0 }}
            >
              <Link
                to={link.path}
                className="text-3xl font-serif uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
