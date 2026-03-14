import React from 'react';
import { motion } from 'framer-motion';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover grayscale-[30%] brightness-[0.2]"
      >
        <source src="https://cdn.pixabay.com/video/2023/10/20/185831-876213610_large.mp4" type="video/mp4" />
      </motion.video>
      {/* Overlay for depth and readability */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
    </div>
  );
};

export default BackgroundVideo;