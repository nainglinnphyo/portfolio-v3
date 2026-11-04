# portfolio-v3

Personal site for Naing Linn Phyo — Next.js App Router, Tailwind, and a
hand-written WebGL hero.

Requires **Node 26** (`.nvmrc`, and `engines.node` in `package.json`). Vercel
reads `engines.node` in preference to the dashboard's Node.js Version setting,
so that field is the single place the deploy runtime is pinned.

```bash
nvm use      # reads .nvmrc
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
pnpm lint
```

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 (App Router, static export-friendly) |
| Styling | Tailwind + CSS custom-property tokens |
| Theme | `next-themes`, `class` strategy |
| Motion | Framer Motion |
| Smooth scroll | Lenis |
| 3D | three.js via `@react-three/fiber` + a custom GLSL point shader |

## Theming

Colours are **not** written as Tailwind palette values. `src/app/globals.css`
defines space-separated RGB channels on `:root` and `.dark`
(`--bg`, `--fg`, `--muted`, `--line`, `--accent`, …) and
`tailwind.config.ts` maps them to utilities, so `text-fg/60` and
`bg-accent/15` work and a single token change re-themes everything.

## The hero scene

`src/components/three/` holds the WebGL layer:

- `shaders.ts` — the vertex/fragment pair. Points sit on a Fibonacci sphere
  and are displaced along their own normals by two octaves of simplex noise,
  plus a gaussian bulge under the pointer.
- `ParticleField.tsx` — geometry, uniforms, and the frame loop. All animated
  values are lerped frame-rate independently; nothing allocates per frame.
- `WireShell.tsx` / `CameraRig.tsx` — the counter-rotating wireframes and
  pointer parallax.
- `HeroScene.tsx` — the guard rails: dynamic import (`ssr: false`), mount
  deferred past first paint, `frameloop` suspended via `IntersectionObserver`
  when scrolled away, particle budget halved under 768px, and the canvas not
  mounted at all under `prefers-reduced-motion`.

Blending is theme-dependent: additive on near-black, normal on white, because
additive blending washes out completely over a light background.

## Content

Everything editable lives in `src/utils/`:

- `profile.ts` — name, role, links, status line, headline metrics
- `exp.ts` — the experience timeline
- `stack.ts` — bento tiles and the marquee words

`src/utils` is inside the Tailwind `content` glob on purpose — the bento
column spans are data, and leaving it out silently purges them.

## Accessibility

Reduced motion is honoured at four levels: Lenis is not started, the canvas is
not mounted, Framer variants collapse to fades, and CSS animations are
neutralised in `globals.css`. The kinetic headline ships a visually-hidden
copy of the real string, and there is a skip link to `#content`.
