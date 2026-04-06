import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = ['Home', 'Menu', 'About', 'Reviews', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-[#c8a96e]/20' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex flex-col cursor-pointer"
          onClick={() => scrollTo('home')}
          whileHover={{ scale: 1.03 }}
        >
          <span className="gold-text font-bold text-xl tracking-[0.2em] uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mak
          </span>
          <span className="text-white text-[10px] tracking-[0.4em] uppercase font-light -mt-1">
            Pizza & Burger
          </span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-gray-400 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-medium transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-black pulse-gold transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c8a96e, #f5d48c)' }}
          >
            <Phone size={15} />
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#c8a96e]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#c8a96e]/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-gray-300 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-medium py-2 border-b border-white/5 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-black"
                style={{ background: 'linear-gradient(135deg, #c8a96e, #f5d48c)' }}
              >
                <Phone size={15} /> Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
