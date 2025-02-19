import React from 'react';

export default function WorkExperience() {
  return (
    <section className="min-h-screen w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Header with line and dot */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-8">Work Experience</h2>
          <div className="relative max-w-md mx-auto">
            <div className="h-px bg-white w-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {/* First Entry */}
            <div className="relative flex">
              <div className="flex-1 pr-16 text-right">
                <h3 className="text-xl font-medium">Social Media Team (SMA) at RCET, Bhilai</h3>
                <p className="text-sm text-gray-400 mt-1">marking the beginning of my journey in digital content creation</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-black"></div>
              </div>
              <div className="flex-1 pl-16">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold">
                  2023
                </div>
              </div>
            </div>

            {/* Second Entry */}
            <div className="relative flex">
              <div className="flex-1 pr-16 text-right">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold">
                  2023
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-black"></div>
              </div>
              <div className="flex-1 pl-16">
                <h3 className="text-xl font-medium">Promoted to Leader of SMA</h3>
                <p className="text-sm text-gray-400 mt-1">taking charge of the college's official social media presence</p>
              </div>
            </div>

            {/* Third Entry */}
            <div className="relative flex">
              <div className="flex-1 pr-16 text-right">
                <h3 className="text-xl font-medium">Offered an internship as Video Editor</h3>
                <p className="text-sm text-gray-400 mt-1">further solidifying my expertise in visual storytelling</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-black"></div>
              </div>
              <div className="flex-1 pl-16">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold">
                  February 9
                </div>
              </div>
            </div>

            {/* Fourth Entry */}
            <div className="relative flex">
              <div className="flex-1 pr-16 text-right">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold">
                  April 6
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-black"></div>
              </div>
              <div className="flex-1 pl-16">
                <h3 className="text-xl font-medium">Earned recognition for my work from<br />Aman Gupta, CEO of boAt</h3>
                <p className="text-sm text-gray-400 mt-1">a moment of immense pride.</p>
              </div>
            </div>

            {/* Fifth Entry */}
            <div className="relative flex">
              <div className="flex-1 pr-16 text-right">
                <h3 className="text-xl font-medium">Officially took over the management of the college's</h3>
                <p className="text-sm text-gray-400 mt-1">college's social media while leading Team SMA.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-black"></div>
              </div>
              <div className="flex-1 pl-16">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold">
                  July 10
                </div>
              </div>
            </div>

            {/* Sixth Entry */}
            <div className="relative flex">
              <div className="flex-1 pr-16 text-right">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold">
                  August 28
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-black"></div>
              </div>
              <div className="flex-1 pl-16">
                <h3 className="text-xl font-medium">Received an increment letter,<br />stepping up as Senior Video Editor</h3>
                <p className="text-sm text-gray-400 mt-1">in my Social Media Manager role.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}