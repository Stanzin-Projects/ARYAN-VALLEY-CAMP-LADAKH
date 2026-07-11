import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function FacilitiesCard({ title, description, icon }) {
  const IconComponent = LucideIcons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[28px] border border-light-taupe/70 bg-white p-7 shadow-[0_20px_45px_-20px_rgba(93,80,67,0.35)] transition-all duration-300 hover:shadow-[0_24px_55px_-18px_rgba(93,80,67,0.45)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-warm-brown via-olive to-warm-brown" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-brown/10 text-warm-brown ring-1 ring-warm-brown/10">
        {IconComponent ? (
          <IconComponent size={24} />
        ) : (
          <span className="text-sm font-semibold">✦</span>
        )}
      </div>

      <h3 className="mb-3 font-serif text-xl font-semibold text-warm-brown">{title}</h3>
      <p className="text-sm leading-7 text-stone-grey">{description}</p>
    </motion.div>
  );
}
