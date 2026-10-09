import React, { useState } from 'react';
import './index.css'; // Injecting Tailwind substrate to prevent layout collapse
import Sidebar from './Sidebar';
import FluidFlow from './FluidFlow';
import YJunction from './YJunction';
import Relaxation from './Relaxation';
import RotationCurves from './RotationCurves';

function App() {
  const [activeTab, setActiveTab] = useState('fluid');

  const [parameters, setParameters] = useState({
    cs: 1.0,
    mPsi: 1.0,
    rho0: 10,
    Re: 100,
    eta: 0.1,
    tau: 1.0,
    mass: 10,
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
          {activeTab === 'yjunction' && <YJunction parameters={parameters} />}
          {activeTab === 'relaxation' && <Relaxation parameters={parameters} />}
          {activeTab === 'rotation' && <RotationCurves parameters={parameters} />}
        </div>
      </main>
    </div>
  );
}

export default App;
