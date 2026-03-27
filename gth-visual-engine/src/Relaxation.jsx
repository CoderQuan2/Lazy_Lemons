import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ViscoelasticWave = ({ parameters }) => {
  const meshRef = useRef();

  const gridSize = 50;
  const size = 20;

  // Create a grid geometry
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(size, size, gridSize, gridSize);
  }, [size, gridSize]);

  // Initial state for Israel-Stewart integration
  const stateRef = useRef({
    positions: new Float32Array((gridSize + 1) * (gridSize + 1)),
    velocities: new Float32Array((gridSize + 1) * (gridSize + 1)),
    stresses: new Float32Array((gridSize + 1) * (gridSize + 1)),
    lastTime: 0
  });

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const dt = Math.min(time - stateRef.current.lastTime, 0.05);
    stateRef.current.lastTime = time;

    const { tau, eta, cs } = parameters;
    const isState = stateRef.current;

    const positions = meshRef.current.geometry.attributes.position.array;

    // Disturbance source in the center (representing a merger event)
    const centerIdx = Math.floor(gridSize/2) * (gridSize + 1) + Math.floor(gridSize/2);
    const forcing = Math.sin(time * 5) * 2.0 * Math.exp(-Math.pow(Math.sin(time)*2, 2));

    // In GTH, tau * stress_dot + stress = -2 * eta * strain_rate
    // This is a simplified 1D-like projection onto the 2D grid for visual purposes

    // Bolt Optimization: Hoisting invariant variables out of the inner loop and replacing O(N^2)
    // division with multiplication. This loop runs 50x50 = 2500 times per frame.
    // Precomputing csSq and invEffectiveTau saves ~2500 multiplications and ~2500 divisions per frame.
    const effectiveTau = Math.max(0.01, tau);
    const invEffectiveTau = 1.0 / effectiveTau;
    const csSq = cs * cs;
    const rowStride = gridSize + 1;

    for (let i = 0; i <= gridSize; i++) {
      for (let j = 0; j <= gridSize; j++) {
        const idx = i * rowStride + j;

        // Skip edges
        if (i === 0 || i === gridSize || j === 0 || j === gridSize) continue;

        // Calculate spatial derivative (Laplacian for wave propagation)
        const left = isState.positions[idx - 1];
        const right = isState.positions[idx + 1];
        const up = isState.positions[idx - rowStride];
        const down = isState.positions[idx + rowStride];
        const center = isState.positions[idx];

        const laplacian = (left + right + up + down - 4 * center);

        // Strain rate (velocity gradient approximation)
        const strainRate = isState.velocities[idx];

        // Israel-Stewart relaxation update
        // tau * dPi/dt + Pi = -eta * sigma
        // explicit Euler integration
        const stressDerivative = (-isState.stresses[idx] - eta * strainRate) * invEffectiveTau;
        isState.stresses[idx] += stressDerivative * dt;

        // Acceleration = elastic wave + viscoelastic stress gradient
        // dv/dt = c_s^2 * Laplacian(u) + Div(Pi)
        const elasticForce = csSq * laplacian;
        const viscousForce = isState.stresses[idx]; // Simplified divergence

        let acceleration = elasticForce + viscousForce;

        // Apply forcing at center
        if (idx === centerIdx) {
          acceleration += forcing;
        }

        // Update velocity and position
        isState.velocities[idx] += acceleration * dt;

        // Apply numerical damping to keep simulation stable
        isState.velocities[idx] *= 0.99;

        isState.positions[idx] += isState.velocities[idx] * dt;

        // Update mesh Z coordinate
        positions[idx * 3 + 2] = isState.positions[idx];
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]}>
      <meshStandardMaterial
        color="#8844ff"
        wireframe={false}
        roughness={0.2}
        metalness={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Relaxation = ({ parameters }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-4 rounded border border-slate-700 max-w-md pointer-events-none">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Israel-Stewart Relaxation</h3>
        <p className="text-sm text-slate-300">
          Visualizing viscoelastic memory of the vacuum.
          At high frequencies (ωτ ≫ 1), the medium responds elastically rather than diffusively,
          preserving quasinormal-mode fidelity (like GW250114 ringdowns).
        </p>
        <div className="mt-3 text-xs text-blue-300 font-mono">
          τ Π̇_αβ + Π_αβ = -2η σ_αβ
        </div>
        <p className="text-xs text-slate-400 mt-2">
          High τ (Relaxation Time) allows waves to propagate further with less damping.
          High η (Viscosity) increases damping for low frequencies.
        </p>
      </div>

      <Canvas camera={{ position: [0, 8, 15], fov: 50 }}>
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[0, 5, 0]} intensity={2} color="#cc88ff" />

        <ViscoelasticWave parameters={parameters} />

        <OrbitControls enablePan={true} maxDistance={30} minDistance={5} />
      </Canvas>
    </div>
  );
};

export default Relaxation;
