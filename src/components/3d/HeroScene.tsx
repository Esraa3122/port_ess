import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PhoneMockup({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle, slow rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        {/* Phone body */}
        <mesh>
          <boxGeometry args={[1.4, 2.8, 0.15]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[1.2, 2.5, 0.02]} />
          <meshStandardMaterial 
            color="#02b1fc" 
            metalness={0.1} 
            roughness={0.3} 
            emissive="#02b1fc" 
            emissiveIntensity={0.15} 
          />
        </mesh>
        {/* Flutter logo representation */}
        <mesh position={[0, 0.2, 0.1]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.35, 0.35, 0.02]} />
          <meshStandardMaterial color="#54c5f8" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.15, 0.05, 0.1]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.2, 0.2, 0.02]} />
          <meshStandardMaterial color="#02569B" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingElement({ position, color, size = 0.4 }: { 
  position: [number, number, number]; 
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size * 1.5, size * 0.1]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.4} 
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 40; // Reduced for performance
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 16;
      pos[i + 1] = (Math.random() - 0.5) * 12;
      pos[i + 2] = (Math.random() - 0.5) * 8 - 4;
    }
    return pos;
  }, []);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.008; // Very slow rotation
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#54c5f8" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-4, 3, -3]} intensity={0.3} color="#a855f7" />
      <pointLight position={[4, -3, 3]} intensity={0.3} color="#02b1fc" />
      
      <PhoneMockup position={[0, 0, 0]} />
      <FloatingElement position={[-2.5, 0.8, -2]} color="#02569B" size={0.5} />
      <FloatingElement position={[2.8, -0.3, -1.5]} color="#a855f7" size={0.4} />
      <FloatingElement position={[-2, -1, -1]} color="#54c5f8" size={0.3} />
      <ParticleField />
      
      <Environment preset="night" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        gl={{ antialias: true, powerPreference: 'high-performance' }} 
        dpr={[1, 1.5]} // Limit DPR for performance
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
