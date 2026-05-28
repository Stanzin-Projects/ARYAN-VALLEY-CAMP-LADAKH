import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  /* Footer Navigation */
  const handleQuickLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
    }
  };

  return (
    <footer className="bg-deep-brown text-off-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <h2 className="text-2xl font-semibold text-warm-brown">
                Aryan Valley Camp
              </h2>
            </div>

            <p className="text-off-white/80 text-sm leading-relaxed">
              Experience authentic Himalayan culture beside the Indus River.
              Premium riverside camping with genuine Brokpa tribal experiences.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('home');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('about');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('culture');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Culture
                </button>
              </li>

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('experiences');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Experiences
                </button>
              </li>

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('festivals');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Festivals
                </button>
              </li>

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('gallery');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Gallery
                </button>
              </li>

              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickLinkClick('contact');
                  }}
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Contact
                </button>
              </li>

            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex gap-3 items-start">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-1 text-warm-brown"
                />

                <span className="text-off-white/80 leading-relaxed">
                  Dah-Hanu Region,
                  Aryan Valley,
                  Ladakh, India
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone
                  size={18}
                  className="text-warm-brown flex-shrink-0"
                />

                <a
                  href="tel:+919419178890"
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                  "
                >
                  +91 9419178890, 
                  +91 7051298463
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail
                  size={18}
                  className="text-warm-brown flex-shrink-0"
                />

                <a
                  href="mailto:thearyanvalleycamp@gmail.com"
                  className="
                    text-off-white/80
                    hover:text-warm-brown
                    transition-all
                    duration-300
                    break-all
                  "
                >
                  thearyanvalleycamp@gmail.com
                </a>
              </li>

            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border
                  border-white/10
                  ${
                    hoveredIcon === 'instagram'
                      ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 shadow-lg shadow-pink-500/40'
                      : 'bg-white/5'
                  }
                `}
              >
                <FaInstagram
                  size={20}
                  className={`
                    transition-all
                    duration-300
                    ${
                      hoveredIcon === 'instagram'
                        ? 'text-white'
                        : 'text-off-white/80'
                    }
                  `}
                />
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredIcon('facebook')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border
                  border-white/10
                  ${
                    hoveredIcon === 'facebook'
                      ? 'bg-blue-600 shadow-lg shadow-blue-500/40'
                      : 'bg-white/5'
                  }
                `}
              >
                <FaFacebookF
                  size={18}
                  className={`
                    transition-all
                    duration-300
                    ${
                      hoveredIcon === 'facebook'
                        ? 'text-white'
                        : 'text-off-white/80'
                    }
                  `}
                />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/919419178890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredIcon('whatsapp')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border
                  border-white/10
                  ${
                    hoveredIcon === 'whatsapp'
                      ? 'bg-green-500 shadow-lg shadow-green-500/40'
                      : 'bg-white/5'
                  }
                `}
              >
                <FaWhatsapp
                  size={20}
                  className={`
                    transition-all
                    duration-300
                    ${
                      hoveredIcon === 'whatsapp'
                        ? 'text-white'
                        : 'text-off-white/80'
                    }
                  `}
                />
              </motion.a>

            </div>

          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-off-white/10 pt-8 relative z-10">
          <div className="text-center text-sm text-off-white/60">

            <p className="leading-relaxed">
              © 2026 Aryan Valley Camp. All rights reserved.
            </p>

          </div>
        </div>

        {/* Text Hover Effect */}
        <div className="hidden lg:flex h-[32rem] -mt-52 -mb-36 relative z-20">
          <TextHoverEffect
            text="Aryan Valley Camp Ladakh  "
            className="z-50"
          />
        </div>

        {/* Background Gradient */}
        <FooterBackgroundGradient />

      </div>
    </footer>
  );
}