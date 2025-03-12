'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import { IoMoonOutline, IoSunnyOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white dark:bg-gray-900 shadow-lg py-3' : 'bg-transparent py-5'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        Tassadaq Hussain
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="#about" text="About" />
                        <NavLink href="#skills" text="Skills" />
                        <NavLink href="#projects" text="Projects" />
                        <NavLink href="#contact" text="Contact" />
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <IoSunnyOutline className="text-yellow-400 text-xl" />
                            ) : (
                                <IoMoonOutline className="text-gray-700 text-xl" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <IoSunnyOutline className="text-yellow-400 text-xl" />
                            ) : (
                                <IoMoonOutline className="text-gray-700 text-xl" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <IoCloseOutline className="text-gray-700 dark:text-gray-200 text-2xl" />
                            ) : (
                                <IoMenuOutline className="text-gray-700 dark:text-gray-200 text-2xl" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
                    <MobileNavLink href="#about" text="About" setIsOpen={setIsOpen} />
                    <MobileNavLink href="#skills" text="Skills" setIsOpen={setIsOpen} />
                    <MobileNavLink href="#projects" text="Projects" setIsOpen={setIsOpen} />
                    <MobileNavLink href="#contact" text="Contact" setIsOpen={setIsOpen} />
                </div>
            </div>
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    text: string;
}

function NavLink({ href, text }: NavLinkProps) {
    return (
        <Link href={href} className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
            {text}
        </Link>
    );
}

interface MobileNavLinkProps extends NavLinkProps {
    setIsOpen: (isOpen: boolean) => void;
}

function MobileNavLink({ href, text, setIsOpen }: MobileNavLinkProps) {
    return (
        <Link
            href={href}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(false)}
        >
            {text}
        </Link>
    );
}