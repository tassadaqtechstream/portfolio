'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    const [typingText, setTypingText] = useState('Full Stack Developer');

    useEffect(() => {
        const texts = ['Full Stack Developer', 'Backend Engineer', 'Frontend Specialist', 'React Native Developer'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            setTypingText(texts[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background ornaments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm"
                        >
                            Available for new opportunities
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-outfit text-foreground leading-[1.1] mb-6">
                            Crafting <span className="text-gradient">Digital</span> Experiences
                        </h1>

                        <div className="text-2xl sm:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-8 h-10 flex justify-center md:justify-start items-center">
                            <span>I am a&nbsp;</span>
                            <span className="typing-text text-foreground">{typingText}</span>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed font-inter">
                            Building scalable, high-performance web and mobile applications with
                            <span className="text-foreground font-medium"> Laravel, Node.js, Next.js, and Tailwind CSS v4</span>.
                            Turning complex problems into elegant digital solutions.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-5">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                            >
                                View Portfolio
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass-card px-8 py-4 text-foreground font-bold rounded-2xl border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[40px] rotate-6 opacity-20 animate-float" />
                            <div className="absolute inset-0 bg-gradient-to-bl from-accent to-primary rounded-[40px] -rotate-3 opacity-20 animate-float [animation-delay:1.5s]" />

                            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/profile_image.jpeg"
                                    alt="Tassadaq Hussain - Full Stack Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="glass absolute -right-6 top-20 p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block"
                            >
                                <div className="text-2xl font-bold text-primary">10+</div>
                                <div className="text-xs font-semibold uppercase tracking-wider opacity-60">Years Exp</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5 }}
                                className="glass absolute -left-10 bottom-20 p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-900 overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-[10px] font-bold mt-2 uppercase tracking-wide opacity-60">50+ Projects</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

