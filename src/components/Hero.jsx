import React from 'react';
import BackgroundAnimation from './Particles';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import FloatingShape from './FloatingShape';

const Hero = () => {
    return (
        <div name="home" className="w-full min-h-[100svh] bg-transparent flex flex-col justify-center relative overflow-hidden px-2 sm:px-4 md:px-8" style={{ perspective: 1000 }}>
                <BackgroundAnimation />
                <FloatingShape />

    <div className="max-w-screen-xl mx-auto px-2 sm:px-8 flex flex-col justify-center h-full z-20 relative w-full lg:w-[60%] pointer-events-auto">
        <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: 'anticipate' }}
        >
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                className="text-cyan-400 text-base sm:text-lg md:text-xl font-mono mb-4 tracking-wide"
            >
                Hi, my name is
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-100 mb-2 tracking-tight"
            >
                Satish Chaudhary (DarkCoder).
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                className="text-2xl sm:text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight flex flex-col sm:flex-row gap-2"
            >
                <span>I am a</span>
                <span className="text-cyan-400">
                    <TypeAnimation
                        sequence={[
                            'Game Developer.',
                            2000,
                            'Software Engineer.',
                            2000,
                            'Creative Coder.',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                className="text-slate-400 py-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed"
            >
                I build scalable software and interactive applications, combining clean backend
                logic with modern user experiences.
            </motion.p>

            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                <motion.div
                    whileHover={{ scale: 1.08, y: -5, x: 5, rotateZ: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                >
                    <Link to="projects" smooth duration={500} offset={-80} className="group text-slate-950 font-bold px-8 py-4 my-2 flex items-center rounded-full bg-cyan-400 cursor-pointer hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300">
                        View Projects
                        <span className="group-hover:rotate-90 duration-300 group-hover:translate-x-1">
                            <HiArrowNarrowRight className="ml-2 text-xl" />
                        </span>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.08, y: -5, x: -5, rotateZ: -2 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                >
                    <a href="mailto:satishchaudhary6336@gmail.com" className="text-cyan-400 px-8 py-4 my-2 flex items-center rounded-full border border-cyan-400 cursor-pointer hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 font-medium">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 w-full flex justify-center z-10"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer animate-bounce text-slate-500 hover:text-cyan-400 transition-colors">
            <div className="w-[30px] h-[50px] rounded-full border-2 border-current flex justify-center items-start p-2">
                <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-1 h-3 bg-current rounded-full"
                />
            </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
