import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
          role: "Hackathon Participant",
          company: "College Hackathon",
          date: "Recently",
          description: "Participated in SIH 2025 (waiting list position). Developed CropCare project."
        },
        {
          role: "Freelance Projects",
          company: "Self-Employed",
          date: "Ongoing",
          description: "Worked on freelance-level personal projects, building real-world applications."
        },
        {
            role: "Open Source Contributor",
            company: "Open Source",
            date: "Ongoing",
            description: "Exploring open-source contributions to improve skills and collaborate with the community."
        }
      ];

  return (
    <div name="experience" className="w-full min-h-screen bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col justify-center w-full h-full">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, ease: 'anticipate' }}
             className="pb-8"
           >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="text-4xl font-bold inline border-b-4 border-cyan-400"
              >Experience</motion.p>
          </motion.div>

          <div className="relative ml-2 sm:ml-4 space-y-8 md:space-y-12">
            {/* Vertical Line Animation */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 origin-top"
            />
            {experiences.map((exp, index) => (  
                <motion.div key={index} className="relative pl-8"
                  initial={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  style={{ perspective: 800 }}
                >
                     {/* Animated Dot */}
                    <motion.div 
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.7, delay: index * 0.18, type: 'spring', stiffness: 200 }}
                      className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{exp.role}</h3>
                    <span className="text-sm font-mono text-cyan-400 mb-2 block">{exp.company} | {exp.date}</span>
                    <p className="text-slate-400">{exp.description}</p>
                </motion.div>
            ))}
          </div>

      </div>
    </div>
  );
};

export default Experience;