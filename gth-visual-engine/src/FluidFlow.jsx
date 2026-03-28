import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


const ParticleSystem = ({ parameters }) => {
  const pointsRef = useRef();
  const particleCount = 10000;

  // Initialize particles with stable base heights
  const [positions, phases, radii, baseHeights] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const ph = new Float32Array(particleCount);
    const r = new Float32Array(particleCount);
    const bh = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // eslint-disable-next-line react-hooks/purity
      const radius = Math.random() * 15 + 1;
      // eslint-disable-next-line react-hooks/purity
      const theta = Math.random() * Math.PI * 2;
      // eslint-disable-next-line react-hooks/purity
      const height = (Math.random() - 0.5) * 2 * (1 - radius/15);

      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = height; 
      pos[i * 3 + 2] = radius * Math.sin(theta);

      ph[i] = theta;
      r[i] = radius;
      bh[i] = height;
    }
    return [pos, ph, r, bh];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const currentPositions = pointsRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    const { mass, rho0, Re } = parameters;

    for (let i = 0; i < particleCount; i++) {
      const radius = radii[i];
      
      // Corrected GTH Equation: v = sqrt(GM/r + beta*r)
      const gmTerm = (mass * 10) / radius;
      const betaTerm = (Re / 1000) * (rho0 / 10) * radius * 0.5;
      const effectiveVelocity = Math.sqrt(gmTerm + betaTerm);
      const angularVelocity = effectiveVelocity / radius;

      // Update phase
      // eslint-disable-next-line react-hooks/immutability
      phases[i] += angularVelocity * 0.016; 

      // Update position with stable oscillation
      currentPositions[i * 3] = radius * Math.cos(phases[i]);
      currentPositions[i * 3 + 1] = baseHeights[i] + Math.sin(time * 2 + phases[i] * 5) * 0.05;
      currentPositions[i * 3 + 2] = radius * Math.sin(phases[i]);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4da6ff"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// ... Rest of FluidFlow component remains the same

const FluidFlow = ({ parameters }) => {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <ParticleSystem parameters={parameters} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default FluidFlow;
