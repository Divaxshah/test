import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Clock, MapPin, ArrowRight, Check, ArrowLeft } from 'lucide-react';

// Mock data for destinations
const destinationsData: Record<string, any> = {
  dubai: {
    name: "Dubai",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    desc: "Experience the ultimate luxury in the city of the future. Dubai offers a mesmerizing blend of modern marvels, traditional souks, and endless desert adventures.",
    packages: [
      {
        id: "dubai-luxury",
        name: "Dubai Luxury Escape",
        duration: "5 Days / 4 Nights",
        rating: 4.9,
        reviews: 128,
        desc: "Immerse yourself in the opulence of Dubai with stays at 5-star hotels, private tours of iconic landmarks, and exclusive dining experiences overlooking the city skyline.",
        highlights: ["Burj Khalifa At The Top", "Desert Safari with BBQ Dinner", "Dhow Cruise Dinner", "Dubai Mall Aquarium"],
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "dubai-adventure",
        name: "Dubai Thrill Seeker",
        duration: "4 Days / 3 Nights",
        rating: 4.8,
        reviews: 95,
        desc: "Get your adrenaline pumping with our action-packed Dubai itinerary. From skydiving over the Palm to deep-sea diving, this is for the ultimate thrill-seekers.",
        highlights: ["Skydiving over Palm Jumeirah", "Deep Dive Dubai", "Dune Bashing", "IMG Worlds of Adventure"],
        img: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  switzerland: {
    name: "Switzerland",
    img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop",
    desc: "Discover the breathtaking beauty of the Swiss Alps, pristine lakes, and charming villages. A paradise for nature lovers and adventure enthusiasts.",
    packages: [
      {
        id: "swiss-alps",
        name: "Alpine Wonders",
        duration: "7 Days / 6 Nights",
        rating: 5.0,
        reviews: 210,
        desc: "Journey through the heart of the Swiss Alps. Experience scenic train rides, majestic mountain peaks, and the serene beauty of Switzerland's famous lakes.",
        highlights: ["Glacier Express Journey", "Jungfraujoch Excursion", "Lake Geneva Cruise", "Lucerne City Tour"],
        img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "swiss-romance",
        name: "Romantic Switzerland",
        duration: "6 Days / 5 Nights",
        rating: 4.9,
        reviews: 156,
        desc: "The perfect romantic getaway. Enjoy cozy chalets, private boat tours, and world-class Swiss chocolate tasting in picturesque alpine villages.",
        highlights: ["Chateau de Chillon", "Zermatt & Matterhorn", "Chocolate Tasting", "Private Boat Tour"],
        img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  turkey: {
    name: "Turkey",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
    desc: "Where East meets West. Explore ancient ruins, vibrant bazaars, and otherworldly landscapes in a country rich with history and culture.",
    packages: [
      {
        id: "turkey-classic",
        name: "Classic Turkey",
        duration: "8 Days / 7 Nights",
        rating: 4.8,
        reviews: 184,
        desc: "A comprehensive tour of Turkey's most iconic destinations. From the bustling streets of Istanbul to the magical fairy chimneys of Cappadocia.",
        highlights: ["Istanbul City Tour", "Cappadocia Hot Air Balloon", "Ephesus Ruins", "Pamukkale Thermal Pools"],
        img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2098&auto=format&fit=crop"
      }
    ]
  },
  maldives: {
    name: "Maldives",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
    desc: "The ultimate tropical paradise. Crystal clear waters, white sandy beaches, and luxurious overwater villas await you.",
    packages: [
      {
        id: "maldives-honeymoon",
        name: "Romantic Maldives Retreat",
        duration: "6 Days / 5 Nights",
        rating: 5.0,
        reviews: 342,
        desc: "Create unforgettable memories in your private overwater villa. Enjoy sunset cruises, couples spa treatments, and romantic dinners on the beach.",
        highlights: ["Overwater Villa Stay", "Sunset Dolphin Cruise", "Couples Spa Treatment", "Private Beach Dinner"],
        img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2146&auto=format&fit=crop"
      }
    ]
  },
  bali: {
    name: "Bali",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    desc: "The Island of the Gods. Experience spiritual tranquility, lush rice terraces, vibrant surf culture, and stunning sunsets.",
    packages: [
      {
        id: "bali-culture",
        name: "Bali Cultural Immersion",
        duration: "7 Days / 6 Nights",
        rating: 4.7,
        reviews: 145,
        desc: "Dive deep into Balinese culture. Visit ancient temples, explore lush rice terraces, and learn to cook traditional Indonesian cuisine.",
        highlights: ["Ubud Monkey Forest", "Tegalalang Rice Terrace", "Uluwatu Temple Sunset", "Traditional Cooking Class"],
        img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  paris: {
    name: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    desc: "The City of Light. Fall in love with iconic landmarks, world-class art, exquisite cuisine, and romantic boulevards.",
    packages: [
      {
        id: "paris-romance",
        name: "Parisian Romance",
        duration: "5 Days / 4 Nights",
        rating: 4.9,
        reviews: 276,
        desc: "Experience the magic of Paris. Stroll along the Seine, marvel at world-class art, and enjoy gourmet dining in the world's most romantic city.",
        highlights: ["Eiffel Tower Summit", "Seine River Cruise", "Louvre Guided Tour", "Montmartre Walking Tour"],
        img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
      }
    ]
  },
  japan: {
    name: "Japan",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    desc: "A fascinating blend of ancient traditions and futuristic innovation. From serene temples to neon-lit streets.",
    packages: [
      {
        id: "japan-golden",
        name: "Golden Route Japan",
        duration: "10 Days / 9 Nights",
        rating: 4.9,
        reviews: 198,
        desc: "The perfect introduction to Japan. Travel from the neon-lit streets of Tokyo to the ancient temples of Kyoto, with a stop at majestic Mt. Fuji.",
        highlights: ["Tokyo City Tour", "Mt. Fuji Excursion", "Kyoto Temples", "Osaka Street Food Tour"],
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  italy: {
    name: "Italy",
    img: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop",
    desc: "La Dolce Vita. Indulge in incredible food, rich history, stunning art, and breathtaking coastal landscapes.",
    packages: [
      {
        id: "italy-grand",
        name: "Grand Tour of Italy",
        duration: "12 Days / 11 Nights",
        rating: 4.8,
        reviews: 245,
        desc: "Experience the best of Italy. From the ancient ruins of Rome to the Renaissance art of Florence and the romantic canals of Venice.",
        highlights: ["Rome Colosseum", "Vatican City", "Florence Art Tour", "Venice Gondola Ride"],
        img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  }
};

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destination = id ? destinationsData[id] : null;

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-paper)]">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-[var(--color-forest)] mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-[var(--color-gold)] hover:underline">Return to Destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-paper)] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={destination.img} 
          alt={destination.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4 sm:px-6 w-full max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wider uppercase mb-4 break-words hyphens-auto">
              {destination.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
              {destination.desc}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <Link 
          to="/destinations" 
          className="inline-flex items-center gap-2 text-[var(--color-forest)] hover:text-[var(--color-gold)] transition-colors mb-12 uppercase tracking-widest text-xs font-semibold group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" /> Back to Destinations
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] mb-4">Curated Packages</h2>
          <p className="text-[var(--color-ink)]/70 font-light max-w-2xl mx-auto">
            Choose from our expertly crafted itineraries designed to give you the best experience of {destination.name}.
          </p>
        </div>

        <div className="space-y-16">
          {destination.packages.map((pkg: any, index: number) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-0 bg-white shadow-sm border border-[var(--color-sand)]/20 rounded-2xl overflow-hidden"
            >
              <div className="lg:w-2/5 h-64 sm:h-80 lg:h-auto relative">
                <img 
                  src={pkg.img} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[var(--color-forest)]">{pkg.name}</h3>
                  <div className="flex items-center gap-1 bg-[var(--color-forest)]/5 px-3 py-1 rounded-full shrink-0">
                    <Star className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    <span className="font-semibold text-[var(--color-forest)]">{pkg.rating}</span>
                    <span className="text-xs text-[var(--color-ink)]/60 ml-1">({pkg.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-xs sm:text-sm text-[var(--color-ink)]/70 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-gold)]" />
                    <span>{destination.name}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--color-ink)]/80 font-light leading-relaxed mb-8">
                  {pkg.desc}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold text-[var(--color-forest)] mb-4">Package Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-ink)]/80 font-light text-sm sm:text-base">
                        <Check className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-6 border-t border-[var(--color-sand)]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-xs text-[var(--color-ink)]/50 uppercase tracking-wider">Pricing available upon request</p>
                  <Link 
                    to={`/book/${pkg.id}`}
                    className="w-full sm:w-auto bg-[var(--color-forest)] text-white px-6 sm:px-8 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-[var(--color-gold)] transition-colors duration-300 flex items-center justify-center gap-2 shrink-0"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
