import React from 'react';
import { motion } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React Native",
      excerpt: "My journey learning cross-platform mobile development and building real-world apps.",
      date: "March 10, 2026",
      readTime: "5 min read",
      category: "Mobile Dev"
    },
    {
      title: "Building Scalable Backends with Node.js",
      excerpt: "Exploring event-driven architecture and handling high concurrency in web applications.",
      date: "February 28, 2026",
      readTime: "7 min read",
      category: "Backend"
    },
    {
      title: "Game Development with Godot Engine",
      excerpt: "Why I chose Godot for my indie game projects and what I've learned so far.",
      date: "February 15, 2026",
      readTime: "6 min read",
      category: "Game Dev"
    }
  ];

  return (
    <div name="blog" className="w-full min-h-screen bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col justify-center w-full h-full">
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
          >
            Blog
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="py-6 text-slate-400"
          >
            Recent thoughts and learnings
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <MagneticWrapper key={index} className="flex h-full w-full" intensity={0.08}>
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateY: 15, scale: 0.95, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 0 30px #22d3ee22' }}
              className="bg-slate-900 p-6 rounded-md shadow-md border border-slate-800 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{post.category}</span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 hover:text-cyan-400 cursor-pointer">{post.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-800 pt-4">
                <span>{post.date}</span>
                <span className="hover:text-cyan-400 cursor-pointer transition-colors">Read More →</span>
              </div>
            </motion.div>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;