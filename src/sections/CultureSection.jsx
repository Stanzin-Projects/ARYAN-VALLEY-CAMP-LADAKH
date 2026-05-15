import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function CultureSection() {
  return (
    <section id="culture" className="bg-gradient-to-b from-warm-brown/5 to-beige/10 section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="The Brokpa Tribe"
          subtitle="Guardians of Ancient Himalayan Culture"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-stone-grey leading-relaxed">
                The Brokpa are a distinct Indo-Aryan community with a rich heritage spanning centuries. Known for their distinctive floral headdresses, intricate traditional attire, and deep connection to the land, the Brokpa represent a living link to an ancient way of life.
              </p>

              <p className="text-lg text-stone-grey leading-relaxed">
                Their customs blend spirituality, organic farming, and hospitality in a harmonious balance that has been preserved through generations.
              </p>

              {/* Cultural Elements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: 'Traditional Attire', emoji: '👗' },
                  { title: 'Floral Headdress', emoji: '🌸' },
                  { title: 'Ancient Customs', emoji: '🏛️' },
                  { title: 'Organic Farming', emoji: '🌾' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-off-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <p className="text-sm font-semibold text-warm-brown">{item.title}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-lg text-stone-grey leading-relaxed italic pt-4 border-t border-light-taupe">
                "At Aryan Valley Camp, we celebrate and honor their culture through authentic experiences and genuine community interaction."
              </p>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1539702/pexels-photo-1539702.jpeg"
                alt="Brokpa Culture"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29303176/pexels-photo-29303176.jpeg"
                alt="Traditional Dance"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/878846/pexels-photo-878846.jpeg"
                alt="Local Community"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4938550/pexels-photo-4938550.jpeg"
                alt="Village Life"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
