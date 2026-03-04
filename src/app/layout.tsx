import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
    title: {
      default: 'Tassadaq Hussain | Full Stack Developer Portfolio',
      template: '%s | Tassadaq Hussain'
    },
    description: 'Expert Full Stack Developer specializing in Laravel, Node.js, Next.js, and React Native. Explore my portfolio for scalable web and mobile solutions.',
    keywords: ['Full Stack Developer', 'Laravel Expert', 'Next.js Developer', 'React Native Developer', 'Node.js Specialist', 'Software Engineer Portfolio', 'Tassadaq Hussain', 'Web Development Lahore'],
    authors: [{ name: 'Tassadaq Hussain', url: 'https://tassadaqhussain.dev' }],
    creator: 'Tassadaq Hussain',
    publisher: 'Tassadaq Hussain',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://tassadaqhussain.dev'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
        title: 'Tassadaq Hussain - Full Stack Developer Portfolio',
        description: 'Building high-performance web and mobile applications with modern technologies.',
        url: 'https://tassadaqhussain.dev',
        siteName: 'Tassadaq Hussain Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Tassadaq Hussain - Full Stack Developer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tassadaq Hussain | Full Stack Developer',
        description: 'Expert in building scalable applications with Laravel, Next.js, and React Native.',
        images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Tassadaq Hussain",
      "url": "https://tassadaqhussain.dev",
      "jobTitle": "Full Stack Developer",
      "description": "Expert Full Stack Developer specializing in Laravel, Node.js, Next.js, and React Native.",
      "knowsAbout": ["Web Development", "Mobile App Development", "Laravel", "Next.js", "React Native", "Node.js", "TypeScript"],
      "sameAs": [
        "https://linkedin.com/in/tassadaqhussain", // Update with actual links
        "https://github.com/tassadaqhussain"
      ]
    };

    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={`font-sans animated-bg min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

