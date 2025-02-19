import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const InstagramReels = () => {
  // Updated data structure with videoUrl but without thumbnailUrl
  const reels = [
    {
      id: 1,
      title: "Aman Gupta Sir",
      videoUrl: "https://drive.google.com/file/d/19n6-uHLzQwibQRQ5uIYhPQ8AhNw9gljM/preview",
      category: "Reel",
    },
    {
      id: 2,
      title: "NPW Reel",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    },
    {
      id: 3,
      title: "Trending Reel",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    },
    {
      id: 4,
      title: "Cultral Reel",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    },
    {
      id: 5,
      title: "Akhil Sachdewa",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    },
    {
      id: 6,
      title: "Kite Fest",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    },
    {
      id: 7,
      title: "Google 2.0",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    },
    {
      id: 8,
      title: "Microsoft Azure Certification 2.0",
      videoUrl: "https://drive.google.com/file/d/1YU-SW4oD77_60cmtSUH687jSX-_XZlIY/preview",
      category: "Reel",
    }
  ];

  // Since we're using videoUrl instead of thumbnailUrl, we need a placeholder image
  const placeholderImage = "/api/placeholder/300/534";

  return (
    <section className="relative min-h-screen w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-amber-500 text-5xl font-bold text-center mb-20">
            Instagram Reels
            <div className="w-48 h-1 bg-amber-500 mx-auto mt-2"></div>
          </h1>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide">
            {reels.map((reel) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <div className="w-[300px] h-[534px] relative overflow-hidden rounded-lg">
                  {/* Video iframe - hidden initially */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <iframe 
                      src={reel.videoUrl}
                      width="300"
                      height="534"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  {/* Placeholder for video preview */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <Image
                      src={placeholderImage}
                      alt={reel.title}
                      width={300}
                      height={534}
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Title overlay - visible except when hovering */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-20">
                    <h3 className="text-lg font-semibold">{reel.title}</h3>
                    <p className="text-sm text-gray-300">{reel.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default InstagramReels;