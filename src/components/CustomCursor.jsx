import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (e.target.closest("a, button, input, textarea, .cursor-pointer")) {
        setCursorVariant("text");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  // Use pure CSS to hide cursor globally to avoid fighting
  useEffect(() => {
      document.body.style.cursor = 'none';
      return () => {
          document.body.style.cursor = 'auto'; // Restore on unmount
      };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference"
    }
  };

  return (
    <>
      {/* Main Cursor Circle */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1
        }}
      />
      
      {/* Small Dot Center */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[10000] hidden md:block transition-transform duration-75 ease-out"
        style={{
            transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
        }} 
      />
    </>
  );
};

export default CustomCursor;