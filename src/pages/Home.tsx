import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck, Clock, Map, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[var(--color-paper)] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-paper)]">
        {/* Floating Parallax Images */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[12%] left-[2%] lg:left-[5%] w-32 lg:w-48 aspect-[3/4] rounded-t-full overflow-hidden hidden md:block shadow-2xl z-0 -rotate-6"
        >
          <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" alt="Paris" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[var(--color-forest)]/10 mix-blend-overlay"></div>
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[35%] right-[2%] lg:right-[6%] w-28 lg:w-40 aspect-square rounded-full overflow-hidden hidden md:block shadow-2xl z-0 rotate-3"
        >
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" alt="Nature" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[var(--color-forest)]/10 mix-blend-overlay"></div>
        </motion.div>

        <motion.div 
          style={{ y: y3 }}
          className="absolute top-[12%] right-[4%] lg:right-[8%] w-20 lg:w-28 aspect-[2/3] rounded-b-full overflow-hidden hidden lg:block shadow-xl z-0 rotate-12"
        >
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" alt="Mountains" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[var(--color-forest)]/10 mix-blend-overlay"></div>
        </motion.div>

        {/* Main Typographic Centerpiece */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 flex flex-col items-center w-full px-4"
        >
          <h1 
            className="text-[18vw] md:text-[12vw] leading-[0.85] font-serif font-bold text-center uppercase tracking-tighter text-mask drop-shadow-sm"
          >
            Explore<br />
            Dream<br />
            Discover
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1 }} 
            className="mt-6 md:mt-8 text-sm md:text-base font-light text-[var(--color-ink)]/80 max-w-md text-center leading-relaxed"
          >
            Curating bespoke itineraries and unforgettable journeys for the modern traveler.
          </motion.p>
        </motion.div>

        {/* Left Creative CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[10%] md:bottom-[12%] left-[5%] md:left-[8%] z-20 -rotate-6 hidden sm:block"
        >
          <Link to="/destinations" className="bg-[var(--color-forest)] text-[var(--color-paper)] px-6 py-4 md:px-8 md:py-4 uppercase tracking-[0.15em] text-xs font-semibold hover:bg-[var(--color-ink)] transition-colors duration-300 rounded-full shadow-xl flex items-center gap-3 group">
            View Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Creative CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-[10%] md:bottom-[12%] right-[5%] md:right-[8%] z-20 rotate-3 hidden sm:block"
        >
          <Link to="/contact" className="bg-white/80 backdrop-blur-md border border-[var(--color-forest)]/20 text-[var(--color-forest)] px-6 py-4 md:px-8 md:py-4 uppercase tracking-[0.15em] text-xs font-semibold hover:bg-white transition-colors duration-300 rounded-full shadow-xl flex items-center gap-3 group">
            Start Planning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Mobile CTA (Fallback) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-20 flex sm:hidden flex-col items-center gap-3 w-full px-6"
        >
          <Link to="/destinations" className="bg-[var(--color-forest)] text-[var(--color-paper)] px-8 py-3 uppercase tracking-[0.15em] text-xs font-semibold hover:bg-[var(--color-ink)] transition-colors duration-300 rounded-full w-full text-center">
            View Destinations
          </Link>
          <Link to="/contact" className="bg-transparent border border-[var(--color-forest)]/30 text-[var(--color-forest)] px-8 py-3 uppercase tracking-[0.15em] text-xs font-semibold hover:bg-[var(--color-forest)]/5 transition-colors duration-300 rounded-full w-full text-center bg-white/50 backdrop-blur-sm">
            Start Planning
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[var(--color-ink)]/40">Scroll</span>
          <div className="w-[1px] h-10 bg-[var(--color-ink)]/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 40, 40] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-gold)]"
            />
          </div>
        </motion.div>

        {/* Micro Details */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-ink)]/40 font-semibold flex items-center gap-4">
            Est. 2014 <span className="w-8 h-[1px] bg-[var(--color-ink)]/20 inline-block"></span> Premium Experiences
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden xl:block z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-ink)]/40 font-semibold flex items-center gap-4">
            Global Destinations <span className="w-8 h-[1px] bg-[var(--color-ink)]/20 inline-block"></span> Worldwide
          </span>
        </motion.div>
      </section>

      {/* About Us Snippet */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-[var(--color-paper)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-6">Welcome To Keshav Travels</h2>
            <p className="text-3xl md:text-5xl font-serif leading-tight text-[var(--color-forest)] mb-8">
              We believe that travel is not just about reaching a destination; it's about embarking on a journey that transforms the way you see the world.
            </p>
            <p className="text-[var(--color-ink)]/70 leading-relaxed max-w-lg mb-10 font-light text-lg">
              With a passion for exploration and a commitment to excellence, we have been crafting unforgettable travel experiences for our clients for over 10 years.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 text-[var(--color-forest)] uppercase tracking-[0.15em] font-semibold text-sm group">
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Discover Our Story</span>
                <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[var(--color-gold)]">Discover Our Story</span>
              </span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[var(--color-gold)]" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-t-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
              alt="Traveler looking at landscape" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[var(--color-forest)]/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[var(--color-forest)] text-[var(--color-paper)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif"
            >
              Excellence in Every Journey
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Map size={32} strokeWidth={1.5} />,
                title: "Expertise",
                desc: "With our destination expertise and knowledge, we provide valuable information and personalized service tailored to your preferences."
              },
              {
                icon: <Clock size={32} strokeWidth={1.5} />,
                title: "Convenience",
                desc: "We understand our clients lead busy lives. We strive to provide a seamless experience through our online booking tools and services."
              },
              {
                icon: <ShieldCheck size={32} strokeWidth={1.5} />,
                title: "Security & Safety",
                desc: "We place the utmost importance on your well-being, adhering to strict safety guidelines to ensure reliable products and services."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group p-8 border border-[var(--color-sand)]/20 hover:border-[var(--color-gold)] transition-colors duration-500 bg-[var(--color-forest)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold)] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                <div className="text-[var(--color-gold)] mb-8 transform transition-transform duration-500 group-hover:-translate-y-2">{feature.icon}</div>
                <h4 className="text-xl font-serif font-bold mb-4 tracking-wide">{feature.title}</h4>
                <p className="text-[var(--color-sand)] font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Preview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-4">Top Destinations</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] max-w-2xl">
              Discover the world's top destinations: A journey of unforgettable adventures.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/destinations" className="inline-flex items-center gap-4 text-[var(--color-forest)] uppercase tracking-[0.15em] font-semibold text-sm group border-b border-[var(--color-forest)] pb-2 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
              View All Destinations
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: "dubai",
              name: "Dubai",
              img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
              desc: "Modern architecture, luxury shopping, and impressive skyline."
            },
            {
              id: "switzerland",
              name: "Switzerland",
              img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop",
              desc: "Mountainous landscapes, medieval quarters, and serene lakes."
            },
            {
              id: "turkey",
              name: "Turkey",
              img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
              desc: "Historical sites, natural beauty, and cultural attractions."
            }
          ].map((dest, i) => (
            <Link to={`/destinations/${dest.id}`} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer h-full"
              >
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/90 via-[var(--color-forest)]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  <h4 className="text-3xl font-serif text-[var(--color-paper)] mb-2">{dest.name}</h4>
                  <p className="text-[var(--color-sand)] font-light text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 delay-100">{dest.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[var(--color-sand)]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)]">What Our Customers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Ayushi",
                title: "Awesome Trip",
                text: "Absolutely blown away by the service provided by Keshav Travels & Holidays. From start to finish, they exceeded all my expectations. The team was incredibly knowledgeable, responsive, and attentive to my needs. Not only did they deliver on their promises, but they also went above and beyond to ensure I was completely satisfied."
              },
              {
                name: "Rituja",
                title: "Beyond Words",
                text: "Embarking on a journey with Keshav Travels was an experience beyond words. From the moment I booked my trip to the final farewell, every detail was meticulously crafted to perfection. The seamless planning, impeccable accommodations, and expertly curated itinerary made every moment unforgettable."
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-[var(--color-paper)] p-10 md:p-14 shadow-sm relative"
              >
                <div className="flex gap-1 text-[var(--color-gold)] mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <h4 className="text-xl font-serif font-bold text-[var(--color-forest)] mb-6">{review.title}</h4>
                <p className="text-[var(--color-ink)]/70 font-light leading-relaxed mb-8 italic">"{review.text}"</p>
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)]">— {review.name}</p>
                
                {/* Decorative quote mark */}
                <div className="absolute top-8 right-10 text-[120px] font-serif leading-none text-[var(--color-sand)]/20 pointer-events-none">"</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[var(--color-forest)]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-paper)] mb-8">Ready to explore?</h2>
          <p className="text-[var(--color-sand)] text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
            Let us craft your next unforgettable journey. Reach out to our travel experts today.
          </p>
          <Link to="/contact" className="inline-block bg-[var(--color-gold)] text-[var(--color-paper)] px-10 py-5 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-[var(--color-paper)] hover:text-[var(--color-forest)] transition-colors duration-500">
            Get In Touch
          </Link>
          <p className="mt-8 text-[var(--color-sand)] font-light tracking-widest">Or call us: <span className="font-medium text-[var(--color-paper)]">+91 9522366366</span></p>
        </motion.div>
      </section>
    </div>
  );
}
