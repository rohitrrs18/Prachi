import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-5 flex flex-col justify-between py-8">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8">
                                LET'S <br /> <span className="gradient-text">CONNECT</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-12">
                                Available for internships, freelance projects, and technical collaborations.
                                Response time: {'<'} 24 hours.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-gray-500 uppercase">Direct Email</div>
                                    <div className="text-white font-bold">prachi.koli@acpatil.edu</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[Github, Linkedin, Twitter].map((Icon, idx) => (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        href="#"
                                        className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center hover:border-primary/50 transition-all"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bento-card !p-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-all text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-all text-white" />
                                </div>
                            </div>
                            <div className="space-y-2 mb-12">
                                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Project Details</label>
                                <textarea rows="4" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-all text-white resize-none" />
                            </div>

                            <button className="group w-full py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all duration-500">
                                INITIATE CONTACT
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.form>
                    </div>

                </div>
            </div>
        </section>
    );
}
