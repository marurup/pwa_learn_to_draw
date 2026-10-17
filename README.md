# Lær at tegne ✏️

*A PWA that teaches you to draw in an interactive, guided way – with a pencil on paper.*

En PWA (primært til tablets), hvor børn – og alle andre – lærer at tegne **med blyant på papir**.
Skærmen er kun instruktør: den viser trin for trin, hvad der skal tegnes, og giver tips undervejs.

## Hvad kan appen?

- **Personlig start:** sprog (dansk/engelsk), navn, alder og en tegne-ven. Flere søskende kan have hver sin profil.
- **Vælg selv eller få hjælp:** et katalog med billedkort og filtre (kategori, underkategori, niveau, stil) –
  eller tre spørgsmål ("Hvor meget har du tegnet før?", "Hvad har du lyst til?" og "Hvordan vil du tegne?"),
  der giver tre forslag.
- **Trin for trin:** Det, man allerede har tegnet, står i gråt. Den nye streg bliver "tegnet" i farve foran barnet,
  og hjælpelinjer er stiplede ("tegn dem let"). Man kan gå frem og tilbage, swipe, hoppe til et trin,
  se animationen igen og få teksten læst op. Skærmen slukker ikke midt i en tegning.
- **191 tegninger på fire niveauer** (*Spire*, *Tegner*, *Kunstner*, *Mester*):
  - *Dyr:* kat, fisk, fugl, ugle, hvalp, delfin, elefant, sommerfugl, pingvin, kanin, papegøje, hest, søhest,
    muslinger og søstjerne, og en naturtro ræv
  - *Natur:* blomster (solsikke, tulipan, rose, kaktus, blade, buket i vase), bjerge, strand, solnedgang over havet og et træ
  - *Mennesker:* ansigter, følelser, frisurer, profil, øjne, næse og mund, portræt med skygger, en hel krop,
    en påklædningsdukke, en kludedukke og en modetegning
  - *Ting:* hus, dukkehus, bil, raket, fly, fyrtårn, slot, motorcykel, crosser, ATV, monster truck, gravemaskine og traktor
  - *Fantasi:* havfruer, fe, enhjørning, drage og robot – og *Isriget* (isprinsesse, prinsessesøster, sneven og
    isslot) og *Rumeventyr* (rumridder, mørk rumridder, kuppelrobot og stjernejager)
  - *Højtider:* halloween (græskar, heks, spøgelse, spøgelseshus), jul (juletræ, julemand, rensdyr, kane, gave,
    snemand, nisse), nytår (fyrværkeri, kransekage), valentinsdag (hjerte), fastelavn (tønde), påske (påskeæg,
    kylling), sankthans (bål) og fødselsdag (kage, balloner)
  - *Spil:* blokverden (blokhelt, grønt blokmonster, græsblok, pixelsværd), spilfigurer (klodsfigur, festlama,
    flyvende festbus) og raketbiler (buggy, raketbil)
  - *Teknik:* streger, toneskala, skravering, skygge på en kugle, cylinder og kegle, teksturer, stilleben,
    1- og 2-punkts perspektiv og den samme kat i tre stilarter
  - *Prik-til-prik:* fisk, stjerne, hus og raket
- **Tre stilarter:** ✏️ *Enkel* (bygget af former), ✨ *Med detaljer* (mønstre, tekstur, glans og let skygge) og
  🎨 *Naturtro* (hjælpelinjer, rigtige proportioner og bløde skygger).
- **Byg videre bagefter:** Når en enkel tegning er færdig, foreslår appen "Gør den mere detaljeret" eller
  "Prøv den naturtro udgave". En byg videre-lektion starter med den færdige tegning i gråt, så barnet fortsætter
  på samme papir – fx kat → kat med pels og skygge, rose → naturtro rose, ansigt → portræt med skygger,
  monster truck → monster truck med flammer. Alle enkle tegninger har mindst én udgave mere.
- **Påklædningsdukke:** Dukken tegnes én gang. Bagefter visker barnet kjolen ud og giver hende en prinsessekjole,
  en ballerina-tutu eller en havfruehale.
- **Prik-til-prik på papir:** print prikkerne (A4), eller brug **kalkér-tilstand**: Læg papiret på skærmen og tegn op.
  Berøring er låst, så blyanten ikke trykker på noget (hold knappen inde for at låse op).
- **Når tegningen er færdig:** tag et billede, beskær og drej, og gør papiret hvidt (lyset bliver jævnet ud).
  Barnet får personlig ros, et "næste gang kan du prøve …"-tip og bliver spurgt "Hvad synes du selv?".
  Tegningen kan gøres levende (vibrerende streger, dans), få baggrund og ramme, sammenlignes med forlægget
  og **deles** via enhedens del-menu.
- **Galleri og mærker** pr. tegner, fx "Første tegning", "Prikkemester", "Skyggemester", "Detaljejæger", "Naturtro"
  og "Festtegner".
- **For voksne** (hold tandhjulet inde): sprog, tegnere, automatisk oplæsning, sletning af billeder og gode råd.
- **Virker offline**, og alt bliver på enheden – ingen server og ingen tracking.
- **Version og opdatering:** Nederst på forsiden står, hvilken version der kører (commit og dato, med link til
  commit'en på GitHub). Appen tjekker selv, om der er udgivet en nyere version, når forsiden åbner, og når den
  kommer frem igen. Så kommer knappen *Ny version klar – opdatér* frem. Man kan også selv trykke
  *Søg efter ny version*.

## Kom i gang

```bash
npm install
npm run dev          # udviklingsserver på http://localhost:5173
npm run build        # produktionsbuild i dist/
npm run preview      # server det byggede (som den rigtige PWA)
```

Under udvikling viser `#/preview` alle tegninger, og `#/preview/<id>` viser alle trin i én lektion.

### Tests

```bash
npm run lint
npm test             # Vitest: lektioner (gyldige stier, begge sprog, viskelæder-logik), anbefalinger, mærker, ros, lagring
npm run test:e2e     # Playwright på produktionsbuildet i tablet-størrelse, både på langs og på tværs
```

## Udgiv på GitHub Pages

Workflowet `.github/workflows/deploy.yml` bygger og udgiver appen ved hvert push til `main`
(eller manuelt under *Actions*). Det skal slås til én gang:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

Appen bruger relative stier og en hash-router, så den virker under `https://<bruger>.github.io/pwa_learn_to_draw/`.
Hvert build får commit, dato og link til repoet indbygget (`vite.config.ts`) og en `version.json`, som ikke
caches. Den installerede app sammenligner de to, og opdateringsknappen fjerner den gamle service worker og
cache og henter appen forfra.
Installér den på tabletten fra browseren: *Del → Føj til hjemmeskærm* (iPad) eller *Installer app* (Android/Chrome).

## Tilføj en ny tegning

En lektion er en TypeScript-fil i `src/lessons/<kategori>/`, som registreres i `src/lessons/index.ts`.
Tegningen er SVG-stier i et 400×400-felt, og hvert trin tilføjer nye streger:

```ts
export const snail: Lesson = {
  id: 'snail',
  title: { da: 'Snegl', en: 'Snail' },
  category: 'dyr',
  sub: 'landdyr',
  level: 2,
  minutes: 8,
  intro: { da: '…', en: '…' },
  steps: [
    { text: { da: 'Tegn en stor spiral.', en: 'Draw a big spiral.' }, strokes: [{ d: 'M200 200 …' }] },
    { text: { da: '…', en: '…' }, strokes: [{ d: line(0, 0, 10, 10), kind: 'guide', id: 'g1' }] },
    { text: { da: 'Visk hjælpelinjen ud …', en: '…' }, erase: ['g1'], strokes: [/* … */] },
  ],
}
```

- `kind: 'guide'` giver en stiplet hjælpelinje, og `kind: 'shade'` giver en skygge. Som standard er skyggen en flad
  tone (styrke `tone` fra 0 til 1); `fill` kan i stedet være `soft` (blødt udtværet), `paper` (hvidt højlys oven på
  skygge), `hatch`, `cross`, `sphere`, `gradient`, `fade-down` eller `fade-up`.
- `weight` og `opacity` giver tyndere, tykkere eller lysere streger.
- `erase` visker tidligere streger ud (efter `id`), og `'guides'` visker alle hjælpelinjer ud.
- `style` er `'enkel'` (standard), `'detaljer'` eller `'naturtro'`. Udgaver af samme motiv deler `motif`.
- `base: 'cat'` gør lektionen til en byg videre-lektion: den starter med den færdige kat, og `erase` kan viske
  dens streger ud (giv dem et `id` i base-lektionen).
- **Hvert nyt motiv skal have flere udgaver:** en enkel (niveau 1–2), mindst én byg videre-udgave med detaljer og,
  hvor det giver mening, en naturtro udgave. En test fejler, hvis en enkel tegning står alene (se `CLAUDE.md`).
- **Figurer fra film og spil får egne navne og eget design**, fx en isprinsesse, et grønt blokmonster og en
  rumridder. Varemærkenavne må ikke stå i titler, tekster eller id'er – en test holder øje med det.
- `labels` skriver små forklaringer på tegningen, fx "horisont".
- Prik-til-prik laves med `dotLesson()` i `src/lessons/dots.ts`.
- Hjælpefunktioner som `circle`, `ellipse`, `arc`, `ellipseArc`, `mirrorX`, `hatch`, `intersect`, `ring`,
  `goldenSpiral`, `starPoints`, `radial` (eger og dækmønstre) og `pixels` (pixeltegning på et net) ligger i
  `src/lessons/shapes.ts`.

`npm test` fanger ugyldige stier, manglende oversættelser, streger, der viskes ud uden at være tegnet,
byg videre-lektioner, der peger på en lektion, som ikke findes, enkle tegninger uden andre udgaver og
varemærkenavne i tegningerne.

## Opbygning

| Mappe | Indhold |
| --- | --- |
| `src/screens/` | Skærmene: velkomst, forside, guidet valg, katalog, lektion, foto, resultat, galleri, kalkér, print, voksne |
| `src/components/StepCanvas.tsx` | Tegner et trin (grå tidligere streger, animeret ny streg, hjælpelinjer, prikker) |
| `src/lessons/` | Lektionerne, katalog, anbefalinger og mærker |
| `src/feedback/` | Ros og tips (`praise.ts`) samt foto-behandling, rammer og deling (`effects.ts`) |
| `src/state/` | Profiler og fremskridt (`localStorage`) og billeder (IndexedDB) |
| `src/i18n/` | Alle tekster på dansk (`da.ts`) og engelsk (`en.ts`) |

### AI-feedback senere

Ros og tips laves i dag lokalt ud fra skabeloner (`getFeedback()` i `src/feedback/praise.ts`).
Funktionen er asynkron, så den senere kan skiftes ud med et kald til en lille server
(fx en Cloudflare Worker, der holder API-nøglen), som sender billedet og lektionen til Claude
og får konkret ros tilbage. Bemærk, at børnenes billeder i så fald forlader enheden.
