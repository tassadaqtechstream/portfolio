'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenuOutline, IoCloseOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from 'next-themes';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5'
                    : 'pt-6 bg-transparent'
                }`}
        >
            <div className="flex justify-center w-full pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 lg:px-8 border ${isScrolled
                            ? 'w-[90%] max-w-5xl py-2.5 bg-white dark:bg-gray-950 border-black/5 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-full'
                            : 'w-[95%] max-w-7xl py-5 bg-transparent border-transparent'
                        }`}
                >
                    <Link href="/" className="flex items-center group">
                        <span className="text-xl sm:text-2xl font-black font-outfit tracking-tighter text-slate-900 dark:text-white">
                            Tassadaq<span className="text-primary group-hover:animate-pulse">.dev</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold font-outfit text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary transition-all active:scale-90"
                        >
                            {theme === 'dark' ? <IoSunnyOutline size={18} /> : <IoMoonOutline size={18} />}
                        </button>

                        <Link
                            href="#contact"
                            className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full text-sm hover:scale-105 transition-transform"
                        >
                            Hire Me
                        </Link>
                    </div>

                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-full"
                        >
                            {theme === 'dark' ? <IoSunnyOutline size={18} /> : <IoMoonOutline size={18} />}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-900 dark:text-white"
                        >
                            {isMobileMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 md:hidden pointer-events-auto"
                    >
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-3xl space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-2xl font-bold font-outfit text-slate-900 dark:text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-4 bg-primary text-white text-center rounded-2xl font-bold text-lg block"
                                >
                                    Let&apos;s Talk
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
