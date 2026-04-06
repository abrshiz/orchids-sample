import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'rgba(200,169,110,0.1)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Flame size={16} className="text-[#c8a96e]" />
          <span className="gold-text font-bold tracking-[0.2em] uppercase text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mak Pizza & Burger
          </span>
        </div>
        <p className="text-gray-600 text-xs text-center">
          © {new Date().getFullYear()} Mak Pizza & Burger. All rights reserved. Crafted with passion.
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map((l) => (
            <a key={l} href="#" className="text-gray-600 hover:text-[#c8a96e] text-xs tracking-wider uppercase transition-colors duration-300">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
