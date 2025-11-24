import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Tech Stack": [
        "React", "Next.js", "TailwindCSS", "Node.js",
        "Express.js", "WebGL", "Three.js", "MongoDB", "Supabase"
    ],
    "Languages": [
        "Python", "TypeScript", "JavaScript"
    ],
    "Focus": [
        "Web Design", "SEO Expertise", "Marketing Strategies",
        "Social Media Ads", "Webflow", "WordPress"
    ]
};

const About = () => {
    return (
        <section id="about" className="py-32 bg-dark-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">About & Skills</h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="flex flex-col">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group border-t border-white/10 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-20 transition-colors hover:bg-white/5 px-4 md:px-8 -mx-4 md:-mx-8 rounded-xl"
                        >
                            <div className="w-full md:w-1/3">
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-500 group-hover:text-white transition-colors">
                                    {category}
                                </h3>
                            </div>

                            <div className="w-full md:w-2/3">
                                <div className="flex flex-wrap gap-x-8 gap-y-4">
                                    {items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="text-xl md:text-2xl text-gray-400 group-hover:text-primary transition-colors font-light"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom border for the last item */}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    );
};

export default About;
