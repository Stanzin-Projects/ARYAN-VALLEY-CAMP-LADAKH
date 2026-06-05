




import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FestivalCard({
  id,
  title,
  season,
  description,
  highlight,
  image,
  video,
  activities,
}) {
  return (
    <Link to={`/festival/${id}`} className="no-underline">
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
          h-full
        "
      >

      {/* Image/Video Section */}
      <div className="relative overflow-hidden h-[280px] md:h-[340px]">

        {video ? (
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full
              h-full
              object-cover
              bg-black
            "
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
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
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text on Image/Video */}
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
    </Link>
  );
}
