import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import FacilitiesCard from '../components/FacilitiesCard';
import { facilities } from '../data/content';

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="section-spacing bg-[#f7efe7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {facilities.map((facility) => (
            <FacilitiesCard
              key={facility.id}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[32px] border border-light-taupe/70 bg-white/80 p-8 text-center shadow-[0_20px_45px_-20px_rgba(93,80,67,0.25)] backdrop-blur-sm"
        >
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-grey">
            Located in one of the world's coldest regions, our camp is equipped with essential amenities to ensure your safety, comfort, and well-being. From hot water facilities to comprehensive first aid, we've got you covered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
