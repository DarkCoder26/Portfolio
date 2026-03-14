import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html, useProgress, Environment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-cyan-400 font-mono text-xl whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-lg border border-cyan-500/30">
        Loading 3D... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

function CharacterModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef();
  const floatRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isScrolling, setIsScrolling] = useState(false);

  // Let the user move mouse to rotate the character slightly
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);

    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 200);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    // Enhance materials to be more cinematic
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
           child.material.envMapIntensity = 1.5;
           child.material.needsUpdate = true;
        }
      }
    });

    if (!groupRef.current) return;

    // Initial position for Hero section (Right side centered on desktop)
    groupRef.current.position.set(1.5, -1.8, 0);
    groupRef.current.rotation.set(0, -0.4, 0);
    groupRef.current.scale.set(1.6, 1.6, 1.6);

    const triggers = [];

    // Select sections
    const aboutSection = document.querySelector('[name="about"]');
    const skillsSection = document.querySelector('[name="skills"]');
    const projectsSection = document.querySelector('[name="projects"]');

    if (aboutSection) {
      const t1 = ScrollTrigger.create({
        trigger: aboutSection,
        start: "top bottom",
        end: "center center",
        scrub: 1,
        animation: gsap.timeline()
          .to(groupRef.current.position, { x: 1.8, y: -1.2, z: 1.5 }, 0)
          .to(groupRef.current.rotation, { y: -0.6, x: 0.1 }, 0)
      });
      triggers.push(t1);
    }
    
    if (skillsSection) {
      const t2 = ScrollTrigger.create({
        trigger: skillsSection,
        start: "top bottom",
        end: "center center",
        scrub: 1,
        animation: gsap.timeline()
          .to(groupRef.current.position, { x: 2.5, y: -1.5, z: -1 }, 0)
          .to(groupRef.current.rotation, { y: -0.2, x: 0 }, 0)
          .to(groupRef.current.scale, { x: 1.3, y: 1.3, z: 1.3 }, 0)
      });
      triggers.push(t2);
    }

    if (projectsSection) {
      const t3 = ScrollTrigger.create({
        trigger: projectsSection,
        start: "top bottom",
        end: "center center",
        scrub: 1,
        animation: gsap.timeline()
          .to(groupRef.current.position, { x: -2.0, y: -1.4, z: 1.0 }, 0)
          .to(groupRef.current.rotation, { y: 0.8 }, 0)
          .to(groupRef.current.scale, { x: 1.6, y: 1.6, z: 1.6 }, 0)
      });
      triggers.push(t3);
    }

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [scene]);

  useFrame((state) => {
    if (floatRef.current && !isScrolling) {
        // Floating effect
        floatRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
        
        // Face the mouse smoothly (add offset to current GSAP rotation base)
        const targetX = mousePosition.x * 0.2;
        const targetY = mousePosition.y * 0.1;
        floatRef.current.rotation.y = THREE.MathUtils.lerp(floatRef.current.rotation.y, targetX, 0.1);
        floatRef.current.rotation.x = THREE.MathUtils.lerp(floatRef.current.rotation.x, targetY, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
        <group ref={floatRef}>
           <primitive object={scene} />
        </group>
    </group>
  );
}

useGLTF.preload('/character.glb');

export default function GlobalThreeDCharacter({ modelPath = '/character.glb' }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-[100svh] overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 4.5], fov: 45 }} 
        dpr={[1, 1.5]} 
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2.0} color="#ffffff" />
        <spotLight position={[-10, 5, 10]} angle={0.2} penumbra={1} intensity={2.5} color="#22d3ee" />
        <spotLight position={[10, 5, -10]} angle={0.2} penumbra={1} intensity={2.5} color="#a855f7" />
        
        <Environment preset="night" resolution={256} />

        <Suspense fallback={<Loader />}>
          <CharacterModel modelPath={modelPath} />
        </Suspense>

      </Canvas>
      
      {/* Blend mask mimicking rajesh portfolio perfectly hiding the bottom edges of the 3D model */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </div>
  );
}
