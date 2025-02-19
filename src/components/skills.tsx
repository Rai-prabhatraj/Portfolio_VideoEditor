
"use client";

import React from 'react';
import SectionHeading from "./section-heading";


const Skills = () => {
  const skillsData = [
    { id: 'Dr', name: 'Davinci Resolve', percentage: 65, color: '#FFCC00' },
    { id: 'Ai', name: 'Illustrator', percentage: 30, color: '#FFCC00' },
    { id: 'F', name: 'Fusion', percentage: 50, color: '#FFCC00' },
    { id: 'Ps', name: 'Photoshop', percentage: 40, color: '#FFCC00' },
    { id: 'C', name: 'Capcut', percentage: 90, color: '#FFCC00' },
    { id: 'Lt', name: 'Lightroom', percentage: 75, color: '#FFCC00' },
    { id: 'Vn', name: 'VN', percentage: 70, color: '#FFCC00' },
    { id: 'C', name: 'Canva', percentage: 70, color: '#FFCC00' },
    { id: 'Af', name: 'After Effect', percentage: 50, color: '#FFCC00' },
  ];

  return (
    
    <section className="w-full bg-black text-white py-20 px-4">
              <SectionHeading>
        {"Services"}
      </SectionHeading>
  
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-6xl font-bold text-center mb-6">Why Choose Me</h1>
        
        <p className="text-xl text-center mb-16">
          Because I never stop looking for new styles and forms to express myself to improve my skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex items-center w-full">
              <div className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600/80 rounded-sm w-4/5">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-black font-bold text-3xl">
                {skill.id}
              </div>
                <div className="px-4 font-bold text-xl">{skill.name}</div>
              </div>
              <div className="flex-1 text-2xl font-bold pl-4">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;