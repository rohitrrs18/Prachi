import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden mesh-gradient">
            <div className="noise absolute inset-0 z-0" />

            {/* Decorative Blur Spheres */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary/80">
                        Digital Experience Engineer
                    </span>
                </motion.div>

                <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.8] tracking-tighter mb-8">
                    <motion.span
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-white"
                    >
                        PRACHI
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="block text-stroke hover:text-white transition-all duration-700 cursor-default"
                    >
                        KOLI
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
                >
                    <p className="text-gray-400 max-w-md text-left text-sm md:text-base leading-relaxed border-l border-white/10 pl-6">
                        Pioneering the next generation of web interfaces with a focus on fluid animations,
                        technical precision, and human-centric design. Currently at <span className="text-white">AC Patil COE</span>.
                    </p>

                    <div className="flex gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 group"
                        >
                            EXPLORE WORK
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-12 flex flex-col gap-4 z-10">
                <div className="w-px h-12 bg-gradient-to-t from-primary to-transparent" />
                <span className="text-[10px] font-mono text-gray-500 rotate-180 [writing-mode:vertical-lr]">SCROLL TO DISCOVER</span>
            </div>

            <div className="absolute bottom-12 right-12 text-right z-10 hidden md:block">
                <span className="text-[10px] font-mono text-gray-500 block mb-1">LOCAL TIME</span>
                <span className="text-sm font-bold text-white uppercase">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST</span>
            </div>
        </section>
    );
}
