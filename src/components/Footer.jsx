import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-off-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 font-serif">
              Aryan Valley
            </h3>

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
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experiences"
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
                >
                  Experiences
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
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
                  className="flex-shrink-0 mt-0.5 text-sky-blue"
                />

                <span className="text-off-white/80">
                  Dah-Hanu Region, Aryan Valley, Ladakh, India
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-sky-blue" />

                <a
                  href="tel:+919876543210"
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-sky-blue" />

                {/* <a
                  href="mailto:info@aryanvalley.com"
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
                >
                  info@aryanvalley.com
                </a> */}

                <a
                   href="mailto:thearyanvalleycamp@gmail.com"
                  className="text-off-white/80 hover:text-sky-blue transition-colors"
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
                className="w-10 h-10 rounded-full bg-off-white/20 flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <FaInstagram size={18} />
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-off-white/20 flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <FaFacebookF size={18} />
              </motion.a>

              {/* Telegram / Send */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-off-white/20 flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <Send size={18} />
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-off-white/20 pt-8">
          <div className="text-center text-sm text-off-white/60">
            <p>
              © 2026 Aryan Valley Camp. All rights reserved.

              {' | '}

              <a
                href="#"
                className="hover:text-sky-blue transition-colors"
              >
                Privacy Policy
              </a>

              {' | '}

              <a
                href="#"
                className="hover:text-sky-blue transition-colors"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}