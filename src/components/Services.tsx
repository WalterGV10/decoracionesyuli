import { 
  Balloon, 
  Flower2, 
  PartyPopper, 
  Gift, 
  Armchair, 
  Candy 
} from 'lucide-react';
import { ServiceCard } from './services/ServiceCard';

const SERVICES_DATA = [
  {
    title: "Decoración con Globos",
    description: "Arcos orgánicos, bouquets personalizados y estructuras temáticas que llenan de color tu evento.",
    icon: Balloon
  },
  {
    title: "Floristería Premium",
    description: "Arreglos con flores naturales y preservadas, diseñados para transmitir elegancia y amor.",
    icon: Flower2
  },
  {
    title: "Eventos Especiales",
    description: "Bodas, XV Años y Baby Showers. Nos encargamos de que cada detalle cuente una historia.",
    icon: PartyPopper
  },
  {
    title: "Detalles y Sorpresas",
    description: "Fresas con chocolate, cajitas personalizadas y combos sorpresa para regalar momentos inolvidables.",
    icon: Gift
  },
  {
    title: "Mobiliario y Alquiler",
    description: "Sillas, mesas y equipo de alta calidad para que tus invitados disfruten con total comodidad.",
    icon: Armchair
  },
  {
    title: "Mesas de Dulces",
    description: "Candy bars temáticos y estaciones de postres que deleitarán la vista y el paladar.",
    icon: Candy
  }
];

export default function Services() {
  return (
    <section id="servicios" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-outfit)] mb-4">
          Nuestros Servicios Mágicos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)] leading-relaxed">
          Todo lo que necesitas para que tu celebración sea perfecta, desde el primer globo hasta el último pétalo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </section>
  );
}
