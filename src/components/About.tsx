'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I am a <strong>Full Stack Developer</strong> specializing in <strong>React Native, Next.js, Laravel, and Node.js</strong>, passionate about building scalable web and mobile applications.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-2/5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/profile_image.jpeg"
                                alt="Tassadaq Hussain - Full Stack Developer"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-3/5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who Am I?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            I am <strong>Tassadaq Hussain</strong>, a Full Stack Developer with expertise in <strong>PHP, Laravel, Node.js, React, Next.js, Vue.js, and React Native</strong>.
                            I specialize in creating <strong>scalable, high-performance web and mobile applications</strong> that enhance user experience.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            With over <strong>10 years of experience</strong>, I have built <strong>eCommerce platforms, SaaS applications, mobile apps, and AI-integrated solutions</strong>.
                            I focus on <strong>clean code, performance optimization, and user-centric design</strong>.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            I specialize in building SaaS platforms, eCommerce solutions, and AI-integrated applications that enhance users&apos; experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                                <p className="text-gray-700 dark:text-gray-200 font-medium">Name:</p>
                                <p className="text-gray-600 dark:text-gray-300">Tassadaq Hussain</p>
                            </div>
                            <div>
                                <p className="text-gray-700 dark:text-gray-200 font-medium">Email:</p>
                                <p className="text-gray-600 dark:text-gray-300">engr.tassadaq@gmail.com</p>
                            </div>
                            <div>
                                <p className="text-gray-700 dark:text-gray-200 font-medium">Location:</p>
                                <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</p>
                            </div>
                            <div>
                                <p className="text-gray-700 dark:text-gray-200 font-medium">Availability:</p>
                                <p className="text-gray-600 dark:text-gray-300">Available for Freelance & Full-time Roles</p>
                            </div>
                        </div>

                        <a
                            href="/Tassadaq_Hussain_Resume.pdf"
                            download
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg inline-flex items-center transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}