import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Users, MessageSquare, ArrowLeft, CheckCircle2 } from 'lucide-react';

// We'll reuse the data structure here for simplicity, in a real app this would come from an API or context
const packagesData: Record<string, any> = {
  "dubai-luxury": { name: "Dubai Luxury Escape", destination: "Dubai", duration: "5 Days / 4 Nights" },
  "dubai-adventure": { name: "Dubai Thrill Seeker", destination: "Dubai", duration: "4 Days / 3 Nights" },
  "swiss-alps": { name: "Alpine Wonders", destination: "Switzerland", duration: "7 Days / 6 Nights" },
  "swiss-romance": { name: "Romantic Switzerland", destination: "Switzerland", duration: "6 Days / 5 Nights" },
  "turkey-classic": { name: "Classic Turkey", destination: "Turkey", duration: "8 Days / 7 Nights" },
  "maldives-honeymoon": { name: "Romantic Maldives Retreat", destination: "Maldives", duration: "6 Days / 5 Nights" },
  "bali-culture": { name: "Bali Cultural Immersion", destination: "Bali", duration: "7 Days / 6 Nights" },
  "paris-romance": { name: "Parisian Romance", destination: "Paris", duration: "5 Days / 4 Nights" },
  "japan-golden": { name: "Golden Route Japan", destination: "Japan", duration: "10 Days / 9 Nights" },
  "italy-grand": { name: "Grand Tour of Italy", destination: "Italy", duration: "12 Days / 11 Nights" }
};

export default function Booking() {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packageId ? packagesData[packageId] : null;
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2',
    requirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-paper)]">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-[var(--color-forest)] mb-4">Package Not Found</h1>
          <Link to="/destinations" className="text-[var(--color-gold)] hover:underline">Return to Destinations</Link>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[var(--color-paper)] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-sm border border-[var(--color-sand)]/20 max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 bg-[var(--color-forest)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-[var(--color-forest)]" />
          </div>
          <h2 className="text-4xl font-serif text-[var(--color-forest)] mb-4">Quote Request Received</h2>
          <p className="text-[var(--color-ink)]/70 font-light text-lg mb-8">
            Thank you for your interest in the <strong>{pkg.name}</strong> package. Our travel experts are reviewing your requirements and will get back to you with a customized quote within 24 hours.
          </p>
          <Link 
            to="/"
            className="inline-block bg-[var(--color-forest)] text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-[var(--color-gold)] transition-colors duration-300"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-paper)] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to={`/destinations/${pkg.destination.toLowerCase()}`} className="inline-flex items-center gap-2 text-[var(--color-ink)]/60 hover:text-[var(--color-forest)] transition-colors mb-8 text-sm uppercase tracking-wider font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to {pkg.destination}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] mb-4">Request a Quote</h1>
          <p className="text-[var(--color-ink)]/70 font-light text-lg">
            You are requesting a quote for the <strong className="text-[var(--color-forest)]">{pkg.name}</strong> ({pkg.duration}). Fill out the details below and we'll craft the perfect itinerary for you.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--color-sand)]/20"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-[var(--color-forest)] mb-6 border-b border-[var(--color-sand)]/20 pb-2">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Travel Details */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-[var(--color-forest)] mb-6 border-b border-[var(--color-sand)]/20 pb-2">Travel Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Preferred Travel Date
                  </label>
                  <input 
                    type="date" 
                    name="travelDate"
                    required
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Number of Travelers
                  </label>
                  <select 
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-ink)]/70 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Special Requirements / Customizations
                  </label>
                  <textarea 
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Tell us about any specific hotels, activities, dietary requirements, or special occasions..."
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-sand)]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="w-full bg-[var(--color-forest)] text-white py-4 rounded-xl uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-gold)] transition-colors duration-300"
              >
                Send Quote Request
              </button>
              <p className="text-center text-xs text-[var(--color-ink)]/50 mt-4">
                No payment required. We will send you a customized itinerary and pricing.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
