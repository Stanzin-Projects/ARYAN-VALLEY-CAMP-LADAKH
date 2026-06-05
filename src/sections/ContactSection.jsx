import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import EnquiryForm from '../components/EnquiryForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-off-white section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="Plan your journey to Aryan Valley Camp"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0"
              >
                <MapPin size={24} className="text-warm-brown" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-warm-brown mb-2">Location</h4>
                <p className="text-stone-grey text-sm">
                  Dah-Hanu Region<br />
                  Aryan Valley, Ladakh<br />
                  India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0"
              >
                <Phone size={24} className="text-warm-brown" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-warm-brown mb-2">Phone</h4>
                <a
                  href="tel:+919876543210"
                  className="text-stone-grey text-sm hover:text-warm-brown transition-colors"
                >
                  +91 7051298463
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0"
              >
                <Mail size={24} className="text-warm-brown" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-warm-brown mb-2">Email</h4>
                <a
                  href="mailto:thearyanvalleycamp@gmail.com"
                  className="text-stone-grey text-sm hover:text-warm-brown transition-colors"
                >
                  thearyanvalleycamp@gmail.com
                </a>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0"
              >
                <Clock size={24} className="text-warm-brown" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-warm-brown mb-2">Best Time to Visit</h4>
                <p className="text-stone-grey text-sm">
                  April - September<br />
                  Year-round for experienced travelers
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/917051298463"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-green-500 text-off-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.14 7.59l-2.275 6.821 6.986-2.302c2.15 1.161 4.576 1.777 7.086 1.777 5.386 0 9.807-4.411 9.837-9.798 0-2.624-.674-5.095-1.951-7.262-1.277-2.167-3.084-4.062-5.288-5.36-2.203-1.299-4.712-2.012-7.338-2.012zm0 0" />
              </svg>
              Chat on WhatsApp
            </motion.a>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-12 border-t border-light-taupe">
              {/* Owner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src="/owner.png"
                    alt="Phunchok Dorje"
                    className="w-32 h-32 rounded-full object-cover border-4 border-warm-brown/20 shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-warm-brown mb-1">Phunchok Dorje</h4>
                <p className="text-stone-grey text-sm mb-4">Owner</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={18} className="text-warm-brown" />
                    <a
                      href="tel:+919419178890"
                      className="text-stone-grey text-sm hover:text-warm-brown transition-colors"
                    >
                      +91 9419178890
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={18} className="text-warm-brown" />
                    <a
                      href="tel:+919906122573"
                      className="text-stone-grey text-sm hover:text-warm-brown transition-colors"
                    >
                      +91 9906122573
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Manager */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src="/khas%20pic.png"
                    alt="Stanzin Khasdup"
                    className="w-32 h-32 rounded-full object-cover border-4 border-warm-brown/20 shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-warm-brown mb-1">Stanzin Khasdup</h4>
                <p className="text-stone-grey text-sm mb-4">Manager - Operations & Bookings</p>
                <div className="flex items-center justify-center gap-2">
                  <Phone size={18} className="text-warm-brown" />
                  <a
                    href="tel:+917051298463"
                    className="text-stone-grey text-sm hover:text-warm-brown transition-colors"
                  >
                    +91 7051298463
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <EnquiryForm />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 space-y-4"
        >
          {/* View on Google Maps Button */}
          <div className="flex justify-end">
            <motion.a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyBwgDECEYjwLSAQg2ODU2ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kb9yFThd0_w4McbMYaUnzotY&daddr=JG43%2BR29,+Village+Beema+Lastyang,+Dah,+Ladakh+194106"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-warm-brown text-off-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-brown transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              View on Google Maps
            </motion.a>
          </div>

          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Aryan Valley Camp Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.6534849263!2d76.99347!3d34.387436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdefbb0000000%3A0x0!2sAryan%20Valley%2C%20Ladakh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
