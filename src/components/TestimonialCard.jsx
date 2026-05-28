import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCard({ name, from, content, image, rating }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-off-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-sky-blue text-sky-blue" />
        ))}
      </div>

      {/* Content */}
      <p className="text-stone-grey text-sm leading-relaxed mb-6 italic">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-warm-brown">{name}</p>
          <p className="text-stone-grey text-xs">{from}</p>
        </div>
      </div>
    </motion.div>
  );
}