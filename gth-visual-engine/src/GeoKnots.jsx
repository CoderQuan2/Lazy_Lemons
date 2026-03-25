import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedKnot = ({ parameters }) => {
  const knotRef = useRef();

  useFrame((state) => {
    if (!knotRef.current) return;

    const time = state.clock.elapsedTime;

    // Rotate knot
    knotRef.current.rotation.x = time * 0.2;
    knotRef.current.rotation.y = time * 0.3;

    // Pulse scale based on mPsi and cs (scalar mass and sound speed)
    // In GTH, rest mass is the localized kinetic bending energy of the substrate
    const pulseFreq = parameters.cs * 2;
    const pulseAmp = 0.05 * parameters.mPsi;

    const scale = 1 + Math.sin(time * pulseFreq) * pulseAmp;
    knotRef.current.scale.set(scale, scale, scale);
  });

  // Calculate knot properties based on GTH parameters
  // m_e = sqrt(rho_0 * h^3) / (4*pi*c^3*m_psi^2) * ln(Lambda)
  const tubeRadius = Math.max(0.1, 0.4 / parameters.mPsi);
  const radius = Math.max(1, Math.sqrt(parameters.rho0) * 0.5);

  return (
    <TorusKnot
      ref={knotRef}
      args={[radius, tubeRadius, 256, 32, 2, 3]} // Trefoil knot (p=2, q=3)
    >
      <meshPhysicalMaterial
        color="#88ccff"
        emissive="#114488"
        roughness={0.1}
        metalness={0.8}
        clearcoat={1.0}
        transmission={0.5}
        thickness={0.5}
        wireframe={parameters.mPsi > 3} // Show wireframe at high scalar mass
      />
    </TorusKnot>
  );
};

const StrainField = ({ parameters }) => {
  const pointsRef = useRef();
  const particleCount = 2000;

  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    // Distribute points spherically around the knot
    const r = 2 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i*3+2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;

    // Animate strain field based on sound speed (cs)
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const x = positions[idx];
      const y = positions[idx+1];
      const z = positions[idx+2];
      const r = Math.sqrt(x*x + y*y + z*z);

      // Radial wave propagating outward
      const wave = Math.sin(r * 2 - time * parameters.cs * 5) * 0.01;

      positions[idx] += x/r * wave;
      positions[idx+1] += y/r * wave;
      positions[idx+2] += z/r * wave;
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
        size={0.03}
        color="#3366ff"
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const GeoKnots = ({ parameters }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-4 rounded border border-slate-700 max-w-md pointer-events-none">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Fundamental Particle (Trefoil Knot)</h3>
        <p className="text-sm text-slate-300">
          In GTH, particles are not point objects but stable topological defects (GeoKnots) in the 5D viscoelastic substrate.
          Rest mass is the localized kinetic bending energy of the substrate.
        </p>
        <div className="mt-3 text-xs text-blue-300 font-mono">
          m_e ∝ √(ρ_0) / m_ψ²
        </div>
        <p className="text-xs text-slate-400 mt-2">
          Adjusting m_psi changes the knot's thickness. Adjusting rho_0 changes its size.
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4da6ff" />

        <AnimatedKnot parameters={parameters} />
        <StrainField parameters={parameters} />

        <OrbitControls enablePan={true} maxDistance={20} minDistance={2} />
      </Canvas>
    </div>
  );
};

export default GeoKnots;
