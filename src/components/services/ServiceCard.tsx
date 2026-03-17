import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const ServiceCard = ({ title, description, icon: Icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-pink-400 flex items-center justify-center mb-6 shadow-lg shadow-pink-200 group-hover:rotate-6 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-outfit)]">{title}</h3>
      <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-inter)] text-sm">{description}</p>
    </motion.div>
  );
};
