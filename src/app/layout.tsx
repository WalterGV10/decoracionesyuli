import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Iridescence from '@/components/ui/Iridescence';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - Tu Evento Soñado`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.webp?v=2',
    apple: '/favicon.webp?v=2',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - Tu Evento Soñado`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'es_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon.webp`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone.display,
      contactType: 'customer service',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.tiktok,
      SITE_CONFIG.social.facebook,
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  };

  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative text-gray-900">
        <div className="fixed inset-0 w-full h-full opacity-80 pointer-events-none" style={{ zIndex: -1 }}>
          <Iridescence color={[1.0, 0.4, 0.8]} mouseReact speed={1.2} amplitude={0.15} />
        </div>
        <Header />
        <main className="flex-grow flex flex-col relative">
          {children}
        </main>
        <Footer />

        {/* Floating Call Button (Bottom Left) */}
        <a href={`tel:${SITE_CONFIG.phone.raw}`} className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-white/80 backdrop-blur-md border border-pink-200 text-pink-500 hover:text-white hover:bg-pink-400 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(244,114,182,0.4)] transition-all duration-300 transform hover:scale-110 group">
          <Phone className="w-6 h-6 group-hover:animate-pulse" />
        </a>

        {/* Floating WhatsApp Button (Bottom Right) */}
        <a href={SITE_CONFIG.whatsapp.link} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full shadow-[0_4px_20px_rgba(244,114,182,0.4)] hover:shadow-[0_4px_25px_rgba(244,114,182,0.6)] transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </a>

      </body>
    </html>
  );
}
