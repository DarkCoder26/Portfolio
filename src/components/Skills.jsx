import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiJavascript, 
  SiHtml5, SiCss, SiReact, SiNodedotjs, SiPhp, 
  SiGodotengine, SiMongodb, SiFirebase, 
  SiGit, SiGithub, SiFigma,
  SiGoogle, SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import MagneticWrapper from './MagneticWrapper';

const Skills = () => {
    
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: null },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Java", icon: FaJava, color: "#007396" },
      ]
    },
    {
      title: "Web & App Development",
      skills: [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
      ]
    },
    {
        title: "Game Development",
        skills: [
            { name: "Godot Engine", icon: SiGodotengine, color: "#478CBF" }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "MySQL", icon: SiMysql, color: "#b4ff28" }
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#ffffff" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Gemini AI", icon: SiGoogle, color: "#8E75B2" }
        ]
    }
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative z-10 transition-colors duration-500 overflow-hidden">
       {/* Background Glow */}
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-[20%] left-[-10%] w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" 
       />

      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col justify-center w-full h-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.15, ease: 'anticipate' }}
          className="pb-8 md:pb-12"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl font-bold inline border-b-4 border-cyan-400 text-slate-100"
          >Skills</motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="py-6 text-slate-400 text-lg"
          >My technical arsenal</motion.p>
        </motion.div>

        <div className="flex flex-col gap-12">
            {categories.map((category, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-4 sm:mb-6 border-l-4 border-cyan-500 pl-4 flex items-center gap-2">
                        {category.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                        {category.skills.map((skill, idx) => (
                            <MagneticWrapper key={idx} className="flex w-full" intensity={0.15}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5, rotate: -15, filter: 'blur(5px)' }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 + (idx * 0.05), type: "spring", stiffness: 150, bounce: 0.5 }}
                                whileHover={{ scale: 1.08, y: -7, boxShadow: '0 0 30px #22d3ee33' }}
                                className="group bg-slate-900/50 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20 rounded-xl p-6 flex flex-col items-center justify-center border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden min-h-[140px] min-w-[120px] max-w-[140px] w-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {skill.icon ? (
                                    <skill.icon className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" style={{ color: skill.color }} />
                                ) : (
                                    <span className="w-12 h-12 mb-4 flex items-center justify-center text-2xl font-bold text-slate-500 border-2 border-slate-700 rounded-full bg-slate-800">C</span>
                                )}
                                <p className="font-medium text-slate-300 z-10 group-hover:text-cyan-200">{skill.name}</p>
                            </motion.div>
                            </MagneticWrapper>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;