import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import Button from '../components/Button';
import { smoothScroll } from '../utils/helpers';

export default function HeroSection() {

  const handleCTA = (action) => {
    if (action === 'enquiry') {
      smoothScroll('contact');
    } else {
      smoothScroll('experiences');
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="/WhatsApp Video 2026-04-09 at 7.32.23 PM.webm"
            type="video/webm"
          />
        </video>

      {/* Dark Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          inset-0
          z-0
          bg-gradient-to-b
          from-black/60
          via-black/50
          to-black/70
        "
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="
          relative
          z-10
          text-center
          px-4
          pt-20
          max-w-5xl
          mx-auto
        "
      >

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            text-sky-blue
            uppercase
            tracking-widest
            text-sm
            font-semibold
            mb-6
          "
        >
          Experience Authentic Himalayan Culture
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            heading-xl
            text-off-white
            mb-6
            font-serif
            leading-tight
          "
        >
          Experience the Hidden Aryan Valley of Ladakh 
         
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="
            text-xl
            md:text-2xl
            text-off-white/90
            mb-12
            leading-relaxed
            max-w-3xl
            mx-auto
            font-light
          "
        >
           <span className="text-warm-brown font-medium tracking-wide">
           Hosted by 
           <span className="font-bold">
           {' '}Aryan Valley Camp |Lasthiang|  Since 2012 
          </span>
         </span>
          <br />
          Stay beside the Indus River and discover the timeless
          culture of the Brokpa tribe
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="
            flex
            flex-col
            md:flex-row
            gap-6
            justify-center
            items-center
          "
        >

          <Button
            onClick={() => handleCTA('enquiry')}
            variant="primary"
            size="lg"
            className="md:w-auto"
          >
            Send Enquiry
          </Button>

          <Button
            onClick={() => handleCTA('explore')}
            variant="secondary"
            size="lg"
            className="md:w-auto"
          >
            Explore Experiences
          </Button>

        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        onClick={() => smoothScroll('about')}
        className="
          absolute
          bottom-8
          left-1/2
          transform
          -translate-x-1/2
          z-10
          flex
          flex-col
          items-center
          gap-2
          text-off-white
          hover:text-sky-blue
          transition-colors
          cursor-pointer
        "
      >
        <p className="text-sm font-light">
          Scroll to explore
        </p>

        <ChevronDown size={24} />
      </motion.button>

    </section>
  );
}