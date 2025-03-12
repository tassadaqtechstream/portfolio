import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tassadaq Hussain - Full Stack Developer & React Native Expert',
    description: 'Personal portfolio of Tassadaq Hussain, a Full Stack Developer specializing in Laravel, Node.js, Next.js, React, Vue.js, and React Native.',
    keywords: 'Tassadaq Hussain, Full Stack Developer, Laravel, Node.js, React Native, Next.js, Vue.js, PHP, Web Developer, Mobile Developer',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
        title: 'Tassadaq Hussain - Full Stack Developer & React Native Expert',
        description: 'Portfolio showcasing my work in Full Stack Development with Laravel, Node.js, Next.js, React, Vue.js, and React Native.',
        url: 'https://tassadaqhussain.dev', // Change this to your domain
        type: 'website',
        images: [
            {
                url: '/og-image.png', // Make sure to add this image in your public folder
                width: 1200,
                height: 630,
                alt: 'Tassadaq Hussain Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@yourTwitterHandle', // Change this to your Twitter username
        creator: '@yourTwitterHandle',
        title: 'Tassadaq Hussain - Full Stack Developer',
        description: 'Portfolio showcasing my work in Laravel, Node.js, Next.js, React, Vue.js, and React Native.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="canonical" href="https://tassadaqhussain.dev" /> {/* Update to your actual domain */}
        </head>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
