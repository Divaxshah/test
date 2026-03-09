import { motion } from 'motion/react';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function About() {
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
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-ink)]/70 font-light max-w-2xl mx-auto text-lg"
        >
          Crafting unforgettable travel experiences for our clients for over 10 years.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] rounded-t-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
              alt="Travel landscape" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[var(--color-forest)]/10 mix-blend-overlay"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-6">About Keshav Travels</h2>
            <p className="text-3xl md:text-4xl font-serif leading-tight text-[var(--color-forest)] mb-8">
              We believe that travel is not just about reaching a destination; it's about embarking on a journey that transforms the way you see the world.
            </p>
            <div className="space-y-6 text-[var(--color-ink)]/70 font-light leading-relaxed">
              <p>
                At Keshav Travels & Holidays, we are passionate about exploration. With a commitment to excellence, we have been curating tailor-made itineraries that cater to your unique preferences, whether you're seeking a relaxing beach getaway, an adventurous trek through the mountains, or a cultural immersion in a bustling city.
              </p>
              <p>
                Our team of experienced travel experts works tirelessly to ensure every detail of your trip is meticulously planned. From flights and accommodations to guided tours and exclusive experiences, we handle it all so you can focus on making memories.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="py-32 bg-[var(--color-forest)] text-[var(--color-paper)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Globe size={40} strokeWidth={1} />, num: "50+", label: "Destinations" },
              { icon: <Users size={40} strokeWidth={1} />, num: "10k+", label: "Happy Travelers" },
              { icon: <Award size={40} strokeWidth={1} />, num: "10+", label: "Years Experience" },
              { icon: <Heart size={40} strokeWidth={1} />, num: "100%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-[var(--color-gold)] mb-6">{stat.icon}</div>
                <h3 className="text-4xl md:text-5xl font-serif mb-2">{stat.num}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-sand)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
