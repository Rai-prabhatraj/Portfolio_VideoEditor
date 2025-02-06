import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const InstagramReels = () => {
  const reels = [
    {
      id: 1,
      image: '/reel1.jpg',
      title: 'SKEYNDOR',
      description: 'Punya kulit sensitif'
    },
    {
      id: 2,
      image: '/reel2.jpg',
      title: 'DOUBLE DIMENSION',
      description: 'CLEANSING SYSTEM'
    },
    {
      id: 3,
      image: '/reel3.jpg',
      title: 'TIMELESS PRODIGY',
      description: 'Reactive Your Youthful Genes'
    },
    {
      id: 4,
      image: '/reel4.jpg',
      title: 'Global Lift',
      description: '[ProGEN-in]'
    },
    {
      id: 5,
      image: '/reel5.jpg',
      title: 'dr Resty Rahmillah',
      description: 'Aesthetic Clinic'
    }
  ];

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
                className="flex-shrink-0 relative group"
              >
                <div className="w-[300px] h-[534px] relative overflow-hidden rounded-lg">
                  <Image
                    src={reel.image}
                    alt={reel.title}
                    width={300}
                    height={534}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-lg font-semibold">{reel.title}</h3>
                    <p className="text-sm text-gray-300">{reel.description}</p>
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