// import React from 'react';
// import { motion } from 'framer-motion';

// import SectionHeading from '../components/SectionHeading';
// import FestivalCard from '../components/FestivalCard';

// import { festivals } from '../data/content';

// export default function FestivalsSection() {
//   return (
//     <section
//       id="festivals"
//       className="
//         bg-gradient-to-b
//         from-beige/10
//         to-off-white
//         section-spacing
//       "
//     >

//       <div className="max-w-7xl mx-auto px-4">

//         {/* Section Heading */}
//         <SectionHeading
//           title="Seasonal Celebrations"
//           subtitle="
//             Experience the vibrant festivals and cultural
//             celebrations of Aryan Valley
//           "
//           className="mb-16"
//         />

//         {/* Festival Cards */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="
//             grid
//             grid-cols-1
//             md:grid-cols-3
//             gap-8
//           "
//         >

//           {festivals.map((festival) => (
//             <FestivalCard
//               key={festival.id}
//               title={festival.title}
//               season={festival.season}
//               description={festival.description}
//               highlight={festival.highlight}

//               /* Only Cherry Blossom Festival Uses Local Image */
//               image={
//                 festival.title === 'Cherry Blossom Festival'
//                   ? '/festival1.jpeg'
//                   : festival.image
//               }

//               activities={festival.activities}
//             />
//           ))}

//         </motion.div>

//         {/* Festival Booking Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="
//             mt-16
//             grid
//             grid-cols-1
//             md:grid-cols-3
//             gap-6
//           "
//         >

//           {[
//             {
//               icon: '📅',
//               title: 'Plan Ahead',
//               desc:
//                 'Book 2-3 months in advance for best availability',
//             },

//             {
//               icon: '👥',
//               title: 'Group Experiences',
//               desc:
//                 'Special packages for groups of 10+',
//             },

//             {
//               icon: '📸',
//               title: 'Photography Op',
//               desc:
//                 'Stunning festival moments for capturing memories',
//             },

//           ].map((item, idx) => (

//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 + idx * 0.1 }}
//               viewport={{ once: true }}
//               className="
//                 p-6
//                 bg-off-white
//                 rounded-lg
//                 text-center
//                 shadow-sm
//               "
//             >

//               <div className="text-3xl mb-3">
//                 {item.icon}
//               </div>

//               <h4 className="font-semibold text-warm-brown mb-2">
//                 {item.title}
//               </h4>

//               <p className="text-sm text-stone-grey">
//                 {item.desc}
//               </p>

//             </motion.div>

//           ))}

//         </motion.div>

//       </div>
//     </section>
//   );
// }






import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Camera } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import FestivalCard from '../components/FestivalCard';

import { festivals } from '../data/content';

export default function FestivalsSection() {
  return (
    <section
      id="festivals"
      className="
        bg-gradient-to-b
        from-beige/10
        to-off-white
        section-spacing
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <SectionHeading
          title="Seasonal Celebrations"
          subtitle="Experience the vibrant festivals and cultural celebrations of Aryan Valley"
          className="mb-16"
        />

        {/* Festival Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {festivals.map((festival, index) => (
            <FestivalCard
              key={festival.id}
              id={festival.id}
              title={festival.title}
              season={festival.season}
              description={festival.description}
              highlight={festival.highlight}

              /*
                Use Local Festival Image
                Make sure festival1.jpeg is inside:
                public/festival1.jpeg
              */
              image={
                index === 0
                  ? '/festival1.jpeg'
                  : festival.image
              }

              activities={festival.activities}
            />
          ))}

        </motion.div>

        {/* Festival Booking Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          "
        >

          {[
            {
              icon: Calendar,
              title: 'Plan Ahead',
              desc: 'Book 2-3 months in advance for best availability',
            },

            {
              icon: Users,
              title: 'Group Experiences',
              desc: 'Special packages for groups of 10+',
            },

            {
              icon: Camera,
              title: 'Photography Opportunities',
              desc: 'Capture unforgettable festival moments and traditions',
            },

          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="
                  p-6
                  bg-off-white
                  rounded-2xl
                  text-center
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  border
                  border-light-taupe/30
                "
              >

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-warm-brown/10 flex items-center justify-center flex-shrink-0 mx-auto mb-4"
                >
                  <IconComponent size={24} className="text-warm-brown" />
                </motion.div>

                <h4 className="font-semibold text-warm-brown mb-2 text-lg">
                  {item.title}
                </h4>

                <p className="text-sm text-stone-grey leading-6">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}