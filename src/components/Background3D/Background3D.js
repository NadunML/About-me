import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import './Background3D.css';

const AnimatedTorusKnot = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={meshRef} position={[3.5, 1.2, -3]}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
        <meshStandardMaterial 
          color="#6366f1" 
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
};

const AnimatedSphere = () => {
  return (
    <Float speed={2.5} rotationIntensity={1.8} floatIntensity={1.5}>
      <Sphere args={[1.1, 64, 64]} position={[-3.8, -1.8, -4]}>
        <MeshDistortMaterial
          color="#06b6d4"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.6}
          roughness={0.2}
          distort={0.45}
          speed={2}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedIcosahedron = () => {
  const icoRef = useRef();

  useFrame((state, delta) => {
    if (icoRef.current) {
      icoRef.current.rotation.x -= delta * 0.2;
      icoRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={icoRef} position={[-2.5, 2.5, -6]}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

export default function Background3D() {
  return (
    <div className="background-3d-wrapper">
      <div className="gradient-ambient-orb orb-1"></div>
      <div className="gradient-ambient-orb orb-2"></div>
      <div className="gradient-ambient-orb orb-3"></div>

      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#6366f1" />
        <pointLight position={[10, -10, 10]} intensity={0.6} color="#06b6d4" />
        
        <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade speed={1.2} />
        
        <AnimatedTorusKnot />
        <AnimatedSphere />
        <AnimatedIcosahedron />
      </Canvas>
    </div>
  );
}
