import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ISO27001 from '@/components/ISO27001';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ISO27001 />
      <Contact />
    </div>
  );
}
