'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-foreground mb-4">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
                        Passionate about building <span className="text-primary font-medium">scalable</span> and <span className="text-secondary font-medium">impactful</span> digital solutions that solve real-world problems.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        className="lg:w-2/5 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/profile_image.jpeg"
                                    alt="Tassadaq Hussain"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-3/5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold font-outfit text-primary mb-6">Who Am I?</h3>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 font-inter text-lg leading-relaxed">
                            <p>
                                I am <span className="text-foreground font-semibold">Tassadaq Hussain</span>, a seasoned Full Stack Developer with over <span className="text-foreground font-semibold">10 years of experience</span> in the tech industry.
                                My expertise spans across the entire development lifecycle, from conceptualizing complex architectures to deploying high-performance applications.
                            </p>
                            <p>
                                I specialize in <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">Laravel, Node.js, and React</span> ecosystems.
                                My approach is centerd on crafting clean, maintainable code and building intuitive user experiences that bridge the gap between business goals and technical excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                            {[
                                { label: 'Experience', value: '10+ Years' },
                                { label: 'Projects', value: '50+ Completed' },
                                { label: 'Location', value: 'Lahore, Pakistan' },
                                { label: 'Availability', value: 'Ready for New Roles' }
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-sm font-semibold text-primary/70 uppercase tracking-wider">{item.label}</span>
                                    <span className="text-lg font-bold text-foreground">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <motion.a
                                href="/Tassadaq_Hussain_Resume.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-foreground text-background font-bold rounded-2xl inline-flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                </svg>
                                Download CV
                            </motion.a>
                            <motion.button
                                onClick={() => document.getElementById('contact')?.scrollIntoView()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass text-foreground font-bold rounded-2xl border border-foreground/10 hover:bg-foreground/5 transition-colors"
                            >
                                My Story
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
