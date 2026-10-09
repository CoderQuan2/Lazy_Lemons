import React from 'react';
import { RotateCcw } from 'lucide-react';

const Sidebar = ({ parameters, setParameters, resetParameters, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'fluid', label: 'Disk Flow (BST)' },
    { id: 'yjunction', label: 'Y-Junction (Hadrons)' },
    { id: 'relaxation', label: 'Viscoelastic Relaxation' },
    { id: 'rotation', label: 'Rotation Curves (BST)' },
  ];

  const handleSliderChange = (e, key) => {
    setParameters({
      ...parameters,
      [key]: parseFloat(e.target.value)
    });
  };

  const paramConfig = [
    { key: 'cs', label: 'Speed of Sound (c_s)', min: 0.1, max: 10, step: 0.1, unit: 'm/s' },
    { key: 'mPsi', label: 'Scalar Mass (m_psi)', min: 0.1, max: 5, step: 0.1, unit: 'eV' },
    { key: 'rho0', label: 'Fluid Density (rho_0)', min: 1, max: 100, step: 1, unit: 'kg/m³' },
    { key: 'Re', label: 'Reynolds Number (Re)', min: 0.1, max: 1000, step: 1, unit: '' },
    { key: 'eta', label: 'Viscosity (eta)', min: 0.01, max: 5, step: 0.01, unit: 'Pa·s' },
    { key: 'tau', label: 'Relaxation Time (tau)', min: 0.0, max: 10, step: 0.1, unit: 's' },
    { key: 'mass', label: 'Central Mass (M)', min: 1, max: 100, step: 1, unit: 'M_sun' },
  ];

  return (
    <div className="w-80 bg-slate-900 text-slate-100 p-6 flex flex-col h-full overflow-y-auto border-r border-slate-700 shadow-xl">
      <h1 className="text-2xl font-bold mb-2 text-blue-400">GTH Visual Engine</h1>
      <p className="text-sm text-slate-400 mb-8 border-b border-slate-700 pb-4">Geotopological Hydrodynamics</p>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-slate-200">Visualization Mode</h2>
        <div className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? 'true' : undefined}
                className={`text-left px-4 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white font-medium'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-200">Controllable Parameters</h2>
          <button
            onClick={resetParameters}
            aria-label="Reset to default parameters"
            title="Reset to default parameters"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <RotateCcw size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {paramConfig.map((config) => (
            <div key={config.key} className="flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor={config.key} className="text-sm font-medium text-slate-300">{config.label}</label>
                <span aria-hidden="true" className="text-xs font-mono text-blue-300 bg-slate-800 px-2 py-1 rounded">
                  {parameters[config.key]} {config.unit}
                </span>
              </div>
              <input
                id={config.key}
                type="range"
                min={config.min}
                max={config.max}
                step={config.step}
                value={parameters[config.key]}
                aria-valuetext={`${parameters[config.key]} ${config.unit}`}
                onChange={(e) => handleSliderChange(e, config.key)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
