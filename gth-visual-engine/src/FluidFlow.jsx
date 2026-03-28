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

    // Bolt Optimization: Hoist invariant calculations out of O(N) loop
    // Convert division (O(N) operations) to multiplication
    // Saves ~20k divisions and ~30k multiplications per frame (O(N) impact)
    const mass10 = mass * 10;
    const betaBase = (Re / 1000) * (rho0 / 10) * 0.5;
    const time2 = time * 2;

    for (let i = 0; i < particleCount; i++) {
      const radius = radii[i];
      const invRadius = 1.0 / radius;
      
      // Corrected GTH Equation: v = sqrt(GM/r + beta*r)
      const gmTerm = mass10 * invRadius;
      const betaTerm = betaBase * radius;
      const effectiveVelocity = Math.sqrt(gmTerm + betaTerm);
      const angularVelocity = effectiveVelocity * invRadius;

      // Update phase
      // eslint-disable-next-line react-hooks/immutability
      phases[i] += angularVelocity * 0.016; 

      // Update position with stable oscillation
      const i3 = i * 3;
      const phase = phases[i];
      currentPositions[i3] = radius * Math.cos(phase);
      currentPositions[i3 + 1] = baseHeights[i] + Math.sin(time2 + phase * 5) * 0.05;
      currentPositions[i3 + 2] = radius * Math.sin(phase);
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

const FluidFlow = ({ parameters }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-4 rounded border border-slate-700 max-w-md pointer-events-none">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Macroscopic Superfluid</h3>
        <p className="text-sm text-slate-300">
          Visualizing spacetime as a dynamic, viscous fluid. Particles are carried by the substrate.
        </p>
      </div>
      <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
        <color attach="background" args={['#050510']} />
        <ParticleSystem parameters={parameters} />
        <OrbitControls enablePan={true} maxDistance={50} minDistance={5} />
      </Canvas>
    </div>
  );
};

export default FluidFlow;
