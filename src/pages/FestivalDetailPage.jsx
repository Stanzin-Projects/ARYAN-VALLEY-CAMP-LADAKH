import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { festivals } from '../data/content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function FestivalDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const festival = festivals.find((f) => f.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleContactClick = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!festival) {
    return (
      <div className="min-h-screen bg-off-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-warm-brown mb-4">Festival Not Found</h1>
            <Button
              variant="primary"
              onClick={() => navigate('/#festivals')}
            >
              Back to Festivals
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-off-white text-warm-brown">
      <div className="fixed top-0 left-0 right-0 z-45 h-20 md:h-24 bg-warm-brown/95 backdrop-blur-md"></div>
      <Navbar />

      <main className="pt-24">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="fixed top-20 md:top-24 left-4 md:left-6 z-50 flex items-center gap-2 text-off-white hover:text-beige transition-colors duration-300 font-semibold text-sm md:text-base px-3 py-2 bg-warm-brown/80 hover:bg-warm-brown rounded-lg md:rounded-full backdrop-blur-sm md:backdrop-blur-md md:bg-warm-brown/90"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          <span className="hidden sm:inline">Back</span>
          <span className="sm:hidden">←</span>
        </motion.button>

        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-48 sm:h-64 md:h-96 overflow-hidden mt-16 md:mt-0"
        >
          <img
            src={
              festival.title === 'Cherry Blossom Festival'
                ? '/festival1.jpeg'
                : festival.image
            }
            alt={festival.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

          {/* Title Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-off-white mb-2 md:mb-4 font-serif line-clamp-2 md:line-clamp-none">{festival.title}</h1>
            <p className="text-sm sm:text-lg md:text-xl text-off-white/90 line-clamp-2">{festival.highlight}</p>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          {/* Festival Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {/* Season Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-warm-brown/5 to-olive/5 rounded-xl sm:rounded-2xl border border-light-taupe/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-warm-brown/20 flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="sm:w-5 sm:h-5 text-warm-brown" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-brown">Season</h3>
              </div>
              <p className="text-sm sm:text-base text-stone-grey">{festival.season}</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-warm-brown/5 to-olive/5 rounded-xl sm:rounded-2xl border border-light-taupe/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-warm-brown/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="sm:w-5 sm:h-5 text-warm-brown" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-brown">Location</h3>
              </div>
              <p className="text-sm sm:text-base text-stone-grey">Aryan Valley, Ladakh</p>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-warm-brown/5 to-olive/5 rounded-xl sm:rounded-2xl border border-light-taupe/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-warm-brown/20 flex items-center justify-center flex-shrink-0">
                  <Users size={18} className="sm:w-5 sm:h-5 text-warm-brown" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-brown">Type</h3>
              </div>
              <p className="text-sm sm:text-base text-stone-grey">Cultural Celebration</p>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-brown mb-3 sm:mb-4">About This Festival</h2>
            <p className="text-sm sm:text-base md:text-lg text-stone-grey leading-relaxed mb-4 sm:mb-6">{festival.description}</p>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-brown mb-4 sm:mb-6">Festival Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {festival.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-4 sm:p-6 bg-off-white border-2 border-warm-brown/20 rounded-xl sm:rounded-2xl hover:border-warm-brown/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-warm-brown/10 flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl">
                    ✨
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-warm-brown mb-2">{activity}</h3>
                  <p className="text-xs sm:text-sm text-stone-grey">Experience authentic Himalayan culture and traditions</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-warm-brown/10 to-olive/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-warm-brown/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-warm-brown mb-2 sm:mb-3">Ready to Experience?</h3>
            <p className="text-sm sm:text-base text-stone-grey mb-4 sm:mb-6">
              Book your spot at {festival.title} and immerse yourself in authentic Himalayan culture. Limited spaces available!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="primary"
                onClick={handleContactClick}
              >
                Send Enquiry
              </Button>
              <Button
                variant="secondary"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
