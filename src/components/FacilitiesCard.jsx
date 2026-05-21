import React from 'react';
import { motion } from 'framer-motion';

export default function FacilitiesCard({ title, description, icon, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group rounded-lg overflow-hidden bg-off-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="absolute top-4 right-4 text-4xl">{icon}</div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-warm-brown mb-3 font-serif">{title}</h3>
        <p className="text-stone-grey text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
