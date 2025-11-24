import React, { useState, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import WaveImage from './WaveImage';

const projects = [
  {
    title: "Jiotto Caspita",
    category: "React / WebGL / Three.js",
    description: "An immersive car brand showcase website featuring high-performance 3D interactions and a premium design aesthetic.",
    image: "/imagee.png",
    link: "https://jiotto-caspita.vercel.app/",
    github: "#"
  },
  {
    title: "Voixera",
    category: "React / Node.js / Tailwind / Mistral AI",
    description: "Transform your thoughts into insights. Speak naturally, and let AI convert your audio into text, summaries, SEO-ready article and emotional intelligence that evolves with you.",
    image: "https://voixera.vercel.app/mainhero.png",
    link: "https://voixera.vercel.app/",
    github: "#"
  },
  {
    title: "E-Commerce Dashboard",
    category: "React / Tailwind / Chart.js",
    description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and sales reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Social Media App",
    category: "Next.js / TypeScript / Prisma",
    description: "A full-featured social platform allowing users to connect, share content, and interact in real-time with a modern, responsive interface.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "AI Image Generator",
    category: "React / OpenAI API",
    description: "An innovative tool that leverages OpenAI's DALL-E API to generate unique, high-quality images from text descriptions.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="work" className="py-32 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Selected Work</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="flex flex-col relative">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-t border-white/10 py-12 md:py-16 transition-colors hover:bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 px-4 md:px-8 pointer-events-none">
                <div className="mb-4 md:mb-0 max-w-2xl pointer-events-auto">
                  <h3 className="text-3xl md:text-5xl font-heading font-bold mb-3 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-2 group-hover:text-black transition-colors">{project.category}</p>
                  <p className="text-gray-400 text-lg line-clamp-2 group-hover:text-black transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 pointer-events-auto">
                  <ArrowUpRight size={32} className="text-gray-500 group-hover:text-black" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="border-t border-white/10" />

        {/* Fixed Image Overlay - Centered via Portal with Wave Shader */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed top-1/2 left-1/2 w-[400px] h-[450px] rounded-xl overflow-hidden shadow-2xl pointer-events-none z-[9999] hidden lg:block bg-dark-900"
                style={{
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
              >
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <Suspense fallback={null}>
                    <WaveImage imageUrl={projects[hoveredIndex].image} />
                  </Suspense>
                </Canvas>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Projects;
