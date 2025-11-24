import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-dark-900 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Let's Work Together</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Have a project in mind? I'm always open to discussing new opportunities and interesting projects.
                    </p>

                    <a
                        href="mailto:smartbraeen@gmail.com"
                        className="inline-block text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent hover:opacity-80 transition-opacity mb-16"
                    >
                        smartbraeen@gmail.com
                    </a>

                    <div className="flex justify-center gap-8">
                        {[
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Twitter, href: "#" },
                            { icon: Mail, href: "mailto:smartbraeen@gmail.com" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ y: -5 }}
                                className="p-4 bg-white/5 rounded-full text-gray-300 hover:text-white hover:bg-primary transition-all duration-300"
                            >
                                <item.icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <footer className="mt-32 pt-8 border-t border-white/5 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Midey. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
