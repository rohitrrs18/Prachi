import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="glass rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12 border-white/10">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-6xl font-calligraphy text-primary drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-4">PK</div>
                        <p className="text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase">
                            Designed for impact. Developed for performance.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-8">
                            {['GITHUB', 'LINKEDIN', 'TWITTER', 'INSTAGRAM'].map(link => (
                                <a key={link} href="#" className="text-[10px] font-mono text-gray-500 hover:text-white transition-colors tracking-widest">
                                    {link}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <p className="text-[10px] font-mono text-gray-600">
                                &copy; 2024 PORTFOLIO CORE v2.0
                            </p>
                            <a
                                href="https://rohitrrs.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:border-primary/40 transition-all"
                            >
                                <span className="text-[10px] font-mono text-white/50 group-hover:text-white transition-colors">MADE BY ROHIT</span>
                                <ExternalLink className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
