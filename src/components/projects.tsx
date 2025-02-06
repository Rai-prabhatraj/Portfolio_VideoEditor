// Projects.tsx
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import AnimatedButton from "./AnimatedButton";
import { motion } from 'framer-motion';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  // Filter projects by category
  const reels = projectsData.filter((project) => project.category === "Reel");
  const longVideos = projectsData.filter((project) => project.category === "Long Video");

  return (
    <section ref={ref} id="projects" className="relative min-h-screen w-full bg-black">
      {/* My Reels Section */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
             <h1 className="text-amber-500 text-5xl font-bold text-center mb-20">
          Projects
          <div className="w-48 h-1 bg-amber-500 mx-auto mt-2"></div>
        </h1>

        </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
        {reels.map((project, index) => (
          <div key={index} className="w-full">
            <Project
              title={project.title}
              videoUrl={project.videoUrl}
              thumbnailUrl={project.thumbnailUrl}
              category={project.category}
            />
          </div>
        ))}
      </div>

      {/* My Long Videos Section */}
      <SectionHeading>My Long Videos</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
        {longVideos.map((project, index) => (
          <div key={index} className="w-full">
            <Project
              title={project.title}
              videoUrl={project.videoUrl}
              thumbnailUrl={project.thumbnailUrl}
              category={project.category}
            />
          </div>
        ))}
      </div>

      {/* Button at the Bottom */}
      <div className="flex justify-center mt-8">
        <AnimatedButton link="https://drive.google.com/drive/folders/15dQuETncRN3a5zGF9hgnne7d-G_4oQgy?usp=sharing" />
      </div>
    </section>
  );
}
