import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoHeartOutline } from 'react-icons/io5';

export default function Footer() {
    return (
        <footer className="py-20 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-black font-outfit tracking-tighter text-foreground mb-6 block">
                            Tassadaq<span className="text-primary">.dev</span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm font-inter text-lg">
                            Building digital experiences with <span className="text-foreground font-medium">precision</span> and <span className="text-foreground font-medium">passion</span>. Crafting scalable solutions for global visionary clients.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/tassadaqtechstream" target="_blank" className="h-10 w-10 glass rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all"><IoLogoGithub /></a>
                            <a href="https://linkedin.com/in/tassadaqhussain" target="_blank" className="h-10 w-10 glass rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all"><IoLogoLinkedin /></a>
                            <a href="#" target="_blank" className="h-10 w-10 glass rounded-lg flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all"><IoLogoTwitter /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-inter">
                        © {new Date().getFullYear()} Tassadaq Hussain. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm font-inter flex items-center gap-2">
                        Designed with <IoHeartOutline className="text-primary" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
