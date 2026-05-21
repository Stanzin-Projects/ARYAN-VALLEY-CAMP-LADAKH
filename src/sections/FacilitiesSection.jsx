import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import FacilitiesCard from '../components/FacilitiesCard';
import { facilities } from '../data/content';

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-beige/10 section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="World-Class Facilities"
          subtitle="Every comfort thoughtfully designed for your well-being in the Himalayas"
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility) => (
            <FacilitiesCard
              key={facility.id}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
              image={facility.image}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-warm-brown/5 to-olive/5 rounded-lg border border-light-taupe text-center"
        >
          <p className="text-lg text-stone-grey leading-relaxed max-w-3xl mx-auto">
            Located in one of the world's coldest regions, our camp is equipped with essential amenities to ensure your safety, comfort, and well-being. From hot water facilities to comprehensive first aid, we've got you covered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
