'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: 'web' | 'app' | 'ui';
    technologies: string[];
    liveUrl: string;
    sourceUrl: string;
}

export default function Projects() {
    const [filter, setFilter] = useState<'all' | 'web' | 'app' | 'ui'>('all');

    const projects: Project[] = [
        {
            id: 0,
            title: 'Some - Social Media Hub',
            description: 'A powerful full-stack social media management platform built with Tailwind CSS v4, allowing users to post content to multiple platforms simultaneously with a single click. Features a modern dashboard for managing drafts, reviews, and publishing schedules.',
            image: '/projects/some.png',
            category: 'web',
            technologies: ['Next.js', 'Prisma', 'Tailwind CSS v4', 'Social APIs'],
            liveUrl: 'https://some.k2x.tech/',
            sourceUrl: '',
        },
        {
            id: 1,
            title: 'Easypaisa Karobar',
            description: 'Professional dashboard interface for Easypaisa Karobar Merchant Portal, featuring structured transactions and user insights.',
            image: '/projects/easypaisa.png',
            category: 'web',
            technologies: ['React js', 'Bootstrap'],
            liveUrl: 'https://merchantportal.dukan.pk/',
            sourceUrl: '',
        },
        {
            id: 2,
            title: 'Clinic Management',
            description: 'A modern healthcare system dashboard for EIXSYS, providing real-time insights into clinic locations and specialists.',
            image: '/projects/provider.png',
            category: 'web',
            technologies: ['Laravel', 'Bootstrap', 'Jquery'],
            liveUrl: 'https://provider.click4md.com/',
            sourceUrl: '',
        },
        {
            id: 3,
            title: 'Portfolio Design',
            description: 'A sleek and customizable portfolio app to showcase your work, skills, and achievements professionally.',
            image: '/projects/portfolio.png',
            category: 'ui',
            technologies: ['Figma', 'Tailwind CSS v4', 'Next js'],
            liveUrl: 'https://tassadaq.vercel.app/',
            sourceUrl: '',
        },
        {
            id: 4,
            title: 'Aurora Admin Panel',
            description: 'Advanced automation dashboard for managing sneaker bot tasks and tracking checkouts with real-time analytics.',
            image: '/projects/aurora.png',
            category: 'ui',
            technologies: ['Html5', 'Bootstrap'],
            liveUrl: 'https://example.com',
            sourceUrl: '',
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-foreground mb-4">Featured Work</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
                        A selection of <span className="text-foreground font-semibold">high-impact projects</span> I&apos;ve built for global clients.
                    </p>
                </motion.div>

                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 glass rounded-2xl">
                        {['all', 'web', 'app', 'ui'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'text-gray-500 hover:text-foreground'
                                    }`}
                            >
                                {cat === 'all' ? 'All' : cat === 'web' ? 'Web' : cat === 'app' ? 'Apps' : 'UI Design'}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="glass-card flex flex-col rounded-[2.5rem] overflow-hidden group border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-xl hover:shadow-2xl"
        >
            <div className="relative h-72 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="flex gap-4 w-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            className="flex-1 py-4 bg-primary text-white font-black text-center rounded-2xl text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1"
                        >
                            Live Experience
                        </a>
                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                className="flex-1 py-4 bg-white/10 backdrop-blur-md text-white font-black text-center rounded-2xl text-sm border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
                            >
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-6">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                    </span>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                    </div>
                </div>

                <h3 className="text-2xl font-black font-outfit text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-inter font-medium line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 text-[10px] font-black bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-xl border border-slate-200 dark:border-white/10 uppercase tracking-widest"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
