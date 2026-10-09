import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Architectural Massing Model for Luxury Hero Section
function ArchitecturalPavilion() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Smooth subtle mouse parallax & continuous gentle rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y += delta * 0.15;
      
      // Pointer responsive tilt
      const targetRotX = state.pointer.y * 0.15;
      const targetRotZ = -state.pointer.x * 0.1;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);
    }

    if (coreRef.current) {
      // Subtle pulse to the warm interior light core
      const t = state.clock.getElapsedTime();
      const s = 1 + Math.sin(t * 1.5) * 0.03;
      coreRef.current.scale.set(s, s, s);
    }
  });

  // Custom materials with luxury navy & gold palette
  const materials = useMemo(() => {
    return {
      concrete: new THREE.MeshStandardMaterial({
        color: '#E8EEF7',
        roughness: 0.6,
        metalness: 0.1,
      }),
      navyTimber: new THREE.MeshStandardMaterial({
        color: '#0B1B3D',
        roughness: 0.35,
        metalness: 0.25,
      }),
      goldAccent: new THREE.MeshStandardMaterial({
        color: '#C69A27',
        roughness: 0.2,
        metalness: 0.9,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        transmission: 0.88,
        opacity: 0.7,
        transparent: true,
        roughness: 0.08,
        ior: 1.5,
      }),
      interiorGlow: new THREE.MeshBasicMaterial({
        color: '#FFE2A4',
      }),
    };
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={0.95}>
      {/* 1. Base Podium / Cantilevered Landscape Deck */}
      <mesh position={[0, -0.8, 0]} material={materials.concrete}>
        <boxGeometry args={[4.2, 0.25, 3.2]} />
      </mesh>
      
      {/* Lower Terraces / Steps */}
      <mesh position={[0, -0.98, 0.4]} material={materials.concrete}>
        <boxGeometry args={[4.8, 0.15, 3.8]} />
      </mesh>

      {/* 2. Ground Floor Solid Volume */}
      <mesh position={[-0.8, -0.2, 0]} material={materials.navyTimber}>
        <boxGeometry args={[2.2, 1.0, 2.4]} />
      </mesh>

      {/* 3. Cantilevered Upper Level Floor Slab */}
      <mesh position={[0.4, 0.35, 0.1]} material={materials.concrete}>
        <boxGeometry args={[3.2, 0.18, 2.8]} />
      </mesh>

      {/* 4. Upper Level Architecture Box with Champagne Trim */}
      <mesh position={[0.5, 0.95, 0.1]} material={materials.concrete}>
        <boxGeometry args={[2.8, 1.0, 2.4]} />
      </mesh>

      {/* 5. Cantilevered Floating Roof Overhang */}
      <mesh position={[0.3, 1.5, 0.1]} material={materials.navyTimber}>
        <boxGeometry args={[3.8, 0.12, 3.2]} />
      </mesh>

      {/* 6. Architectural Structural Columns (Champagne Gold) */}
      <mesh position={[1.8, -0.2, 1.2]} material={materials.goldAccent}>
        <cylinderGeometry args={[0.04, 0.04, 1.0, 16]} />
      </mesh>
      <mesh position={[1.8, -0.2, -1.0]} material={materials.goldAccent}>
        <cylinderGeometry args={[0.04, 0.04, 1.0, 16]} />
      </mesh>
      <mesh position={[-1.7, 0.95, 1.1]} material={materials.goldAccent}>
        <cylinderGeometry args={[0.03, 0.03, 1.0, 16]} />
      </mesh>

      {/* 7. Panoramic Glazing / Floor-to-Ceiling Glass Panels */}
      <mesh position={[0.7, -0.2, 0.8]} material={materials.glass}>
        <boxGeometry args={[1.5, 0.95, 0.05]} />
      </mesh>
      <mesh position={[0.7, -0.2, -0.8]} material={materials.glass}>
        <boxGeometry args={[1.5, 0.95, 0.05]} />
      </mesh>
      <mesh position={[-0.7, 0.95, 0.9]} material={materials.glass}>
        <boxGeometry args={[1.2, 0.95, 0.05]} />
      </mesh>

      {/* 8. Interior Warm Light Core */}
      <mesh ref={coreRef} position={[0.2, -0.2, 0]} material={materials.interiorGlow}>
        <sphereGeometry args={[0.22, 16, 16]} />
      </mesh>
      <pointLight position={[0.2, -0.2, 0]} intensity={1.5} color="#FFA743" distance={3.5} />
      
      {/* Upper Floor Ambient Light */}
      <pointLight position={[0.5, 0.95, 0]} intensity={1.2} color="#FFD39B" distance={3.5} />

      {/* 9. Minimalist Architectural Linear Louvers / Screen */}
      {[-0.4, -0.2, 0.0, 0.2, 0.4].map((offset, i) => (
        <mesh key={i} position={[-1.2 + offset, 0.95, 1.32]} material={materials.goldAccent}>
          <boxGeometry args={[0.03, 0.9, 0.02]} />
        </mesh>
      ))}

      {/* 10. Water Mirror / Reflective Pool Accent on Terrace */}
      <mesh position={[1.2, -0.66, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 1.4]} />
        <meshStandardMaterial color="#0B1B3D" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
}

// Subtle Floating Ambient Dust / Architectural Sparkles
function AmbientArchitecturalParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 40;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const goldColor = new THREE.Color('#C69A27');
    const ivoryColor = new THREE.Color('#FFFFFF');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const c = Math.random() > 0.5 ? goldColor : ivoryColor;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Fallback visual if WebGL is unavailable or loading
function Hero3DFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="relative w-64 h-64 border border-[#C69A27]/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-[#0B1B3D]/80 backdrop-blur-md">
        <div className="w-16 h-16 rounded-full border border-[#C69A27] flex items-center justify-center mb-4 text-[#C69A27]">
          <span className="font-serif text-2xl tracking-widest text-[#C69A27]">NKR</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-[#C69A27] font-semibold">Architectural Massing</p>
        <p className="text-[11px] text-[#E8EEF7]/70 mt-1">Spatial Design & Planning</p>
      </div>
    </div>
  );
}

interface Hero3DProps {
  className?: string;
}

export const Hero3D: React.FC<Hero3DProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[360px] lg:min-h-[480px] pointer-events-auto ${className}`}>
      {/* 3D Canvas */}
      <Suspense fallback={<Hero3DFallback />}>
        <Canvas
          camera={{ position: [4.2, 2.5, 4.8], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="cursor-grab active:cursor-grabbing"
          style={{ background: 'transparent' }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.8} color="#FFFBF5" />
          <directionalLight
            position={[6, 8, 5]}
            intensity={1.8}
            color="#FFF4DD"
            castShadow={false}
          />
          <directionalLight
            position={[-5, 4, -4]}
            intensity={0.6}
            color="#C7D7D0"
          />

          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <ArchitecturalPavilion />
          </Float>

          <AmbientArchitecturalParticles />
        </Canvas>
      </Suspense>

      {/* Floating subtle architectural metadata badge */}
      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0B1B3D]/90 backdrop-blur-md border border-[#C69A27]/40 text-[11px] text-white select-none shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C69A27] animate-pulse" />
        <span className="tracking-wide">Interactive Architectural Model</span>
        <span className="text-[#C69A27]/70">|</span>
        <span className="text-[10px] uppercase text-[#E8EEF7]/70">Drag to tilt</span>
      </div>
    </div>
  );
};
export default Hero3D;
