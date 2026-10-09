import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Y-junction baryon: 0D network defect.
// Three adjoint-8 flux-tube prongs meet at the junction core via d_abc;
// quark endpoints (fundamental 3) sit at the prong ends.
// Proton winding: (2, 2, -1). Quarks are endpoints, not particles:
// color = brane index, flavor = winding, charge = m/3, mass ~ 0.
const PRONG_LEN = 4;
const COLORS = ['#ff4444', '#44dd44', '#4488ff']; // r, g, b endpoints

const Prong = ({ angle, color }) => {
  const dir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  const mid = dir.clone().multiplyScalar(PRONG_LEN / 2);
  const quat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), dir
  );
  const end = dir.clone().multiplyScalar(PRONG_LEN);
  return (
    <group>
      <mesh position={[mid.x, mid.y, mid.z]} quaternion={quat}>
        <cylinderGeometry args={[0.09, 0.09, PRONG_LEN, 16]} />
        <meshStandardMaterial color="#aa88ff" emissive="#442288" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[end.x, end.y, end.z]}>
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.2} metalness={0.6} />
      </mesh>
    </group>
  );
};

const YJunctionScene = () => {
  const groupRef = useRef();
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
  });
  const angles = [Math.PI / 2, Math.PI / 2 + (2 * Math.PI) / 3, Math.PI / 2 + (4 * Math.PI) / 3];
  return (
    <group ref={groupRef}>
      {/* junction core */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial color="#ffcc44" emissive="#aa6600" emissiveIntensity={0.6} roughness={0.15} metalness={0.7} />
      </mesh>
      {angles.map((a, i) => (
        <Prong key={i} angle={a} color={COLORS[i]} />
      ))}
    </group>
  );
};

const YJunction = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-4 rounded border border-slate-700 max-w-md pointer-events-none">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Y-Junction Baryon</h3>
        <p className="text-sm text-slate-300">
          The proton as a 0D network defect: three adjoint flux-tube prongs meet at the
          junction core; quarks are the endpoints — not particles, but places where flux ends.
        </p>
        <div className="mt-3 text-xs font-mono text-blue-300">
          proton (2, 2, −1) · neutron (2, −1, −1)
        </div>
        <ul className="text-xs text-slate-400 mt-2 list-disc list-inside">
          <li>Color = brane index · Flavor = winding · Charge = m/3</li>
          <li>Mass lives in tubes + junction (938 MeV relational)</li>
          <li>Spin-½ from SU(3)₃ [conditional] · Confinement = superselection</li>
        </ul>
      </div>
      <Canvas camera={{ position: [0, 6, 11], fov: 45 }}>
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4da6ff" />
        <YJunctionScene />
        <OrbitControls enablePan={true} maxDistance={25} minDistance={3} />
      </Canvas>
    </div>
  );
};

export default YJunction;
