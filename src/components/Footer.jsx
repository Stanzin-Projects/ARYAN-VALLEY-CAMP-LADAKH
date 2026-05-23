import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';

import {
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-off-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">

          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold text-warm-brown">Aryan Valley Camp</h2>
            </div>

            <p className="text-off-white/80 text-sm leading-relaxed">
              Experience authentic Himalayan culture beside the Indus River.
              Premium riverside camping with genuine Brokpa tribal experiences.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-off-white/80 hover:text-warm-brown transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-off-white/80 hover:text-warm-brown transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#facilities"
                  className="text-off-white/80 hover:text-warm-brown transition-colors"
                >
                  Facilities
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-off-white/80 hover:text-warm-brown transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-sm">

              <li className="flex gap-3 items-start">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-warm-brown"
                />

                <span className="text-off-white/80">
                  Dah-Hanu Region, Aryan Valley, Ladakh, India
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-warm-brown" />

                <a
                  href="tel:+919419178890"
                  className="text-off-white/80 hover:text-warm-brown transition-colors"
                >
                  +91 9419178890
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-warm-brown" />

                <a
                   href="mailto:thearyanvalleycamp@gmail.com"
                  className="text-off-white/80 hover:text-warm-brown transition-colors"
                >
                thearyanvalleycamp@gmail.com
               </a>
              </li>

            </ul>
          </motion.div>

          {/* Column 4: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 mb-6">

              {/* Instagram */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-warm-brown/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-off-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-warm-brown/20 flex items-center justify-center hover:bg-blue-600 text-off-white transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </motion.a>

              {/* Message */}
              <motion.a
                href="https://wa.me/919419178890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-warm-brown/20 flex items-center justify-center hover:bg-green-500 text-off-white transition-all duration-300"
              >
                <Send size={18} />
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-off-white/20 pt-8 relative z-10">
          <div className="text-center text-sm text-off-white/60">
            <p>
              © 2026 Aryan Valley Camp. All rights reserved.

              {' | '}

              <a
                href="#"
                className="hover:text-warm-brown transition-colors"
              >
                Privacy Policy
              </a>

              {' | '}

              <a
                href="#"
                className="hover:text-warm-brown transition-colors"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>

        {/* Text hover effect */}
        <div className="lg:flex hidden h-[32rem] -mt-52 -mb-36 relative z-20">
          <TextHoverEffect text="Aryan Valley" className="z-50" />
        </div>

        {/* Background gradient */}
        <FooterBackgroundGradient />
      </div>
    </footer>
  );
}