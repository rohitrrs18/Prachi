import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Trophy, Zap, BookOpen, ArrowLeft, Award, ExternalLink, Sparkles } from 'lucide-react';

const categories = [
    {
        id: 'sports',
        title: 'SPORTS',
        org: 'INTER-COLLEGE SPORTS COUNCIL',
        year: '2024',
        icon: Trophy,
        color: 'from-orange-500/10 to-red-500/10',
        accent: 'text-orange-500',
        border: 'border-orange-500/20',
        description: '10+ Certificates in football and athletics.'
    },
    {
        id: 'hackathons',
        title: 'HACKATHONS',
        org: 'VARIOUS TECH COMMITTEES',
        year: '2023',
        icon: Zap,
        color: 'from-primary/10 to-accent/10',
        accent: 'text-primary',
        border: 'border-primary/20',
        description: 'Participation and winning certificates in state-level hackathons.'
    },
    {
        id: 'courses',
        title: 'COURSES',
        org: 'ONLINE & COLLEGE CERTIFICATIONS',
        year: '2022',
        icon: BookOpen,
        color: 'from-secondary/10 to-blue-500/10',
        accent: 'text-secondary',
        border: 'border-secondary/20',
        description: 'Professional course completions in Web & App development.'
    }
];

const generateCertificates = (category) => {
    return Array.from({ length: 10 }).map((_, i) => ({
        id: `${category}-${i + 1}`,
        title: `${category.toUpperCase()} AWARD ${i + 1}`,
        date: 'Dec 2023',
        issuer: category === 'sports' ? 'AC Patil Sports Dept' : category === 'hackathons' ? 'TechFest Organizer' : 'Certify Authority',
        image: `https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1974&auto=format&fit=crop`
    }));
};

const TiltCard = ({ award, index, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(award)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`group relative h-[350px] cursor-pointer rounded-[2rem] bg-gradient-to-br ${award.color} ${award.border} border p-8 transition-shadow hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]`}
        >
            <div className="noise absolute inset-0 opacity-10" />

            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl glass border-white/5 ${award.accent}`}>
                        <award.icon className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">{award.year}</span>
                </div>

                <div>
                    <h3 className="text-3xl font-display font-black text-white hover:text-primary transition-colors mb-2 italic tracking-tighter">
                        {award.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-mono mb-6 leading-relaxed uppercase tracking-widest">
                        {award.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                        <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                        <span>CLICK TO VIEW COLLECTION</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Certificates() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const currentCertificates = selectedCategory ? generateCertificates(selectedCategory.id) : [];

    return (
        <section id="certificates" className="py-40 relative bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col mb-24 max-w-2xl">
                                <span className="text-[10px] font-mono tracking-[0.5em] text-primary uppercase mb-6 block">Hall of Recognition</span>
                                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-8">
                                    HONORS & <br /> <span className="text-stroke hover:text-white transition-all duration-700">AWARDS</span>.
                                </h2>
                                <p className="text-gray-500 text-lg border-l border-white/10 pl-8 ml-2">
                                    A curated collection of professional achievements, academic milestones, and athletic excellence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {categories.map((award, index) => (
                                    <TiltCard key={award.id} award={award} index={index} onClick={setSelectedCategory} />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="gallery"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                                <div className="flex items-center gap-8">
                                    <motion.button
                                        whileHover={{ x: -5 }}
                                        onClick={() => setSelectedCategory(null)}
                                        className="w-16 h-16 rounded-full glass flex items-center justify-center border-white/10 hover:bg-white hover:text-black transition-all"
                                    >
                                        <ArrowLeft className="w-6 h-6" />
                                    </motion.button>
                                    <div>
                                        <span className="text-[10px] font-mono tracking-widest text-primary uppercase mb-2 block">{selectedCategory.title} ARCHIVE</span>
                                        <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.8]">{selectedCategory.title}</h3>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Total Indexed: 10 Certificates</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                {currentCertificates.map((cert, idx) => (
                                    <motion.div
                                        key={cert.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05, duration: 0.5 }}
                                        className="group glass rounded-3xl p-4 border-white/5 hover:border-primary/40 transition-all cursor-crosshair"
                                    >
                                        <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                                            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                                <span className="text-[9px] font-mono text-white tracking-[0.2em]">VIEW ORIGINAL</span>
                                            </div>
                                        </div>
                                        <div className="px-2">
                                            <h4 className="text-xs font-bold text-white mb-1 truncate tracking-tight">{cert.title}</h4>
                                            <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">{cert.issuer}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter whitespace-nowrap">
                ACHIEVEMENTS ACHIEVEMENTS
            </div>
        </section>
    );
}
