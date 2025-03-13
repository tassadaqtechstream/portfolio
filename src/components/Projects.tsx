'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
            id: 1,
            title: 'Easypaisa Karobar',
            description: 'Professional and high-resolution dashboard interface for the Easypaisa Karobar Merchant Portal, featuring a clean UI, structured payment transactions, and user management insights for seamless business operations.',
            image: '/projects/easypaisa.png',
            category: 'web',
            technologies: ['React js', 'Bootstrap'],
            liveUrl: 'https://merchantportal.dukan.pk/',
            sourceUrl: '',
        },
        {
            id: 2,
            title: 'Clinic Management',
            description: 'A clean and modern healthcare system dashboard for EIXSYS, providing real-time insights into clinic locations, providers, specialists, and monthly costs with an intuitive and user-friendly interface.',
            image: '/projects/provider.png',
            category: 'web',
            technologies: ['Laravel', 'Bootstrap','Jquery'],
            liveUrl: 'https://provider.click4md.com/',
            sourceUrl: '',
        },
        {
            id: 3,
            title: 'Portfolio Design',
            description: 'A minimalist portfolio design for photographers and artists.',
            image: '/projects/project2.jpg',
            category: 'ui',
            technologies: ['Figma', 'Adobe XD'],
            liveUrl: 'https://example.com',
            sourceUrl: 'https://github.com',
        },
        {
            id: 4,
            title: 'Task Management App',
            description: 'A productivity app for managing tasks and schedules.',
            image: '/projects/project3.jpg',
            category: 'app',
            technologies: ['React', 'Firebase', 'Tailwind CSS'],
            liveUrl: 'https://example.com',
            sourceUrl: 'https://github.com',
        },
        {
            id: 5,
            title: 'Restaurant Website',
            description: 'A beautiful website for a local restaurant with online ordering.',
            image: '/projects/project4.jpg',
            category: 'web',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            liveUrl: 'https://example.com',
            sourceUrl: 'https://github.com',
        },
        {
            id: 6,
            title: 'Travel Mobile App',
            description: 'Travel planning mobile app with itinerary management.',
            image: '/projects/project5.jpg',
            category: 'app',
            technologies: ['React Native', 'Node.js', 'MongoDB'],
            liveUrl: 'https://example.com',
            sourceUrl: 'https://github.com',
        },
        {
            id: 7,
            title: 'Dashboard UI Kit',
            description: 'A comprehensive UI kit for building admin dashboards.',
            image: '/projects/project6.jpg',
            category: 'ui',
            technologies: ['Figma', 'Sketch'],
            liveUrl: 'https://example.com',
            sourceUrl: 'https://github.com',
        },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore my latest work and projects. Each project represents a unique challenge and solution.
                    </p>
                </motion.div>

                <div className="flex justify-center mb-10">
                    <div className="flex flex-wrap gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
                        <FilterButton active={filter === 'web'} onClick={() => setFilter('web')}>Web</FilterButton>
                        <FilterButton active={filter === 'app'} onClick={() => setFilter('app')}>App</FilterButton>
                        <FilterButton active={filter === 'ui'} onClick={() => setFilter('ui')}>UI Design</FilterButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface FilterButtonProps {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

function FilterButton({ children, active, onClick }: FilterButtonProps) {
    return (
        <button
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                active
                    ? 'bg-indigo-600 text-white'
                    : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="relative h-60 w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 rounded-full mb-2">
          {project.category === 'web' ? 'Web Development' :
              project.category === 'app' ? 'App Development' : 'UI Design'}
        </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <div className="flex justify-between">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium inline-flex items-center transition-colors"
                    >
                        Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    {
                        project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium inline-flex items-center transition-colors"
                            >
                                Source Code
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </a>
                        )
                    }

                </div>
            </div>
        </motion.div>
    );
}