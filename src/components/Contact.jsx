import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import confetti from 'canvas-confetti'; // Ensure this line is present

const Contact = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pending) return;
    setPending(true);

    const form = e.target;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Play a high-quality success sound
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');
        audio.volume = 0.5;
        audio.play().catch(err => console.log("Audio playback failed:", err));

        // Motivational confetti burst
        confetti({
          particleCount: 200,
          spread: 90,
          startVelocity: 45,
          gravity: 0.7,
          origin: { y: 0.7 },
          scalar: 1.2,
          shapes: ['circle', 'square'],
          colors: ['#22d3ee', '#0ea5e9', '#facc15', '#f472b6', '#fff']
        });
        // Motivational emoji burst
        setTimeout(() => {
          confetti({
            particleCount: 60,
            spread: 70,
            startVelocity: 30,
            gravity: 0.5,
            origin: { y: 0.5 },
            scalar: 2,
            shapes: ['star'],
            colors: ['#facc15', '#f472b6', '#22d3ee']
          });
        }, 400);
        // Motivational message overlay
        const msg = document.createElement('div');
        msg.innerText = 'Thank you for reaching out! 🚀\nKeep building, keep dreaming!';
        msg.style.position = 'fixed';
        msg.style.top = '50%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.background = 'linear-gradient(90deg,#0ea5e9,#22d3ee,#f472b6)';
        msg.style.color = '#fff';
        msg.style.fontSize = '2rem';
        msg.style.fontWeight = 'bold';
        msg.style.padding = '2rem 3rem';
        msg.style.borderRadius = '2rem';
        msg.style.boxShadow = '0 8px 40px #0ea5e988';
        msg.style.zIndex = 9999;
        msg.style.textAlign = 'center';
        msg.style.opacity = '0.95';
        document.body.appendChild(msg);
        setTimeout(() => {
          msg.style.transition = 'opacity 0.7s';
          msg.style.opacity = '0';
          setTimeout(() => document.body.removeChild(msg), 700);
        }, 2200);
        form.reset();
      }
    } catch (err) {
      console.error("Form submission failed:", err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-transparent text-slate-300 py-16 md:py-20 lg:py-24 flex justify-center items-center px-2 sm:px-4 md:px-8 relative overflow-hidden z-10">
        {/* Decorative Background */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
        
        <motion.form 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 } 
                }
            }}
            onSubmit={handleSubmit}
            method="POST"
            action="https://getform.io/f/r5mb5694uov"
            className="flex flex-col max-w-lg w-full bg-slate-900/50 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative z-10"
        >
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pb-8">
                <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-400 text-slate-100">Contact</p>
                <p className="py-2 sm:py-4 text-slate-400 text-sm sm:text-base">Submit the form below or shoot me an email - satishchaudhary6336@gmail.com</p>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                <input className="w-full bg-slate-800/50 p-4 text-slate-100 rounded-lg mb-4 border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all" type="text" placeholder="Name" name="name" required />
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                <input className="w-full bg-slate-800/50 p-4 text-slate-100 rounded-lg mb-4 border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all" type="email" placeholder="Email" name="email" required />
            </motion.div>
            
            <motion.div className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
                <textarea className="w-full bg-slate-800/50 p-4 text-slate-100 rounded-lg mb-4 border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none" name="message" rows="6" placeholder="Message" required></textarea>
            </motion.div>
            
            <motion.div className="flex justify-center gap-8 mt-8 pt-8 border-t border-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
                <a href="mailto:satishchaudhary6336@gmail.com" className="group flex flex-col items-center gap-2 hover:text-cyan-400 transition-colors">
                    <div className="p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                        <FaEnvelope size={24} />
                    </div>
                    <span className="text-sm">Email</span>
                </a>
                <a href="https://github.com/DarkCoder26" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:text-cyan-400 transition-colors">
                    <div className="p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                        <FaGithub size={24} />
                    </div>
                    <span className="text-sm">GitHub</span>
                </a>
            </motion.div>
        </motion.form>
    </div>
  );
};

export default Contact;