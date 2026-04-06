import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed R.',
    avatar: '👨‍💼',
    stars: 5,
    date: '2 weeks ago',
    text: 'Best pizza I\'ve had in this city, hands down. The crust is perfect and the toppings are generous. MAK never disappoints — been coming here for a year now!',
    tag: 'Pizza Lover',
  },
  {
    name: 'Sarah M.',
    avatar: '👩‍🦱',
    stars: 5,
    date: '1 month ago',
    text: 'The shawarma here is absolutely incredible. Juicy, perfectly spiced and the garlic sauce is addictive. Came for the first time and already planning my next visit.',
    tag: 'Shawarma Fan',
  },
  {
    name: 'Raj K.',
    avatar: '👨‍🍳',
    stars: 5,
    date: '3 weeks ago',
    text: 'Smash burger is a MUST. Crispy edges, melted cheese, secret sauce — it\'s all there. Fast service, cozy vibes. This place has soul.',
    tag: 'Burger Head',
  },
  {
    name: 'Fatima A.',
    avatar: '👩‍💻',
    stars: 5,
    date: '5 days ago',
    text: 'Came with family and we ordered everything from pizza to shawarma to fries. Everyone was blown away. The sofa seating is so comfortable too — we stayed for hours!',
    tag: 'Family Visit',
  },
  {
    name: 'Omar H.',
    avatar: '🧑‍🎓',
    stars: 5,
    date: '2 months ago',
    text: 'Late night craving hit and MAK delivered. Fast, hot, absolutely delicious. The loaded fries alone are worth the trip. Top tier comfort food.',
    tag: 'Night Owl',
  },
  {
    name: 'Priya N.',
    avatar: '👩‍🦰',
    stars: 4,
    date: '1 week ago',
    text: 'Great flavors and generous portions. The BBQ chicken pizza is a standout. Service is super quick — food arrived in under 15 minutes. Will definitely come back!',
    tag: 'Regular Customer',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,169,110,0.6), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <Star size={16} fill="#c8a96e" stroke="none" />
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase font-medium">Reviews</span>
            <Star size={16} fill="#c8a96e" stroke="none" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '0.02em' }}>
            WHAT PEOPLE <span className="gold-text">SAY</span>
          </h2>

          {/* Rating Bar */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="#c8a96e" stroke="none" />
              ))}
            </div>
            <span className="text-[#c8a96e] font-bold text-2xl">4.8</span>
            <span className="text-gray-500 text-sm">/ 5 based on 500+ reviews</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass card-glow rounded-2xl p-6 flex flex-col gap-4 relative"
              style={{ border: '1px solid rgba(200,169,110,0.1)' }}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[#c8a96e] opacity-30 absolute top-5 right-5" />
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={13} fill="#c8a96e" stroke="none" />
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{r.text}"</p>
              {/* Author */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.avatar}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{r.name}</p>
                    <p className="text-gray-600 text-xs">{r.date}</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/20 tracking-wider">
                  {r.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
