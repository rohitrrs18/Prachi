import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ExternalLink, Code2 } from 'lucide-react';

const projects = [
    {
        id: "01",
        title: "MEDICORE",
        category: "MEDICAL SOLUTIONS",
        description: "A hybrid medical appointment system and health dashboard designed for seamless patient-doctor interactions and real-time scheduling.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
    },
    {
        id: "02",
        title: "EDUTECH",
        category: "EDUCATIONAL PLATFORM",
        description: "An interactive educational application featuring course tracking, student dashboards, and collaborative learning environments.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        tags: ["NextJS", "Firebase", "Framer Motion", "Tailwind"],
    },
    {
        id: "03",
        title: "PK PORTFOLIO",
        category: "VISUAL SYSTEMS",
        description: "The core architecture of the Prachi Koli portfolio, showcasing high-impact design and technical precision.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tags: ["React", "Custom Hooks", "Animation", "Bento"],
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-primary uppercase mb-4 block">Selected Works</span>
                        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
                            PIONEERING <span className="gradient-text">SYSTEMS</span>.
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-500 font-mono text-xs text-right max-w-[200px]">
                            EACH PROJECT IS A UNIQUE BLEND OF INFRASTRUCTURE AND AESTHETICS.
                        </p>
                    </div>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}
                        >
                            <div className="flex-1 relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] glass group-hover:border-primary/30 transition-all duration-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent group-hover:opacity-40 transition-opacity" />

                                <div className="absolute bottom-10 left-10 flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <Globe className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-display font-outline font-black text-stroke group-hover:text-primary transition-colors text-white">
                                        {project.id}
                                    </span>
                                    <div className="h-[1px] w-12 bg-white/10" />
                                    <span className="text-[10px] font-mono tracking-widest text-primary font-bold">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-display font-bold group-hover:gradient-text transition-all duration-500">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 text-[10px] font-mono border border-white/5 text-gray-400 group-hover:border-primary/20 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
