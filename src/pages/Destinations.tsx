import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Destinations() {
  const destinations = [
    {
      id: "dubai",
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
      desc: "Dubai is one of the seven emirates that make up the United Arab Emirates (UAE) and is known for its modern architecture, luxury shopping, vibrant nightlife, and impressive skyline.",
      highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"]
    },
    {
      id: "switzerland",
      name: "Switzerland",
      img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop",
      desc: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern's Zytglogge clock tower.",
      highlights: ["Swiss Alps", "Lake Geneva", "Lucerne"]
    },
    {
      id: "turkey",
      name: "Turkey",
      img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
      desc: "Turkey is a popular tourist destination due to its historical sites, natural beauty, and cultural attractions. Istanbul, with its historical landmarks such as the Hagia Sophia and the Blue Mosque, is a major draw.",
      highlights: ["Cappadocia", "Hagia Sophia", "Pamukkale"]
    },
    {
      id: "maldives",
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
      desc: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue lagoons and extensive reefs.",
      highlights: ["Overwater Bungalows", "Scuba Diving", "Male"]
    },
    {
      id: "bali",
      name: "Bali",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
      desc: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.",
      highlights: ["Ubud", "Seminyak", "Tanah Lot"]
    },
    {
      id: "paris",
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
      desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame"]
    },
    {
      id: "japan",
      name: "Japan",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
      desc: "Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
      highlights: ["Mount Fuji", "Kyoto Temples", "Tokyo Neon"]
    },
    {
      id: "italy",
      name: "Italy",
      img: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop",
      desc: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.",
      highlights: ["Colosseum", "Venice Canals", "Amalfi Coast"]
    }
  ];

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
          Top Destinations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-ink)]/70 font-light max-w-2xl mx-auto text-lg"
        >
          Discover the world's top destinations: A journey of unforgettable adventures and experiences curated just for you.
        </motion.p>
      </section>

      {/* Destinations Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {destinations.map((dest, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i % 2 === 0 ? 0 : 0.2 }}
              className="group flex flex-col"
            >
              <Link to={`/destinations/${dest.id}`} className="relative aspect-[4/3] overflow-hidden mb-8 block">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[var(--color-forest)]/20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute top-6 left-6 bg-[var(--color-paper)]/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--color-forest)]">
                  {dest.name}
                </div>
              </Link>
              
              <h2 className="text-3xl font-serif text-[var(--color-forest)] mb-4">{dest.name}</h2>
              <p className="text-[var(--color-ink)]/70 font-light leading-relaxed mb-6 flex-grow">
                {dest.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {dest.highlights.map((highlight, j) => (
                  <span key={j} className="text-xs uppercase tracking-wider font-medium text-[var(--color-gold)] border border-[var(--color-gold)]/30 px-3 py-1 rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
              
              <Link to={`/destinations/${dest.id}`} className="inline-flex items-center gap-4 text-[var(--color-forest)] uppercase tracking-[0.15em] font-semibold text-sm group/btn self-start">
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Explore {dest.name}</span>
                  <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-[var(--color-gold)]">Explore {dest.name}</span>
                </span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-2 group-hover/btn:text-[var(--color-gold)]" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
