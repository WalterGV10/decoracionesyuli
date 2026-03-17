import { Facebook, Instagram, MessageCircle } from 'lucide-react';
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

export default function Footer() {
  return (
    <footer className="w-full py-12 relative z-10 border-t border-pink-100 bg-white/50 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-pink-500 mb-4 font-[family-name:var(--font-outfit)]">{SITE_CONFIG.name}</h3>
        
        <p className="text-base text-gray-500 mb-8 font-medium text-center max-w-lg leading-relaxed">
          {SITE_CONFIG.description}
        </p>
        
        {/* Social Links Row */}
        <div className="flex flex-col items-center gap-6">

          <div className="flex flex-wrap items-center justify-center gap-4 transition-all duration-300">
            <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors bg-white/60 hover:bg-pink-50 px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-pink-200">
              <TikTokIcon className="w-5 h-5" />
              <span className="text-lg font-bold font-[family-name:var(--font-outfit)]">ly.decoraciones</span>
            </a>
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors bg-white/60 hover:bg-pink-50 px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-pink-200">
              <Instagram className="w-5 h-5" />
              <span className="text-lg font-bold font-[family-name:var(--font-outfit)]">ly.decoraciones</span>
            </a>
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors bg-white/60 hover:bg-pink-50 px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-pink-200">
              <Facebook className="w-5 h-5" />
              <span className="text-lg font-bold font-[family-name:var(--font-outfit)]">Yuli Duarte</span>
            </a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(SITE_CONFIG.whatsapp.shareText)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors bg-white/60 hover:bg-pink-50 px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-pink-200">
              <MessageCircle className="w-5 h-5" />
              <span className="text-lg font-bold font-[family-name:var(--font-outfit)]">Compartir</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
