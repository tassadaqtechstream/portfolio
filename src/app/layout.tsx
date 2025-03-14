import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tassadaq Hussain - Full Stack Developer | Laravel, Node.js, Next.js, React, TypeScript',
    description: 'Experienced Full Stack Developer specializing in Laravel, Node.js, Next.js, TypeScript, React, and Vue.js. Building scalable web and mobile applications with modern technologies.',
    keywords: 'Full Stack Developer, Laravel Developer, Node.js Developer, Next.js Developer, React Developer, TypeScript Developer, Vue.js Developer, Web Developer, Mobile App Developer, Software Engineer, API Development, JavaScript, PHP, Frontend Developer, Backend Developer, MERN Stack, Full Stack Engineer, Progressive Web Apps, Serverless, SaaS Development',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
        title: 'Tassadaq Hussain - Full Stack Developer | Laravel, Node.js, Next.js, React, TypeScript',
        description: 'Portfolio showcasing expertise in Full Stack Development with Laravel, Node.js, Next.js, TypeScript, React, and Vue.js.',
        url: 'https://tassadaqhussain.dev', // Replace with your actual domain
        type: 'website',
        images: [
            {
                url: '/og-image.png', // Ensure this image exists in the public folder
                width: 1200,
                height: 630,
                alt: 'Tassadaq Hussain - Full Stack Developer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@yourTwitterHandle', // Replace with your Twitter username
        creator: '@yourTwitterHandle',
        title: 'Tassadaq Hussain - Full Stack Developer',
        description: 'Expert in Laravel, Node.js, Next.js, TypeScript, React, and Vue.js. Building modern web and mobile applications.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    alternates: {
        canonical: 'https://tassadaqhussain.dev', // Ensure consistency in SEO
    },
    other: {
        'theme-color': '#ffffff',
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
