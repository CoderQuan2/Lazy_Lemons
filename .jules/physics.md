# GTH Physics Bible — for coding agents working in this repo

Directive: **No miracles. Only facts.** Every physics claim in code, comments, labels, and UI copy MUST carry a tier label. If you are unsure of the tier, ask — do not guess, and never present superseded physics as live.

## Tier system (mandatory labels)

- [THEOREM] — derived with zero fitted parameters, independently verified
- [DERIVED] — follows from calibrated inputs; name them
- [CALIBRATED] — fixed by data; derivation missing
- [PHENOMENOLOGY] — fits data; mechanism unknown
- [OPEN] — not yet derived; honest gap
- [KILLED] — falsified; closed. NEVER present as live physics.

## The action (pruned)

S_GTH = S_EH + S_Ψ + S_el + S_χ + S_CS + S_boundary

- S_EH: 5D Einstein-Hilbert. Gravity is ASSUMED, not induced.
- S_Ψ: superfluid order parameter, V_eff = −μ²|Ψ|² + (λ/2)|Ψ|⁴.
- S_el: supersolid elasticity (bulk modulus K, shear modulus G).
- S_χ: fermion sector, NO χ–Ψ coupling (verified → no zero modes).
- S_CS: Chern-Simons, k_eff = 3. Gives SU(3) representations, NOT propagating gluons.
- S_boundary: unspecified. Structurally incapable of cancelling bulk vacuum energy (see kill ledger).

REMOVED — do not reintroduce: S_seed (was never defined); λ_B v_B·(∇×v_B) (unused by every derivation). DORMANT: 3-form sector S_top — defined but zero observables. NOT ADOPTED: S_YM — one-loop induction proposed but representation conflict unresolved (fundamental Ψ vs adjoint Higgs).

## The a₀ theorem [THEOREM]

a₀ = √(E·G_N) = 1.1720×10⁻¹⁰ m/s² — 2.33% from the observed MOND scale, ZERO fitted parameters in the formula.

- E = 9KG/(3K+G) = 2.0580×10⁻¹⁰ Pa. This is Young's modulus E, NOT the bulk modulus K: the disk weight is uniaxial stress (vertical load, laterally free substrate). Geometric factor exactly 1 from energy balance.
- Conditional on calibrated K and G (one fitted link in the chain). Independent of ρ₀ and the entire acoustic sector.
- SPARC ≡ MOND structurally on real data (not a fit artifact).

## Rotation curves: the BST kernel [PHENOMENOLOGY]

g_obs = g_bar / (1 − e^{−√(g_bar/a₀)}), χ² = 10.54 on SPARC (175 galaxies, 3,389 points).

- Deep-MOND limit: g_obs → √(g_bar·a₀), hence v⁴ = G·M·a₀ — asymptotically FLAT.
- NESS screening and the BST kernel are PROVEN independent (three sufficient arguments: tensor-component incompatibility, elastic-vs-viscous, ODE incompatibility). Do not unify them.
- Microscopic derivation is OPEN (work item P1b: derive from vortex-lattice elasticity). Label the kernel as phenomenology, always.

### BUG WARNING — stale formulas that must never ship

1. NEVER use v² = GM/r + βr. At large r this gives v ∝ √r — it RISES WITHOUT BOUND and never produces flat curves. This exact bug shipped in RotationCurves.jsx / FluidFlow.jsx and was fixed 2026-10-08.
2. NEVER use "inverse energy cascade wake" language. It belongs to a superseded branch of the framework and appears nowhere in the current theory.
3. NEVER present the trefoil electron (or any trefoil hadron) as established fact. Trefoil hadrons are KILLED; the electron's form is OPEN and unresolved.

## Hadrons: the Y-junction [PROVISIONAL]

- Baryon = 0D network defect: three adjoint-8 flux-tube prongs meet through d_abc; quark endpoints (fundamental 3) sit at the prong ends.
- Proton winding proposal (2,2,−1); neutron (2,−1,−1). A pure scalar Y is topologically forbidden (winding violation) — the Y MUST be gauged.
- Spin-½ from SU(3)₃ adjoint topological spin (CONDITIONAL on the CS/TQFT assignment applying to the physical junction).
- Confinement = superselection: "isolated quark" is a category error (like the end of a rope without the rope), not a suppressed configuration (CONDITIONAL on the dual-condensate picture).
- Mass is RELATIONAL: 938 MeV lives in the flux tubes + junction core, not in the endpoints. Current budget is variational/self-consistent — NOT a zero-parameter prediction. Earlier "λ_eff = 0.31 / 938 MeV derived" claims are SUPERSEDED.

### What a quark IS

A quark is NOT a particle. It is the 0D endpoint where a flux tube ends — a boundary condition made dynamical.

- Color = which D1-brane the endpoint sits on (Chan-Paton index r/g/b). Not a charge it carries.
- Flavor = winding number m of the Ψ phase (u: m = +2, d: m = −1). Topology, not substance.
- Charge = m/3 via the Witten effect (θ = 2π/3). Not intrinsic.
- Mass ≈ 0. The endpoint core is MeV-scale against 938 MeV in tubes + junction.

## Kill ledger [KILLED] — never visualize or describe as live physics

- GW echoes: seven null searches (η ≲ 10⁻⁴) PLUS structural theorem κ_conv ≡ 0. Program CLOSED — dead by proof, not just by numbers.
- Pulsar torque K_w: dead at ~16σ (magneto-thermal modeling left no residual).
- 1/49 loop factor: fitting artifact. (δ_loop stays Tier-2 calibrated ONLY — never "derived".)
- Dark energy from this action: structural no-go. Boundary subtraction is dimensionally incapable of cancelling bulk vacuum energy; required tuning 6.2×10⁻³⁶.
- Thermal-fiber cosmology: dead — R_τ = ℏ/(M_UV·c) is a definition; Hubble-scale reading contradicts the framework by 10⁶¹.
- Scalar/trefoil hadrons: superseded by the gauged Y-junction (scalar Y no-go above).
- Minimal radion stabilization: fails (Casimir collapse). Proposed fix (twisted χ, two bulk fermions, AdS bulk) breaks the bosonic theory — NOT adopted.

## Corrected constants — do NOT use superseded values

- ξ = 1/(2μ) = 0.24 fm for μc² = 410 MeV — NOT 1/(√2μ) = 0.34 fm [superseded by PDE sign audit]
- m_H = 2μ = 820 MeV (QCD-σ analog) — NOT √2μ = 580 MeV [superseded]; NOT the 125 GeV Higgs (different field; electroweak sector unbuilt)
- ρ₀ = 1.01×10⁻²⁶ kg/m³, from S1 acoustic consistency [CALIBRATED]; ρ₀/ρ_c = 1.18 (inherited through a₀, not independent)
- c_T = 8.94×10⁷ m/s; c_{L−} ≈ 1.22×10⁸ m/s; c_{L+} = 1.60×10⁸ m/s [DERIVED] — GW-polarization assignment UNVERIFIED
- κ₅² = 2πR_τκ₄²; R_τ = 1.617×10⁻³⁵ m; M₅ = 2.26×10¹⁸ GeV [DERIVED]
- 10 parameters: 4 fundamental + 5 calibrated + 1 derived (τ₀ = ℏ/(m_sub c²), promoted calibrated→derived 2026-10-08; h-vs-ℏ convention open)

## Open problems [OPEN] — honest gaps; visualize only with tier labels

Density/VEV crisis (18 orders — deepest structural problem) · K,G microphysics from EOS (#6, now quantitative: pin lattice factor C ∈ [1.285, 1.631]) · K/G = 1.22 (tracking) vs 1.875 (dipolar) vs 1.667 (Cauchy) — measure it · radion stabilization consistent with the action · electroweak sector unbuilt (top quark = 173 GeV boundary) · P1b (BST kernel from vortex-lattice elasticity) · electron form unresolved under the new mathematics · Ψ representation conflict (fundamental vs adjoint) blocking S_YM adoption.

## Source of truth (precedence order)

1. This file (.jules/physics.md).
2. `Geotopological_update_booklet.pdf` — combined manuscript + master equations + audit log.
3. The session record / audit log (Appendix C of the booklet).
4. Stale docs (pre-2026-10-08 manuscripts, old READMEs, old code comments) are NOT authoritative. When in doubt, the kill ledger wins over any older claim.
