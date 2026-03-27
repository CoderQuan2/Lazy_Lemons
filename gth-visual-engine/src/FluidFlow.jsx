import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = ({ parameters }) => {
  const pointsRef = useRef();

  const particleCount = 10000;

  // Initialize particles
  const [positions, phases, radii, invSqrtRadii] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const ph = new Float32Array(particleCount);
    const r = new Float32Array(particleCount);
    const invR = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // eslint-disable-next-line react-hooks/purity
      const radius = Math.random() * 15 + 1;
      // eslint-disable-next-line react-hooks/purity
      const theta = Math.random() * Math.PI * 2;
      // eslint-disable-next-line react-hooks/purity
      const height = (Math.random() - 0.5) * 2;

      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = height * (1 - radius/15); // Flatter at the edges
      pos[i * 3 + 2] = radius * Math.sin(theta);

      ph[i] = theta;
      r[i] = radius;
      invR[i] = 1.0 / Math.sqrt(radius); // Precompute inverse square roots
    }
    return [pos, ph, r, invR];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;

    // Extract parameters
    const { mass, rho0, Re } = parameters;

    // Calculate sqrtMass once per frame
    const sqrtMass = Math.sqrt(mass);

    // GTH specific physics simulation: Inverse Energy Cascade
    // Particles organize into a rotating wake
    // Rotation speed depends on mass, radius, and Re (representing cascade efficiency)

    // Hoist constant wake factor calculation out of the loop
    // This saves ~10000 multiplications per frame
    const wakeFactor = (Re / 1000) * (rho0 / 10) * 0.05;

    for (let i = 0; i < particleCount; i++) {
      const radius = radii[i];

      // Calculate angular velocity based on GTH principles (flat rotation curve outer region)
      // v = sqrt(GM/r + beta * r) where beta is wake contribution

      // Performance Optimization: Replaced O(N) Math.sqrt calls with precomputed inverse roots
      const baseVelocity = sqrtMass * invSqrtRadii[i];

      // The inverse cascade term (simplified representation)
      const wakeContribution = wakeFactor * radius;
      const effectiveVelocity = baseVelocity + wakeContribution;

      const angularVelocity = effectiveVelocity / radius;

      // Update phase
      // eslint-disable-next-line react-hooks/immutability
      phases[i] += angularVelocity * 0.016; // approx 60fps delta

      // Update position
      positions[i * 3] = radius * Math.cos(phases[i]);
      // Small vertical oscillation based on radius to simulate fluid waves
      positions[i * 3 + 1] += Math.sin(time + phases[i] * 5.0) * 0.005;
      positions[i * 3 + 2] = radius * Math.sin(phases[i]);
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
        <h3 className="text-xl font-bold text-blue-400 mb-2">Macroscopic Fluid Wake</h3>
        <p className="text-sm text-slate-300">
          Visualizing the Inverse Energy Cascade. Microscopic quantum strain fields self-organize,
          transferring kinetic energy upward in scale. This creates a macroscopic, rotating fluid wake
          that supports rotation curves without particulate Dark Matter.
        </p>
        <div className="mt-3 text-xs text-blue-300 font-mono">
          v(r) ≈ √(GM/r + βr)
        </div>
      </div>

      <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.5} />

        {/* Central Mass (Galactic Core) */}
        <mesh>
          <sphereGeometry args={[parameters.mass / 20, 32, 32]} />
          <meshBasicMaterial color="#ffffff" />
          <pointLight intensity={10} distance={50} color="#ffffff" />
        </mesh>

        {/* Fluid Particles */}
        <ParticleSystem parameters={parameters} />

        <OrbitControls enablePan={false} maxDistance={40} minDistance={5} />
      </Canvas>
    </div>
  );
};

export default FluidFlow;
