import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 0, link: 'home' },
    { id: 1, link: 'about' },
    { id: 2, link: 'skills' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'education' },
    { id: 6, link: 'blog' },
  ];

  return (
    <div className={`fixed w-full h-16 md:h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-cyan-500/5' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-2 sm:px-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold ml-1 md:ml-2 cursor-pointer font-mono text-cyan-400 hover:text-white transition-colors tracking-tighter">
            <Link to="home" smooth duration={500}>
                &lt;DarkCoder /&gt;
            </Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center">
          {links.map(({ id, link }, idx) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
              className="px-2 md:px-4 cursor-pointer capitalize font-medium text-slate-300 hover:text-cyan-400 hover:scale-105 duration-200 text-base md:text-lg"
            >
              <Link to={link} smooth duration={500} offset={-80} spy={true} activeClass="active">
                {link}
              </Link>
            </motion.li>
          ))}
          <motion.li className="ml-2 md:ml-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
          >
             <a href="https://github.com/DarkCoder26" target="_blank" rel="noopener noreferrer" className="text-xl text-slate-300 hover:text-white transition-all bg-slate-800 p-2 rounded-full hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <FaGithub />
             </a>
          </motion.li>
        </ul>
        
        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-2 sm:pr-4 z-10 text-slate-300 md:hidden"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: 'anticipate' }}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-950 text-slate-300"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-2 sm:px-4 cursor-pointer capitalize py-6 text-2xl sm:text-4xl hover:text-cyan-400 duration-200"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  {link}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;