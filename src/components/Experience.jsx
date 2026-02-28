import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Activity } from 'lucide-react';

const stats = [
    { label: 'Uptime', value: '99.9%', color: 'text-green-500' },
    { label: 'Latency', value: '14ms', color: 'text-primary' },
    { label: 'Throughput', value: '8.4Gb/s', color: 'text-secondary' },
    { label: 'Status', value: 'Stable', color: 'text-accent' },
];

const developments = [
    { title: 'CORE PLATFORM', desc: 'React, Vite, Node Architecture', status: 'In Review' },
    { title: 'SYSTEM DESIGN', desc: 'Bento UI, Motion Systems', status: 'Deployed' },
    { title: 'CLOUD INFRA', desc: 'Vercel, AWS Deployment', status: 'Testing' },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative bg-black">
            <div className="noise absolute inset-0 opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

                    {/* Dashboard Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-4 bento-card flex flex-col md:flex-row justify-between items-center bg-white/5"
                    >
                        <div className="flex items-center gap-6 mb-4 md:mb-0">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                <Terminal className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-display font-bold">System Architecture</h2>
                                <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">v2.0.4 BUILD STABLE</p>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            {stats.map(stat => (
                                <div key={stat.label} className="text-center">
                                    <div className={`text-xl font-display font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-[10px] font-mono text-gray-500 uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Grid */}
                    <div className="lg:col-span-2 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bento-card bg-primary/10 border-primary/20"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="px-3 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-mono font-bold">CURRENT_FOCUS</div>
                                <Activity className="w-5 h-5 text-primary animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2">Frontend Developer</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Specializing in high-performance React architectures and fluid Framer Motion systems.
                                Focusing on micro-interactions and visual precision at 60fps.
                            </p>
                            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '85%' }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bento-card"
                        >
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Database className="w-4 h-4 text-secondary" />
                                Backend Integration
                            </h3>
                            <div className="space-y-3">
                                {['Node.js Serverless', 'PostgreSQL / Prisma', 'Redis Caching'].map(item => (
                                    <div key={item} className="flex justify-between text-xs font-mono border-b border-white/5 pb-2">
                                        <span className="text-gray-400">{item}</span>
                                        <span className="text-secondary tracking-widest">[OK]</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bento-card flex-1"
                        >
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Cloud className="w-4 h-4 text-accent" />
                                Latest Deployments
                            </h3>
                            <div className="space-y-4">
                                {developments.map(dev => (
                                    <div key={dev.title} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 transition-all flex justify-between items-center group">
                                        <div>
                                            <div className="text-sm font-bold group-hover:text-accent transition-colors">{dev.title}</div>
                                            <div className="text-[10px] text-gray-500 font-mono mt-1">{dev.desc}</div>
                                        </div>
                                        <div className="text-[10px] font-mono px-2 py-1 rounded-md bg-accent/10 text-accent uppercase font-bold">
                                            {dev.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
