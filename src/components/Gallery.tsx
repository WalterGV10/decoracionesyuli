import React from 'react';
import galleryData from '@/data/gallery.json';
import GalleryGrid from './gallery/GalleryGrid';
import { GalleryItem } from '@/types/gallery';
export default function Gallery() {
  const items = galleryData as GalleryItem[];

  return (
    <section id="galeria" className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-outfit)] mb-4">
          Nuestra Galería Mágica
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)] mb-12">
          Explora algunos de nuestros eventos pasados y descubre cómo transformamos cada espacio en una experiencia inolvidable.
        </p>
      </div>

      <GalleryGrid items={items} />
    </section>
  );
}
