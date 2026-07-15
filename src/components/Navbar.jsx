import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothScroll } from '../utils/helpers';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    'Home',
    'About',
    'Culture',
    'Experiences',
    'Facilities',
    'Festivals',
    'Gallery',
    'Testimonials',
    'Contact',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    const id = link.toLowerCase();

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        smoothScroll(id);
      }, 100);
    } else {
      smoothScroll(id);
    }

    setIsOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        bg-white/95
        backdrop-blur-xl
        shadow-lg
        border-b
        border-light-taupe
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          lg:px-8
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleNavClick('Home')}
          className="
            cursor-pointer
            flex
            items-center
            mr-8
            flex-shrink-0
          "
        >
          {/* <img
            src="/favicon.svg"
            alt="Aryan Valley Camp Logo"
            className={`
              w-auto
              object-contain
              transition-all
              duration-500
              hover:scale-105
              ${
                scrolled
                  ? 'h-16 md:h-20 lg:h-24'
                  : 'h-20 md:h-24 lg:h-32'
              }
            `}
          /> */}

         <img
  src="/aryan-logo.svg"
  alt="Aryan Valley Camp Logo"
  className={`
    w-auto
    object-contain
    transition-all
    duration-500
    hover:scale-105
    ${
      scrolled
        ? 'h-20 md:h-24 lg:h-28'
        : 'h-24 md:h-28 lg:h-36'
    }
  `}
/>
        </motion.div>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-6
            xl:gap-8
          "
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="
                relative
                text-sm
                font-semibold
                uppercase
                tracking-wide
                whitespace-nowrap
                transition-all
                duration-300
                text-stone-grey
                hover:text-warm-brown
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:transition-all
                after:duration-300
                after:bg-warm-brown
                hover:after:w-full
              "
            >
              {link}
            </button>
          ))}
        </div>

        {/* Tablet Navigation */}
        <div
          className="
            hidden
            md:flex
            lg:hidden
            items-center
            gap-4
            flex-wrap
          "
        >
          {navLinks.slice(0, 4).map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                transition-all
                duration-300
                text-stone-grey
                hover:text-warm-brown
              "
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="
            md:hidden
            transition-colors
            duration-300
            text-warm-brown
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`
          md:hidden
          absolute
          top-full
          left-0
          right-0
          bg-white/95
          backdrop-blur-xl
          border-b
          border-light-taupe
          shadow-xl
          ${isOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="
                text-left
                px-4
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-stone-grey
                hover:bg-beige
                hover:text-warm-brown
                rounded-lg
                transition-all
                duration-300
              "
            >
              {link}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}