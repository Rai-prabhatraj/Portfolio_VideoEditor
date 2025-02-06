'use client';
import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Home, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* About Me Header */}
        <h1 className="text-amber-500 text-7xl font-bold text-center mb-20">
          ABOUT ME
          <div className="w-48 h-1 bg-amber-500 mx-auto mt-2"></div>
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
  <div className="relative"> 
  <div className="aspect-[7/6] relative">
      <Image
        src="/lv.png"
        alt="Lokesh Verma"
        fill
        className="object-contain rounded-lg"
        priority
      />
    </div>
  </div>




          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl">
                Hello, <span className="inline-block animate-wave">👋</span> I'm
              </h2>
              <h1 className="text-5xl font-bold">Lokesh Verma</h1>
              <p className="text-amber-500 text-xl">
                Graphic Design, Video Editor based in Bhilai, IN
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I'm a Graphic Designer and Video Editor with a strong focus on digital branding. 
              Visual design seeks to attract, inspire, create desires and motivate people to respond 
              to messages, with a to making favorable impact.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Home size={20} />
                </div>
                <div>
                  <div className="font-semibold">RCET, Bhilai</div>
                  <div className="text-amber-500 text-sm">Bachelor of Computer Application</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-sm">
                    2022-2025
                  </span>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div className="font-semibold">Bandung, 07 Juni 1996</div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div className="font-semibold">+91 6263585907</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div className="font-semibold">lokeshverma6263@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}