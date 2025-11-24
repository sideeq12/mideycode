import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "PMCRG (Pervasive Mobile Computing Laboratory)",
        role: "Frontend Engineer",
        period: "June 2024 - Present",
        tech: ["React.js", "TailwindCSS", "Firebase", "Chart.js"],
        description: [
            "Worked closely with teams to create a scalable hostel management system, utilizing a JavaScript MVC framework and React.js.",
            "Built an inter-university file-sharing platform with role-based access control, supporting file upload, download, view-only permissions, and admin-level management.",
            "Integrated dynamic data fetching from APIs and implemented Firebase for secure PDF storage and retrieval.",
            "Building a VR simulation tool for brain surgery training, leveraging Three.js and WebXR, aimed at improving medical student education through immersive learning."
        ]
    },
    {
        company: "VenWorld Global",
        role: "Fullstack Developer",
        period: "Feb 2023 - Aug 2024",
        tech: ["Next.js", "Three.js", "RESTful API", "Node.js"],
        description: [
            "Built responsive, accessible UIs using React.js, TypeScript, and TailwindCSS, ensuring high usability across devices.",
            "I oversee the recent virtual cohort program for frontend candidates, including project assignments and the grading system."
        ]
    },
    {
        company: "OAU ICT, Ile-Ife, Nigeria (SIWES)",
        role: "Frontend Engineer",
        period: "SIWES Internship",
        tech: ["JavaScript MVC", "React.js"],
        description: [
            "Worked closely with teams to create a scalable hostel management system, utilizing a JavaScript MVC framework and React.js."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-dark-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Experience</h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 group"
                        >
                            {/* Period / Date */}
                            <div className="lg:col-span-3">
                                <span className="text-xl font-medium text-gray-400 group-hover:text-primary transition-colors">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-9">
                                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">
                                    {exp.role}
                                </h3>
                                <h4 className="text-xl text-gray-400 mb-6 font-medium">
                                    {exp.company}
                                </h4>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {exp.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-primary-light"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
