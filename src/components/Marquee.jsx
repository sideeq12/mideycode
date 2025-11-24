import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const marqueeVariants = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="py-20 overflow-hidden bg-dark-900 border-y border-white/5">
            <div className="relative flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex gap-16 text-8xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <span>FRONTEND DEVELOPER</span>
                    <span>UI/UX DESIGNER</span>
                    <span>CREATIVE CODER</span>
                    <span>FRONTEND DEVELOPER</span>
                    <span>UI/UX DESIGNER</span>
                    <span>CREATIVE CODER</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
