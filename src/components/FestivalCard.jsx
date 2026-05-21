// import React from 'react';
// import { motion } from 'framer-motion';

// export default function FestivalCard({ title, season, description, highlight, image, activities }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="group rounded-xl overflow-hidden bg-off-white shadow-lg hover:shadow-2xl transition-all duration-300"
//     >
//       {/* Image Container */}
//       <div className="relative h-64 md:h-80 overflow-hidden">
//         {/* <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         /> */}

//         <img
//   src="/my-app/public/festival1.jpeg"
//   alt={title}
//   className="
//     w-full
//     h-full
//     object-cover
//     group-hover:scale-110
//     transition-transform
//     duration-500
//   "
// />


//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="absolute bottom-4 left-4 right-4"
//         >
//           <p className="text-sky-blue text-sm font-semibold mb-2">{season}</p>
//           <h3 className="text-2xl font-bold text-off-white font-serif">{title}</h3>
//         </motion.div>
//       </div>

//       {/* Content */}
//       <div className="p-6 md:p-8">
//         <p className="text-amber-800 font-semibold text-sm mb-3">{highlight}</p>
//         <p className="text-stone-grey text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

//         {/* Activities */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {activities?.map((activity, idx) => (
//             <span
//               key={idx}
//               className="inline-block px-3 py-1 bg-beige text-warm-brown text-xs rounded-full font-medium"
//             >
//               {activity}
//             </span>
//           ))}
//         </div>

//         <motion.button
//           whileHover={{ x: 5 }}
//           className="text-warm-brown font-semibold text-sm flex items-center gap-2 hover:text-deep-brown transition-colors"
//         >
//           Discover Festival →
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }




import React from 'react';
import { motion } from 'framer-motion';

export default function FestivalCard({
  title,
  season,
  description,
  highlight,
  image,
  activities,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        group
        rounded-2xl
        overflow-hidden
        bg-off-white
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >

      {/* Image Section */}
      <div className="relative overflow-hidden h-[280px] md:h-[340px]">

        <img
          src={image || "/festival1.jpeg"}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text on Image */}
        <div className="absolute bottom-5 left-5 right-5">

          <p className="text-sky-blue text-sm font-semibold tracking-wide mb-2">
            {season}
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight">
            {title}
          </h3>

        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">

        {/* Highlight */}
        <p className="text-amber-800 font-semibold text-sm uppercase tracking-wide mb-3">
          {highlight}
        </p>

        {/* Description */}
        <p className="text-stone-grey leading-7 mb-5">
          {description}
        </p>

        {/* Activities */}
        <div className="flex flex-wrap gap-2 mb-6">

          {activities?.map((activity, idx) => (
            <span
              key={idx}
              className="
                px-3
                py-1.5
                bg-beige
                text-warm-brown
                text-xs
                font-medium
                rounded-full
              "
            >
              {activity}
            </span>
          ))}

        </div>

        {/* Button */}
        <motion.button
          whileHover={{ x: 5 }}
          className="
            text-warm-brown
            font-semibold
            flex
            items-center
            gap-2
            hover:text-deep-brown
            transition-colors
          "
        >
          Discover Festival →
        </motion.button>

      </div>
    </motion.div>
  );
}
