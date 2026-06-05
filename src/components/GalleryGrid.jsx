import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Pause } from 'lucide-react';

export default function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videoRefs = {};

  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  const toggleVideoPlay = (e, imageId) => {
    e.stopPropagation();
    const video = videoRefs[imageId];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideoId(imageId);
      } else {
        video.pause();
        setPlayingVideoId(null);
      }
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(image)}
            className="group cursor-pointer rounded-lg overflow-hidden h-64"
          >
            <div className="relative w-full h-full overflow-hidden bg-gray-200">
              {isVideo(image.url) ? (
                <>
                  <video
                    ref={(el) => (videoRefs[image.id] = el)}
                    src={image.url}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    preload="metadata"
                  />
                  <button
                    onClick={(e) => toggleVideoPlay(e, image.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
                  >
                    <div className="bg-warm-brown/90 hover:bg-warm-brown p-4 rounded-full transition-all duration-300 transform group-hover:scale-110">
                      {playingVideoId === image.id ? (
                        <Pause size={32} className="text-off-white" />
                      ) : (
                        <Play size={32} className="text-off-white ml-1" />
                      )}
                    </div>
                  </button>
                </>
              ) : (
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-off-white font-semibold text-center px-4">{image.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            {isVideo(selectedImage.url) ? (
              <video
                src={selectedImage.url}
                controls
                className="w-full h-auto rounded-lg"
                autoPlay
              />
            ) : (
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-off-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <p className="text-off-white text-center mt-4 font-semibold">{selectedImage.title}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
