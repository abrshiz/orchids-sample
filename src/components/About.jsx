import { motion } from 'framer-motion';
import { Flame, Award, Users, Heart } from 'lucide-react';

const pillars = [
  {
    icon: <Flame size={22} className="text-[#c8a96e]" />,
    title: 'Passionate Cooking',
    desc: 'Every dish is made with fire, love and relentless attention to flavor. We don\'t just cook — we create.',
  },
  {
    icon: <Award size={22} className="text-[#c8a96e]" />,
    title: 'Premium Quality',
    desc: 'Fresh ingredients sourced daily. No shortcuts, no compromises. Your taste deserves the best.',
  },
  {
    icon: <Users size={22} className="text-[#c8a96e]" />,
    title: 'Comfortable Space',
    desc: 'Sink into our plush sofa seating and enjoy your meal in an ambiance that feels like home — but better.',
  },
  {
    icon: <Heart size={22} className="text-[#c8a96e]" />,
    title: 'Fast & Friendly',
    desc: 'Because hunger doesn\'t wait. Rapid service without ever sacrificing the quality you deserve.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,169,110,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c8a96e]" />
              <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase font-medium">Our Story</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black text-white mb-6 leading-none"
              style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '0.02em' }}
            >
              WE DON'T JUST
              <br />
              SERVE FOOD.
              <br />
              <span className="gold-text">WE SERVE MOMENTS.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-lg">
              Mak Pizza & Burger was born from a simple obsession: creating food so good that every bite becomes a memory.
              From our handcrafted pizzas to our legendary smash burgers and authentic shawarma — each item is a love letter to bold, unapologetic flavor.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              We built more than a restaurant. We built a place where you belong — with premium sofa seating, warm lighting and food that hits different every single time.
            </p>

            <div className="flex gap-10 mt-10">
              {[
                { value: '3+', label: 'Years Serving' },
                { value: '10K+', label: 'Happy Customers' },
                { value: '50+', label: 'Menu Items' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[#c8a96e] font-black text-3xl" style={{ fontFamily: 'Bebas Neue, cursive' }}>{s.value}</p>
                  <p className="text-gray-500 text-xs tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass card-glow rounded-2xl p-6"
                style={{ border: '1px solid rgba(200,169,110,0.12)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.2)' }}>
                  {p.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
