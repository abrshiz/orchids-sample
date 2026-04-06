import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star } from 'lucide-react';

const categories = ['All', 'Pizza', 'Burgers', 'Shawarma', 'Sides', 'Drinks'];

const menuItems = [
  // Pizza
  { id: 1, name: 'Signature MAK Pizza', category: 'Pizza', price: '₹249', emoji: '🍕', tag: 'Bestseller', stars: 5, desc: 'Our legendary pizza with premium toppings, house sauce & fresh mozzarella, wood-fired to perfection.' },
  { id: 2, name: 'Spicy Pepperoni', category: 'Pizza', price: '₹279', emoji: '🍕', tag: 'Hot', stars: 5, desc: 'Double pepperoni, jalapeño, fire sauce & smoked cheese — built for the bold.' },
  { id: 3, name: 'Truffle Mushroom', category: 'Pizza', price: '₹299', emoji: '🍕', tag: 'Premium', stars: 4, desc: 'White truffle cream base, sautéed mushrooms, parmesan shavings & fresh herbs.' },
  { id: 4, name: 'BBQ Chicken Supreme', category: 'Pizza', price: '₹269', emoji: '🍕', tag: null, stars: 4, desc: 'Smoky BBQ base, grilled chicken, caramelized onions, cheddar & cilantro.' },
  // Burgers
  { id: 5, name: 'MAK Classic Smash', category: 'Burgers', price: '₹199', emoji: '🍔', tag: 'Bestseller', stars: 5, desc: 'Double smashed patty, american cheese, secret sauce, pickles & onions — the original hit.' },
  { id: 6, name: 'Crispy Chicken Deluxe', category: 'Burgers', price: '₹219', emoji: '🍔', tag: 'Popular', stars: 5, desc: 'Southern-fried crispy chicken, coleslaw, honey-sriracha drizzle on a brioche bun.' },
  { id: 7, name: 'Black Truffle Beef', category: 'Burgers', price: '₹299', emoji: '🍔', tag: 'Premium', stars: 4, desc: 'Premium beef patty, black truffle mayo, caramelized onions & aged cheddar.' },
  { id: 8, name: 'Mushroom Swiss', category: 'Burgers', price: '₹229', emoji: '🍔', tag: null, stars: 4, desc: 'Beef patty, sautéed mushrooms, swiss cheese & garlic aioli on a toasted sesame bun.' },
  // Shawarma
  { id: 9, name: 'Classic Chicken Shawarma', category: 'Shawarma', price: '₹159', emoji: '🌯', tag: 'Fan Favorite', stars: 5, desc: 'Slow-roasted spiced chicken, garlic sauce, pickled veggies in a fresh warm wrap.' },
  { id: 10, name: 'Spicy Lamb Shawarma', category: 'Shawarma', price: '₹189', emoji: '🌯', tag: 'Hot', stars: 5, desc: 'Marinated lamb with harissa, sumac onions, tahini & fresh parsley.' },
  { id: 11, name: 'Shawarma Platter', category: 'Shawarma', price: '₹349', emoji: '🌯', tag: 'Sharing', stars: 5, desc: 'Mixed chicken & lamb shawarma with pita, garlic sauce, pickles & fresh salad.' },
  // Sides
  { id: 12, name: 'MAK Loaded Fries', category: 'Sides', price: '₹129', emoji: '🍟', tag: 'Must Try', stars: 5, desc: 'Crispy fries loaded with cheese sauce, jalapeño, spring onion & signature seasoning.' },
  { id: 13, name: 'Onion Rings', category: 'Sides', price: '₹99', emoji: '🧅', tag: null, stars: 4, desc: 'Golden beer-battered onion rings served with chipotle dipping sauce.' },
  // Drinks
  { id: 14, name: 'Fresh Lemonade', category: 'Drinks', price: '₹79', emoji: '🍋', tag: null, stars: 4, desc: 'Freshly squeezed lemon with a hint of mint, served chilled.' },
  { id: 15, name: 'Mango Lassi', category: 'Drinks', price: '₹89', emoji: '🥭', tag: 'Fresh', stars: 5, desc: 'Thick, creamy mango lassi made with real Alphonso mangoes.' },
];

const tagColors = {
  Bestseller: 'bg-[#c8a96e]/20 text-[#f5d48c] border-[#c8a96e]/30',
  Hot: 'bg-red-500/20 text-red-400 border-red-500/30',
  Premium: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Popular: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Fan Favorite': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Must Try': 'bg-green-500/20 text-green-400 border-green-500/30',
  Sharing: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Fresh: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
};

function MenuCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="glass card-glow rounded-2xl p-5 flex flex-col gap-3 cursor-default"
      style={{ border: '1px solid rgba(200,169,110,0.12)' }}
    >
      {/* Emoji & Tag */}
      <div className="flex items-start justify-between">
        <span className="text-5xl">{item.emoji}</span>
        {item.tag && (
          <span className={`text-[10px] px-2.5 py-1 rounded-full border tracking-wider uppercase font-semibold ${tagColors[item.tag] || 'bg-white/10 text-white/60 border-white/10'}`}>
            {item.tag}
          </span>
        )}
      </div>
      {/* Name */}
      <h3 className="text-white font-semibold text-base leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
        {item.name}
      </h3>
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} fill={i < item.stars ? '#c8a96e' : 'transparent'} stroke={i < item.stars ? 'none' : '#555'} />
        ))}
      </div>
      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
      {/* Price & Order */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
        <span className="gold-text font-bold text-lg">{item.price}</span>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="text-xs px-4 py-2 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #c8a96e, #f5d48c)' }}
        >
          Order
        </a>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-28 px-6 relative overflow-hidden">
      {/* Section BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,169,110,0.2), transparent)' }} />

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
            <Flame size={16} className="text-[#c8a96e]" />
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase font-medium">Our Menu</span>
            <Flame size={16} className="text-[#c8a96e]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '0.02em' }}>
            CRAFTED FOR <span className="gold-text">KINGS</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Every item on our menu is a statement. Fresh ingredients, bold flavors, zero compromise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
                active === cat
                  ? 'text-black scale-105'
                  : 'text-gray-400 border border-white/10 hover:border-[#c8a96e]/40 hover:text-[#c8a96e]'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg, #c8a96e, #f5d48c)' } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="sync">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
