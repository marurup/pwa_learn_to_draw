# Lær at tegne

A PWA (mainly for tablets) where children learn to draw with a pencil on paper; the screen only gives step-by-step
instructions. Vite + React + TypeScript, deployed to GitHub Pages. See README.md (Danish) for features and layout.

## Commands

```bash
npm run lint
npm test            # Vitest, incl. checks over every lesson
npm run build
npm run test:e2e    # Playwright on the production build, tablet landscape and portrait
```

During `npm run dev`, `#/preview/<id>` shows every step of one lesson and `#/preview` every finished drawing.

## Adding drawings (lessons)

A lesson is a file in `src/lessons/<category>/`, registered in `src/lessons/index.ts`. Drawings are SVG paths in a
400×400 box, built with the helpers in `src/lessons/shapes.ts`. Every text is in Danish and English.

**Every new motif comes in several versions** – this applies to all content, now and later, wherever it makes sense:

- a simple version (`style` left out = `'enkel'`), usually level 1–2 so the youngest can draw it;
- at least one "Byg videre" version (`base: '<simple id>'`, `style: 'detaljer'`) that starts from the finished
  simple drawing and adds details: texture, patterns, shine, background, light shading. Give base strokes an `id`
  when a build-on version has to rub them out (e.g. a doll's dress before she gets a new one);
- where it makes sense, a realistic version (`style: 'naturtro'`, same `motif`, level 3–4) with guidelines,
  real proportions and soft shading.

**Figures from films and games get our own names and designs.** The app is public, so drawings inspired by
films and games (an ice princess, a green block monster, a space knight) never use trademarked names –
not in titles, texts or ids – and are drawn in our own simplified style rather than copied.

A test in `src/lessons/lessons.test.ts` fails when a simple lesson has no other version; only add a lesson to its
exception list when a variant really makes no sense.

Look at every new or changed lesson on its contact sheet (`#/preview/<id>`) and fix what looks wrong before
committing: lines poking out of shapes, shading spilling over outlines, parts that don't read as what they are.
