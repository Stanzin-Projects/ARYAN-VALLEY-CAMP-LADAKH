import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function ExperienceCard({ title, description, image, icon }) {
  // Get the icon component from lucide-react
  const IconComponent = LucideIcons[icon];

  const isVideo = image && /\.(mp4|webm|ogg)$/i.test(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group rounded-lg overflow-hidden bg-off-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Media Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        {isVideo ? (
          <video
            src={image}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        {IconComponent && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0"
          >
            <IconComponent size={24} className="text-warm-brown" />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-warm-brown mb-3 font-serif">{title}</h3>
        <p className="text-stone-grey text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </motion.div>
  );
}
