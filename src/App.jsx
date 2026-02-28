import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    // Smooth scroll behavior
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    // Global cursor glow
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white custom-scrollbar relative">
            {/* Interactive Cursor Glow */}
            <div className="cursor-glow fixed inset-0 z-[100] pointer-events-none" />

            {/* Global Noise Overlay */}
            <div className="noise fixed inset-0 z-[100] opacity-[0.03] pointer-events-none" />

            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)]" />
            </div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Certificates />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
