import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundAnimation from './components/Particles';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-300 selection:bg-cyan-300 selection:text-cyan-900 overflow-x-hidden">
      <BackgroundAnimation />
      <CustomCursor />
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;