import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Particle disk with BST screening kernel velocities.
// g_obs = g_bar / (1 - exp(-sqrt(g_bar / a0))), v^2 = g_obs * r.
const A0_CODE = 4.0;

const ParticleSystem = ({ parameters }) => {
  const pointsRef = useRef();
  const particleCount = 10000;

  const [positions, phases, radii, baseHeights] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const ph = new Float32Array(particleCount);
    const r = new Float32Array(particleCount);
    const bh = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 15 + 1;
      const theta = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 2 * (1 - radius / 15);
      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = radius * Math.sin(theta);
      ph[i] = theta; r[i] = radius; bh[i] = height;
    }
    return [pos, ph, r, bh];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const currentPositions = pointsRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    const { mass } = parameters;

    for (let i = 0; i < particleCount; i++) {
      const radius = radii[i];
      // BST kernel (replaces the old beta*r wake term, which rose without bound)
      const gBar = (mass * 10) / (radius * radius);
      const x = Math.sqrt(gBar / A0_CODE);
      const gObs = gBar / (1 - Math.exp(-x));
      const effectiveVelocity = Math.sqrt(gObs * radius);
      const angularVelocity = effectiveVelocity / radius;

      phases[i] += angularVelocity * 0.016;
      currentPositions[i * 3] = radius * Math.cos(phases[i]);
      currentPositions[i * 3 + 1] = baseHeights[i] + Math.sin(time * 2 + phases[i] * 5) * 0.05;
      currentPositions[i * 3 + 2] = radius * Math.sin(phases[i]);
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#4da6ff" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const FluidFlow = ({ parameters }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-4 rounded border border-slate-700 max-w-md pointer-events-none">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Disk Flow (BST Screening)</h3>
        <p className="text-sm text-slate-300">
          10,000 tracer particles on BST-screened orbits. Inner disk: Newtonian;
          outer disk: flat via the screening kernel g_obs = g_bar/(1-e<sup>-√(g_bar/a₀)</sup>).
        </p>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ParticleSystem parameters={parameters} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default FluidFlow;
