import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Terminal } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* 3D Shader Background */}
            <ShaderBackground />

            {/* Background Gradient Blob (Subtle overlay) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
                        Available for freelance work
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold tracking-tighter mb-8 leading-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="block"
                    >
                        CREATIVE
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                    >
                        DEVELOPER
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Crafting digital experiences with code and passion. I specialize in building accessible, pixel-perfect, and performant web applications using modern technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#work"
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
