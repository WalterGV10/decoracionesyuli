'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '@/types/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
        {items.map((item, index) => {
          // Detect orientation if not provided or to verify
          const isVertical = item.orientation === 'vertical' || (item.height && item.width && item.height > item.width);
          const isHorizontal = item.orientation === 'horizontal' || (item.height && item.width && item.width > item.height);
          
          let gridSpanClasses = 'col-span-1 row-span-1';
          
          if (isVertical) {
            gridSpanClasses = 'col-span-1 row-span-2'; 
          } else if (isHorizontal) {
            gridSpanClasses = 'col-span-2 row-span-1'; 
          }

          return (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group overflow-hidden rounded-3xl bg-pink-50 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${gridSpanClasses}`}
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 4}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1 leading-tight drop-shadow-md">{item.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-pink-500 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-[101] backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              layoutId={items.find(img => img.imageUrl === selectedImage)?.id ? `card-${items.find(img => img.imageUrl === selectedImage)?.id}` : undefined}
              className="relative w-full max-w-5xl max-h-[90vh] z-[100]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Imagen expandida"
                width={1400}
                height={1400}
                className="object-contain max-h-[90vh] w-auto mx-auto rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
