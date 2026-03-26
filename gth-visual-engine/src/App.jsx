import React, { useState } from 'react';
import Sidebar from './Sidebar';
import FluidFlow from './FluidFlow';
import GeoKnots from './GeoKnots';
import Relaxation from './Relaxation';
import RotationCurves from './RotationCurves';

function App() {
  const [activeTab, setActiveTab] = useState('fluid');

  const [parameters, setParameters] = useState({
    cs: 1.0,     // Speed of Sound
    mPsi: 1.0,   // Scalar Mass
    rho0: 10,    // Fluid Density
    Re: 100,     // Reynolds Number
    eta: 0.1,    // Viscosity
    tau: 1.0,    // Relaxation Time
    mass: 10,    // Central Mass
  });

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      <Sidebar
        parameters={parameters}
        setParameters={setParameters}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 relative border-l border-slate-800">
        <div className="absolute inset-0 w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
          {activeTab === 'fluid' && <FluidFlow parameters={parameters} />}
          {activeTab === 'geoknot' && <GeoKnots parameters={parameters} />}
          {activeTab === 'relaxation' && <Relaxation parameters={parameters} />}
          {activeTab === 'rotation' && <RotationCurves parameters={parameters} />}
        </div>
      </main>
    </div>
  );
}

export default App;
