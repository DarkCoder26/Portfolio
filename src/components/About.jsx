import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiTarget } from 'react-icons/fi';

const About = () => {
  const features = [
    { icon: FiCode, title: "Clean Code", desc: "Writing scalable, readable, and optimized logic for modern apps." },
    { icon: FiLayers, title: "Full Stack", desc: "Building seamless user experiences backed by robust APIs." },
    { icon: FiCpu, title: "Game Dev", desc: "Crafting interactive digital worlds using Godot and C++." },
    { icon: FiTarget, title: "Problem Solver", desc: "Hackathon-proven ability to tackle real-world challenges." },
  ];

  return (
    <motion.div 
      name="about" 
      className="w-full min-h-screen bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative overflow-hidden z-10 transition-colors duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "anticipate" }}
        className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" 
      />
      
      <div className="flex flex-col justify-center items-center w-full h-full px-2 sm:px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="max-w-4xl w-full mb-10 md:mb-16 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold inline border-b-4 border-cyan-400 pb-2 text-slate-100"
          >
            About Me
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 px-0 md:px-4 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, staggerChildren: 0.22 }}
            className="flex flex-col justify-start"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 }}
              className="mb-4 md:mb-6 text-base sm:text-lg lg:text-xl text-cyan-400 font-medium leading-relaxed"
            >
              Hi. I'm Satish, nice to meet you. Please take a look around.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-400 space-y-3 md:space-y-4"
            >
              <p>
                I am a fresher developer currently pursuing BCA (2nd Year) with a strong passion for
                game development, software engineering, and creating scalable web architectures.
              </p>
              <p>
                My journey involves participating in events like the SIH hackathon and developing complex projects—from AI-powered agriculture web apps to robust blogging platforms. My core focus lies in extracting raw ideas and turning them into real-world applications.
              </p>
            </motion.div>

            {/* Added 4 Attractive Highlight Cards */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={{
                 hidden: { opacity: 0 },
                 visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.4 } }
               }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-10" style={{ perspective: 1000 }}
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { y: 30, opacity: 0, rotateX: -20, filter: 'blur(4px)' },
                    visible: { y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 70, damping: 20 } }
                  }}
                  whileHover={{ y: -7, scale: 1.06, boxShadow: "0 0 32px 0 #22d3ee33" }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <feature.icon className="text-cyan-400 text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-slate-200 font-bold group-hover:text-cyan-300 transition-colors text-base sm:text-lg md:text-xl">{feature.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Visual/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.3 }}
            className="w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[400px] flex items-center justify-center relative"
          >
            {/* Animated Circles/Box Instead of 3D Character */}
            <div className="relative w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.04, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400/20 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360, scale: [1, 1.08, 1] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-full border-2 border-blue-500/20 border-dotted" 
              />
              <motion.div 
                animate={{ y: [0, -18, 0], rotateY: [0, 10, 0] }}
                whileHover={{ rotateY: 25, rotateX: -10, scale: 1.08 }}
                transition={{ duration: 6, repeat: Infinity, ease: "anticipate", rotateY: { duration: 8, repeat: Infinity } }}
                className="absolute inset-16 rounded-3xl bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden"
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-500" />
                <div className="text-center p-6 relative z-10">
                   <div className="text-5xl mb-4 text-cyan-400">{"</>"}</div>
                   <h3 className="text-xl font-bold text-slate-200 tracking-wider uppercase">Developer</h3>
                   <p className="text-xs text-cyan-300 mt-2 font-mono">Building the future</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

