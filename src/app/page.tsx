"use client";
import About from "@/components/about";
// import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import InstagramReels from "@/components/reels";
import Footer from "@/components/footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget"; // Adjust the path if necessary
import WorkExperience from "@/components/work";
export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <WorkExperience />
      <Projects />
      <InstagramReels />
      
      <Skills />
      {/* <Contact /> */}
      <Footer />

      <WhatsAppChatWidget /> {/* Add this line to include the chat widget */}
    </main>
  );
}
