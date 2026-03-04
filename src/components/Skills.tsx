'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'

interface Skill {
    name: string;
    icon: string;
    level: number;
}

export default function Skills() {
    const skills: Skill[] = [
        { name: 'HTML5', icon: 'html5.svg', level: 90 },
        { name: 'CSS3', icon: 'css3.svg', level: 85 },
        { name: 'JavaScript', icon: 'javascript.svg', level: 88 },
        { name: 'TypeScript', icon: 'typescript.svg', level: 75 },
        { name: 'React', icon: 'react.svg', level: 85 },
        { name: 'Next.js', icon: 'nextjs.svg', level: 80 },
        { name: 'Tailwind CSS v4', icon: 'tailwindcss.svg', level: 95 },
        { name: 'Node.js', icon: 'nodejs.svg', level: 70 },
        { name: 'Git', icon: 'github.svg', level: 85 },
        { name: 'Figma', icon: 'figma.svg', level: 75 },
        { name: 'PHP', icon: 'php.svg', level: 90 },
        { name: 'Laravel', icon: 'laravel.svg', level: 85 },
        { name: 'React Native', icon: 'react.svg', level: 80 },
        { name: 'MySQL', icon: 'mysql.svg', level: 85 },
        { name: 'Prisma', icon: 'database.svg', level: 80 },
        { name: 'REST APIs', icon: 'globe.svg', level: 90 },
        { name: 'MongoDB', icon: 'mongodb.svg', level: 75 },
        { name: 'Elasticsearch', icon: 'elasticsearch.svg', level: 70 },
        { name: 'GraphQL', icon: 'graphql.svg', level: 80 },
        { name: 'Shopify', icon: 'shopify.svg', level: 75 },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-foreground mb-4">Core Expertise</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
                        My technical toolbelt, honed over a decade of building <span className="text-foreground font-semibold">performant systems</span>.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnim}
                            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group border border-white/5"
                        >
                            <div className="w-16 h-16 mb-4 relative drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={`/icons/${skill.icon}`}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-sm font-bold text-foreground mb-3 font-outfit">{skill.name}</h3>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.05) }}
                                    className="bg-primary h-full rounded-full"
                                />
                            </div>
                            <span className="text-[10px] mt-2 font-bold text-primary/60 uppercase tracking-tighter">{skill.level}% Proficiency</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

