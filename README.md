# Lazy_Lemons

Interactive visualizations and manuscripts for **Geotopological Hydrodynamics (GTH)** —
a falsification-tested research program describing a supersolid vacuum substrate in
five-dimensional spacetime. By T. Abram.

No miracles. Only facts. Every physics claim in this repo is tier-labeled:
[THEOREM] derived with zero fitted parameters · [DERIVED] from calibrated inputs ·
[CALIBRATED] fixed by data · [PHENOMENOLOGY] fits data, mechanism unknown ·
[OPEN] not yet derived · [KILLED] falsified and closed.

## What's here

| Path | What it is |
|---|---|
| `gth-visual-engine/` | Vite + React + Three.js interactive visualizer: BST-screened disk flow, Y-junction baryon, Israel–Stewart relaxation, BST rotation curves |
| `web/` | Landing page (React) with manuscript PDF download |
| `latex/` | LaTeX manuscript source (`main.tex`; stale `main.pdf` removed Oct 2026) |
| `manuscripts/` | Rebuild manuscript (`.md`) and 28-page update booklet (`.pdf`) |
| `Geotopological_Hydrodynamics 1.pdf` | gtx2standard framework specification (76 pages, repo root) |
| `verify.py`, `verify2.py` | Playwright screenshot checks against the local dev server (`http://localhost:5173`) |

## Physics status (October 2026)

- **a₀ theorem** [THEOREM — structural form only]: a₀ = √(E·G_N), geometric factor exactly 1; the 2.33% numerical agreement is fitted by ancestry
- **BST screening kernel** [PHENOMENOLOGY]: g_obs = g_bar/(1−e^{−√(g_bar/a₀)}), χ² = 10.54 on SPARC
- **Y-junction baryons** [PROVISIONAL]: quarks are 0D endpoints, not particles; mass is relational
- **Killed**: GW echoes (κ_conv≡0), dark energy mechanism, 1/49 loop factor, K_w pulsar torque, trefoil hadrons

## Run it

```bash
# visual engine
cd gth-visual-engine && npm install && npm run dev

# landing page
cd web && npm install && npm run dev

# manuscript
cd latex && pdflatex main.tex
```
