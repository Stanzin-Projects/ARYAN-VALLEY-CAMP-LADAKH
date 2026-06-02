// import React from 'react';
// import { motion } from 'framer-motion';
// import SectionHeading from '../components/SectionHeading';

// export default function AboutSection() {
//   const images = [
//     { src: '/about.jpg', alt: 'Aryan Valley Camp View 1' },
//     { src: '/about2.jpg', alt: 'Aryan Valley Camp View 2' },
//   ];

//   return (
//     <section id="about" className="bg-off-white section-spacing">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
//           {/* Image Gallery */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 gap-6"
//           >
//             {/* Image 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="rounded-xl overflow-hidden shadow-lg group h-96"
//             >
//               <img
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 className="
//                   w-full
//                   h-full
//                   object-cover
//                   rounded-xl
//                   hover:scale-110
//                   transition-transform
//                   duration-700
//                 "
//               />
//             </motion.div>

//             {/* Image 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="rounded-xl overflow-hidden shadow-lg group h-96"
//             >
//               <img
//                 src={images[1].src}
//                 alt={images[1].alt}
//                 className="
//                   w-full
//                   h-full
//                   object-cover
//                   rounded-xl
//                   hover:scale-110
//                   transition-transform
//                   duration-700
//                 "
//               />
//             </motion.div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <SectionHeading
//               title="Welcome to Aryan Valley Camp"
//               subtitle="Where Mountain Meets Heritage"
//               align="left"
//               className="mb-8"
//             />

//             <div className="space-y-6">
//               <p className="text-lg text-stone-grey leading-relaxed">
//                 Nestled beside the pristine Indus River in Ladakh's Dah-Hanu region, Aryan Valley Camp is more than a destination—it's a portal to an ancient world.
//               </p>

//               <p className="text-lg text-stone-grey leading-relaxed">
//                 Our riverside campsite is thoughtfully designed to blend seamlessly with the natural landscape, offering authentic cultural immersion without compromising on comfort.
//               </p>

//               <p className="text-lg text-stone-grey leading-relaxed">
//                 Here, you'll experience the timeless traditions of the Brokpa community, explore breathtaking Himalayan vistas, and create memories that last a lifetime.
//               </p>

//               {/* Features */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-light-taupe">
//                 {[
//                   { icon: '🏔️', title: 'Riverside Location', desc: 'Beside the Indus River' },
//                   { icon: '🌿', title: 'Eco-Friendly', desc: 'Sustainable tourism practices' },
//                   { icon: '👥', title: 'Cultural Immersion', desc: 'Genuine Brokpa interaction' },
//                   { icon: '⭐', title: 'Premium Comfort', desc: 'Luxury meets authenticity' },
//                 ].map((feature, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex gap-4"
//                   >
//                     <span className="text-3xl flex-shrink-0">{feature.icon}</span>
//                     <div>
//                       <h4 className="font-semibold text-warm-brown mb-1">{feature.title}</h4>
//                       <p className="text-sm text-stone-grey">{feature.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Leaf, Users, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function AboutSection() {
  const images = [
    { src: '/about.jpg', alt: 'Aryan Valley Camp View 1' },
    { src: '/about2.jpg', alt: 'Aryan Valley Camp View 2' },
  ];

  return (
    <section id="about" className="bg-off-white section-spacing">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >

            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="
                rounded-2xl
                overflow-hidden
                shadow-2xl
                group
                h-[280px]
                md:h-[320px]
                bg-white
              "
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="
                rounded-2xl
                overflow-hidden
                shadow-2xl
                group
                h-[280px]
                md:h-[320px]
                bg-white
              "
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </motion.div>

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <SectionHeading
              title="Welcome to Aryan Valley Camp"
              subtitle="Where Mountain Meets Heritage"
              align="left"
              className="mb-8"
            />

            <div className="space-y-6">

              <p className="text-lg text-stone-grey leading-relaxed">
               Since 2012, Aryan Valley Camp has been offering travelers an unforgettable
                escape in the heart of Ladakh’s breathtaking Dah-Hanu region, located 
                approximately 170 km from Leh along the serene banks of the Indus River. 
              </p>

              <p className="text-lg text-stone-grey leading-relaxed">
               More than just a campsite, it is a gateway to the ancient heritage and living traditions
                of the unique Brokpa community.
                Thoughtfully designed to blend with the natural landscape and overlooking the magnificent Indus Gorge,
                 our camp combines authentic cultural experiences with comfort, tranquility, and warm Ladakhi hospitality.


              </p>

              <p className="text-lg text-stone-grey leading-relaxed">
                Here, you'll experience the timeless traditions of the
                Brokpa community, explore breathtaking Himalayan vistas,
                and create memories that last a lifetime.
              </p>

              {/* Features */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-6
                  mt-10
                  pt-8
                  border-t
                  border-light-taupe
                "
              >

                {[
                  {
                    icon: Mountain,
                    title: 'Riverside Location',
                    desc: 'Beside the Indus River',
                  },

                  {
                    icon: Leaf,
                    title: 'Eco-Friendly',
                    desc: 'Sustainable tourism practices',
                  },

                  {
                    icon: Users,
                    title: 'Cultural Immersion',
                    desc: 'Genuine Brokpa interaction',
                  },

                  {
                    icon: Star,
                    title: 'Premium Comfort',
                    desc: 'Luxury meets authenticity',
                  },

                ].map((feature, idx) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0"
                      >
                        <IconComponent size={24} className="text-warm-brown" />
                      </motion.div>

                      <div>
                        <h4 className="font-semibold text-warm-brown mb-1">
                          {feature.title}
                        </h4>

                        <p className="text-sm text-stone-grey">
                          {feature.desc}
                        </p>
                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}