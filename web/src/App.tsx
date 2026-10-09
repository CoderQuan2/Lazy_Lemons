import { useState } from 'react'
import './App.css'

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    const link = document.createElement('a');
    // Legacy filename kept: the PDF in web/public/ predates the rename.
    link.href = '/Geotemporal_Hydrodynamics_The_Unified_Fluid_Theory.pdf';
    link.download = 'Geotemporal_Hydrodynamics_The_Unified_Fluid_Theory.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 500);
  };

  return (
    <div className="container">
      <main className="content">
        <h1>Geotopological Hydrodynamics</h1>
        <h2>A Falsification-Tested Research Program</h2>
        <p className="author">By T. Abram (manuscript March 2026; page updated October 2026)</p>

        <section className="abstract">
          <h3>Abstract</h3>
          <p>
            Geotopological Hydrodynamics (GTH) is a research program describing a supersolid
            vacuum substrate in five-dimensional spacetime. Its firmest result is an anchored
            theorem for the MOND acceleration scale, a&#8320; = &#8730;(E&#183;G<sub>N</sub>) =
            1.172&#215;10&#8315;&#185;&#8304; m/s&#178;, 2.33% from the observed value with zero
            fitted parameters [THEOREM]. Galactic rotation curves are addressed by the baryonic
            screening kernel g<sub>obs</sub> = g<sub>bar</sub>/(1&#8722;e<sup>&#8722;&#8730;(g<sub>bar</sub>/a&#8320;)</sup>)
            [PHENOMENOLOGY, &#967;&#178; = 10.54 on SPARC].
          </p>
          <p>
            Baryons are modeled as Y-junction network defects with quarks as zero-dimensional
            endpoints &mdash; not particles &mdash; with color, flavor, and charge arising from
            topology [PROVISIONAL]. Honest negatives are recorded at equal weight: gravitational-wave
            echoes are excluded (seven nulls plus a structural theorem), dark energy admits no
            mechanism in the current action, and the 1/49 loop factor was a fitting artifact.
            No miracles; only facts.
          </p>
        </section>

        <div className="download-section">
          <button
            className="download-btn"
            onClick={handleDownload}
            disabled={isDownloading}
            aria-label={isDownloading ? "Downloading PDF..." : "Download full PDF document"}
            aria-busy={isDownloading}
          >
            {isDownloading ? (
              <span className="flex-center">
                <svg className="spinner" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </span>
            ) : (
              <span className="flex-center">
                <svg className="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </span>
            )}
          </button>
          <p className="download-note">March 2026 manuscript (legacy filename preserved).</p>
        </div>
      </main>
    </div>
  )
}

export default App
