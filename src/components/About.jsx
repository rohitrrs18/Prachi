import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Code2, GraduationCap, MapPin, Zap, User, Command } from 'lucide-react';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="about" ref={containerRef} className="py-40 relative bg-black overflow-hidden">
            <div className="noise absolute inset-0 opacity-10 pointer-events-none" />

            {/* Abstract Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col mb-24">
                    <span className="text-[10px] font-mono tracking-[0.5em] text-primary uppercase mb-6 block">The Architect</span>
                    <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-8">
                        ENGINEERING <br /> <span className="gradient-text">AESTHETICS</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                    {/* Main Narrative Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-8 bento-card bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col justify-center min-h-[450px]"
                    >
                        <div className="absolute top-10 right-10 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-75" />
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-150" />
                        </div>

                        <Command className="w-10 h-10 text-primary/40 mb-8" />
                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight tracking-tight">
                            I build systems that bridge the gap between <span className="text-white">logical precision</span> and <span className="text-white italic">visual harmony</span>.
                        </h3>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl font-light">
                            As a Web Developer and Engineering student at <span className="text-white border-b border-white/10 pb-1">AC Patil COE</span>,
                            my work is a constant exploration of how code can evoke emotion through performance and design.
                            I don't just build websites; I craft digital artifacts.
                        </p>
                    </motion.div>

                    {/* Parallax Image Card */}
                    <motion.div
                        style={{ y: y1 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 lg:col-span-4 bento-card !p-0 h-[500px] overflow-hidden group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                            alt="Prachi Koli"
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8">
                            <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">FOUNDER & LEAD</span>
                            <p className="text-2xl font-display font-bold text-white tracking-widest">PRACHI KOLI</p>
                        </div>
                    </motion.div>

                    {/* Technical Stats Card */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 lg:col-span-4 bento-card flex flex-col justify-between"
                    >
                        <Zap className="w-6 h-6 text-yellow-500 mb-8" />
                        <div>
                            <div className="text-5xl font-display font-black text-white mb-2">85+</div>
                            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em]">Lighthouse Performance Score</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">REACT ARCHITECTURE</span>
                                <span className="text-xs text-primary font-mono">[OPTIMIZED]</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">MOTION SYSTEMS</span>
                                <span className="text-xs text-primary font-mono">[STABLE]</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Values Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-8 bento-card grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="group">
                            <User className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-widest">Perspective</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">Balancing technical constraints with creative freedom to deliver unique results.</p>
                        </div>
                        <div className="group">
                            <GraduationCap className="w-5 h-5 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-widest">Precision</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">Engineering systems at AC Patil COE that stand the test of high-load data.</p>
                        </div>
                        <div className="group">
                            <Code2 className="w-5 h-5 text-accent mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-widest">Performance</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">Focusing on fluid interactions and lightning-fast delivery across all platforms.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
