'use client';

import { Network, Facebook, Instagram, MessageCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Bodas', href: '#bodas' },
    { name: 'XV Años', href: '#xv-anos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="#home">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 to-pink-300 flex items-center justify-center shadow-sm">
              <Network className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-widest uppercase font-[family-name:var(--font-outfit)] text-pink-500">
              Yuli
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-white/40 backdrop-blur-md border border-white/20 px-2 py-1.5 rounded-full shadow-sm">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a 
                href={item.href}
                className="relative px-5 py-2 text-sm font-semibold text-gray-700 hover:text-pink-600 transition-all duration-300 rounded-full group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span 
                   className="absolute inset-0 bg-pink-100/50 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"
                   style={{ zIndex: 0 }}
                />
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            {[
              { href: SITE_CONFIG.social.tiktok, icon: <TikTokIcon className="w-5 h-5" /> },
              { href: SITE_CONFIG.social.instagram, icon: <Instagram className="w-5 h-5" /> },
              { href: SITE_CONFIG.social.facebook, icon: <Facebook className="w-5 h-5" /> },
              { 
                href: `https://api.whatsapp.com/send?text=${encodeURIComponent(SITE_CONFIG.whatsapp.shareText)}`, 
                icon: <MessageCircle className="w-5 h-5" />,
                title: "Compartir en WhatsApp"
              }
            ].map((social, i) => (
              <motion.a
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * i + 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-pink-500 hover:text-pink-600 bg-white hover:bg-pink-50 rounded-full transition-all flex items-center justify-center shadow-sm border border-pink-100"
                title={social.title}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Main CTA - Hidden on Mobile */}
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href={`${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.quoteMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-bold shadow-md"
          >
            ¡Escríbenos!
          </motion.a>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-pink-500 hover:bg-pink-50 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-pink-50 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-gray-800 hover:text-pink-500 transition-colors py-2 border-b border-gray-50 last:border-0"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-pink-50">
                <a href={SITE_CONFIG.social.instagram} className="p-3 bg-pink-50 rounded-full text-pink-500"><Instagram className="w-6 h-6" /></a>
                <a href={SITE_CONFIG.whatsapp.link} className="p-3 bg-green-50 rounded-full text-green-500 flex-grow text-center font-bold">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
