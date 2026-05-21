

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function CultureSection() {
  return (
    <section
      id="culture"
      className="bg-gradient-to-b from-warm-brown/5 to-beige/10 section-spacing overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <SectionHeading
          title="The Brokpa Tribe"
          subtitle="Guardians of Ancient Himalayan Culture"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Main Description */}
            <div className="space-y-6">

              <p className="text-lg leading-8 text-stone-grey">
                The Brokpa community of Aryan Valley is one of the most unique
                and culturally preserved Indo-Aryan tribes in the Himalayas.
                Their centuries-old traditions, vibrant floral headdresses,
                handcrafted attire, and deep spiritual connection to nature
                continue to define their extraordinary identity.
              </p>

              <p className="text-lg leading-8 text-stone-grey">
                Living amidst the breathtaking mountains of Ladakh, the Brokpa
                people maintain a harmonious lifestyle rooted in organic farming,
                hospitality, celebration, and ancestral wisdom passed through
                generations.
              </p>

              <p className="text-lg leading-8 text-stone-grey">
                At Aryan Valley Camp, guests are invited to experience this rich
                heritage through authentic cultural interactions, traditional
                celebrations, local cuisine, and immersive village experiences.
              </p>

            </div>

            {/* Cultural Cards */}
            <div className="grid grid-cols-2 gap-5 pt-4">

              {[
                {
                  title: 'Traditional Attire',
                  emoji: '👗',
                },
                {
                  title: 'Floral Headdress',
                  emoji: '🌸',
                },
                {
                  title: 'Ancient Customs',
                  emoji: '🏛️',
                },
                {
                  title: 'Organic Farming',
                  emoji: '🌾',
                },
              ].map((item, idx) => (

                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="
                    bg-off-white
                    border
                    border-light-taupe/40
                    rounded-2xl
                    p-5
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >

                  <div className="text-4xl mb-3">
                    {item.emoji}
                  </div>

                  <h4 className="text-base font-semibold text-warm-brown">
                    {item.title}
                  </h4>

                </motion.div>

              ))}

            </div>

            {/* Quote */}
            <div
              className="
                border-l-4
                border-warm-brown
                pl-6
                pt-2
              "
            >
              <p className="italic text-lg text-stone-grey leading-8">
                “At Aryan Valley Camp, we honor the living traditions of the
                Brokpa people by creating authentic cultural experiences that
                connect travelers with the soul of the Himalayas.”
              </p>
            </div>

          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >

            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                rounded-2xl
                overflow-hidden
                shadow-xl
                h-[450px]
              "
            >
              <img
                src="/culture1.jpeg"
                alt="Brokpa Culture"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-700
                "
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                rounded-2xl
                overflow-hidden
                shadow-xl
                h-[450px]
              "
            >
              <img
                src="/culture2.jpg"
                alt="Traditional Dance"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-700
                "
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                rounded-2xl
                overflow-hidden
                shadow-xl
                h-[450px]
              "
            >
              <img
                src="/culture3.jpg"
                alt="Local Community"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-700
                "
              />
            </motion.div>

            {/* Image 4 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                rounded-2xl
                overflow-hidden
                shadow-xl
                h-[450px]
              "
            >
              <img
                src="/culture4.jpeg"
                alt="Village Life"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-700
                "
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}



