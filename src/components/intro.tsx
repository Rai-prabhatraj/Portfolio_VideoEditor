import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useActiveSectionContext } from '@/containers/active-section';
import { useSectionInView } from '@/lib/useInView';

export default function Header() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full bg-black text-white"
    >
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-4 md:p-6 flex justify-between items-center">
        <div className="text-amber-500 font-bold text-lg md:text-xl">HOME</div>
      </nav>

       {/* Main Content */}
       <div className="absolute w-full h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* "PORTFOLIO" Text */}
          <div className="relative w-full flex justify-center">
            <h1 className="relative text-6xl sm:text-8xl md:text-[12rem] font-extrabold tracking-wide text-white/90 uppercase">
              
              {/* Large Profile Image (Without Border) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden">
                <img src="/l1.png" alt="Profile" className="w-full h-full object-cover" />
              </div>

              {/* Text Behind Image */}
              <span className="inline-block">PORT</span>
              <span className="inline-block">FOLIO</span>
            </h1>
          </div>

          {/* Profile Description */}
          <div className="mt-[10rem] md:mt-[12rem]">  {/* Increased margin for spacing */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-light"
            >
              Hi, I am <span className="text-amber-500 font-semibold">Lokesh Verma</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-sm sm:text-base md:text-lg mt-2"
            >
              I am a graphic designer and video editor based in Bhilai, India.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}