import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div name="education" className="w-full bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative z-10">
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
      </div>
    </div>
  );
};

export default Education;