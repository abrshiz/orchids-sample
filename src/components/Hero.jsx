import { motion } from 'framer-motion';
import { ChevronDown, Star, Flame, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,169,110,0.12) 0%, transparent 60%), #0a0a0a',
      }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #c8a96e, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #f5d48c, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Flame size={14} className="text-[#c8a96e]" />
          <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase font-medium">
            Premium Street Food Experience
          </span>
          <Flame size={14} className="text-[#c8a96e]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tight"
          style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '-0.02em' }}
        >
          <span className="text-white">LUXURY</span>
          <br />
          <span className="shimmer-text">TASTE.</span>
          <br />
          <span className="text-white opacity-90">STREET SOUL.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
        >
          Where every bite tells a story. Handcrafted pizzas, premium burgers &
          authentic shawarma — made with passion, served with pride.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { icon: <Star size={16} fill="#c8a96e" stroke="none" />, value: '4.8★', label: 'Rating' },
            { icon: <Clock size={16} className="text-[#c8a96e]" />, value: '15 min', label: 'Fast Service' },
            { icon: <Flame size={16} className="text-[#c8a96e]" />, value: '50+', label: 'Menu Items' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                {s.icon}
                <span className="text-[#c8a96e] font-bold text-lg">{s.value}</span>
              </div>
              <span className="text-gray-500 text-xs tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 rounded-full font-semibold text-black text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl pulse-gold"
            style={{ background: 'linear-gradient(135deg, #c8a96e, #f5d48c)' }}
          >
            Explore Menu
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-[#c8a96e] text-sm tracking-widest uppercase border border-[#c8a96e]/40 transition-all duration-300 hover:bg-[#c8a96e]/10 hover:border-[#c8a96e]"
          >
            Order via WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Food Emoji Floaters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🍕', '🍔', '🌯', '🍟', '🧀'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToMenu}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-[#c8a96e] transition-colors duration-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
