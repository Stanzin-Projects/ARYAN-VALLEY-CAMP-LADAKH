import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryCategories } from '../data/content';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(1);

  const currentImages = galleryCategories.find((cat) => cat.id === activeCategory)?.images || [];

  return (
    <section id="gallery" className="bg-off-white section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Gallery"
          subtitle="Visual stories from Aryan Valley Camp"
          className="mb-12"
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {galleryCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-warm-brown text-off-white shadow-lg'
                  : 'bg-light-taupe text-warm-brown hover:bg-beige'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          key={activeCategory}
        >
          <GalleryGrid images={currentImages} />
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-warm-brown/5 to-olive/5 rounded-lg border border-light-taupe text-center"
        >
          <p className="text-stone-grey text-sm mb-4">
            All images shared with the consent of community members and visitors. 
            We practice ethical and respectful photography.
          </p>
       <p className="text-warm-brown font-semibold">
  Have photos from your visit? Share with us :{' '}

  <a
    href="mailto:thearyanvalleycamp@gmail.com"
    className="
      text-stone-grey
      text-sm
      hover:text-warm-brown
      transition-colors
    "
  >
    thearyanvalleycamp@gmail.com 
  </a>
</p>
        </motion.div>
      </div>
    </section>
  );
}
