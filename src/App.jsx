// import React, { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HeroSection from './sections/HeroSection';
// import AboutSection from './sections/AboutSection';
// import CultureSection from './sections/CultureSection';
// import ExperiencesSection from './sections/ExperiencesSection';
// import FestivalsSection from './sections/FestivalsSection';
// import GallerySection from './sections/GallerySection';
// import TestimonialsSection from './sections/TestimonialsSection';
// import ContactSection from './sections/ContactSection';

// export default function App() {
//   useEffect(() => {
//     // SEO Meta Tags
//     document.title = 'Aryan Valley Camp | Premium Himalayan Cultural Tourism in Ladakh';
    
//     // Add meta description
//     const metaDescription = document.querySelector('meta[name="description"]');
//     if (metaDescription) {
//       metaDescription.setAttribute('content', 'Experience authentic Brokpa culture at Aryan Valley Camp, a luxury riverside campsite on the Indus River in Ladakh. Cultural immersion, festivals, and Himalayan adventures.');
//     }

//     // Add keywords
//     const metaKeywords = document.querySelector('meta[name="keywords"]');
//     if (metaKeywords) {
//       metaKeywords.setAttribute('content', 'Aryan Valley Camp, Ladakh campsite, Brokpa tribe, cultural tourism, Himalayan tourism, Indus River, adventure travel, luxury eco-resort');
//     }
//   }, []);

//   return (
//     <div className="bg-off-white text-warm-brown">
//       {/* Navbar - Sticky */}
//       <Navbar />

//       {/* Main Content */}
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <CultureSection />
//         <ExperiencesSection />
//         <FestivalsSection />
//         <GallerySection />
//         <TestimonialsSection />
//         <ContactSection />
//       </main>

//       {/* Footer */}
//       <Footer />

//       {/* Floating Enquiry Button (Mobile) */}
//       <div className="fixed bottom-6 right-6 z-40 md:hidden">
//         <a
//           href="#contact"
//           onClick={(e) => {
//             e.preventDefault();
//             document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
//           }}
//           className="inline-flex items-center gap-2 bg-warm-brown text-off-white px-4 py-3 rounded-full shadow-lg hover:bg-deep-brown transition-all duration-300 font-semibold text-sm animate-bounce"
//         >
//           <span>✉️</span> Enquire
//         </a>
//       </div>
//     </div>
//   );
// }





import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CultureSection from './sections/CultureSection';
import ExperiencesSection from './sections/ExperiencesSection';
import FacilitiesSection from './sections/FacilitiesSection';
import FestivalsSection from './sections/FestivalsSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

export default function App() {

  useEffect(() => {

    // SEO Title
    document.title =
      'Aryan Valley Camp | Premium Himalayan Cultural Tourism in Ladakh';

    // SEO Description
    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Experience authentic Brokpa culture at Aryan Valley Camp, a luxury riverside campsite on the Indus River in Ladakh. Cultural immersion, festivals, and Himalayan adventures.'
      );
    }

    // SEO Keywords
    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    );

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'Aryan Valley Camp, Ladakh campsite, Brokpa tribe, cultural tourism, Himalayan tourism, Indus River, adventure travel, luxury eco-resort'
      );
    }

  }, []);

  return (
    <div className="bg-off-white text-warm-brown overflow-x-hidden">

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Website Content */}
      <main>

        {/* Hero Section With Background Video */}
        <HeroSection />

        {/* Other Sections */}
        <AboutSection />
        <CultureSection />
        <ExperiencesSection />
        <FacilitiesSection />
        <FestivalsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Enquiry Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();

            document
              .getElementById('contact')
              ?.scrollIntoView({
                behavior: 'smooth',
              });
          }}
          className="
            inline-flex
            items-center
            gap-2
            bg-warm-brown
            text-off-white
            px-5
            py-3
            rounded-full
            shadow-xl
            hover:bg-deep-brown
            transition-all
            duration-300
            font-semibold
            text-sm
            animate-bounce
          "
        >
          <span>✉️</span>
          Enquire
        </a>

      </div>

    </div>
  );
}
