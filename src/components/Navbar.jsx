import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Logo - Fixed Top Left */}
            <div className="fixed top-6 left-6 z-50 mix-blend-difference">
                <a href="#" className="text-2xl font-heading font-bold tracking-tighter text-white">
                    MIDEY<span className="text-primary">.</span>
                </a>
            </div>

            {/* Desktop Vertical Menu - Fixed Right */}
            <nav className="hidden md:flex fixed top-0 right-0 h-screen w-32 flex-col justify-center items-center z-40 bg-transparent">
                <div className="flex flex-col space-y-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="group relative flex items-center justify-end"
                        >
                            <span className="writing-vertical-rl text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase transform rotate-180">
                                {link.name}
                            </span>
                            <span className="absolute right-full mr-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
                </div>

                {/* Decorative Line */}
                <div className="absolute right-8 top-0 bottom-0 w-px bg-white/10 -z-10" />
            </nav>

            {/* Mobile Menu Button - Fixed Top Right */}
            <button
                className="md:hidden fixed top-6 right-6 z-50 text-white mix-blend-difference"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-dark-900 z-40 md:hidden flex items-center justify-center"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-heading font-bold text-white hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
