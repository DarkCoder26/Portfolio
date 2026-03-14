import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-slate-400 pt-8 pb-10 md:pb-16 border-t border-slate-800 backdrop-blur-sm relative overflow-x-hidden px-2 sm:px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-2xl mx-auto flex flex-col items-center justify-center px-2 sm:px-4 relative z-10"
      >
        <div className="flex space-x-4 sm:space-x-6 mb-4">
          {/* Add social links here if any besides Github */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            href="https://github.com/DarkCoder26" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </motion.a>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="text-xs sm:text-sm text-center"
        >
          &copy; {new Date().getFullYear()} DarkCoder (Satish Chaudhary). All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="text-[10px] sm:text-xs text-center mt-2 text-slate-600"
        >
          Built with React, Tailwind CSS & Framer Motion
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;