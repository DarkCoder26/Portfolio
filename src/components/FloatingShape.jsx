import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import styled from '@emotion/styled';

const Shape = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
      Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <Sphere ref={ref} args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#8A2BE2"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.5}
      />
    </Sphere>
  );
};

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const FloatingShape = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Shape />
      </Canvas>
    </CanvasContainer>
  );
};

export default FloatingShape;