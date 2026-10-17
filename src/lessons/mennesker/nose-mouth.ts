import { circle, ellipse, line } from '../shapes'
import type { Lesson } from '../types'

export const noseMouth: Lesson = {
  id: 'nose-mouth',
  title: { da: 'Naturtro næse og mund', en: 'Realistic nose and mouth' },
  category: 'mennesker',
  sub: 'ansigter',
  motif: 'face',
  level: 3,
  style: 'naturtro',
  minutes: 25,
  intro: {
    da: 'En næse er tre kugler: én til spidsen og én til hver næsefløj. En mund er en overlæbe med en lille bue og en fyldigere underlæbe.',
    en: 'A nose is three balls: one for the tip and one for each nostril wing. A mouth is an upper lip with a little bow and a fuller lower lip.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Næsen: Tegn tre lette cirkler – en stor til næsetippen og to mindre til næsefløjene.',
        en: 'The nose: draw three light circles – a big one for the tip and two smaller ones for the nostril wings.',
      },
      strokes: [
        { d: circle(200, 138, 24), kind: 'guide' },
        { d: circle(172, 150, 14), kind: 'guide' },
        { d: circle(228, 150, 14), kind: 'guide' },
      ],
    },
    {
      text: {
        da: 'Tegn næsens underside rundt om cirklerne: næsefløjene, næseborene og stykket imellem.',
        en: 'Draw the underside of the nose around the circles: the nostril wings, the nostrils and the part in between.',
      },
      strokes: [
        { d: 'M178 128 Q156 136 158 152 Q160 166 178 164' },
        { d: 'M222 128 Q244 136 242 152 Q240 166 222 164' },
        { d: 'M178 164 Q186 158 192 163 Q200 170 208 163 Q214 158 222 164' },
        { d: ellipse(186, 160, 7, 3, -15), kind: 'shade', tone: 0.85 },
        { d: ellipse(214, 160, 7, 3, 15), kind: 'shade', tone: 0.85 },
      ],
    },
    {
      text: {
        da: 'Næseryggen tegnes næsten ikke – den vises med skygge. Skyg let langs den ene side, under næsen og omkring næsefløjene. Lad næsetippen være lys.',
        en: 'The bridge of the nose is hardly drawn – it is shown with shading. Shade lightly along one side, under the nose and around the wings. Keep the tip light.',
      },
      tip: { da: 'Kun få streger og bløde skygger får næsen til at se naturlig ud.', en: 'Only a few lines and soft shadows make a nose look natural.' },
      erase: 'guides',
      strokes: [
        { d: 'M190 30 Q186 80 182 118', weight: 0.5, opacity: 0.5 },
        { d: 'M212 30 Q216 80 222 116 Q232 124 238 132 Q222 128 214 116 Q208 80 208 30 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M162 148 Q162 162 176 164 Q166 156 166 146 Z', kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: 'M238 146 Q240 162 224 166 Q234 156 234 144 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M176 174 Q200 184 224 174 Q200 190 176 174 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: ellipse(196, 134, 6, 4), kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: {
        da: 'Munden: Tegn en let lodret midterlinje og en vandret linje, hvor læberne mødes.',
        en: 'The mouth: draw a light vertical centre line and a horizontal line where the lips meet.',
      },
      strokes: [{ d: line(200, 250, 200, 360), kind: 'guide' }, { d: line(110, 300, 290, 300), kind: 'guide' }],
    },
    {
      text: {
        da: 'Tegn linjen mellem læberne med en lille bølge i midten. Tegn så overlæben med en bue foroven – og en fyldigere underlæbe.',
        en: 'Draw the line between the lips with a small wave in the middle. Then draw the upper lip with a bow at the top – and a fuller lower lip.',
      },
      tip: { da: 'Mundvigene sidder lidt højere end midten af munden og er små og mørke.', en: 'The mouth corners sit a little higher than the middle and are small and dark.' },
      strokes: [
        { d: 'M124 296 Q158 302 184 300 Q200 306 216 300 Q242 302 276 296' },
        { d: 'M124 296 Q150 276 182 278 Q194 278 200 286 Q206 278 218 278 Q250 276 276 296' },
        { d: 'M134 302 Q168 336 200 336 Q232 336 266 302' },
        { d: 'M190 252 L193 278 M210 252 L207 278', weight: 0.5, opacity: 0.6 },
      ],
    },
    {
      text: {
        da: 'Skyg overlæben mørkere end underlæben – den vender nedad og væk fra lyset. Lad en lys plet stå på underlæben, og skyg lidt under den.',
        en: 'Shade the upper lip darker than the lower lip – it faces down and away from the light. Keep a light spot on the lower lip, and shade a little under it.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M126 296 Q150 280 182 282 Q194 282 200 289 Q206 282 218 282 Q250 280 274 296 Q242 300 216 298 Q200 302 184 298 Q158 300 126 296 Z', kind: 'shade', fill: 'soft', tone: 0.5 },
        { d: 'M140 304 Q170 332 200 332 Q230 332 260 304 Q232 316 200 316 Q168 316 140 304 Z', kind: 'shade', fill: 'soft', tone: 0.28 },
        { d: ellipse(204, 318, 22, 5), kind: 'shade', fill: 'paper' },
        { d: 'M160 340 Q200 356 240 340 Q200 368 160 340 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${circle(124, 297, 3)} ${circle(276, 297, 3)}`, kind: 'shade', tone: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Næse og mund ser helt rigtige ud – flot skyggelægning!', en: 'The nose and mouth look just right – great shading!' }],
  nextTip: {
    da: 'Kig på dig selv i spejlet, mens du smiler, og tegn munden igen. Hvad sker der med mundvigene?',
    en: 'Look at yourself in the mirror while you smile, and draw the mouth again. What happens to the corners?',
  },
}
