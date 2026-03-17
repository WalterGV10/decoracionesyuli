'use client';

import { ArrowRight, Sparkles } from "lucide-react";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import { WeddingSection, QuinceaneraSection } from "@/components/Events";
import Contact from "@/components/Contact";
import { motion, Variants } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div id="home" className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center py-16">
        
        {/* Elegant Ambient Shapes with Floating Animation */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="blob-1" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="blob-2" 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6"
        >
          <motion.div 
            variants={itemVariants}
            className="group relative mb-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1 blur-lg bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200 opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"
            />
            <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/40 bg-white/40 text-pink-500 text-sm font-semibold tracking-wide backdrop-blur-xl shadow-[0_8px_32px_rgba(244,114,182,0.1)] ring-1 ring-pink-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Descubre la magia en cada detalle
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight font-[family-name:var(--font-outfit)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-400 neon-text drop-shadow-sm"
          >
            {SITE_CONFIG.name.split(' ')[0]} <br className="hidden md:block" /> {SITE_CONFIG.name.split(' ')[1]}.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 font-[family-name:var(--font-inter)] leading-relaxed"
          >
            "{SITE_CONFIG.description.split('.')[0]}". {SITE_CONFIG.description.split('.')[1]}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(244, 114, 182, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href={`${SITE_CONFIG.whatsapp.link}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.quoteMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white border-0 h-14 px-8 text-base font-medium shadow-[0_4px_14px_0_rgba(244,114,182,0.39)] transition-all duration-300 group"
            >
              Cotizar Evento
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(253, 242, 248, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              href="#galeria" 
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-pink-200 text-pink-500 font-medium bg-white/50 h-14 px-8 text-base backdrop-blur-sm transition-all duration-300 shadow-sm"
            >
              Ver Galería
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 🛠️ Sección de Servicios 🛠️ */}
      <Services />

      {/* 📸 Sección de la Galería General 📸 */}
      <Gallery />

      {/* 💍 Secciones Especializadas por Evento 💍 */}
      <WeddingSection />
      <QuinceaneraSection />

      {/* 📧 Sección de Contacto Minimalista 📧 */}
      <Contact />
      
    </main>
  );
}
