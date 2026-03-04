import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <div className="relative">
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
