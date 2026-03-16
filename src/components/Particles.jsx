import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Dodecahedron } from '@react-three/drei';

const Particles = ({ count = 5000 }) => {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = Math.random() * 100 + 20;
      const speed = Math.random() * 0.0002 + 0.0001;
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;

      const t = (particle.time += speed);
      
      dummy.position.set(
        x * factor + Math.cos(t) * (factor / 10),
        y * factor + Math.sin(t) * (factor / 10),
        z * factor + Math.cos(t) * (factor / 10)
      );

      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <Dodecahedron args={[0.2, 0]} />
        <meshStandardMaterial color="#ADD8E6" roughness={0.5} />
      </instancedMesh>
    </>
  );
};

const BackgroundAnimation = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ fov: 75, position: [0, 0, 25] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;