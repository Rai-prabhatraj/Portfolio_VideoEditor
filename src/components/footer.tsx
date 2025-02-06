'use client';
import React from 'react';
import Image from 'next/image';
import { BsBehance, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { HiMail, HiPhone } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className=" relative min-h-screen w-full bg-black relative text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Text and contacts */}
          <div>
            <h2 className="text-8xl font-bold text-amber-500 mb-12 animate-fade-in">
              THANK<br />YOU
            </h2>

            <div className="space-y-6">
              {/* Contact Information */}
              <div className="flex items-center gap-4 hover:text-amber-500 transition-colors">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <BsBehance size={20} />
                </div>
                <span>Lokesh Verma</span>
              </div>

              <div className="flex items-center gap-4 hover:text-amber-500 transition-colors">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <HiMail size={20} />
                </div>
                <span>lokeshverma6263@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 hover:text-amber-500 transition-colors">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <HiPhone size={20} />
                </div>
                <span>+91 6263585907</span>
              </div>

              <div className="flex items-center gap-4 hover:text-amber-500 transition-colors">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <BsLinkedin size={20} />
                </div>
                <span>Lokesh Verma</span>
              </div>

              <div className="flex items-center gap-4 hover:text-amber-500 transition-colors">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <BsYoutube size={20} />
                </div>
                <span>@lokesh</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] lg:h-full">
  <Image
    src="/lv1.png"
    alt="Videographer with camera"
    fill
    className="object-contain object-center rounded-lg"
  />
</div>

        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
            <span className="text-2xl">👍</span>
          </div>
          <h3 className="text-xl font-bold mb-2">PORTFOLIO VIDEO EDITOR</h3>
          <div className="flex items-center gap-4 text-gray-400">
            <span>29</span>
            <span>2.3K</span>
            <span>0</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}