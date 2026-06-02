

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Shirt, Flower, Building2, Leaf } from 'lucide-react';

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
                Aryan Valley in Ladakh is home to the Brokpa people,
                 a unique indigenous community known for their rich cultural heritage, 
                 traditional attire, vibrant festivals, and deep-rooted connection to the 
                 Himalayan landscape. Surrounded by majestic mountains and nourished by the Indus River,
                  the valley offers visitors a rare opportunity to experience one of Ladakh's most distinctive 
                  living cultures.
                  Dha is the cultural heart of the Aryan Valley and one of the most recognized Brokpa settlements.
                   The village is known for preserving traditional customs, language, and the iconic floral headgear
                    worn during festivals and celebrations.


              </p>

              <p className="text-lg leading-8 text-stone-grey">
               Garkhon is a picturesque village famous for its fertile fields, apricot orchards, 
               and traditional stone houses. It provides an authentic glimpse into the agricultural 
               lifestyle and hospitality of the Brokpa community.
                Dartse (Darchik) is among the largest Brokpa settlements, renowned for its scenic beauty, 
                rich traditions, and well-preserved cultural heritage. The village serves as an ideal destination 
                for travelers seeking meaningful cultural experiences amidst the breathtaking landscapes of Ladakh.

              </p>

              <p className="text-lg leading-8 text-stone-grey">
                Together, Dha, Garkhon, and Dartse form the cultural core of Aryan Valley, offering visitors a unique
                 blend of history, tradition, and natural beauty that makes this region one of Ladakh's most fascinating
                  destinations.
              </p>

            </div>

            {/* Cultural Cards */}
            <div className="grid grid-cols-2 gap-5 pt-4">

              {[
                {
                  title: 'Traditional Attire',
                  icon: Shirt,
                },
                {
                  title: 'Floral Headdress',
                  icon: Flower,
                },
                {
                  title: 'Ancient Customs',
                  icon: Building2,
                },
                {
                  title: 'Organic Farming',
                  icon: Leaf,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
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

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0 mb-3"
                    >
                      <IconComponent size={24} className="text-warm-brown" />
                    </motion.div>

                    <h4 className="text-base font-semibold text-warm-brown">
                      {item.title}
                    </h4>

                  </motion.div>
                );
              })}

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
                src="/culture1.jpg"
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
                src="/culture4.jpg"
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



