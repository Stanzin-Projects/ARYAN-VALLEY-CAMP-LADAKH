import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ name, from, content, image, rating }) {
  return (
    <div className="bg-off-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
      <div className="flex-1">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-sky-blue text-sky-blue" />
          ))}
        </div>

      {/* Content */}
      <p className="text-stone-grey text-sm leading-relaxed mb-6 italic">"{content}"</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 mt-6">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-warm-brown">{name}</p>
          <p className="text-stone-grey text-xs">{from}</p>
        </div>
      </div>
    </div>
  );
}