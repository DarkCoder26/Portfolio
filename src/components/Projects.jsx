import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
    {
      title: "Pigeon App",
      category: "Major Project",
      description: "A social blogging platform where users share thoughts, interact with others, and use AI chatbot features. Built full application independently.",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Expo"],
      github: "https://github.com/DarkCoder26/PigeonApp",
      features: [
        "Real-time communication",
        "Blogging system",
        "AI chatbot integration"
      ],
      color: "from-cyan-500 to-blue-500"
    },

    {
      title: "CropCare",
      category: "Internal Hackathon Winner (SIH Waitinglist)",
      description: "Competed against 12 teams in the internal college hackathon and was the only team selected for the Smart India Hackathon (SIH) waiting list. Developed an AI-powered agriculture web application to help farmers detect crop diseases and find government schemes.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/DarkCoder26",
      features: [
        "AI-based crop disease detection",
        "Government schemes information",
        "Responsive design"
      ],
      color: "from-green-500 to-emerald-500"
    },

    {
      title: "Calculator Pro",
      category: "Python GUI Application",
      description: "An advanced calculator for technical and non-technical users. Features a modern GUI, basic and scientific functions, unit conversions, calculation history, and more. Built with Python and Kivy for cross-platform compatibility.",
      tech: ["Python", "Kivy"],
      github: "https://github.com/DarkCoder26/Calculator-Pro.git",
      features: [
        "Basic arithmetic operations",
        "Scientific functions: trigonometry, logarithms, exponentials",
        "Unit conversions (length, mass, temperature, etc.)",
        "Calculation history panel",
        "Copy, paste, and clear entry buttons",
        "Resizable and responsive window"
      ],
      color: "from-purple-500 to-cyan-500"
    },

    {
      title: "Note-Writer",
      category: "Web Application",
      description: "An advanced notes maker application with multiple export format support.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/Note-Writer",
      features: [
        "Advanced note creation",
        "Multiple export formats",
        "Easy-to-use interface"
      ],
      color: "from-yellow-500 to-orange-500"
    },

    {
      title: "Voice-Assistant",
      category: "AI Application",
      description: "A voice assistant application designed to understand voice commands and perform different tasks.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/Voice-Assistant",
      features: [
        "Voice command support",
        "Speech-based interaction",
        "Task automation"
      ],
      color: "from-cyan-500 to-blue-500"
    },

    {
      title: "Stock-Market-Analysis-Platform",
      category: "Finance Platform",
      description: "A real-time stock market analysis platform designed to provide market-related information and analysis.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/Stock-Market-Analysis-Platform",
      features: [
        "Stock market analysis",
        "Real-time market information",
        "Interactive interface"
      ],
      color: "from-green-500 to-emerald-500"
    },

    {
      title: "CropCareAppBasedUI",
      category: "Frontend Application",
      description: "A friendly agriculture-focused application interface designed around the CropCare concept.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/CropCareAppBasedUI",
      features: [
        "Farmer-friendly interface",
        "Agriculture-focused UI",
        "Responsive application design"
      ],
      color: "from-green-500 to-lime-500"
    },

    {
      title: "NewsUI",
      category: "News Application",
      description: "A clean and modern news application interface designed for presenting news content in an easy-to-use format.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/NewsUI",
      features: [
        "Modern news interface",
        "News content layout",
        "Responsive UI"
      ],
      color: "from-purple-500 to-pink-500"
    },

    {
      title: "Habbit-Tracker",
      category: "Productivity Application",
      description: "An advanced habit tracker designed to help users manage and track their habits with a visual and open-source approach.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/Habbit-Tracker",
      features: [
        "Habit tracking",
        "Visual progress tracking",
        "Productivity-focused design"
      ],
      color: "from-blue-500 to-cyan-500"
    },

    {
      title: "Connect",
      category: "Social Network",
      description: "A social networking application focused on connecting users and providing a platform for social interaction.",
      tech: ["React Native"],
      github: "https://github.com/DarkCoder26/Connect",
      features: [
        "Social networking",
        "User interaction",
        "Mobile application interface"
      ],
      color: "from-purple-500 to-indigo-500"
    },
        
    {
      title: "pass-photo-frontend",
      category: "Frontend Application",
      description: "Frontend application for the Pass Photo project.",
      tech: ["JavaScript"],
      github: "https://github.com/DarkCoder26/pass-photo-frontend",
      features: [
        "Frontend interface",
        "Responsive design",
        "User-friendly workflow"
      ],
      color: "from-yellow-500 to-amber-500"
    },

    {
      title: "Portfolio",
      category: "Personal Portfolio",
      description: "Personal developer portfolio website showcasing projects, skills, experience, and development work.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      github: "https://github.com/DarkCoder26/Portfolio",
      features: [
        "Project showcase",
        "Responsive portfolio",
        "Modern developer-focused UI"
      ],
      color: "from-cyan-500 to-purple-500"
    }
  ];
  return (
    <div name="projects" className="w-full min-h-screen bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative overflow-hidden z-10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col justify-center w-full h-full relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, ease: 'anticipate' }}
             className="pb-8 md:pb-12"
           >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl font-bold inline border-b-4 border-cyan-400 text-slate-100"
          >
            Projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="py-6 text-slate-400 text-lg"
          >
            Check out some of my recent work
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.94, rotateX: 12, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
                  whileHover={{
                    y: -18,
                    scale: 1.06,
                    rotateZ: 2,
                    boxShadow: '0 0 40px 0 #22d3ee88, 0 12px 40px 0 #22d3ee33',
                    borderColor: '#22d3ee',
                    filter: 'brightness(1.07)'
                  }}
                  style={{ perspective: 1000 }}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
                >
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                    {/* Top Banner */}
                    <div className={`h-32 bg-gradient-to-r ${project.color} opacity-80 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-slate-900/20" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <div className="p-6">
                            <span className="bg-black/30 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-8 relative">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-3 rounded-full hover:bg-slate-700">
                                <FaGithub size={20} />
                            </a>
                        </div>
                        
                        <p className="text-slate-400 mb-6 text-base leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="bg-slate-800/80 text-cyan-300 px-3 py-1 rounded-md text-xs font-mono border border-slate-700/50">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className="space-y-2 mb-2">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-slate-500 text-sm">
                                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-3`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
