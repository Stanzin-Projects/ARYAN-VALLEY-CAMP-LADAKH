// import React, { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { smoothScroll } from '../utils/helpers';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     'Home',
//     'About',
//     'Culture',
//     'Experiences',
//     'Festivals',
//     'Gallery',
//     'Testimonials',
//     'Contact',
//   ];

//   /* Detect Scroll */
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   /* Navigation Click */
//   const handleNavClick = (link) => {
//     const id = link.toLowerCase();
//     smoothScroll(id);
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`
//         fixed
//         top-0
//         z-50
//         w-full
//         transition-all
//         duration-500
//         ${
//           scrolled
//             ? 'bg-off-white/95 backdrop-blur-xl shadow-lg border-b border-light-taupe'
//             : 'bg-transparent'
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="cursor-pointer flex items-center"
//           onClick={() => handleNavClick('Home')}
//         >
//           <img
//             src="/favicon.svg"
//             alt="Aryan Valley Camp Logo"
//             className="
//               h-20
//               md:h-24
//               lg:h-28
//               w-auto
//               object-contain
//               transition-all
//               duration-500
//               drop-shadow-lg
//               hover:scale-105
//             "
//           />
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10">

//           {navLinks.map((link) => (
//             <button
//               key={link}
//               onClick={() => handleNavClick(link)}
//               className={`
//                 relative
//                 text-sm
//                 lg:text-[15px]
//                 font-semibold
//                 tracking-wide
//                 uppercase
//                 transition-all
//                 duration-300
//                 after:absolute
//                 after:left-0
//                 after:-bottom-1
//                 after:h-[2px]
//                 after:w-0
//                 after:transition-all
//                 after:duration-300
//                 hover:after:w-full
//                 ${
//                   scrolled
//                     ? `
//                       text-stone-grey
//                       hover:text-warm-brown
//                       after:bg-warm-brown
//                     `
//                     : `
//                       text-white
//                       hover:text-beige
//                       after:bg-beige
//                     `
//                 }
//               `}
//             >
//               {link}
//             </button>
//           ))}

//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`
//             md:hidden
//             transition-colors
//             duration-300
//             ${
//               scrolled
//                 ? 'text-warm-brown'
//                 : 'text-white'
//             }
//           `}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{
//           opacity: isOpen ? 1 : 0,
//           y: isOpen ? 0 : -20,
//         }}
//         transition={{ duration: 0.3 }}
//         className={`
//           md:hidden
//           absolute
//           top-full
//           left-0
//           right-0
//           bg-off-white/95
//           backdrop-blur-xl
//           border-b
//           border-light-taupe
//           shadow-xl
//           ${isOpen ? 'block' : 'hidden'}
//         `}
//       >
//         <div className="flex flex-col gap-3 p-5">

//           {navLinks.map((link) => (
//             <button
//               key={link}
//               onClick={() => handleNavClick(link)}
//               className="
//                 text-left
//                 px-4
//                 py-3
//                 text-sm
//                 font-semibold
//                 tracking-wide
//                 uppercase
//                 text-stone-grey
//                 hover:bg-beige
//                 hover:text-warm-brown
//                 rounded-xl
//                 transition-all
//                 duration-300
//               "
//             >
//               {link}
//             </button>
//           ))}

//         </div>
//       </motion.div>
//     </nav>
//   );
// }






import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { smoothScroll } from '../utils/helpers';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  /* Detect Scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Navigation Click */
  const handleNavClick = (link) => {
    const id = link.toLowerCase();
    smoothScroll(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? 'bg-off-white/95 backdrop-blur-xl shadow-lg border-b border-light-taupe'
            : 'bg-transparent'
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          lg:px-8
          py-2
          flex
          items-center
          justify-between
          gap-4
        "
      >

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            cursor-pointer
            flex
            items-center
            flex-shrink-0
          "
          onClick={() => handleNavClick('Home')}
        >
          <img
            src="/favicon.svg"
            alt="Aryan Valley Camp Logo"
            className="
              h-20
              md:h-24
              lg:h-32
              xl:h-40
              w-auto
              object-contain
              transition-all
              duration-500
              hover:scale-105
              drop-shadow-2xl
            "
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 flex-1">

          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`
                relative
                text-xs
                lg:text-sm
                font-semibold
                tracking-wide
                uppercase
                whitespace-nowrap
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:transition-all
                after:duration-300
                hover:after:w-full
                ${
                  scrolled
                    ? `
                      text-stone-grey
                      hover:text-warm-brown
                      after:bg-warm-brown
                    `
                    : `
                      text-white
                      hover:text-beige
                      after:bg-beige
                    `
                }
              `}
            >
              {link}
            </button>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          className={`
            md:hidden
            transition-colors
            duration-300
            ${
              scrolled
                ? 'text-warm-brown'
                : 'text-white'
            }
          `}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
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
          bg-off-white/95
          backdrop-blur-xl
          border-b
          border-light-taupe
          shadow-xl
          ${isOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="flex flex-col gap-3 p-5">

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
                tracking-wide
                uppercase
                text-stone-grey
                hover:bg-beige
                hover:text-warm-brown
                rounded-xl
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