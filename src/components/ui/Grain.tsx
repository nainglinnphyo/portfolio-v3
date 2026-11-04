/**
 * Film grain. An inline SVG turbulence tile beats a PNG here: no extra
 * request, scales to any viewport, and the opacity is themed via
 * `--grain-opacity` so dark mode gets a touch more texture.
 */
export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay"
      style={{
        opacity: "var(--grain-opacity)",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
