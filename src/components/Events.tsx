import { motion } from 'framer-motion';
import GalleryGrid from './gallery/GalleryGrid';
import galleryData from '@/data/gallery.json';
import { GalleryItem } from '@/types/gallery';
import { Heart, Stars } from 'lucide-react';

// Seccion de Bodas
export const WeddingSection = () => {
  const weddingImages = (galleryData as GalleryItem[]).filter(img => img.category === 'Bodas');
  
  return (
    <section id="bodas" className="w-full py-24 px-6 md:px-12 bg-rose-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Heart className="text-pink-400 w-10 h-10 mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-outfit)] mb-4">
            Bodas Inolvidables
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-[family-name:var(--font-inter)]">
            Creamos escenarios de ensueño para el día más importante de tu vida. Elegancia y romance en cada flor.
          </p>
        </div>
        <GalleryGrid items={weddingImages} />
      </div>
    </section>
  );
};

// Seccion de XV Años
export const QuinceaneraSection = () => {
  const quinceImages = (galleryData as GalleryItem[]).filter(img => img.category === 'XV Años' || img.category === 'Cumpleaños');
  
  return (
    <section id="xv-anos" className="w-full py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Stars className="text-pink-400 w-10 h-10 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-outfit)] mb-4">
            XV Años & Fiestas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-[family-name:var(--font-inter)]">
            Tu gran fiesta merece un impacto visual único. Temáticas, globos y mucha magia para celebrar en grande.
          </p>
        </div>
        <GalleryGrid items={quinceImages} />
      </div>
    </section>
  );
};
