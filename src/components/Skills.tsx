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
        { name: 'Tailwind CSS', icon: 'tailwindcss.svg', level: 90 },
        { name: 'Node.js', icon: 'nodejs.svg', level: 70 },
        { name: 'Git', icon: 'github.svg', level: 85 },
        { name: 'Figma', icon: 'figma.svg', level: 75 },
        { name: 'PHP', icon: 'php.svg', level: 90 },
        { name: 'Laravel', icon: 'laravel.svg', level: 85 },
        { name: 'React Native', icon: 'react.svg', level: 80 },
        { name: 'MySQL', icon: 'mysql.svg', level: 85 },
        { name: 'MongoDB', icon: 'mongodb.svg', level: 75 },
        { name: 'Elasticsearch', icon: 'elasticsearch.svg', level: 70 },
        { name: 'GraphQL', icon: 'graphql.svg', level: 80 },
        { name: 'Shopify', icon: 'shopify.svg', level: 75 },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface SkillCardProps {
    skill: Skill;
    index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
    console.log(skill);
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image src={`/icons/${skill.icon}`} alt={skill.name} width={`50`} height={`50`} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </motion.div>
    );
}
