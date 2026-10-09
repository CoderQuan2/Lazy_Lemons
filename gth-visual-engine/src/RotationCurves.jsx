import React, { useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// BST screening kernel (phenomenology, chi^2 = 10.54 on SPARC):
//   g_obs = g_bar / (1 - exp(-sqrt(g_bar / a0)))
// Deep-MOND limit: g_obs -> sqrt(g_bar * a0), so v^4 = G*M*a0 (flat).
// a0 = sqrt(E * G_N) = 1.172e-10 m/s^2 (theorem, 2.33%, zero fitted params).
const A0_CODE = 4.0; // code units; sets the Newtonian/MOND transition radius

const RotationCurves = ({ parameters }) => {
  const { mass } = parameters;

  const data = useMemo(() => {
    const points = [];
    for (let r = 0.5; r <= 20; r += 0.5) {
      // Newtonian: v^2 = GM/r
      const vNewtonian = Math.sqrt(mass * 10 / r);
      // BST: g_bar = GM/r^2, g_obs via kernel, v^2 = g_obs * r
      const gBar = (mass * 10) / (r * r);
      const x = Math.sqrt(gBar / A0_CODE);
      const gObs = gBar / (1 - Math.exp(-x));
      const vGTH = Math.sqrt(gObs * r);
      points.push({
        radius: r,
        newtonian: parseFloat(vNewtonian.toFixed(2)),
        gth: parseFloat(vGTH.toFixed(2)),
      });
    }
    return points;
  }, [mass]);

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-4 rounded border border-slate-700 max-w-md pointer-events-none">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Galactic Rotation Curves (BST)</h3>
        <p className="text-sm text-slate-300 mb-2">
          Newtonian prediction (declining) vs the baryonic screening kernel.
          Flat curves emerge at low acceleration via g_obs = g_bar/(1-e<sup>-√(g_bar/a₀)</sup>),
          not from dark matter and not from a wake term.
        </p>
        <div className="mt-2 text-xs font-mono text-blue-300">
          a₀ = √(E·G_N) = 1.172×10⁻¹⁰ m/s² [THEOREM]
        </div>
        <p className="text-xs text-slate-400 mt-2">
          Kernel is phenomenology (χ² = 10.54, SPARC); microscopic derivation open (P1b).
        </p>
      </div>

      <div className="w-full max-w-4xl h-[600px] bg-slate-900/50 p-6 rounded-xl border border-slate-700 shadow-2xl mt-16 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-200">Orbital Velocity vs Radius</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="radius" stroke="#94a3b8"
              label={{ value: 'Radius (kpc)', position: 'bottom', fill: '#94a3b8' }} />
            <YAxis stroke="#94a3b8"
              label={{ value: 'Velocity (km/s)', angle: -90, position: 'left', fill: '#94a3b8' }}
              domain={[0, 'auto']} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#f8fafc' }} />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="newtonian" name="Newtonian (Expected)"
              stroke="#f43f5e" strokeWidth={3} strokeDasharray="5 5" dot={false} />
            <Line type="monotone" dataKey="gth" name="BST (GTH screening)"
              stroke="#3b82f6" strokeWidth={4} dot={false} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RotationCurves;
