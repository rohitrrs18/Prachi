import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#certificates' },
    { name: 'Resume', href: '#' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-8 px-6 py-3 rounded-full border transition-all duration-500 ${scrolled
                        ? 'glass border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
                        : 'bg-white/5 border-white/5 backdrop-blur-md'
                    }`}
            >
                <div className="text-xl font-display font-bold text-white tracking-tighter">
                    P<span className="text-primary">.</span>K
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

                <a
                    href="#contact"
                    className="text-xs font-mono uppercase tracking-widest text-primary hover:text-accent transition-colors"
                >
                    Connect
                </a>
            </motion.nav>
        </div>
    );
}
