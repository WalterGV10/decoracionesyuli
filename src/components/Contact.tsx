'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram, Facebook, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

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

export default function Contact() {
  const contactOptions = [
    { 
      icon: Phone, 
      href: `tel:${SITE_CONFIG.phone.raw}`, 
      label: 'Llamar', 
      gradient: 'from-blue-400 to-indigo-500',
      shadow: 'shadow-blue-200'
    },
    { 
      icon: MessageCircle, 
      href: SITE_CONFIG.whatsapp.link, 
      label: 'WhatsApp', 
      gradient: 'from-green-400 to-emerald-600',
      shadow: 'shadow-green-200'
    },
    { 
      icon: Instagram, 
      href: SITE_CONFIG.social.instagram, 
      label: 'Instagram', 
      gradient: 'from-pink-500 via-purple-500 to-orange-400',
      shadow: 'shadow-pink-200'
    },
    { 
      icon: TikTokIcon, 
      href: SITE_CONFIG.social.tiktok, 
      label: 'TikTok', 
      gradient: 'from-gray-800 to-black',
      shadow: 'shadow-gray-300'
    },
    { 
      icon: Facebook, 
      href: SITE_CONFIG.social.facebook, 
      label: 'Facebook', 
      gradient: 'from-blue-500 to-blue-700',
      shadow: 'shadow-blue-300'
    },
    { 
      icon: Mail, 
      href: `mailto:${SITE_CONFIG.email}`, 
      label: 'Email', 
      gradient: 'from-rose-400 to-pink-600',
      shadow: 'shadow-rose-200'
    }
  ];

  return (
    <section id="contacto" className="relative w-full py-24 px-6 flex flex-col items-center justify-center overflow-hidden bg-white/30 backdrop-blur-sm">
      
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-pink-100/50 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-rose-50/50 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-[family-name:var(--font-outfit)] leading-tight mb-4">
            ¿Hablamos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Próximo Evento?</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium tracking-wide font-[family-name:var(--font-inter)]">
            Elige tu canal favorito y hagamos magia juntos.
          </p>
        </motion.div>

        {/* Improved Grid for Mobile and Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 w-full">
          {contactOptions.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1,
                type: 'spring',
                stiffness: 260,
                damping: 20
              }}
              className="flex flex-col items-center gap-4"
            >
              <motion.a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-[2rem] text-white shadow-xl bg-gradient-to-br ${option.gradient} ${option.shadow} group transition-all duration-300 overflow-hidden`}
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-12" />
                
                <option.icon className="w-8 h-8 md:w-10 h-10 drop-shadow-md z-10" />
              </motion.a>
              <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">
                {option.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4 text-center px-6"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 rounded-full" />
          <p className="text-gray-400 text-sm font-medium italic">
            "Tu felicidad es nuestra mejor decoración."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
