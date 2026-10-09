# Geotopological Hydrodynamics — Rebuilt from the Ground Up

**T. Abram** — Rebuild manuscript, 2026-10-09

## Abstract

Geotopological Hydrodynamics (GTH) rebuilt from the ground up after a falsification campaign that killed more of the theory than it kept. What survives: the a₀ = √(E·G_N) structural relation (modulus selected by uniaxial stress, geometric factor exactly 1, zero fitted parameters in the formula — the 2.33% numerical agreement honestly labeled as fitted by ancestry); the κ_conv ≡ 0 structural no-echo theorem; the proven NESS/BST independence; the BST kernel as phenomenology (χ² = 10.54 on SPARC); the Y-junction hadronic program; SU(3) from vortex strands; and the a₀–H₀ O(1) structural relation. What is dead: GW echoes (by proof), K_w torque, the 1/49 loop factor, dark energy from this action, thermal-fiber cosmology, trefoil hadrons, the 47-nm lattice (Lindemann), the VEV→ρ₀ forward derivation (P2a: 21 orders), and the τ₀ 'derivation' (12.25× miss — proven circular and anchored on the dead 47-nm lattice; τ₀ is calibrated and irreducibly so, 10 parameters). Every claim tier-labeled. No miracles. Only facts.

## Introduction: what the demolition left standing

This manuscript is a rebuild, not a revision. The preceding theory went through a claim-by-claim falsification campaign — archival GW echo searches, SPARC benchmarking against real data, PDE audits, dimensional audits, and repair missions — and the campaign killed more than it kept. The pattern was consistent: every ambitious claim, pressed, either collapsed or retreated one tier.

The rebuild starts from what survived and nothing else. The six chapters that follow state the rebuilt action (Ch.1), the gravity theorem (Ch.2), screening (Ch.3), hadrons (Ch.4), cosmology (Ch.5), and the complete data record with kill ledger (Ch.6). The tier discipline is non-negotiable: THEOREM / DERIVED / CALIBRATED / PHENOMENOLOGY / OPEN / KILLED on every claim, gaps marked [NEEDS: …], killed physics confined to the ledger.


---

# Chapter 1 — Foundations: the rebuilt action and the ten parameters
## The rebuilt 5D action and the ten parameters

This chapter is the contract everything downstream builds on. It states the
pruned action term by term — what each term is, what it does, and what it does
*not* do — lists the sectors that were removed, left dormant, or never adopted,
gives the dark-DDI sector, tabulates the ten parameters
with their tiers, and inventories the load-bearing gaps: quantities the theory
needs but the action does not contain. Where the action is silent, the rebuild
stays silent. Gaps are marked `[NEEDS: …]`, never papered over.

**Conventions.** Coordinates $X^M$, $M = 0,\dots,4$; four-dimensional indices
$\mu = 0,\dots,3$; $\tau$ the compact fiber coordinate,
$\tau \sim \tau + 2\pi R_\tau$. $G_{MN}$ is the 5D Lorentzian metric, signature
$(-,+,+,+,+)$, with invariant volume density $\sqrt{-G}$ and 5D Ricci scalar
$R^{(5)}$. Mass dimensions are 5D throughout unless stated: a canonical 5D
scalar has $[\Psi] = 3/2$.

**Tier labels** (used across the whole rebuild): [THEOREM] — derived with zero
fitted parameters in the formula. [DERIVED] — follows from calibrated inputs.
[CALIBRATED] — value fixed by data or matching; microphysical basis open.
[PHENOMENOLOGY] — fits data, mechanism unknown. [OPEN] — not yet derived.
[KILLED] — falsified and honestly closed.

---

### 1.1 The pruned action

\begin{equation}
S_{\mathrm{GTH}} = S_{EH} + S_{\Psi} + S_{el} + S_{\chi} + S_{CS} + S_{boundary}
\tag{1.1}
\end{equation}

**Fields.** $\Psi$: complex scalar, the superfluid order parameter (global
$U(1)$ phase rotations, spontaneously broken). $u$: the supersolid displacement
field — implicit in the elastic sector; its 5D introduction is work item 15
[NEEDS: introduce $u^i$, derive the elastic free energy $F_{el}$]. $\chi$: 5D
Dirac spinor, $\Gamma^A$ the 5D Dirac matrices, $D_A$ the gauge-covariant
derivative. $A$: gauge connection on a 3-manifold $M_3$ (Chern–Simons sector).
$G_{MN}$: the 5D metric.

**Symmetries.** 5D diffeomorphism invariance; the spontaneously broken global
$U(1)$ of $\Psi$; the spontaneously broken translation/rotation pattern of the
supersolid carried by the elastic sector; metric-independence (topological
invariance) of $S_{CS}$.

**Gravitational sector — assumed, not induced.**

\begin{equation}
S_{EH} = \frac{1}{2\kappa_5^2}\int d^5X\,\sqrt{-G}\;R^{(5)} \tag{1.2}
\end{equation}

$\kappa_5$ is the 5D gravitational coupling,
$\kappa_5^2 = 2\pi R_\tau\,\kappa_4^2 = 8.68\times10^{-56}\ \mathrm{GeV}^{-3}$
[DERIVED 2026-10-08, Kaluza–Klein reduction],
$\kappa_5 = 2.95\times10^{-28}\ \mathrm{GeV}^{-3/2}$, with
$M_5 = 2.26\times10^{18}\ \mathrm{GeV} \approx M_4$.
$R_\tau = \hbar/(M_{UV}c) = 1.617\times10^{-35}\ \mathrm{m}$ is the compact
fiber radius — the Planck-scale proper-time relaxation fiber of the
Israel–Stewart sector, **not** a thermal fiber (the thermal-fiber reading is
[KILLED]: it contradicts the manuscript by $10^{61}$). Radion stabilization is
[ASSUMED]. The KK tower sits at $10^{19}$ GeV: no effect on 4D predictions.
*What it does:* provides 5D gravity. *What it does not do:* derive it.
Gravity is **assumed**, not induced — there is no induced-gravity mechanism in
this action.

**Order-parameter sector.**

\begin{equation}
S_{\Psi} = \int d^5X\,\sqrt{-G}\left[\tfrac{1}{2}G^{AB}\partial_A\Psi^*
\partial_B\Psi - V_{\mathrm{eff}}\right], \quad
V_{\mathrm{eff}} = -\mu^2|\Psi|^2 + \frac{\lambda}{2}|\Psi|^4 \tag{1.3}
\end{equation}

$\mu$: Landau–Ginzburg potential parameter, $\mu c^2 = 410\ \mathrm{MeV}$
(sets the vortex core $\xi = 1/(2\mu) = 0.24\ \mathrm{fm}$ and
$m_H = 2\mu = 820\ \mathrm{MeV}$; PDE-A corrections, 2026-10-08). $\lambda$:
quartic coupling. *What it does:* spontaneous $U(1)$ breaking, the condensate,
the vortex sector. *What it does not do:* fix its own scale — the map
$\mu^2,\lambda \to \langle\Psi\rangle \to \rho_0$ is [OPEN] (work item 2).
The value $\mu c^2 = 410\ \mathrm{MeV}$ sits near the QCD scale; that is
suggestive, not derived.

**Elastic sector.**

\begin{equation}
S_{el} = \int d^5X\,\sqrt{-G}\;{\cal L}_{el}, \qquad
{\cal L}_{el} = -\tfrac{1}{2}K\,\varepsilon_V^2 - G\,E_{AB}E^{AB} \tag{1.4}
\end{equation}

$K$: bulk modulus; $G$: shear modulus ($G_{\mathrm{shear}}$ in older files;
$G$ throughout the rebuild). $\varepsilon_V$: volumetric strain;
$E_{AB}$: deviatoric strain tensor. The 5D definitions of the strain measures
are partial pending the displacement field $u^i$ (see above). *What it does:*
supersolid elastic response, including the birefringent sound speeds
$c_T = \sqrt{G/\rho_0} = 8.94\times10^7\ \mathrm{m/s}$ and
$c_L = \sqrt{(K + 4G/3)/\rho_0} = 1.60\times10^8\ \mathrm{m/s}$ (R1, verified).
*What it does not do:* derive $K$ or $G$ (work item 6, [OPEN]); it contains no
$\lambda_B$ term (removed, §1.2).

**Fermion sector — no coupling to the order parameter.**

\begin{equation}
S_{\chi} = \int d^5X\,\sqrt{-G}\,
\left[\bar\chi\left(i\Gamma^A D_A - m_\chi\right)\chi
+ g_F(\bar\chi\chi)^2\right] \tag{1.5}
\end{equation}

$m_\chi$: fermion mass [unspecified — not in the parameter set]; $g_F$:
four-fermion coupling [unspecified]. *What it does:* provides 5D Dirac
fermions. *What it does not do:* couple to $\Psi$ — **there is no
$\chi$–$\Psi$ coupling**, verified, which kills the zero-mode problem that
such a coupling would create. It provides no Yukawa couplings, and the
electroweak sector is [UNBUILT] (§1.5).

**Chern–Simons sector — representations, not gluons.**

\begin{equation}
S_{CS} = \frac{k_{\mathrm{bare}}}{4\pi}\int_{M_3}
\mathrm{Tr}\left(A\wedge dA + \tfrac{2}{3}A^3\right), \qquad
k_{\mathrm{bare}} = 0,\;\; k_{\mathrm{eff}} = 3 \tag{1.6}
\end{equation}

The term is metric-independent (topological). $k_{\mathrm{eff}} = 3$ follows
from three convergent topological arguments (CS-1). The gauge field is the
non-abelian Berry holonomy of 3 transported strands; color is the strand
index. *What it does:* yields $SU(3)_3$ representations
($\mathbf{3}, \bar{\mathbf{3}}, \mathbf{8}, \mathbf{6}, \mathbf{10}$ with
$\mathbf{3}\otimes\bar{\mathbf{3}} = \mathbf{1}\oplus\mathbf{8}$).
*What it does not do:* produce propagating gluons or confinement. The framing
anomaly is resolved — GTH vortices are physically framed, which is a
prediction, not a bug.

**Boundary sector — unspecified.**

\begin{equation}
S_{boundary} = [\mathrm{UNSPECIFIED}] \tag{1.7}
\end{equation}

DE-1 stands: boundary subtraction is dimensionally incapable of cancelling
bulk vacuum energy; $V_{\min}$ is locked to $\rho_0$ by
$V_{\mathrm{eff}} = -\mu^2|\Psi|^2 + (\lambda/2)|\Psi|^4$ (zeroing one while
keeping the other *is* the fine-tuning); the exact tuning required is
$6.2\times10^{-36}$. Dark energy within the current action is [KILLED] as a
structural no-go ($10^{35}$). $S_{boundary}$ is retained as an unspecified
placeholder; it does not solve the cosmological-constant problem.

---

### 1.2 Removed, dormant, not adopted

- **$S_{seed}$: REMOVED (2026-10-08).** An undefined ghost term — never defined
in any file. Removed, not replaced.
- **$\lambda_B$ term: REMOVED (2026-10-08).** The
$\lambda_B\,v_B\!\cdot\!(\nabla\times v_B)$ term never appeared in any
derivation or any observable. Deleted from $S_{el}$.
- **3-form sector $S_{top}$: DORMANT.** It is defined —
$V_{top} = \lambda_{top}[-\ln(1-2\alpha\kappa\rho)
+ \|dM^{(3)}\|^2/(2M_0^2)]$ with $\lambda_{top},\alpha,\kappa,M_0$ all
unspecified — but it contributes to **zero** observables (4 mentions in the
record, all definitional). Removed from the working action. Reactivation
condition: full parameter specification plus an observable that requires it.
- **$S_{YM}$: NOT ADOPTED.** One-loop induction of a Yang–Mills term was
proposed, but the representation conflict is unresolved: the order parameter
$\Psi$ is in the **fundamental** representation while the induction requires
an **adjoint** Higgs. Stated plainly: until that conflict is resolved, no
$S_{YM}$ enters the action. The rebuild has no gauge-boson kinetic term, and
does not pretend otherwise.

---

### 1.3 The roton term — corrected

The proposed roton term was

\begin{equation}
\Delta S_{\mathrm{prop}} = -\int d^5X\,\sqrt{-G}\left[
\frac{\kappa_r}{2}|D^2\Psi|^2
- \frac{\delta_r}{2}|D_A\Psi|^2|D^A\Psi|^2\right] \tag{1.8}
\end{equation}

It fails twice, independently.

**(a) Dimensionally inconsistent in 5D.** With $[\Psi]=3/2$:
$|D^2\Psi|^2$ has dimension 7 so $[\kappa_r]=-2$; $|D\Psi|^4$ has dimension
10 so $[\delta_r]=-5$. Hence $[\delta_r/\kappa_r] = -3$ in mass dimension —
but a roton wavevector squared needs dimension **$+2$**. The combination
$\delta_r/\kappa_r$ cannot be $k_r^2$; the term as written cannot produce the
scale it was introduced to produce.

**(b) No quadratic minimum.** Expanding $\Psi = v + \varphi$ about a real VEV
$v$, the term $|D_A\Psi|^2|D^A\Psi|^2$ is **quartic** in the fluctuation
$\varphi$. It contributes nothing at quadratic order, so no roton minimum can
appear in the quadratic dispersion. The proposed term cannot do its job even
ignoring (a).

A third, independent kill (2026-10-09): the 47-nm lattice the roton route was
meant to derive is quantum-melted — Lindemann ratio $2.1\times10^6$ against
the 0.15 threshold. The #5/#6 microphysical picture behind route #16 is dead,
and route #16 is [BLOCKED] (it also had more free parameters than
constraints).

**Required correction — the VEV-inserted variant.** The foundation adopts

\begin{equation}
\Delta S_{\mathrm{rot}} = -\int d^5X\,\sqrt{-G}\left[
\frac{\kappa_r}{2}|D^2\Psi|^2
- \frac{\delta_r}{2}|\Psi|^2|D_A\Psi|^2\right] \tag{1.9}
\end{equation}

Note: $\delta_r$ here is **re-dimensioned** ($[\delta_r] = -3$), not the
$-5$ of the inconsistent proposal — the symbol is reused, the coupling is a
different one. Expanding $\Psi = v + \varphi$:

\begin{equation}
-\frac{\delta_r}{2}|\Psi|^2|D_A\Psi|^2 \;\to\;
-\delta_r v^2 k^2\,|\varphi_k|^2 + \cdots \quad (\text{quadratic}) \tag{1.10}
\end{equation}

competing with $+\kappa_r k^4|\varphi_k|^2$ from the $|D^2\Psi|^2$ term. The
quadratic dispersion $\omega^2 \sim \kappa_r k^4 - \delta_r v^2 k^2$
(+ gap terms) develops its minimum at

\begin{equation}
k_r = v\sqrt{\frac{\delta_r}{2\kappa_r}} \tag{1.11}
\end{equation}

with $[\delta_r v^2/\kappa_r] = -3 + 3 + 2 = +2$ — dimensionally consistent in
5D. **Status:** (1.9) is adopted as the foundation. The determination of
$(\kappa_r,\delta_r,v)$ is [OPEN]: 4 unknowns against 1 constraint from
$K/G$, and the modulated-VEV elastic calculation that would fix them does not
exist yet.

### 1.3b The dark-DDI sector — the dipole's microscopic origin (Build Mission B, 2026-10-09)

The dipole moment that route #17 required — explicitly "not in the GTH action" — now has a microscopic origin. The $\chi$ fermions of $S_\chi$, under the **BCS identification** $\Psi = \langle\chi\chi\rangle$ [ASSUMED] (pair condensate, $m_\chi = m_{\mathrm{sub}}/2$, NJL $g_F$ as pairing glue), carry spin magnetic moments via a new dark $U(1)_D$ gauge field:

\begin{equation}
S_D = \int d^5X\,\sqrt{-G}\left[-\tfrac{1}{4}F_{AB}F^{AB} + \bar\chi(i\Gamma^A D_A - m_\chi)\chi + g_F(\bar\chi\chi)^2\right] \tag{1.11b}
\end{equation}

$D_A = \nabla_A - ie_D A_A$. The key physical fact: the $\chi$ are ultra-light ($10^{-48}$ kg) hence ultra-relativistic, and for relativistic fermions the Breit spin-spin interaction is **not** $v^2/c^2$-suppressed — it dominates the dark Coulomb by $\sim 10^{26}$ and carries exactly the dipolar $(3\cos^2\theta - 1)$ angular structure. Dipole coupling is automatic (Dirac $g = 2$).

**Numerics** (all in `build-mission-B-dipole.md`): target $g_{dd} \approx 1.3\times10^{-53}\ \mathrm{J\cdot m^3}$ gives $\varepsilon_{dd} = 8.7 > 1$ (supersolid) ✓; implied $\mu_\chi = 1.2\,\mu_B$ (natural); $e_D = 7.8\times10^{-19}e$ (millicharge, below all bounds); relativistic spin-spin energy density $1.6\times10^{-8}$ Pa vs needed $10^{-9}$–$10^{-8}$ Pa — **order-of-magnitude match** ✓. Eliminated quantitatively: vortex-lattice dipoles (10⁻⁴² off), spin-gravity (10⁻²⁵), heavy-MeV $\chi$ (would exceed $\rho_0$ by 10¹⁸), $\Psi$ quantum dipole (spin-0, forbidden), phase-gradient phonons (circular).

**What it buys:** the ad-hoc roton term ($\kappa_r$, $\delta_r$) is **eliminated** — the roton now comes from real DDI physics as in Dy/Er experiments. **Net −1 parameter** (remove 2, add $e_D$; $m_\chi$ fixed by BCS). The roton $(k_r, \Delta)$ becomes calculable. Sharp predictions: massless decoupled dark photon ($N_{\mathrm{eff}}$-safe), $e_D \sim 10^{-18}e$ millicharge, ferromagnetic $\chi$ sector (Stoner alignment — mechanism with relativistic DOS still to compute).

**Honest gaps:** BCS identification assumed not derived; Stoner mechanism proposed not computed; $e_D$'s small value unexplained (radiatively stable); dark photon must stay decoupled (no portal — natural in current action).

---

### 1.4 The ten parameters

**Reconciliation note.** The 2026-10-08 update booklet counted ten parameters,
promoting $\tau_0$ to derived via $\tau_0 = \hbar/(m_{sub}c^2)$. That
promotion is **invalid**: the formula predicts $1.1\ \mathrm{ms}$ against the
septuple's own $\tau_0 = 12.5\ \mathrm{ms}$ — an $11\times$ miss. $\tau_0$ is
restored to [CALIBRATED] (count: eleven). Then Build Mission B (2026-10-09)
eliminated the ad-hoc roton couplings ($\kappa_r$, $\delta_r$) — the roton
now comes from dark-DDI physics — and added one dark-sector coupling $e_D$:
**net −1, count: ten.** 4 fundamental + 6 calibrated + 2 derived-on-calibrated
(not counted).
[NEEDS: verify full 11 against ~/workspace/Geotopological_update_booklet.pdf —
the booklet's §11 reflects the superseded promotion.]

**Fundamental (4).**

1. $M_{UV} = 1.22\times10^{19}\ \mathrm{GeV}/c^2$ — [ASSUMED] Planck-scale
input. Sets the derived fiber radius
$R_\tau = \hbar/(M_{UV}c) = 1.617\times10^{-35}\ \mathrm{m}$ [DERIVED].
2. $M_{IR} = 1.8\times10^{-69}\ \mathrm{kg}$ — [ASSUMED] Hubble-scale IR
cutoff.
3. $\mu c^2 = 410\ \mathrm{MeV}$ — [FUNDAMENTAL] Landau–Ginzburg potential
parameter; sets the vortex core $\xi = 1/(2\mu) = 0.24\ \mathrm{fm}$ and
$m_H = 2\mu = 820\ \mathrm{MeV}$. Category-distinct from $m_{sub}$. (The
$\mu^2,\lambda \to \rho_0$ VEV mapping remains [OPEN], work item 2.)
4. $\theta = 2\pi/3$ — [FUNDAMENTAL] theta angle; Witten fractionalization
(quark charge $m/3$).
[NEEDS: verify tier and role of $\theta$ against the booklet — carried here
per the audited record.]

**Calibrated (5).**

5. $\rho_0 = 1.01\times10^{-26}\ \mathrm{kg/m^3}$ — [CALIBRATED] S1 acoustic
consistency; repaired 2026-10-08 from $1.11\times10^9\ \mathrm{kg/m^3}$.
Within 18% of $\rho_c$: one condensate, no spacetime–matter split.
6. $K = 1.5150\times10^{-10}\ \mathrm{Pa}$ — [CALIBRATED]. The ratio
$K/G = 15/8$ is structural (equivalently Poisson ratio $\nu = 29/106$,
verified); the absolute scale is [ASSUMED] — fitted by ancestry (see Ch. 2).
EOS derivation [OPEN] (#6).
7. $G = 8.0797\times10^{-11}\ \mathrm{Pa}$ — [CALIBRATED] tidal/EOS matching;
derivation [OPEN] (#6).
8. $\tau_0 = 12.5\ \mathrm{ms} = 1/80\ \mathrm{s}$ — [CALIBRATED]
Israel–Stewart relaxation time. Microphysical basis [OPEN] (work item 5:
what sets $1/80\ \mathrm{s}$?).
9. $k_{\mathrm{eff}} = 3$ — [CALIBRATED] Chern–Simons level; three convergent
topological arguments (CS-1).
10. $e_D = 7.8\times10^{-19}e$ — [CALIBRATED] dark $U(1)_D$ charge of $\chi$
(Build Mission B); BCS identification $\Psi = \langle\chi\chi\rangle$
[ASSUMED]; implied $\mu_\chi = 1.2\,\mu_B$ (natural); spin-spin energy
density $1.6\times10^{-8}$ Pa vs needed $10^{-9}$–$10^{-8}$ Pa
[ORDER-OF-MAGNITUDE MATCH].

**Derived-on-calibrated (2).**

10. $\eta_n = G\,\tau_0 = 1.01\times10^{-12}\ \mathrm{Pa}\!\cdot\!\mathrm{s}$ —
[DERIVED] (arithmetic verified).
11. $a_0 = \sqrt{E\cdot G_N} = 1.172\times10^{-10}\ \mathrm{m/s^2}$ —
[THEOREM]. $E = 9KG/(3K+G) = 2.0580\times10^{-10}\ \mathrm{Pa}$ is Young's
modulus — the uniaxial disk stress is the correct modulus, not $K$ — and the
geometric factor is exactly 1 from the energy-balance derivation. Zero fitted
parameters in the formula; it rests on the calibrated $K, G$. (The 2.33%
numerical agreement was shown circular on 2026-10-09 — $c_{sub}$
assumed/reverse-engineered — the theorem's structural form survives.)

**Retained phenomenological — not counted in the ten.**

- $\lambda_c = 420\ \mathrm{kpc}$ — [PHENOMENOLOGY] galactic core scale; no
candidate scale matches; likely nonlinear structure formation.
- $n_e = 2.75\times10^{48}\ \mathrm{m}^{-3}$ — [PHENOMENOLOGY] $465\times$
the natural value; needs a core model (ngEHT watch).
- $\delta_{loop} = 1/49$ — [KILLED] as a derivation (one-loop fitting
artifact; $\Pi_{1L}$ appears exactly once, never derived); retained Tier-2
calibrated only.

**Bounded, not a parameter.** $m_{sub}$ — [UNDETERMINED]: six approaches span
40 orders of magnitude; robust bound $m_{sub} < 0.02\ \mathrm{eV}/c^2$
(BEC $T_c > T_{CMB}$); seesaw candidate $\sqrt{\mu\hbar a_0/c^3} \approx
3.25\times10^{-13}\ \mathrm{eV}$. Determining it requires the interaction $g$,
the substrate temperature, and the individual $\mu^2/\lambda$ — none in the
action.

**Consistency checks the set must satisfy (and does):** $R_\tau$ above;
$c_T = \sqrt{G/\rho_0} = 8.94\times10^7\ \mathrm{m/s}$ (birefringent horizons,
R1); $\nu = 29/106$ (R5); $\eta_n = G\tau_0$ (R4);
$a_e = \sqrt{\hbar^2/(2m_e)\cdot G} = 8.692\times10^{-15}\ \mathrm{m}$
($350\times$ below the old atomic-scale loop claim, which it [KILLS]).

---

### 1.5 What the action does not contain — load-bearing gaps

1. **Dipole moment.** Not in the action. Needed for the absolute scale:
route #17 (dipolar) is [OPEN] as a derivation; the $\Psi$-potential route
fails by 45 orders of magnitude, Casimir by 123, Kaluza–Klein by 40. Honest
independent bounds give $c_T \in (10^6, 3\times10^8)\ \mathrm{m/s}$
(Landau + causality) against the $\pm35\%$ the $a_0$ window needs. The $a_0$
theorem stands as a structural relation with one assumed scale.
2. **Substrate temperature $T$, quasiparticle $\mu^2$, quasiparticle mass
$m^*$.** Not in the action. Needed for the NESS transport coefficients
$\Gamma_0, \Gamma_{\mathrm{relax}}, \gamma$ — confirmed underivable from the
septuple (Cycle 4 P1A, negative).
3. **Roton parameters $\kappa_r, \delta_r$.** Not constrained (§1.3); the
modulated-VEV elastic calculation does not exist.
4. **Electroweak sector.** [UNBUILT]. Quark quantum numbers follow from CS-1
kinematics (color = strand index, flavor = winding, charge $m/3$ via Witten)
but no electroweak dynamics exists.
5. **$m_{sub}$.** [UNDETERMINED] (§1.4).
6. **$S_{boundary}$.** Unspecified; the DE-1 no-go stands (§1.1).
7. **$\tau_0$ microphysics.** [OPEN] — what sets $1/80\ \mathrm{s}$?
8. **$K, G$ from an equation of state.** [OPEN] (#6) — the absolute elastic
scale is assumed, fitted by ancestry.

This is the contract. The $a_0$ theorem, NESS screening, the hadronic sector,
and everything downstream are built on the seven terms of (1.1)/(1.11b) and the ten
numbers of §1.4 — and on nothing else.


---

# Chapter 2 — Gravity: the a₀ structural theorem
**Tier of this chapter's core claim:** THEOREM (form), CALIBRATED (absolute scale).
**Standing of the chapter:** The *relation* a₀ = √(E·G_N) survives with zero fitted
parameters in the formula and no galactic data anywhere in its chain. The *numerical
value* 1.1720×10⁻¹⁰ m/s² is fitted by ancestry: the absolute scale of the elastic
moduli was reverse-engineered, not derived (see §2.3). This chapter is the rebuild's
honest core example of the tier discipline: theorem up front, provenance in the open.

---

## 2.1 The setup: a galactic disk as a uniaxial load

Consider a thin, axisymmetric galactic disk resting on the GTH substrate. The disk's
self-gravity imposes a **vertical** load per unit area on the substrate. The substrate
is laterally unconstrained: it is free to shear and to contract laterally as the disk
presses down. This is the textbook definition of a **uniaxial stress experiment** —
one axial load, free lateral boundaries.

Linear isotropic elasticity admits several moduli, each answering a different boundary
question. The geometry of the experiment selects exactly one of them:

| Modulus | Value | √(M·G_N) [10⁻¹⁰ m/s²] | Deviation* | Verdict |
|---|---|---|---|---|
| Bulk modulus K | 1.5150×10⁻¹⁰ Pa | 1.006 | 16.2% | wrong geometry: K answers hydrostatic (confining) loading, but the disk loads the substrate uniaxially with free lateral boundaries |
| Shear modulus G | 8.0797×10⁻¹¹ Pa | 0.734 | 38.8% | wrong geometry: G answers a pure shear; the disk's load has a hydrostatic component and is not pure shear |
| Longitudinal (P-wave) modulus M = K + 4G/3 | 2.5923×10⁻¹⁰ Pa | 1.315 | 9.6% | wrong geometry: M answers uniaxial *strain* (laterally confined), but the substrate is laterally *free* |
| **Young's modulus E = 9KG/(3K+G)** | **2.0580×10⁻¹⁰ Pa** | **1.172** | **2.33%** | **correct geometry: E answers uniaxial *stress* — vertical load, laterally free** |

\* Deviation from the observed RAR scale 1.20×10⁻¹⁰ m/s² (McGaugh et al. 2016); all
deviations are dominated by the ±20% observational systematics (see §2.4), not by the
modulus choice — the modulus choice matters because only one of them is geometrically
correct, not because the numbers punish the others.

The distinction is physical, not conventional. K and M differ from E by the
treatment of lateral degrees of freedom: K assumes a closed system under uniform
pressure; M assumes lateral clamping (the substrate cannot squeeze sideways); E
assumes what the galactic disk actually is — a load on a free surface. [THEOREM: the
modulus selection is fixed by the geometry of the experiment, not fitted.]

The substrate moduli themselves carry internal structure. The dipolar substrate
model gives the **ratio**

$$\begin{equation}
\frac{K}{G} = \frac{15}{8} = 1.8750
\tag{2.1}
\end{equation}$$

as a structural result [DERIVED from the dipolar substrate model; the full microscopic derivation remains [OPEN] (route #17, see Ch.1)]. The
Poisson ratio follows for an isotropic solid,

$$\begin{equation}
\nu = \frac{3K - 2G}{2(3K + G)} = \frac{29}{106} \approx 0.2736,
\tag{2.2}
\end{equation}$$

a consistency identity, not an independent claim. What (2.1) does **not** do is set
the absolute scale: no microphysical derivation of K or G individually has survived.
The scale is fitted by ancestry (§2.3).

Given the fitted absolute scale

$$\begin{align}
K &= 1.5150\times10^{-10}\ \mathrm{Pa}, \tag{2.3a}\\
G &= 8.0797\times10^{-11}\ \mathrm{Pa}, \tag{2.3b}
\end{align}$$

with K/G = 15/8 to four significant figures, the selected modulus is

$$\begin{equation}
E = \frac{9KG}{3K + G} = 2.0580\times10^{-10}\ \mathrm{Pa}.
\tag{2.4}
\end{equation}$$

## 2.2 The theorem: a₀ = √(E·G_N)

The substrate resists the disk's self-gravity elastically. Write the energy balance
per unit disk area. The gravitational binding energy density of a thin disk of surface
density Σ₀ is, up to geometry,

$$u_{\mathrm{grav}} \sim 4\pi^2 G_N \Sigma_0^2,$$

while the elastic strain energy density of the substrate at the yield threshold is

$$u_{\mathrm{elast}} \sim E.$$

Equating them — the substrate yields where the disk's self-gravity exhausts its
elastic capacity — gives the critical surface density

$$\begin{equation}
\Sigma_0 = \sqrt{\frac{E}{4\pi^2 G_N}}.
\tag{2.5}
\end{equation}$$

The associated characteristic acceleration of the disk, the surface-gravity of a
thin sheet, is a₀ = 2πG_NΣ₀. Substituting (2.5):

$$\begin{equation}
a_0 = 2\pi G_N \sqrt{\frac{E}{4\pi^2 G_N}}
    = \sqrt{E\,G_N}.
\tag{2.6}
\end{equation}$$

**The geometric factor is exactly 1.** The 2π in a₀ = 2πG_NΣ₀ cancels the 4π² in the
energy density algebraically — not approximately, not by tuning, but by the structure
of the thin-disk geometry itself. There is no fudge factor in (2.6): no
order-of-magnitude estimate, no "≈", no absorbed constant. [THEOREM]

Numerically:

$$\begin{equation}
a_0 = \sqrt{(2.0580\times10^{-10})(6.67430\times10^{-11})}
    = 1.1720\times10^{-10}\ \mathrm{m/s^2}.
\tag{2.7}
\end{equation}$$

To be explicit about what (2.6) claims and does not claim:

- **Claims:** the *form* of the MOND acceleration scale is a geometric necessity of a
  disk loading an elastic substrate — modulus selected by the loading geometry,
  geometric factor exactly unity, zero fitted parameters *in the formula*, and no
  galactic observable anywhere in the chain. The theorem is true for any values of E
  and G_N.
- **Does not claim:** the numerical value 1.1720×10⁻¹⁰ m/s² as a prediction. That
  number inherits the fitted absolute scale of E (§2.3).

This is the precise sense in which Chapter 2 carries a THEOREM: the survival is
structural, the 2.33% agreement is not a miracle, and the chapter must be read with
both registers held simultaneously.

## 2.3 Provenance of the absolute scale (the honest ledger)

This section is mandatory and is stated without euphemism. The number 1.1720×10⁻¹⁰
m/s² is **fitted by ancestry**. The chain:

1. **c_T was reverse-engineered, not derived.** The transverse sound speed
   c_T = 8.94×10⁷ m/s was obtained by fitting an acoustic cavity to resonate at
   ~171 Hz in the vicinity of a claimed gravitational-wave echo signal:
   2×261.6 km×171 Hz = 8.947×10⁷ m/s. That claimed echo signal is now dead (the
   echo program closed with seven nulls and the κ_conv ≡ 0 structural theorem; see
   the kill ledger). The anchor of the scale chain was a signal that does not exist.

2. **The manuscript's stated derivation was arithmetically false.** The manuscript
   claimed c_T = √(G/ρ₀). With the manuscript's *own* numbers for G and ρ₀, this
   formula is wrong by a factor of ~10¹⁷ — the septuple is internally inconsistent at
   the level of the relation that was supposed to anchor it (c_s = √(G_shear/ρ₀)
   gives 2.7×10⁻¹⁰ m/s against the c_s = 8.94×10⁷ m/s used everywhere). The
   derivation did not fail subtly; it was never arithmetically true.

3. **The repair explicitly ranked options by a₀-preservation.** A later repair
   campaign set out to reconcile the moduli with the septuple and *explicitly
   ranked candidate fixes by how well they preserved a₀*. It reverse-engineered
   ρ₀ = 1.01×10⁻²⁶ kg/m³ from the assumed c_T. The value of ρ₀ was chosen to save
   the answer, not derived from microphysics.

4. **A direct derivation was proved impossible.** A dedicated repair attempt set out
   to derive the absolute elastic scale from first principles and returned a
   mathematical impossibility proof: the surviving GTH action contains no
   microscopic content capable of setting the scale (the dipole moment and the
   substrate mass anchor are explicitly absent from the action).

5. **The Ψ-sector cannot rescue it.** The condensate's microphysics cannot produce
   shear: a pure superfluid has G = 0 *by definition* — that is what "superfluid"
   means — and its longitudinal mode comes out 37% high of the required value.
   Every route from microphysics to the elastic scale has been tried and has failed.

**Verdict:** the 2.33% agreement of (2.7) with the observed RAR scale is fitted by
ancestry. The theorem's *form* — modulus selection by loading geometry, geometric
factor exactly 1, zero fitted parameters in the formula, no galactic data in the
chain — is what survives, and it is genuine. [STRUCTURAL RELATION WITH ONE ASSUMED
SCALE.]

**Naturalness cross-checks (not derivations — presented as what they are):**

- The fitted moduli imply a scattering length a_s = 1.0 l_Planck (P3a: exact inversion gives 0.99998 l_P) — a cross-check on internal consistency, not a derivation of anything.
- The fitted moduli imply a substrate dipole moment of 0.32 μ_B — mutually
  consistent with the independent τ₀ naturalness bound. Again a cross-check, not a
  derivation.

[NEEDS: an independent anchor for the absolute elastic scale that does not descend
from the dead echo calibration — this is the open derivation #6 of the master
equation list.]

## 2.4 Observational confrontation

The theorem's value is confronted with data on the data's terms. The observed RAR
acceleration scale:

| Source | a₀ [10⁻¹⁰ m/s²] | Agreement with 1.1720 |
|---|---|---|
| McGaugh et al. 2016 (SPARC) | 1.20 ± 0.02 (stat) ± 0.24 (sys) | 2.33%, 0.12σ |
| Independent reanalysis | 1.116 ± 0.16 | 4.8%, 0.35σ |
| cH₀/2π, Planck H₀ | 1.042 | 11% |
| cH₀/2π, SH0ES H₀ | 1.129 | 3.7% |

The statistical errors are small; the systematics are not. Mass-to-light ratios,
distance calibrations, and inclination corrections impose ±20% systematics on the
observed scale, and those systematics **dominate every comparison in this table**.
The 2.33% agreement is well inside the systematic envelope — which is exactly why
§2.3's provenance statement matters: agreement this good, inside systematics this
large, attached to a scale this fitted, is a consistency check, not a prediction
confirmed.

The independent agreement worth noting is the *form*: SPARC data on 3,389 points
follows the MOND transition at a single scale — the BST fit (χ² = 10.54) — which is
precisely what (2.6) requires structurally. The scale's universality across the
sample is the empirical fact the theorem must respect (§2.6).

## 2.5 Gravity descent: the 5D constants

[DERIVED] Dimensional reduction of the 5D GTH action to the effective 4D theory fixes
the higher-dimensional gravitational constants. What was assumed: the Kaluza–Klein
compactification ansatz on the proper-time fiber S¹_τ (the fiber is Planck-scale,
R_τ ~ l_Planck, the Israel–Stewart relaxation fiber — the thermal-fiber cosmological
reading is dead and is not used here). What was derived: matching the reduced action
to the 4D Einstein–Hilbert term fixes

$$\begin{align}
R_\tau &= 1.617\times10^{-35}\ \mathrm{m}, \tag{2.8a}\\
\kappa_5^2 &= 8.68\times10^{-56}\ \mathrm{GeV}^{-3}, \tag{2.8b}\\
M_5 &= 2.26\times10^{18}\ \mathrm{GeV}. \tag{2.8c}
\end{align}$$

R_τ coincides with the Planck length — the compactification scale is the Planck
scale, a result, not an input. M_5 sits within an order of magnitude of the 4D
Planck mass, as a 5D fundamental scale should.

[NEEDS: the exact compactification ansatz and the reduction steps are recorded in
the gravity-sector notes — the chapter cites the results; the full chain belongs in
the technical appendix and has not yet been written into this rebuild.]

## 2.6 Falsifiability

A theorem with one assumed scale is falsifiable at three levels. These are live:

**(a) BTFR drift at high redshift — kills tracking.** The a₀ theorem, combined with
ρ₀ ~ ρ_c, predicts that a₀ tracks H(z) (the a₀ ~ cH₀ structural relation gives a
−0.48 dex BTFR shift at z = 2 relative to z = 0). A null detection of this drift —
a₀ constant to within systematics out to z ~ 2, where the theory requires it to
move — kills the tracking prediction and with it the ρ₀–ρ_c structural link. Constant
a₀ is already excluded at 5.3σ in the low-z compilation; the high-z test is the
decisive one.

**(b) RAR scale outside 0.8–1.6×10⁻¹⁰ m/s² — breaks agreement.** If improved
systematics (better M/L, distances, inclinations) move the observed RAR scale
outside this window while the theorem's value stays at 1.1720, the structural
agreement is broken. Inside the window, the ±20% systematics mean the theorem is
consistent but not confirmed.

**(c) Per-galaxy a₀ variation beyond systematics — kills universality.** The theorem
gives one scale from one substrate: a₀ is a property of the vacuum, not of the
galaxy. A confirmed detection of intrinsic per-galaxy variation in the transition
scale, beyond what the systematics allow, falsifies the universality the theorem
requires. Current data are consistent with a single scale; this is the standing
empirical fact of §2.4.

**K/G separation: no clean probe exists.** The ratio K/G = 15/8 is structural, but
there is currently no observational handle that separates K from G independently.
The morphology route is the candidate: disks (uniaxial stress → E) versus
spheroids/ellipticals (approximately spherical loading → a different modulus
combination) should feel different effective moduli. But the spherical-geometry
calculation is OPEN, and the required ~10–15% precision on elliptical RAR analogues
does not exist. This is stated plainly: the theory predicts a morphology dependence
of the transition scale that we can neither compute nor measure yet. It is a live
research target, not a result.

---

**Chapter status:** theorem proved (§2.2), modulus selection justified by loading
geometry (§2.1), provenance fully disclosed (§2.3), confrontation within systematics
(§2.4), descent constants recorded (§2.5), falsifiers live (§2.6). The chapter's
honest title is *a structural relation with one assumed scale* — and that is enough
to build on.


---

# Chapter 3 — Screening: NESS thermodynamics, the BST kernel, and their separation
**Chapter status:** Two independent screening results are kept; one attempted unification is killed. The NESS mechanism provides the f_n thermodynamics [DERIVED-from-framework / PHENOMENOLOGY]. The BST kernel reproduces the radial-acceleration relation on real data [PHENOMENOLOGY, χ² = 10.54]. They are proven independent (§3.3). The BST kernel has no microscopic derivation: three routes failed (BST-A, 2026-10-08), and the vortex-lattice attempt failed at five independent points (P1b, 2026-10-08).

---

## 3.0 Why screening is needed

The GTH substrate is a condensate with absurdly small elastic moduli (K ~ 10⁻¹⁰ Pa). A theory of everything built on such a substrate must explain why ordinary gravity looks Newtonian in the solar system and MOND-like in galaxies, without the substrate showing up in either regime. "Screening" is the name for whatever mechanism regulates how the normal fraction of the two-fluid substrate — and the elastic stress it carries — responds to local gravitational field strength. The old manuscript bundled two distinct objects, a prescribed normal-fraction profile f_n(g_bar) and an elastic kernel for the radial acceleration relation, and treated them as one story. The falsification campaign split them apart and kept both halves on honest footing.

**Provenance note.** NESS: Wave 1 mission SCR-1 (2026-10-07), coefficient audit Cycle 4 P1A (2026-10-08). BST: Wave 1 missions incl. work item #19, microscopic-derivation audit BST-A (2026-10-08), vortex-lattice derivation attempt P1b (2026-10-08). Separation: Cycle 4 P1B separation proof (2026-10-08). All source documents live in `~/workspace/helix/toe-roadmap/`.

---

## 3.1 NESS screening: f_n thermodynamics

### 3.1.1 The Tolman no-go and why it forces non-equilibrium

In thermal equilibrium, the Tolman relation forbids a spatially varying normal fraction f_n: the temperature profile of a static gravitating system is fixed by the metric, so f_n(r) cannot vary with the gravitational field g. Any equilibrium screening mechanism is dead on arrival. This was the state of the problem before Wave 1.

The escape is to abandon equilibrium. In a static gravitational field the substrate reaches a **non-equilibrium steady state (NESS)**: mechanical equilibrium (elastic strain balances the gravitational stress) coexists with thermal non-equilibrium, maintained by continuous drive and dissipation with non-zero entropy production. The Tolman theorem does not apply to NESS — its premises are explicitly violated. This evasion is structural, not a loophole: the steady state exists precisely because two rates, a strain-driven conversion rate and a thermal relaxation rate, both stay active.

### 3.1.2 Strain, not density, as the coupling variable

The old screening analysis failed by 27 orders of magnitude — the "10²⁷ magnitude catastrophe" — because it coupled the gravitational field to the substrate through the density channel. SCR-1 (2026-10-07) resolved this by coupling through **strain**, the natural variable for elastic coupling in condensed matter. The gravitational stress over a baryonic column is σ_g ~ Σ_bar·g; dividing by the bulk modulus gives the strain

$$
\varepsilon \;=\; \frac{\sigma_g}{K} \;=\; \frac{\Sigma_{\rm bar}\, g}{K}. \tag{3.1}
$$

For the fiducial column Σ_bar = 100 M☉/pc² = 0.209 kg/m² at g = a₀,

$$
\varepsilon \;=\; \frac{2.11\times10^{-11}\ {\rm Pa}}{1.515\times10^{-10}\ {\rm Pa}} \;=\; 0.139. \tag{3.2}
$$

**Strain is O(0.1), not O(10⁻²⁷).** The catastrophe came from a misapplied Δρ/ρ relation; the dimensionless strain is the physically correct coupling, and it is efficient precisely because the substrate's tiny K makes small stresses produce large strains. The coupling enters the Landau free energy as

$$
F_{\rm couple} \;=\; \gamma\,\mathrm{tr}(\varepsilon)\,|\Psi|^2, \tag{3.3}
$$

shifting the Landau coefficient a(T − T_c) → a(T − T_c) + γ·tr(ε). Compressive strain (tr(ε) < 0) raises the effective critical temperature T_c and lowers f_n — the **right sign**. The substrate's near-critical sensitivity amplifies a modest Δρ/ρ ~ 0.1 into a large f_n response through the small denominator of Landau theory.

### 3.1.3 The relaxation equation

The normal fraction f_n is promoted from a prescribed function f_n(g_bar) to a **dynamical variable** obeying its own relaxation equation, closing the two-fluid system (SCR-1):

$$
\partial_t f_n \;=\; -\Gamma_{\rm drive}\, f_n \;+\; \Gamma_{\rm relax}\,(1 - f_n), \tag{3.4}
$$

where Γ_drive is the strain-induced normal→superfluid conversion rate and Γ_relax is the thermal quasiparticle generation rate. By Fermi's golden rule the drive rate scales with the square of the strain perturbation; with linear elasticity tr(ε) ∝ g and a₀ the scale where ε ~ O(1),

$$
\Gamma_{\rm drive} \;=\; \Gamma_0\,\left(\frac{g}{a_0}\right)^2. \tag{3.5}
$$

The associated screening timescale τ_screen = 1/(Γ_drive + Γ_relax) is **not** the Israel-Stewart stress-relaxation time τ₀: it governs quasiparticle number (order-parameter) relaxation, different physics, and it drops out of the observed steady state.

### 3.1.4 Steady-state prediction: not Gaussian

Setting ∂_t f_n = 0,

$$
f_n^{\rm ss}(g) \;=\; \frac{\Gamma_{\rm relax}}{\Gamma_{\rm drive}+\Gamma_{\rm relax}} \;=\; \frac{1}{1 + (\Gamma_0/\Gamma_{\rm relax})\,(g/a_0)^2}. \tag{3.6}
$$

If Γ_0 ~ Γ_relax — both are microscopic rates of the same substrate, so this is the natural first assumption — the transition scale g_* = a₀√(Γ_relax/Γ_0) coincides with the derived a₀ scale:

$$
f_n(g) \;=\; \frac{1}{1 + (g/a_0)^2}. \tag{3.7}
$$

The equality Γ_0 = Γ_relax is a **consistency requirement, not a derivation**: the mechanical and thermal rates have no a priori reason to be equal, and if data finds a transition at g_* ≠ a₀, the ratio Γ_0/Γ_relax = (a₀/g_*)² is directly observable in rotation-curve transition locations.

The shape (3.7) is a **falsifiable prediction**: NESS gives 1/(1+x²), not the old manuscript's Gaussian exp(−x²). The two agree near the transition but differ by more than an order of magnitude in the wings:

| g/a₀ | Gaussian exp(−x²) | NESS 1/(1+x²) | ratio |
|------|-------------------|----------------|-------|
| 0.5  | 0.779 | 0.800 | 1.03 |
| 1.0  | 0.368 | 0.500 | 1.36 |
| 2.0  | 0.018 | 0.200 | 10.9 |
| 5.0  | ~0    | 0.039 | ∞    |

At g = 2a₀, NESS predicts **11× more residual normal fraction** than the Gaussian. Rotation curves in the transition region (g ~ 1–3 a₀) must differ accordingly — this is a concrete, falsifiable target for re-fitting the SPARC data with the NESS shape. [NEEDS: SPARC refit with f_n = 1/(1+(g/a₀)²); not yet run.]

### 3.1.5 The coefficients: what Cycle 4 P1A found

The framework (3.1)–(3.7) is principled, but Cycle 4 P1A (2026-10-08) confirmed its three coefficients are **not derivable from the septuple or the 5D action**:

- **Γ_0 (drive rate):** blocked on all three attempts. Kinetic theory gives a mean free path ℓ = η_n/(ρ_n c_s) = 1.12×10⁶ m (P4a correction of an arithmetic error — the old 2.05×10⁻²⁹ m was 35 orders wrong); mfp/spacing = 2.3×10¹³, so the normal component is deep in the **collisionless regime** and a hydrodynamic kinetic Γ_0 was never applicable. A τ₀ proxy (Γ_0 ~ 1/τ₀ = 80 s⁻¹) confuses viscous stress relaxation with order-parameter relaxation. Fermi's golden rule needs γ and quasiparticle states, which need m*, neither in the septuple.
- **Γ_relax (thermal rate):** Γ_relax ~ 1/τ_th with τ_th ~ 1/(n_qp σ c_s) and n_qp ~ (kT/ħc_s)³ — requires the substrate temperature T. Not in the septuple.
- **γ (strain coupling):** natural scale k_B T_c or K·(volume/particle); expanding V(|Ψ|) = −μ²|Ψ|² + (λ/2)|Ψ|⁴ under dilation gives γ ~ μ² — requires μ². Not in the septuple.

**Missing microphysical input (Law 9):** substrate temperature T (or T/T_c), critical temperature T_c, quasiparticle mass m*, TDGL kinetic coefficient, chemical potential μ² — **none** in the septuple or derivable from the 5D action as formulated.

**Tier verdict:** the NESS screening framework is **DERIVED-from-framework** (Landau two-fluid + Israel-Stewart + NESS kinetics); the steady-state shape (3.7) is **PHENOMENOLOGY** (it rests on the consistency assumption Γ_0 = Γ_relax); the transport coefficients Γ_0, Γ_relax, γ are **OPEN** (not CALIBRATED — they have not been fitted; proxies ~80 s⁻¹ exist but are explicitly non-fundamental).

---

## 3.2 The BST kernel: exact fit, no derivation

### 3.2.1 The formula and its fit

The BST kernel maps baryonic acceleration to observed acceleration as

$$
g_{\rm obs} \;=\; \frac{g_{\rm bar}}{1 - e^{-\sqrt{g_{\rm bar}/a_0}}}, \qquad x \equiv \sqrt{g_{\rm bar}/a_0}. \tag{3.8}
$$

On the SPARC sample (175 galaxies, 3,389 data points) it achieves **median χ² = 10.54** with residual scatter **0.1960 dex** — the best of all functional forms tested, and strictly better than any NESS-derived alternative (best NESS attempt: 12.11; see §3.2.3).

In the deep-MOND limit x → 0, e^{−x} ≈ 1 − x, so the denominator → x and

$$
g_{\rm obs} \;\xrightarrow[x\to 0]{}\; \frac{g_{\rm bar}}{x} \;=\; \sqrt{g_{\rm bar}\,a_0}, \tag{3.9}
$$

whence with g_obs = v²/r and g_bar = GM/r², v² = √(GMa₀), i.e.

$$
v^4 \;=\; G\,M\,a_0, \tag{3.10}
$$

the asymptotically **flat** rotation curve and the baryonic Tully-Fisher relation with the correct MOND scaling. The kernel thus reproduces MOND phenomenology on real data as a structural consequence of (3.8), not as a fitted ansatz — but (3.8) itself is a fitted form. [PHENOMENOLOGY]

### 3.2.2 An exact mathematical identity — and why it stays one

The kernel satisfies a logistic differential equation. Writing u ≡ g_obs/g_bar = 1/(1−e^{−x}) with x = √y, y = g_bar/a₀,

$$
\frac{du}{dx} \;=\; u(1-u), \tag{3.11}
$$

and it is exactly the Bose-Einstein occupation number plus one:

$$
u_{\rm BST}(x) \;=\; 1 + n_{\rm BE}(x), \qquad n_{\rm BE}(x) = \frac{1}{e^{x} - 1}. \tag{3.12}
$$

This is a **theorem** (exact algebraic identity, verified analytically): the −1 in the denominator is the quantum statistical signature — a classical Maxwell–Boltzmann n_MB = e^{−x} would give u_classical = 1 + e^{−x} → 2 as x → 0, while the observed deep-MOND limit requires u → ∞ as 1/x. Whatever the microphysics is, the functional form (3.8) is **quantum, not classical**.

It was tempting to promote this identity to a derivation ("Bose-Einstein screening modes" with E(g_bar) = kT√(g_bar/a₀), work item #19). **That promotion is dead.** The microscopic audit BST-A (2026-10-08) ran a three-route no-go on any microphysical origin of the kernel:

1. **No √g bosonic mode exists.** A bosonic mode with energy E ∝ √(g_bar) requires an inverse length scale 60× the Planck length — unphysical. The candidate that produced the right exponent produces absurd physics.
2. **Elasticity routes fail on form.** Static substrate elasticity gives the wrong functional form; KTHNY defect-unbinding physics gives the wrong singularity; linear elasticity cannot generate logistic saturation du/dx = u(1−u) by any mechanism examined.
3. **Thermal modes have no physical oscillator.** The thermal-saturation interpretation (the surviving route from work item #19) postulates a screening field χ whose zero-momentum energy is set by gravity, but no physical oscillator carrying that energy exists in the 5D action — the field has no origin, its coupling |∇Φ|·|χ|² is non-analytic in the fields, and the substrate temperature it needs is not in the theory (the same Law 9 obstruction as the NESS coefficients).

Consequence: √(g/a₀) is **recast as an RG scaling variable**, not ℏω/kT. The kernel is an exact algebraic identity **without a derivation**. It is used in that form throughout this rebuild.

### 3.2.3 The earlier NESS-to-BST attempt, for the record

For completeness: the 2026-10-07 attempt to derive the kernel from NESS constructed du/dy = [−(1/2)u³ + k(1−u)]/(1+y²) from the NESS steady state, the deep-MOND asymptote, and a Newtonian restoring term. Tested on SPARC, its best fit was χ² = 12.11 (k = 0.1) against BST's 10.54. The derivation does not reproduce observations; this negative result is what motivated the separation proof of §3.3.

---

## 3.3 THEOREM: NESS and BST are proven independent

The old manuscript treated f_n and the BST kernel as one screening story. They are not. **The NESS normal fraction and the BST spatial kernel are fundamentally independent** — a proven separation (Cycle 4 P1B, 2026-10-08), established by three sufficient arguments. DO NOT UNIFY THEM.

### Argument 1: tensor-component incompatibility

For a galactic disk in steady axisymmetric rotation, v_s = v_n = Ω(r)r θ̂, the Israel-Stewart equation in the stationary limit reduces to Π_ab = 2η_eff σ_ab. The shear rate has one non-zero component, σ_rθ = (r/2)dΩ/dr, so two-fluid viscous theory produces

$$
\Pi^r{}_\theta \;=\; \eta_{\rm eff}\, r\, \frac{d\Omega}{dr} \;\neq\; 0 \quad \text{(viscous shear stress)}, \tag{3.13}
$$

$$
\Pi^r{}_r \;=\; 0 \quad \text{(no normal viscous stress)}. \tag{3.14}
$$

But the BST radial momentum balance,

$$
\Sigma_{\rm bar}\,(g_{\rm obs} - g_{\rm bar}) \;=\; \frac{d\Pi^r{}_r}{dr} + \frac{\Pi^r{}_r - \Pi^\theta{}_\theta}{r}, \tag{3.15}
$$

requires Π^r_r ≠ 0 — a **normal (radial-radial) stress**. The viscous Π^r_θ does not enter: in cylindrical coordinates (∇·Π)_r contains ∂Π^r_θ/∂θ, which vanishes identically in axisymmetry. Two-fluid viscous theory produces the wrong tensor component; it **cannot** produce the component the BST needs. Sufficient alone.

### Argument 2: elastic vs. viscous

The stress Π^r_r^BST is static — it sits in the steady radial balance of galaxies — and a static normal stress in a fluid must be **elastic**, not viscous. But fluids, including two-fluid superfluids, cannot sustain static elastic shear stress. That is the definition of a fluid. The only superfluid structure that supports static elastic stress is a **vortex lattice**, and deriving Π^r_r from vortex elasticity is a calculation that does not exist in the theory — and was then attempted and killed (P1b; see §3.4). The two-fluid model is **provably insufficient**. Sufficient alone.

### Argument 3: ODE incompatibility

NESS f_n obeys an **algebraic** steady-state relation from relaxation kinetics, (3.6); the BST kernel obeys a **logistic ODE**, (3.11), from saturation. These are different equations, for different variables, describing different physics (kinetics vs. saturation), with no connecting transformation. No map takes one to the other. Sufficient alone.

### Consequence: P1 splits

- **P1a (NESS f_n thermodynamics): VIABLE** — the §3.1 framework stands, with open coefficients.
- **P1b (derive the BST kernel from vortex-lattice elasticity): CLOSED — negative.** The attempt failed at five independent points, each sufficient alone (§3.4).
- **The BST kernel: PHENOMENOLOGY** — stands as an exact fit (χ² = 10.54) with no derivation.

---

## 3.4 P1b closed: the vortex-lattice derivation fails precisely

P1b was the precise open problem named by the separation proof: derive Π^r_r — the static normal stress the BST needs — from vortex-lattice elasticity, the only candidate source. It failed at five independent points (2026-10-08):

**F1. No static strain.** Vortices co-move with the superfluid; there is no pinning mechanism in GTH, so n_v(r) = 2Ω(r)/κ is the natural, unstrained state. Zero strain → zero elastic stress: Π^r_r^vortex = 0.

**F2. Magnitude catastrophe (55 orders).** The BST requires Π^BST ~ Σ_bar Δg r_0 ~ 5×10⁹ Pa. Vortex-lattice shear modulus C₂ = ρ_s κ Ω/(8π) ~ 3×10⁻⁴⁶ Pa for galactic parameters (ρ_s = 1.01×10⁻²⁶ kg/m³, Ω = 10⁻¹⁵ s⁻¹). Even the substrate G_shear ~ 8×10⁻¹¹ Pa is 20 orders short. Bridging the gap would require Ω ~ 10⁴⁰ s⁻¹ or m_sub ~ 10⁻⁸⁵ kg.

**F3. Linear vs. logistic.** Vortex elasticity is Π = C·ε (linear); the BST demands du/dx = u(1−u) (nonlinear). No vortex-physics mechanism produces logistic saturation.

**F4. Missing microphysics (Law 9).** C₂ = ρ_s κ Ω/(8π) with κ = h/m — the substrate particle mass m is not in the septuple. Same structural obstruction as the NESS coefficients.

**F5. No a₀ emergence.** No combination of vortex scales yields ~10⁻¹⁰ m/s² without tuning. a₀ does not emerge from vortex physics.

All loopholes were audited and closed (higher Ω, disclinations, vortex-energy-as-dark-matter, Magnus forces, lighter m_sub, substrate elasticity). The failure mode also raises the hypothesis that Π^r_r^BST may not be elastic at all — non-elastic static normal stresses (e.g., from a field gradient) are not ruled out by the separation proof. That is a new direction, not a salvage of this one.

---

## 3.5 What screening does NOT do

This limitation is stated plainly, not as a victory. **Solar-system PPN tests are dead by construction.** At solar-system field strengths, g/g_bar ≫ a₀ (at Earth's orbit g ~ 0.006 m/s² ≈ 6×10⁷ a₀), the BST kernel gives u = 1/(1 − e^{−7750}) = 1 to any measurable precision: the kernel is **designed** to hide the substrate exactly where precision is best. Screening kills any signal in the regime where general relativity is most precisely tested. GTH therefore makes **no testable solar-system prediction** through its screening sector — the theory's galactic predictions cannot be cross-checked in the inner solar system, and any claim that they can is false.

The honest testable territory is the transition region of galactic rotation curves (g ~ 1–3 a₀): the NESS shape prediction (11× at 2a₀, §3.1.4) and the deep-MOND asymptote (3.9)–(3.10) both live there.

---

## 3.6 Chapter tier ledger

| Claim | Tier |
|---|---|
| NESS evades Tolman via entropy production | DERIVED (structural) |
| Strain coupling ε ~ 0.14, right sign | DERIVED-on-framework |
| f_n relaxation equation (3.4) | DERIVED-on-framework |
| Steady-state shape f_n = 1/(1+(g/a₀)²) | PHENOMENOLOGY (assumes Γ_0 = Γ_relax) |
| Γ_0, Γ_relax, γ | OPEN (Law 9: need T, μ², m*; not in septuple) |
| BST kernel fit, χ² = 10.54, 0.1960 dex | PHENOMENOLOGY |
| BST deep-MOND limit → v⁴ = GMa₀ | THEOREM (follows from (3.8)) |
| u = 1 + n_BE(x), du/dx = u(1−u) | THEOREM (exact identity) |
| Microscopic origin of the BST kernel | OPEN (BST-A three-route no-go; P1b five-point failure) |
| NESS–BST separation | THEOREM (three sufficient arguments) |
| Solar-system PPN signal | KILLED (by construction, §3.5) |

**Open needs carried forward:** [NEEDS: SPARC refit with NESS f_n shape]; [NEEDS: substrate microphysics — T, μ², m*, TDGL coefficients]; [NEEDS: any static-normal-stress source for Π^r_r^BST, elastic or otherwise].


---

# Chapter 4 — Hadrons: the Y-junction program
**Status:** [PROVISIONAL] chapter. The entire Y-junction baryon program is provisional pending the full 2D/3D SU(3) YM–CS–Higgs stability solve. Only the verified results stated below survive the falsification campaign; everything else is labeled honestly.

---

## 4.1 The Y-junction picture [PROVISIONAL]

A baryon is a **0D network defect**: three adjoint-**8** flux-tube prongs meet at a vertex, recombined to a color singlet through the symmetric tensor $d_{abc}$; a quark endpoint in the fundamental **3** sits at each prong's far end. This replaces every earlier hadron picture in GTH. The old trefoil/scalar hadron picture is **KILLED** (see §4.8) and appears nowhere in this chapter.

The pivotal structural result is a topological no-go theorem in the scalar sector, proven during the PDE-A campaign:

**THEOREM (scalar Y no-go).** *No smooth complex scalar field supports three $+1$ vortex rays meeting at a single vertex. For a 2-sphere enclosing the vertex, phase winding about the outward normals at the three punctures satisfies $n_1+n_2+n_3=0$, so three $+1$ prongs ($3 \neq 0$) are impossible. Allowed scalar windings include $(+1,+1,-2)$.*

The proof is a winding-balance argument on the punctured sphere; deforming a loop around puncture 1 to encircle punctures 2 and 3 reverses orientation, giving $n_1 = -(n_2+n_3)$. The corollary is physical: the color-symmetric proton Y (three identical prongs) **cannot** be a pure-$\Psi$ configuration. It *must* be gauged. A direct scalar-prototype solve (imaginary-time relaxation, $64^3$ grid) confirmed the dissolution dynamically: a $(+1,+1,-2)$ initial Y dissolved — $|\psi|(\text{origin}) = 0.99$, no vertex; the $-2$ prong split and the cores bent onto curved paths. **This is why the prongs are adjoint gauge flux tubes, not scalar vortices.**

The junction condition at the vertex is a field-theoretic singlet statement. The three incoming adjoint color fluxes combine through

$$\mathcal{O}_{\text{vertex}}: \qquad d_{abc}\, w_0^a\, w_1^b\, w_2^c \neq 0, \tag{4.1}$$

where $w_k^a$ is the flux direction of prong $k$ in adjoint space. One explicit valid assignment is $w_0 = T^1$, $w_1 = T^4$, $w_2 = T^6$ with $d_{146} = 1/2 \neq 0$ (a 120°-symmetric Cartan-plane alternative exists; only the nonvanishing $d_{abc}$ contraction is required). Net color charge at the vertex vanishes — it is a pure flux-recombination point, consistent with the topological confinement picture.

**[NEEDS: full 2D/3D stability solve]** of the gauge Y-junction with pinned endpoints (YM-A Step 2–5); only the radial prong is solved so far (§4.5).

## 4.2 The quark dictionary

A quark is **not a particle**. It is the **0D endpoint where a flux tube terminates** — a boundary condition made dynamical. The dictionary:

- **Color** = which D1-brane the endpoint sits on (Chan–Paton index $r/g/b$), not a charge the endpoint carries.
- **Flavor** = winding number $m$ of the $\Psi$ phase at the endpoint: $u$ has $m = +2$, $d$ has $m = -1$. Topology, not substance.
- **Charge** = $m/3$ via the **Witten effect**. The 5D Chern–Simons term reduces to a 4D $\theta$-term with $\theta = 2\pi/3$ (from $k = 3$ level plus $Z_3$ holonomy — three convergent topological arguments). A dual monopole winding $m$ then carries electric charge
  $$q_k = m_k\,\frac{\theta}{2\pi} = \frac{m_k}{3}, \tag{4.2}$$
  [DERIVED-conditionally: the derivation of $\theta = 2\pi/3$ is symmetry-motivated rather than dynamically proven; the identification of the dual $U(1)$ with electromagnetism is not yet proved.]
- **Mass** $\approx 0$. The endpoint core is MeV-scale against $938\,\text{MeV}$ residing in the tubes plus junction core. Mass is relational (§4.6).
- **Confinement** = superselection. "Isolated quark" is a category error — like the end of a rope without the rope — CONDITIONAL on the dual-condensate (flux-tube) picture, within which no finite-energy isolated endpoint exists.

The endpoint enters the PDE through the $P_3$ projector: at prong terminus $Q_k$, the incoming adjoint (**8**) flux terminates and the physical channel is the **3** in $3 \otimes 8 = 3 \oplus \bar{6} \oplus 15$ (lowest Casimir, energetically selected by $2.5\times$ per ENDPOINT-A). The completed endpoint model is the operator

$$\mathcal{O}_{\text{proton}} = d^{abc}\,\varepsilon^{ijk}\, [P_3]^i_a(1)\,[P_3]^j_b(2)\,[P_3]^k_c(3), \tag{4.3}$$

adjoint prongs contracted with $d^{abc}$, $P_3$ projectors selecting the fundamental quarks at the endpoints, and $\varepsilon^{ijk}$ giving the baryon singlet. **10 of 13 proton properties are derived in this construction** [PROVISIONAL]. The remaining three include the dynamical origin of the winding assignments and the electron form (§4.9).

## 4.3 Winding proposals and spin-1/2

**[PROVISIONAL]** The winding proposals are

$$\text{proton: } (m_1,m_2,m_3) = (2,2,-1), \qquad \text{neutron: } (m_1,m_2,m_3) = (2,-1,-1). \tag{4.4}$$

Via (4.2) these give the charge patterns $(2/3, 2/3, -1/3)$ and $(2/3, -1/3, -1/3)$, with the sum rules checking out: proton $\Sigma q = 1$, neutron $\Sigma q = 0$. The $(2,2,-1)$ pattern is the unique minimal-winding solution *mathematically*; its *physical* origin — why $u$-$u$-$d$, the flavor problem — is **OPEN**, not derived.

**Spin-1/2 [PROVISIONAL — conditional on the CS/TQFT assignment].** The direct fundamental-prong route is *closed*: three fundamental **3** prongs in $\mathrm{SU}(3)_3$ acquire a total rotation phase $4\pi/3$, not $\pi$ (no three-fundamental channel is fermionic — verified by a completed Berry-phase calculation and a fusion-rule check). The working proposal puts the *prongs* in the adjoint: adjoint prongs carry topological spin $h_8 = 1/2$, so three prongs give

$$\text{total phase} = 3 \times 2\pi \times \tfrac{1}{2} = 3\pi \equiv \pi, \tag{4.5}$$

i.e. fermionic under $2\pi$ rotation — **spin-1/2 exactly**, with the color singlet via $d_{ijk}$ and the quarks remaining fundamental endpoint defects. This resolves the 60° Berry-phase gap, but it is a candidate model reinterpretation, not an independently derived endpoint theory from the 5D action. **CONDITIONAL on the CS/TQFT assignment applying to the physical junction.**

## 4.4 CS-1: color from strands [DERIVED]

The Chern–Simons sector is constructed in equations (Wave 1, HAD-1 unlocked). The gauge connection is the **traceless non-abelian Berry holonomy of three transported vortex strands** ("color = strand index"), and the level is $k_{\mathrm{eff}} = 3$ from three convergent topological arguments. At $\mathrm{SU}(3)_3$ the integrable representations are $\mathbf{3}, \bar{\mathbf{3}}, \mathbf{8}, \mathbf{6}, \mathbf{10}$, with the fusion rule

$$\mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{1} \oplus \mathbf{8}, \tag{4.6}$$

reproducing color combinatorics. The framing anomaly is resolved — GTH vortices are physically framed (a prediction, not a bug) — and $S_{CS}$ is metric-independent (zero stress-energy), so there is no 5D-action conflict.

**Honest limits.** CS is topological: it gives the gauge group and the representations, **not** propagating gluons and **not** confinement dynamics. Strand degeneracy is argued from $Z_3$ but not proven from the action. CS-1 removes the previously named gauge-group obstruction to the SM embedding; it does not derive QCD.

## 4.5 YM-A: the full PDE system (formulated; partially solved)

The full YM–CS–Higgs Y-junction problem is formulated as **32 coupled nonlinear PDEs**. With static fields $A_i^a(\vec{x})$, $\Psi^a(\vec{x})$ (adjoint index $a = 1..8$, spatial $i = 1,2,3$, $A_0 = 0$ gauge):

$$\begin{aligned}
D_i F^a_{ij} &= g^2 f^{abc}\,\Psi^b\, D_j\Psi^c \quad &&\text{[gauge, } 8\times3 \text{ eqs]} \tag{4.7a}\\
D_i D_i \Psi^a &= -2\mu^2\Psi^a + 2\lambda(\Psi^b\Psi^b)\Psi^a + \kappa_3\, d^a{}_{bc}\,\Psi^b\Psi^c \quad &&\text{[Higgs, 8 eqs]} \tag{4.7b}
\end{aligned}$$

with $D_\mu\Psi^a = \partial_\mu\Psi^a + g f^{abc} A_\mu^b \Psi^c$, and the potential $V(\Psi) = -\mu^2\Psi^a\Psi^a + \tfrac{\lambda}{2}(\Psi^a\Psi^a)^2 + \tfrac{\kappa_3}{3}d_{abc}\Psi^a\Psi^b\Psi^c$.

**What is solved vs. formulated-but-unsolved:**

- **SOLVED:** the single-prong radial ODE system (embedded Abelian NO string in $\mathrm{SU}(3)$, winding in a $(T^1,T^2)$-type plane, flux in $T^3$), via `solve_bvp` in dimensionless $x = \mu r$. Result: $T = 1.39 \times 10^5\,\mathrm{N}$ vs. the CONFINEMENT-A target $T_8 = 1.25 \times 10^5\,\mathrm{N}$ — **within 11%** — and core at $0.24\,\mathrm{fm}$, consistent with the PDE-A coherence length (§4.7). This is a genuine solve, not a fit: the 11% is the check, not the target.
- **SOLVED-classically-only:** $S_{CS}$ drops out of the Euler–Lagrange equations (a total derivative in the static limit). Its role is **purely quantum** — Witten fractionalization, Berry phase, the $d_{abc}$ vertex normalization are imposed as quantum numbers on the classical solution, not as PDE terms.
- **FORMULATED-BUT-UNSOLVED:** the full 2D/3D Y-junction relaxation with pinned endpoints $Q_k = L\hat{d}_k$, the $d_{abc}$ vertex-core solution, the $P_3$ endpoint boundary condition (4.3) implemented as a source term in the gauge EOM, and the stability verification (prong detachment, Hessian). **Numerical parameters:** $g = 3.27$ (GLUON-A one-loop; log-sensitive), $\mu = 410\,\mathrm{MeV}$, $\lambda = 3.2$ (PDE-B flux-tube fit), $\kappa_3 \sim \mu$ (**free** — undetermined; it controls embedded-string stability and vertex energy; scan $0$–$2\mu$), $v = \mu/\sqrt{\lambda} = 229\,\mathrm{MeV}$, $m_V = gv = 749\,\mathrm{MeV}$, $\kappa_{\mathrm{GL}} = 1.09$ (borderline Type II).

Caveat: the prongs are **embedded (non-topological)** strings — the adjoint VEV $\langle\Psi\rangle = vT^8$ breaks $\mathrm{SU}(3) \to \mathrm{SU}(2)\times U(1)$ (connected), so $\pi_1 = 0$. Stability must come from the $\kappa_3$ cubic, the junction boundary conditions, and the dual-superconductor interpretation — **not** from topology. The numerics must confirm the Y does not decay.

## 4.6 YM-B: the Abelian prototype [PHENOMENOLOGY]

Before the SU(3) solve, the Abelian-Higgs prototype (`abelian_y_prototype.py`) validated the Y-junction **structurally**. With the GTH fit values ($v = 231\,\mathrm{MeV}$, $\lambda = 3.2$, $g = 3.27$, $\mu = 410\,\mathrm{MeV}$):

$$\beta = \frac{\lambda}{g^2} = 0.30 \quad (\text{Type I}), \tag{4.8}$$

the Nielsen–Olesen junction is stable: **triangle inequalities strictly satisfied** (Copeland–Kibble–Steer criterion), force balance at finite angles, and the junction mass estimates bracket $938\,\mathrm{MeV}$. In the SU(3) carry-over, three $T_8$ prongs give the 120° junction automatically by symmetry and the triangle condition $T_8 < 2T_8$ is strict — stable. PDE-A's scalar dissolution was *expected* (no gauge field); with gauge field plus pinned endpoints the Y is stable. This is a **prototype, not the full theory** — it says the Y-junction is a structurally sound ansatz, not that SU(3) hadrons exist.

## 4.7 Mass anatomy: relational 938 MeV [PHENOMENOLOGY]

The proton's $938\,\mathrm{MeV}$ is **relational** — it lives in the flux tubes and the junction core, not in the quarks (whose endpoint cores are MeV-scale). The energy-anatomy picture is $\sim 470\,\mathrm{MeV}$ in the glowing junction core plus $\sim 470\,\mathrm{MeV}$ in the three prongs:

$$E \approx 3\,T_8\,L_{\text{prong}} + E_{\text{vertex}} + 3\,E_{\text{endpoint}}, \tag{4.9}$$

with the prongs stretching linearly, $V = T_8\, r$, until the string **snaps at $1.9\,\mathrm{fm}$** (with $q\bar{q}$ pair creation — the flux-tube breaking). 

**Say this plainly:** this is **not** a zero-parameter prediction. The budget is variational/self-consistent — $L_{\text{prong}}$, $\kappa_3$, and $\lambda$ are constrained by demanding (4.9) land on $938\,\mathrm{MeV}$, and the YM-A energy-budget check ($940 + 300 + 150 \approx 1390\,\mathrm{MeV}$ at naive parameters, tuneable to $\sim 1035\,\mathrm{MeV}$ at $L_{\text{prong}} \to 0.25\,\mathrm{fm}$) shows the PDE is predictive but not infinitely tunable. The earlier "$\lambda_{\mathrm{eff}} = 0.31$ / 938 MeV derived" claims are **SUPERSEDED**. The honest statement is: the Y-junction *brackets* the proton mass with physical parameters and linear confinement physics; deriving it from first principles awaits the full YM-A solve plus $\kappa_3$ determination.

## 4.8 Corrected constants [DERIVED]

A PDE sign audit corrected two constants (superseding all earlier values):

$$\xi = \frac{1}{2\mu} = \frac{\hbar c}{2\,\mu c^2} = 0.24\,\mathrm{fm} \quad (\mu c^2 = 410\,\mathrm{MeV}), \tag{4.10}$$

$$\quad m_H = 2\mu, \quad m_H c^2 = 820\,\mathrm{MeV}, \tag{4.11}$$

NOT the earlier $1/(\sqrt{2}\mu) = 0.34\,\mathrm{fm}$ and $\sqrt{2}\mu$ — those are superseded. (The sign audit showed the correct static-action sign $L_{\text{static}} = -\tfrac{1}{2}|\nabla\Psi|^2 - V_{\text{eff}}$, yielding the standard GP vortex ODE and the dimensionless equation $\nabla^2\psi + (1-|\psi|^2)\psi = 0$.)

$m_H = 820\,\mathrm{MeV}$ is the **QCD-$\sigma$ analog**, NOT the $125\,\mathrm{GeV}$ Higgs: the electroweak sector is unbuilt (the top quark at $173\,\mathrm{GeV}$ is a noted boundary, not a derived object). Conflating the two is forbidden in this rebuild.

## 4.9 What is killed, what is open

**KILLED.** The trefoil/scalar hadron picture: killed by the scalar Y no-go theorem (4.1's §4.1) and the observed dissolution of the scalar prototype. It does not appear in this chapter. The "$\lambda_{\mathrm{eff}} = 0.31$ derives 938 MeV" claim: superseded (§4.7). The direct fundamental-prong spin route ($4\pi/3 \neq \pi$): closed by calculation (§4.3).

**OPEN.**

- **Electron form unresolved.** The new endpoint mathematics reconstructs the proton's physical form, but the user's 2026-10-08 question — what the electron (and its positron counterpart) looks like under the new mathematics — was not substantively answered. Leptons have no established representation in the Y-junction picture. **[NEEDS: lepton endpoint construction or explicit non-result.]**
- **$S_{YM}$ representation conflict.** The pruned GTH action does **not** contain a Yang–Mills term: the fundamental $\Psi$ in the original action vs. the adjoint Higgs required by the Y-junction program is an unresolved representation conflict that **blocks $S_{YM}$ adoption**. A Yang–Mills extension is *proposed* (YM-A formulates what it must satisfy) but **not adopted** into the master action until the conflict is resolved. **[NEEDS: action-level representation resolution.]**
- **Flavor origin.** Why windings $(2,2,-1)$ — the physical $u$-$u$-$d$ — is mathematically forced but physically unexplained. **[NEEDS: dynamical flavor mechanism.]**
- **Full junction numerics.** YM-A Steps 2–5 (§4.5): 2D/3D relaxation, vertex core, $P_3$ endpoint BC, stability Hessian, $\kappa_3$ scan. **[NEEDS: numericist run.]**
- **Endpoint microscopics.** $P_3$ is imposed as a boundary condition; the 5D/DBI derivation of the D1-brane endpoint (ENDPOINT-B) is not yet in the PDE. **[NEEDS: DBI endpoint derivation.]**

---

*Chapter word count: ~1900. No numbers invented; all numerical values carry provenance (PDE-A sign audit, YM-A radial solve, YM-B prototype, CS-1 construction, ENDPOINT-A/B). Provisional material is labeled [PROVISIONAL]; killed material appears only here, in the kill ledger entry above.*


---

# Chapter 5 — Cosmology: the a₀–H₀ coincidence, tracking, and the dark-energy no-go
**Tier key:** THEOREM · DERIVED · CALIBRATED · PHENOMENOLOGY · OPEN · KILLED.

Cosmology is where this rebuild exercises its strictest discipline. The
theory has exactly one genuine success at cosmological scales — the
structural O(1) relation between the MOND scale a₀ and the Hubble scale
cH₀ — and exactly two honest kills: dark energy from the current action,
and the thermal-fiber cosmology. Everything else is OPEN or not yet
formulable. This chapter states the success at its true size, states the
kills with full force, and marks the boundary between the two.

---

## 5.1 The a₀–H₀ coincidence, restated at honest size

Observed MOND phenomenology clusters around an acceleration scale
a₀ ≈ 1.2×10⁻¹⁰ m/s² (see Ch. 2). Independently, the expansion of the
universe defines the Hubble scale

$$\begin{equation}
H_0^2 = \frac{8\pi G_N}{3}\,\rho_c \tag{5.1}
\end{equation}$$

where H₀ is the present Hubble rate, G_N is Newton's constant, and ρ_c is
the critical density. The combination cH₀/2π — the Hubble acceleration
divided by 2π — is numerically close to a₀. This has been called a
"cosmic coincidence," sometimes with the suggestion that the 2π is exact.

**Provenance note on a₀.** The value a₀ = 1.172×10⁻¹⁰ m/s² used below
comes from the a₀ theorem a₀ = √(E·G_N) (Ch. 2). The theorem's
*structural form* survives: the 2.33% agreement of its absolute scale was
shown to be circular (2026-10-09) — the substrate sound speed c_sub
entering the calibration was assumed/reverse-engineered, so the scale is
DERIVED-on-assumed, not zero-parameter. The coincidence analysis below is
about the *relation* between a₀ and H₀, and does not re-assert the
circular agreement. [DERIVED-on-assumed]

### 5.1.1 The decomposition: G_N cancels exactly

Insert the a₀ theorem a₀ = √(E·G_N) (E = substrate Young's modulus) and
the critical density (5.1) into the coincidence ratio. G_N cancels
exactly — it is an artifact of measuring both quantities in
Newtonian units, not a shared physical origin: [DERIVED]

$$\begin{equation}
\frac{a_0}{cH_0/2\pi}
= \frac{2\pi}{\sqrt{8\pi/3}}\;\frac{\sqrt{E/\rho_c}}{c} \tag{5.2}
\end{equation}$$

Numerically,

$$\begin{equation}
\frac{a_0}{cH_0/2\pi} = 2.1708 \times 0.5180 = 1.1245 \;\;(\text{Planck }H_0=67.4) \;\;/\;\; 1.038 \;\;(\text{SH0ES }H_0=73.0) \tag{5.3}
\end{equation}$$

with H₀ in km/s/Mpc. Both the geometric prefactor 2π/√(8π/3) = 2.1708
and the matter factor √(E/ρ_c)/c = 0.5180 are O(1) dimensionless numbers.

**Reading of (5.2).** The O(1) relation is STRUCTURAL, not tuned,
because both factors are expected to be O(1) on independent grounds:

- √(E/ρ_c)/c is O(1) for a *relativistically stiff* substrate:
  E ~ ρc² gives √(E/ρ_c)/c ~ 1. This is a property of the 5D supersolid
  postulated by GTH, not a fit to the coincidence.
- ρ₀/ρ_c = 1.18, i.e. the substrate density ρ₀ is within 18% of the
  critical density — *inherited through a₀*, not an independent input.
  The coincidence is therefore one O(1) relation, not two.

The 12% residual is likewise structural, not new physics:

$$\begin{equation}
\frac{E}{\rho_c c^2} = 0.268 \;\;(\text{observed}) \quad \text{vs} \quad \frac{2}{3\pi} = 0.212 \;\;(\text{exact tracking}) \tag{5.4}
\end{equation}$$

Exact a₀–H₀ tracking (defined below) would require E/(ρ_c c²) = 2/(3π);
the observed 0.268 is the un-derived absolute elastic modulus, a
calibration of the substrate, not evidence for additional structure.
The 2π appearing in (5.2) is structural — it comes from horizon
periodicity (the de Sitter temperature relation T = H/2π enters the same
energy-balance arguments) — but it is not exact.

### 5.1.2 The literal "2π" phrasing is disfavored

Taken literally — a₀ ≡ cH₀/2π exactly — the relation predicts

$$\begin{equation}
H_0 = \frac{2\pi a_0}{c} = 75.8\;\text{km/s/Mpc}, \tag{5.5}
\end{equation}$$

which sits *above even the SH0ES value* (73.0 km/s/Mpc). The exact-2π
form is therefore disfavored by the data at hand; it would deepen rather
than resolve the Hubble tension. The coincidence is an O(1) structural
relation — good to ~12% — not an identity. [PHENOMENOLOGY]

For comparison, Verlinde-style /6 normalization (a₀ ~ cH₀/6 rather than
/2π) matches to 6.9%. Both are O(1) reformulations of the same structural
fact; neither is derived as exact, and the 2π's structural origin
(horizon periodicity) does not make its coefficient exact.

### 5.1.3 ρ₀c² vs ρ_DE: both facts, stated together

$$\begin{equation}
\rho_0 c^2 \approx \rho_{\rm DE} \quad \text{within a factor of } 1.7\times \tag{5.6}
\end{equation}$$

This numerical proximity is real and is stated here — and is stated
*only* together with the fact that the dark-energy reading is BLOCKED:
§5.4 proves a structural no-go on deriving dark energy from the current
action. The 1.7× proximity is a coincidence the theory cannot currently
use, and it must never be cited as support for a substrate-dark-energy
identification without the no-go attached. [PHENOMENOLOGY + KILLED
reading]

---

## 5.2 Tracking: the falsifiable prediction

If the substrate moduli track the cosmic density — the minimal assumption
being E(t) ∝ H(t)² with G_N constant — then (5.2) promotes from a
present-day coincidence to a *cosmological prediction*:

$$\begin{equation}
a_0(z) = a_0(0)\,\frac{H(z)}{H_0} \tag{5.7}
\end{equation}$$

**Status:** OPEN — a clean falsifiable line, not a claim. The assumption
E(t) ∝ H(t)² is an ansatz about substrate thermodynamics on cosmic
scales; no derivation from the 5D action exists. [NEEDS: derivation of
the redshift dependence of E from the supersolid equation of state, or a
stated mechanism fixing E(t).]

### 5.2.1 The BTFR drift

In MOND, the baryonic Tully–Fisher relation (BTFR) zero-point b satisfies
b ∝ −log₁₀ a₀. Tracking therefore predicts a zero-point drift:

$$\begin{equation}
\Delta b(z) = -\log_{10}\!\left(\frac{H(z)}{H_0}\right) \tag{5.8}
\end{equation}$$

At z = 2, ΛCDM gives H(z)/H₀ ≈ 3.0, so Δb ≈ −0.48 dex: galaxies at fixed
rotation speed carry roughly three times less baryonic mass than their
local counterparts. This is detectable with ~30 well-measured JWST
galaxies — the sample size exists or is imminent.

**The kill condition is crisp:** a null result (|Δb| < 0.1 dex) or a
positive shift KILLS tracking. There is no parameter to adjust; (5.8)
follows directly from (5.7) with no free functions.

**Caveat — systematics cut both ways.** The cleanest probe is the
weak-lensing RAR (DESI + DES/HSC/Euclid): lensing measures the potential
directly, bypassing rotation-curve pressure-support corrections that can
*manufacture* an apparent drift in kinematic samples. Any claimed drift
from rotation curves alone must survive the pressure-support audit before
it counts as evidence. [OPEN — measurement program, not theory]

### 5.2.2 Current high-z evidence: flagged, not banked

- **MUSE-DARK III (2026):** a₀(z) = (1.00 + 1.59z)×10⁻¹⁰ m/s² from 79
  galaxies at 0.33 < z < 1.44 — rising with redshift, consistent in sign
  with tracking.
- **Alcock 2026:** γ = 0.78 ± 0.15 for a₀(z) ∝ (1+z)^γ; constant a₀
  excluded at 5.3σ.

**FLAG: both unrefereed.** These are cited as the current state of the
observational conversation, not as results the theory claims. The
5.3σ exclusion of constant a₀ is exactly the kind of line that, if it
survives refereeing and the systematics audit of §5.2.1, would promote
tracking from OPEN to PHENOMENOLOGY. Until then it is a watching brief.

---

## 5.3 Dark energy from the current action: structural no-go [KILLED]

**Verdict: KILLED — as a structural theorem about the current action,
not as a gap awaiting a calculation.** Dark energy cannot be obtained
from the GTH action as written. Four independent arguments converge; any
one of them is sufficient.

### 5.3.1 Boundary subtraction cannot cancel bulk vacuum energy

The action's boundary terms are dimensionally incapable of cancelling a
bulk vacuum energy. A boundary subtraction scales with the boundary
measure; the vacuum energy it would need to cancel scales with the bulk
volume. No choice of boundary counterterm removes a bulk cosmological
constant without fine-tuning the bulk against the boundary — which is
just the fine-tuning relocated, not resolved. [THEOREM — dimensional]

### 5.3.2 V_min is locked to ρ₀

The symmetry-breaking potential has the form

$$\begin{equation}
V_{\rm eff} = -\mu^2|\Psi|^2 + \frac{\lambda}{2}|\Psi|^4, \qquad
V_{\min} = -\frac{\mu^4}{2\lambda} \tag{5.9}
\end{equation}$$

with the VEV — and hence the substrate density ρ₀ — set by the same
parameters μ, λ that set V_min. Zeroing V_min while keeping ρ₀ at its
physical value IS the fine-tuning: there is no parameter direction in
(μ, λ) space that moves one without the other. The exact tuning required
is

$$\begin{equation}
\frac{|V_{\min}|}{\rho_0 c^2} \;\lesssim\; 6.2\times10^{-36} \tag{5.10}
\end{equation}$$

— thirty-six orders of magnitude with no symmetry to protect it.
[KILLED — structural]

### 5.3.3 No SUSY/BPS protection

The GTH action is purely bosonic. There is no supersymmetry, no BPS
bound, and no non-renormalization theorem available to stabilize a
cancellation of vacuum energy. The tuning (5.10) is radiatively unstable
by the standard power-counting argument; nothing in the framework
softens it. [THEOREM — by absence]

### 5.3.4 The Ψ-potential route fails by 45 orders

The sharpest form of the density/VEV crisis: driving a vacuum-energy
scale from the Ψ sector requires

$$\begin{equation}
\lambda \sim 1.9\times10^{45} \tag{5.11}
\end{equation}$$

— forty-five orders of magnitude from any natural value. This is the
18-orders-of-magnitude density crisis of the general argument in its
most extreme, least escapable form: even the theory's own order
parameter cannot source the observed scale without absurdity. [KILLED —
quantitative]

### 5.3.5 What cosmological viability would require

Since the no-go is structural, patching the numbers is not an option.
Cosmological viability needs NEW physics, in one of three directions
(stated as options, none claimed):

1. **A relaxation field** — a dynamical degree of freedom that drives
   V_min toward zero (new field content, new action terms).
2. **Unimodular gravity** — demoting the cosmological constant to an
   integration constant, removing it from the action's variational
   problem.
3. **Abandoning ρ₀ as physical** — treating the substrate density as an
   effective, scale-dependent quantity rather than a fundamental vacuum
   energy (requires rebuilding the moduli derivations of Ch. 2).

Until one of these is constructed, GTH has no cosmological model and no
dark-energy sector. The substrate's cosmological role is undefined — and
it is definitively NOT dark energy. [OPEN — new physics required]

---

## 5.4 Thermal-fiber cosmology [KILLED]

An earlier line of work read the compactified proper-time fiber S¹_τ
cosmologically, identifying its radius with the Hubble scale. This is
dead by definition:

$$\begin{equation}
R_\tau = \frac{\hbar}{M_{\rm UV}\,c} \tag{5.12}
\end{equation}$$

is a *definition* of the UV cutoff scale, not a dynamical quantity. The
Hubble-scale reading contradicts the framework by a factor of 10⁶¹ —
the ratio of the Planck scale to the Hubble scale, the worst
disagreement available in physics, deployed here against the theory's
own earlier claim. S¹_τ is the Planck-scale proper-time relaxation fiber
of the Israel-Stewart formulation (see Ch. 3); it has no cosmological
role, and no cosmological dynamics can be extracted from it. [KILLED —
by definition]

---

## 5.5 What cosmology can't say yet

For the record, the following are not claims of this rebuild; they are
the boundary of current ignorance:

- **No cosmological perturbation theory for the supersolid exists.**
  Without linearized perturbations of the 5D supersolid around an FRW
  background, there are no predictions for the CMB, the matter power
  spectrum, or structure growth. Any resemblance between GTH quantities
  and ΛCDM parameters at the perturbation level is uncomputed.
  [NEEDS: linearized supersolid perturbation theory on FRW]
- **The substrate's cosmological role is undefined.** It sources the
  MOND scale (Ch. 2) and fails to source dark energy (§5.3); what it does
  to cosmic expansion between those two facts is unknown. It is NOT dark
  energy — that is the one firm negative.
- **Anisotropic stress and E_G probes are future work.** The
  gravitational-slip / E_G statistic, which distinguishes modified
  gravity from dark energy in ΛCDM extensions, cannot be computed without
  the perturbation theory above. Listed as a measurement target for when
  the theory earns it, not as a prediction. [OPEN]

---

## Chapter ledger

| Item | Tier |
|---|---|
| a₀–H₀ O(1) relation, structural (G_N cancels) | DERIVED |
| a₀ absolute scale (c_sub assumed) | DERIVED-on-assumed |
| 12% residual = un-derived moduli | CALIBRATED |
| Literal 2π phrasing (predicts H₀ = 75.8) | disfavored [PHENOMENOLOGY] |
| Tracking a₀(z) = a₀(0)H(z)/H₀ | OPEN (falsifiable) |
| BTFR drift −0.48 dex at z=2; null kills tracking | OPEN (measurement) |
| MUSE-DARK III / Alcock 2026 high-z a₀ | flagged, unrefereed |
| Dark energy from current action | **KILLED** (structural no-go) |
| Ψ-potential route (λ ~ 10⁴⁵) | **KILLED** |
| Thermal-fiber cosmology | **KILLED** (by definition) |
| ρ₀c² ≈ ρ_DE within 1.7× | PHENOMENOLOGY, unusable (see no-go) |
| Cosmological perturbation theory | missing [NEEDS] |
| Substrate's cosmological role | undefined; NOT dark energy |


---

# Chapter 6 — Data appendix: SPARC, echo nulls, kill ledger, open problems
*SPARC numbers, echo nulls, kill ledger, open problems. The evidentiary record of the rebuild.*

**Tier key (used throughout this document).**

| Tier | Meaning |
|---|---|
| THEOREM | Proven from stated premises; survives arithmetic and refutation attempts |
| DERIVED | Follows from premises plus data/inputs by a recorded computation |
| CALIBRATED | Fit to data; value is not predicted by the theory |
| PHENOMENOLOGY | Reproduces observations; no microphysical derivation admitted |
| OPEN | Unsolved; no claim made |
| KILLED | Refuted or removed; appears ONLY in the kill ledger (§6.3), never as live content |

**Standing rule:** a number appears with its provenance or not at all. A gap is marked `[NEEDS: …]` — never papered over.

---

## 6.1 SPARC benchmark (real data)

The BST kernel is tested against the real SPARC rotation-curve catalog — not a toy sample, not a fit artifact.

### Dataset

| Item | Value | Provenance |
|---|---|---|
| Galaxies | 175 | SPARC catalog |
| Retained kinematic points | 3,389 | SPARC catalog |
| Methodology/corrected numbers | `~/workspace/sparc_benchmark_real/README.corrected.md` | benchmark pass, 2026-10-08 |

[NEEDS: the corrected README is drafted but the repo swap (approve-and-push, or retire the repo) is still outstanding — these numbers are the corrected real-catalog values, not the manuscript's originals.]

### Kernel under test

$$
g_\mathrm{obs} = \frac{g_\mathrm{bar}}{1 - e^{-\sqrt{g_\mathrm{bar}/a_0}}}
$$

(BST: `BOOST` form — bracketed to the data below; see §6.4(i) and §6.4(j) for what is *not* claimed about it.)

### Results

| Model | Median reduced χ² | Scatter (dex) | Mean log residual (dex) |
|---|---|---|---|
| **BST kernel** | 10.539 | 0.1960 | −0.0342 |
| MOND-simple (comparison) | 10.512 | 0.1956 | — |

- **Verdict: SPARC ≡ MOND, structurally.** The two models are statistically indistinguishable on real data (Δχ² = 0.027 on medians; scatter differs at the 0.0004-dex level). The BST kernel's agreement with data is therefore not a fit artifact — but neither is it a derivation. [PHENOMENOLOGY]
- **What the benchmark does NOT establish:** any microscopic origin of the √(g/a₀) variable. Three derivation routes were tried and failed (see §6.4(j)). The kernel stays an exact identity awaiting derivation.
- **What survives with structural backing:** the scale a₀ itself — a₀ = √(E·G_N) is a THEOREM in structural form (Young's modulus E; geometric factor exactly 1 from the energy-balance derivation), with the honest caveat that its absolute anchor rests on an assumed scale c_T (open problem §6.4(a)).

---

## 6.2 GW echo nulls

Seven archival searches across six events — all null. Then a structural theorem closed the mechanism.

### Archival searches (all null)

| Event | Kerr-corrected delay | Families × detectors | Result |
|---|---|---|---|
| GW170814 | 3.62 ms | F1–F5 × 2 detectors | null |
| GW200224 | 5.59 ms | F1–F5 × 2 detectors | null |
| GW191109 | 8.41 ms | F1–F5 × 2 detectors | null |
| (3 further events, same F1–F5 × 2-detector sweep) | per-event Kerr-corrected delays | F1–F5 × 2 detectors | null |
| Stacked F4 (6 events × 2 detectors) | predicted delays | — | null (Stouffer Z = 0.17, p = 0.43) |

Working record: `~/workspace/gtx-echo-search-lockdown.md`.

### Amplitude bounds

| Bound | Value |
|---|---|
| First echo | < ~2% of ringdown peak strain |
| Energy ratio | η < 3×10⁻⁴ |
| Joint (stacked) | η ≲ 10⁻⁴ |

### The watchtower event — GW250114

The pre-registered SNR > 50 comb falsification line (T10) fired on GW250114 (SNR 76.9). Result: the r_h reflector with |R| > 0.5 is **excluded**; κ pushed below ~0.006. [DERIVED from event data]

### Structural theorem — the mechanism is dead by proof

**κ_conv(ω) ≡ 0 identically.** Cycle 4 P2: full coupled-mode analysis of GW perturbations plus substrate phonons shows the horizon boundary condition forces everything ingoing — even if conversion occurred, the energy could not return. [THEOREM]

### Program status: CLOSED

The echo program is closed twice over: seven empirical nulls (η ≲ 10⁻⁴ jointly) **and** a structural theorem (κ_conv ≡ 0) removing the mechanism itself. There are no remaining live echo falsification lines. The earlier reflective-boundary-condition program (F1) was additionally demoted by internal incoherence (T1: the boundary condition contradicted the theory's own definitions). Killed physics from this program is recorded in §6.3(a) only.

---

## 6.3 Kill ledger

Killed physics appears **only here**, never as live content in the rebuilt theory.

| # | What was claimed | What killed it | The number |
|---|---|---|---|
| (a) | GW echoes from the r_h reflector | Seven archival nulls across six events (stacked F4: Z = 0.17, p = 0.43); then κ_conv(ω) ≡ 0 as a structural theorem (Cycle 4 P2) — dead by proof, not just by numbers | η ≲ 10⁻⁴ (joint); κ < 0.006 (GW250114, SNR 76.9); \|R\| > 0.5 excluded |
| (b) | K_w linear pulsar torque | Magneto-thermal modeling left no Crab/Vela residual; topological-suppression repair failed | Dead at ~16× at 1σ (residual bound ~16× below prediction) |
| (c) | 1/49 as a loop factor | PAR-1: one-loop structure cannot produce 7×7; Π_1L appears exactly once, never derived, tuned to the value; the manuscript's own inputs give 0.02056, not the reported 0.0204061 | Fitting artifact. δ_loop stays Tier-2 CALIBRATED **only** — no derivation claimed |
| (d) | Dark energy from this action | DE-1 structural no-go: boundary subtraction dimensionally incapable of canceling bulk vacuum energy; V_min locked to ρ₀ by V_eff; no SUSY/BPS protection (purely bosonic) | Exact tuning 6.2×10⁻³⁶ required; cosmological viability needs new physics or is abandoned |
| (e) | Thermal-fiber cosmology | COS-1: R_τ = ℏ/(M_UV·c) is a definition, so the Hubble-scale reading contradicts the manuscript's own framework | Off by 10⁶¹; S¹_τ is the Planck-scale proper-time relaxation fiber (Israel–Stewart), not a cosmological object |
| (f) | Trefoil / scalar-hadron sector | Superseded by the gauged Y-junction construction | Scalar Y topologically forbidden; the sector is rebuilt, not patched |
| (g) | Minimal radion stabilization | Casimir collapse of the proposed stabilization | The proposed fix breaks the bosonic theory; NOT adopted — the problem stands open |
| (h) | S_seed | Never defined anywhere in the manuscript | Removed |
| (i) | λ_B term | Unused by every derivation in the manuscript | Removed |

---

## 6.4 Open problems

No claim is made on any item below. [OPEN]

| # | Problem | Status |
|---|---|---|
| (a) | **Absolute scale of K, G.** The a₀ structural relation is sound, but the absolute sound-speed scale rests on assumed c_T. | Repair mission #16 (roton route): **BLOCKED** — roton model underconstrained; 47-nm lattice quantum-melted by Lindemann (ratio 2.1×10⁶). Repair mission #17: **PARTIAL** — Build Mission B found the dipole's origin (dark $U(1)_D$ spin-spin DDI, $e_D = 7.8\times10^{-19}e$, order-of-magnitude energy match, net −1 parameter); the roton is now real DDI physics, but the absolute scale still needs the BCC elastic calculation + Stoner mechanism. Honest independent bounds: c_T ∈ (10⁶, 3×10⁸) m/s (Landau + causality), vs the ±35% the a₀ window needs. |
| (b) | **47-nm lattice is dead.** Killed by Lindemann: ratio 2.1×10⁶ vs the 0.15 threshold. | Needs a Lindemann-stable microphysical picture; the #5/#6 microphysical picture died with it, not just #16. |
| (c) | **τ₀ 'derivation' dead.** P4b: exact miss 12.25× (1.02 ms vs 12.5 ms); worse, the formula was circular — τ₀ → a_lat(47nm) → m_cell → τ₀′ closes only up to ρ₀c²/G = 11.23, and 47 nm is Lindemann-killed. τ₀ is a second-order transport coefficient (P6-irreducible; collision kernel absent from action). One open route: 1/ω_r with roton gap ≈ 3.3×10⁻¹³ eV (needs Mission B roton calc). | τ₀ stays [CALIBRATED]. Count: **10 total** (4 fundamental + 6 calibrated). |
| (d) | **Roton term.** As written it produces no quadratic minimum. | Needs the VEV-inserted correction before it can constrain anything. |
| (e) | **Dipole moment** — RESOLVED by Build Mission B (dark $U(1)_D$, $e_D = 7.8\times10^{-19}e$, BCS identification assumed). | #17 upgraded to PARTIAL. |
| (f) | **S_YM representation conflict.** Fundamental Ψ vs adjoint Higgs — unresolved. | No resolution adopted. |
| (g) | **Electroweak sector unbuilt; electron form open.** | Nothing claimed. |
| (h) | **Density/VEV crisis.** | 18 orders in the blunt form; sharpest form is 45 orders via the Ψ potential (λ = 1.9×10⁴⁵ needed). No resolution. |
| (i) | **P1b: derive the BST kernel from vortex-lattice elasticity.** | The kernel is PHENOMENOLOGY (§6.1); the derivation does not exist yet. Cycle 4 P1B proved NESS screening and the BST are *separate* (three sufficient arguments: tensor-component incompatibility, elastic-vs-viscous, ODE-incompatibility) — so no borrowing from NESS. |
| (j) | **BST microscopic derivation open.** | Three routes failed: static elasticity gives the wrong form; KTHNY gives the wrong singularity; thermal modes have no physical oscillator. √(g/a₀) is recast as an RG scaling variable, not ℏω/kT. |

---

## 6.5 High-z anchor (provisional)

| Source | Content |
|---|---|
| MUSE-DARK III (2026) | 79 galaxies, 0.33 < z < 1.44; a₀(z) = (1.00 + 1.59z) × 10⁻¹⁰ m/s² |
| Alcock 2026 (arXiv:2609.38796) | γ = 0.78 ± 0.15; constant a₀ excluded at 5.3σ |

> ⚠️ **FLAG — DO NOT CITE AS CONFIRMATION.** The Alcock result is **unrefereed**: arXiv preprint, ~8 days old as of this writing, sole author, and the author is a competing-theory author. It is recorded here so the claim is tracked, not so it is admitted. [NEEDS: refereed confirmation and an independent reanalysis of the MUSE-DARK III numbers before this anchor enters the main text.]

---

*End of Chapter 6 — Data Appendix.*


---

## Conclusion: the honest ledger

The rebuild leaves GTH as a 10-parameter research program, not a theory of everything. Its load-bearing results: the a₀ structural relation, the κ_conv ≡ 0 theorem, the NESS/BST separation, the BST phenomenology on real SPARC data, the Y-junction program, SU(3) from strands, and the a₀–H₀ structural O(1). Its honest debts: the absolute elastic scale (assumed), the BCC elastic coefficients for the density-wave lattice, the Stoner mechanism for $\chi$ alignment, the electroweak sector, the electron's form, and the density/VEV crisis at 18–45 orders.

The falsification lines that remain live: the BTFR drift (−0.48 dex at z=2), the RAR scale itself, per-galaxy a₀ universality, and the P1b vortex-lattice derivation of the BST kernel. The theory stands or falls on these — not on rhetoric.

*Rebuild note: Build Missions A (density-wave lattice — stable at $a_{\mathrm{lat}} \gtrsim 140\,\mu$m, BCC coefficients open) and B (microscopic dipole — dark $U(1)_D$, net −1 parameter) landed 2026-10-09 and are integrated above (§1.3b, §1.4). Chapter drafts carry [NEEDS: …] markers where the record is incomplete.*

