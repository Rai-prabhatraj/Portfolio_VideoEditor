import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, FileText } from 'lucide-react';
import { useActiveSectionContext } from '@/containers/active-section';
import { useSectionInView } from '@/lib/useInView';

export default function Header() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleButtonClick = (section) => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
  };

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
              
              {/* Larger Profile Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
                <img 
                  src="/l1.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top" 
                  style={{
                    objectPosition: "50% 20%"
                  }}
                />
              </div>

              {/* Text Behind Image */}
              <span className="inline-block">PORT</span>
              <span className="inline-block">FOLIO</span>
            </h1>
          </div>

          {/* Profile Description */}
          <div className="mt-[8rem] md:mt-[10rem]">  {/* Adjusted margin for larger image */}
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

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-4 mt-8"
            >
           <Link 
  href="/resume.pdf" 
  onClick={() => handleButtonClick("resume")}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-amber-600"
>
  <FileText size={18} />
  Resume
</Link>
              
              <Link 
                href="#contact"
                onClick={() => handleButtonClick("contact")}
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white/10"
              >
                <Mail size={18} />
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}