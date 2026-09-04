import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  // Extracted certifications from your provided image
  const certifications = [
    "AI Introduction",
    "AI and Its Impact On Our Daily Lives (IBM)",
    "AI Express: Artificial Intelligence Essentials in Minutes",
    "Anthropic AI",
    "Artificial Intelligence Tutorial",
    "Claude 101",
    "Claude Code 101",
    "Claude Code in Action",
    "Communicating with Impact",
    "Critical Soft Skills for Project Managers",
    "Edunet - SkillsBuild Orientation",
    "Introduction to AI by Microsoft",
    "Introduction to Claude",
    "Introduction to Generative AI via Microsoft",
    "AI Foundation Course",
    "MongoDB (GeeksforGeeks)",
    "Software Products Development",
    "TCS Certification",
    "What is Artificial Intelligence (AI)"
  ];

  return (
    <motion.div 
      name="education" 
      className="w-full bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
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
              >Education</motion.p>
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            <motion.div 
                whileHover={{ scale: 1.04, y: -4 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-slate-900 p-6 rounded-lg shadow-lg border-l-4 border-cyan-400 flex items-start gap-4"
            >
                <div className="text-cyan-400 text-4xl mt-1">
                    <FaGraduationCap />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-lg text-slate-400 font-medium">Ram Devi Jindal Educational Charitable Society Group Of Institutions</p>
                    <p className="text-sm text-slate-500 font-mono mt-2">2024 – 2027 (Pursuing)</p>
                </div>
            </motion.div>
          </div>

          {/* Added Certifications Section */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, ease: 'anticipate' }}
             className="pb-8 mt-16"
           >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="text-4xl font-bold inline border-b-4 border-cyan-400"
              >Certifications</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                className="bg-slate-900 p-4 rounded-lg shadow-md border-l-2 border-cyan-400 flex items-center gap-3"
              >
                  <div className="text-cyan-400 text-xl">
                      <FaCertificate />
                  </div>
                  <div>
                      <h3 className="text-sm md:text-base font-semibold text-white">{cert}</h3>
                  </div>
              </motion.div>
            ))}
          </div>

      </div>
    </motion.div>
  );
};
export default Education;
                
