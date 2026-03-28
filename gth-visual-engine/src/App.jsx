import React, { useState } from 'react';
import './index.css'; // Injecting Tailwind substrate to prevent layout collapse
import Sidebar from './Sidebar';
import FluidFlow from './FluidFlow';
import GeoKnots from './GeoKnots';
import Relaxation from './Relaxation';
import RotationCurves from './RotationCurves';

function App() {
  const [activeTab, setActiveTab] = useState('fluid');

  const defaultParameters = {
    cs: 1.0,     
    mPsi: 1.0,   
    rho0: 10,    
    Re: 100,     
    eta: 0.1,    
    tau: 1.0,    
    mass: 10,    
  };

  const [parameters, setParameters] = useState(defaultParameters);

  const resetParameters = () => {
    setParameters(defaultParameters);
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white top-0 left-0">
        Skip to main content
      </a>
      <Sidebar
        parameters={parameters}
        setParameters={setParameters}
        resetParameters={resetParameters}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main id="main-content" tabIndex={-1} className="flex-1 relative border-l border-slate-800 outline-none">
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
