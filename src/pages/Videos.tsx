import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Video, Calendar } from 'lucide-react';
import { videos } from '../data/videos';

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4 flex items-center gap-2 sm:gap-3">
            <Video className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
            Video Gallery
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A collection of videos showcasing achievements, leadership, and participation in various activities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-navy-light rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gold/30 transition-all overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 sm:h-56 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-blue dark:text-blue-light mb-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{video.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={selectedVideo.video}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
            <div className="mt-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
