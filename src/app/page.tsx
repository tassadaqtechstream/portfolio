import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}