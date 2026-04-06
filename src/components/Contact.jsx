import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const info = [
  {
    icon: <MapPin size={20} className="text-[#c8a96e]" />,
    title: 'Find Us',
    lines: ['Main Street, City Centre', 'Near Central Park'],
  },
  {
    icon: <Clock size={20} className="text-[#c8a96e]" />,
    title: 'Hours',
    lines: ['Mon – Thu: 11am – 11pm', 'Fri – Sun: 11am – 1am'],
  },
  {
    icon: <Phone size={20} className="text-[#c8a96e]" />,
    title: 'Call Us',
    lines: ['+1 (234) 567-8900', 'Available during opening hours'],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* BG Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-8 pointer-events-none"
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
            <MapPin size={16} className="text-[#c8a96e]" />
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase font-medium">Visit Us</span>
            <MapPin size={16} className="text-[#c8a96e]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '0.02em' }}>
            COME <span className="gold-text">HUNGRY.</span>
            <br />
            LEAVE <span className="gold-text">HAPPY.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {info.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass card-glow rounded-2xl p-7 flex flex-col gap-4"
              style={{ border: '1px solid rgba(200,169,110,0.12)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.2)' }}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-[#c8a96e] text-xs tracking-widest uppercase font-medium mb-2">{item.title}</h4>
                {item.lines.map((l) => (
                  <p key={l} className="text-gray-300 text-sm leading-relaxed">{l}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Embed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-72 rounded-2xl overflow-hidden mb-10"
          style={{ border: '1px solid rgba(200,169,110,0.15)' }}
        >
          <iframe
            title="MAK Location"
            width="100%"
            height="100%"
            loading="lazy"
            className="grayscale opacity-70"
            style={{ filter: 'grayscale(100%) invert(90%) brightness(0.4) sepia(30%)' }}
            src="https://maps.google.com/maps?q=restaurant&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </motion.div>

        {/* WhatsApp + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-black text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 pulse-gold"
            style={{ background: 'linear-gradient(135deg, #c8a96e, #f5d48c)' }}
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* <Instagram size={18} /> */}
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* <Facebook size={18} /> */}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
