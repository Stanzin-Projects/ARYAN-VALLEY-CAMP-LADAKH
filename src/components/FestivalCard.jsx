import React from 'react';
import { motion } from 'framer-motion';

export default function FestivalCard({ title, season, description, highlight, image, activities }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group rounded-xl overflow-hidden bg-off-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}

        <img
  src="/WhatsApp Image 2025-12-19 at 3.48.38 PM.jpeg"
  alt={title}
  className="
    w-full
    h-full
    object-cover
    group-hover:scale-110
    transition-transform
    duration-500
  "
/>


        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <p className="text-sky-blue text-sm font-semibold mb-2">{season}</p>
          <h3 className="text-2xl font-bold text-off-white font-serif">{title}</h3>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-amber-800 font-semibold text-sm mb-3">{highlight}</p>
        <p className="text-stone-grey text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Activities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {activities?.map((activity, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 bg-beige text-warm-brown text-xs rounded-full font-medium"
            >
              {activity}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          className="text-warm-brown font-semibold text-sm flex items-center gap-2 hover:text-deep-brown transition-colors"
        >
          Discover Festival →
        </motion.button>
      </div>
    </motion.div>
  );
}
