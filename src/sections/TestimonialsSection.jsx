import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const itemsPerPage = window.innerWidth >= 768 ? 3 : 1;
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="testimonials" className="bg-gradient-to-b from-beige/10 to-off-white section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Guest Stories"
          subtitle="Hear from travelers who experienced Aryan Valley Camp"
          className="mb-16"
        />

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="h-full">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-warm-brown text-off-white flex items-center justify-center hover:bg-deep-brown transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {[...Array(Math.ceil(testimonials.length / itemsPerPage))].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPerPage)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === Math.floor(currentIndex / itemsPerPage)
                      ? 'bg-warm-brown w-8'
                      : 'bg-light-taupe hover:bg-stone-grey'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-warm-brown text-off-white flex items-center justify-center hover:bg-deep-brown transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

