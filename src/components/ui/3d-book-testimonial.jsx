import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import { Star } from 'lucide-react';

export const Component = ({ testimonials }) => {
  const book = useRef(null);
  const isSmallScreen = useMediaQuery('(min-width: 640px)');
  const smallerDevice = !isSmallScreen;

  const handleFlip = (pageNum) => {
    if (!book.current) return;
    const pageFlip = book.current.pageFlip?.();
    if (pageFlip?.flip) {
      pageFlip.flip(pageNum);
      pageFlip.flipNext(false);
    }
  };

  const SerenityLogo = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop';

  return (
    <div className="w-full text-black min-h-[600px] flex justify-center items-center py-10">
      <HTMLFlipBook
        ref={book}
        width={300}
        height={450}
        showCover={true}
        usePortrait={smallerDevice}
        onFlip={(e) => console.log(e.data)}
        onChangeState={(e) => console.log(e.data)}
        className=""
        style={{}}
        startPage={0}
        size="fixed"
        minWidth={0}
        maxWidth={0}
        minHeight={0}
        maxHeight={0}
        drawShadow={true}
        flippingTime={1000}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <div className="relative bg-black border rounded-lg p-8 text-white flex flex-col items-center justify-center shadow-lg shadow-gray-600 cursor-grab">
          <div className="flex justify-center items-center mb-8">
            <img src={SerenityLogo} alt="Serenity Logo" className="w-24 h-24 rounded-full object-cover" />
          </div>
          <h1 className="text-4xl mb-10 text-center relative z-10">Serenity UI</h1>
          <div className="w-full h-1 bg-white mb-6 relative z-10" />
          <div className="text-center">
            <span className="text-lg text-white hover:text-gray-300 transition-colors duration-300 relative z-10">
              Read what virtual people are saying about us
            </span>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center bg-zinc-200 border border-gray-300 box-border">
          <div className="page-front text-start text-white p-3 bg-gray-400 w-full">Index</div>
          <div className="flex flex-col justify-start items-start p-8 space-y-3 w-full">
            <div className="w-full">
              <ol className="grid grid-cols-2 gap-2 w-full">
                {testimonials.map((testimonial, index) => (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => handleFlip(index + 2)}
                      className="flex justify-start items-center text-xs cursor-pointer"
                    >
                      <img
                        src={testimonial.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop'}
                        alt="testimonial"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      {testimonial.name}
                    </li>
                    <li className="flex justify-end text-xs items-center">{index + 2}</li>
                  </React.Fragment>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col justify-between items-center bg-gray-200 border border-gray-300 box-border cursor-grab p-6"
          >
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-sm text-gray-700">{index + 2}</span>
              <span className="text-sm text-gray-700">Page</span>
            </div>
            <div className="flex justify-center items-center mt-7">
              <img
                src={testimonial.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop'}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 text-center">
              <span className="font-semibold text-gray-900">{testimonial.name}</span>
              <span className="text-gray-500 text-sm">{testimonial.jobtitle}</span>
            </div>
            <div className="p-5 font-serif font-semibold text-center mt-4 text-gray-800">{testimonial.text}</div>
            <div className="flex justify-center items-center mt-3 gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={`filled-${i}`} size={20} className="text-amber-400" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={`empty-${i}`} size={20} className="text-slate-300" />
              ))}
            </div>
          </div>
        ))}

        <div className="bg-black border p-8 text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Thank You!</h1>
          <p className="text-lg text-center">We appreciate your feedback</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};
