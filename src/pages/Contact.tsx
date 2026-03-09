import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-[var(--color-forest)] mb-6"
        >
          Get In Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-ink)]/70 font-light max-w-2xl mx-auto text-lg"
        >
          We're here to help you plan your next unforgettable journey. Reach out to our travel experts today.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[var(--color-forest)] text-[var(--color-paper)] p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/10 rounded-bl-full pointer-events-none"></div>
            
            <h2 className="text-3xl font-serif mb-12">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center flex-shrink-0 text-[var(--color-gold)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-2">Our Location</h3>
                  <p className="text-[var(--color-sand)] font-light leading-relaxed">
                    123 Explorer Street<br />
                    Adventure City, AC 12345<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center flex-shrink-0 text-[var(--color-gold)]">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-2">Phone Number</h3>
                  <p className="text-[var(--color-sand)] font-light leading-relaxed">
                    +91 9522366366<br />
                    Mon-Fri 9am to 6pm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center flex-shrink-0 text-[var(--color-gold)]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-2">Email Address</h3>
                  <p className="text-[var(--color-sand)] font-light leading-relaxed">
                    hello@keshavtravels.com<br />
                    support@keshavtravels.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white p-12 md:p-16 shadow-sm border border-[var(--color-sand)]/30"
          >
            <h2 className="text-3xl font-serif text-[var(--color-forest)] mb-12">Send us a message</h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-ink)]/60">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full border-b border-[var(--color-ink)]/20 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-ink)]"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-ink)]/60">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full border-b border-[var(--color-ink)]/20 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-ink)]"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-ink)]/60">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border-b border-[var(--color-ink)]/20 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-ink)]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-ink)]/60">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border-b border-[var(--color-ink)]/20 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-ink)] resize-none"
                  placeholder="Tell us about your dream destination..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center justify-center gap-3 w-full bg-[var(--color-forest)] text-[var(--color-paper)] px-8 py-5 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-[var(--color-gold)] transition-colors duration-500 mt-4"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
