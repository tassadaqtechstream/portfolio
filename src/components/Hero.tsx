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
        <section id="hero" className="pt-20 md:pt-0 md:h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">Hello, I'm</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            Tassadaq Hussain
                        </h1>
                        <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-8">
                            <span className="typing-text">{typingText}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 mb-8">
                            Experienced in building **scalable web and mobile applications** using **Laravel, Node.js, Next.js, React, Vue.js, and React Native**. Passionate about modern software architecture and optimizing performance.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-transparent border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
                            >
                                Contact Me
                            </a>
                            <a
                                href="/Tassadaq_Hussain_Resume.pdf"
                                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                                download
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 mt-12 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full h-72 sm:h-96 md:h-[450px]">
                            <Image
                                src="/hero-image.svg"
                                alt="Tassadaq Hussain - Full Stack Developer"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
