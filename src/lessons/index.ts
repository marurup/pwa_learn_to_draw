import type { Category, Lesson, Style, Sub } from './types'
import { warmupLines } from './teknik/warmup-lines'
import { dotsFish } from './prik/dots-fish'
import { dotsStar } from './prik/dots-star'
import { dotsHouse } from './prik/dots-house'
import { dotsRocket } from './prik/dots-rocket'
import { sunFlower } from './natur/sun-flower'
import { happyFace } from './mennesker/happy-face'
import { cat } from './dyr/cat'
import { catDetail } from './dyr/cat-detail'
import { cactus } from './natur/cactus'
import { tulip } from './natur/tulip'
import { sunflower } from './natur/sunflower'
import { sunflowerDetail } from './natur/sunflower-detail'
import { rose } from './natur/rose'
import { roseReal } from './natur/rose-real'
import { leaves } from './natur/leaves'
import { flowerVase } from './natur/flower-vase'
import { sunFlowerDetail } from './natur/sun-flower-detail'
import { mountains } from './natur/mountains'
import { beach } from './natur/beach'
import { mountainDepth } from './natur/mountain-depth'
import { sunsetSea } from './natur/sunset-sea'
import { emotions } from './mennesker/emotions'
import { happyFaceDetail } from './mennesker/happy-face-detail'
import { figure } from './mennesker/figure'
import { eyeReal } from './mennesker/eye-real'
import { noseMouth } from './mennesker/nose-mouth'
import { faceProfile } from './mennesker/face-profile'
import { hairstyles } from './mennesker/hairstyles'
import { portraitShaded } from './mennesker/portrait-shaded'
import { fish } from './dyr/fish'
import { bird } from './dyr/bird'
import { house } from './ting/house'
import { car } from './ting/car'
import { rocket } from './ting/rocket'
import { tree } from './natur/tree'
import { faceProportions } from './mennesker/face-proportions'
import { owl } from './dyr/owl'
import { puppy } from './dyr/puppy'
import { dolphin } from './dyr/dolphin'
import { elephant } from './dyr/elephant'
import { toneScale } from './teknik/tone-scale'
import { hatching } from './teknik/hatching'
import { sphereShading } from './teknik/sphere-shading'
import { perspective1pt } from './teknik/perspective-1pt'
import { perspective2pt } from './teknik/perspective-2pt'
import { stylesCat } from './teknik/styles-cat'
import { butterfly } from './dyr/butterfly'
import { penguin } from './dyr/penguin'
import { rabbit } from './dyr/rabbit'
import { parrot } from './dyr/parrot'
import { horse } from './dyr/horse'
import { foxReal } from './dyr/fox-real'
import { owlDetail } from './dyr/owl-detail'
import { fishDetail } from './dyr/fish-detail'
import { puppyDetail } from './dyr/puppy-detail'
import { robot } from './fantasi/robot'
import { unicorn } from './fantasi/unicorn'
import { dragon } from './fantasi/dragon'
import { airplane } from './ting/airplane'
import { lighthouse } from './ting/lighthouse'
import { castle } from './ting/castle'
import { houseDetail } from './ting/house-detail'
import { textures } from './teknik/textures'
import { cylinderCone } from './teknik/cylinder-cone'
import { appleStillLife } from './teknik/apple-still-life'
import { mermaid } from './fantasi/mermaid'
import { mermaidDetail } from './fantasi/mermaid-detail'
import { mermaidRock } from './fantasi/mermaid-rock'
import { mermaidReal } from './fantasi/mermaid-real'
import { seahorse } from './dyr/seahorse'
import { seahorseDetail } from './dyr/seahorse-detail'
import { shells } from './dyr/shells'
import { shellsDetail } from './dyr/shells-detail'
import { doll } from './mennesker/doll'
import { dollPrincess } from './mennesker/doll-princess'
import { dollBallerina } from './mennesker/doll-ballerina'
import { dollMermaid } from './mennesker/doll-mermaid'
import { fashionFigure } from './mennesker/fashion-figure'
import { ragDoll } from './mennesker/rag-doll'
import { ragDollDetail } from './mennesker/rag-doll-detail'
import { fairy } from './fantasi/fairy'
import { fairyDetail } from './fantasi/fairy-detail'
import { dollhouse } from './ting/dollhouse'
import { dollhouseDetail } from './ting/dollhouse-detail'
import { monsterTruck } from './ting/monster-truck'
import { monsterTruckDetail } from './ting/monster-truck-detail'
import { monsterTruckJump } from './ting/monster-truck-jump'
import { motorcycle } from './ting/motorcycle'
import { motorcycleDetail } from './ting/motorcycle-detail'
import { motorcycleReal } from './ting/motorcycle-real'
import { motocross } from './ting/motocross'
import { motocrossDetail } from './ting/motocross-detail'
import { quad } from './ting/quad'
import { quadDetail } from './ting/quad-detail'
import { digger } from './ting/digger'
import { diggerDetail } from './ting/digger-detail'
import { tractor } from './ting/tractor'
import { tractorDetail } from './ting/tractor-detail'
import { birdDetail } from './dyr/bird-detail'
import { carDetail } from './ting/car-detail'
import { rocketDetail } from './ting/rocket-detail'
import { treeDetail } from './natur/tree-detail'
import { dolphinDetail } from './dyr/dolphin-detail'
import { elephantReal } from './dyr/elephant-real'
import { butterflyDetail } from './dyr/butterfly-detail'
import { penguinDetail } from './dyr/penguin-detail'
import { rabbitDetail } from './dyr/rabbit-detail'
import { cactusDetail } from './natur/cactus-detail'
import { tulipDetail } from './natur/tulip-detail'
import { beachDetail } from './natur/beach-detail'
import { airplaneDetail } from './ting/airplane-detail'
import { lighthouseDetail } from './ting/lighthouse-detail'
import { robotDetail } from './fantasi/robot-detail'
import { unicornDetail } from './fantasi/unicorn-detail'
import { pumpkin } from './hoejtider/pumpkin'
import { pumpkinDetail } from './hoejtider/pumpkin-detail'
import { pumpkinReal } from './hoejtider/pumpkin-real'
import { witch } from './hoejtider/witch'
import { witchDetail } from './hoejtider/witch-detail'
import { ghost } from './hoejtider/ghost'
import { ghostDetail } from './hoejtider/ghost-detail'
import { hauntedHouse } from './hoejtider/haunted-house'
import { hauntedHouseDetail } from './hoejtider/haunted-house-detail'
import { christmasTree } from './hoejtider/christmas-tree'
import { christmasTreeDetail } from './hoejtider/christmas-tree-detail'
import { santa } from './hoejtider/santa'
import { santaDetail } from './hoejtider/santa-detail'
import { reindeer } from './hoejtider/reindeer'
import { reindeerDetail } from './hoejtider/reindeer-detail'
import { sleigh } from './hoejtider/sleigh'
import { sleighDetail } from './hoejtider/sleigh-detail'
import { gift } from './hoejtider/gift'
import { giftDetail } from './hoejtider/gift-detail'
import { snowman } from './hoejtider/snowman'
import { snowmanDetail } from './hoejtider/snowman-detail'
import { nisse } from './hoejtider/nisse'
import { nisseDetail } from './hoejtider/nisse-detail'
import { fireworks } from './hoejtider/fireworks'
import { fireworksDetail } from './hoejtider/fireworks-detail'
import { kransekage } from './hoejtider/kransekage'
import { kransekageDetail } from './hoejtider/kransekage-detail'
import { heart } from './hoejtider/heart'
import { heartDetail } from './hoejtider/heart-detail'
import { barrel } from './hoejtider/barrel'
import { barrelDetail } from './hoejtider/barrel-detail'
import { easterEgg } from './hoejtider/easter-egg'
import { easterEggDetail } from './hoejtider/easter-egg-detail'
import { chick } from './hoejtider/chick'
import { chickDetail } from './hoejtider/chick-detail'
import { bonfire } from './hoejtider/bonfire'
import { bonfireDetail } from './hoejtider/bonfire-detail'
import { birthdayCake } from './hoejtider/birthday-cake'
import { birthdayCakeDetail } from './hoejtider/birthday-cake-detail'
import { balloons } from './hoejtider/balloons'
import { balloonsDetail } from './hoejtider/balloons-detail'
import { blockHero } from './spil/block-hero'
import { blockHeroDetail } from './spil/block-hero-detail'
import { blockMonster } from './spil/block-monster'
import { blockMonsterDetail } from './spil/block-monster-detail'
import { grassBlock } from './spil/grass-block'
import { grassBlockDetail } from './spil/grass-block-detail'
import { pixelSword } from './spil/pixel-sword'
import { pixelSwordDetail } from './spil/pixel-sword-detail'
import { brickFigure } from './spil/brick-figure'
import { brickFigureDetail } from './spil/brick-figure-detail'
import { llamaPinata } from './spil/llama-pinata'
import { llamaPinataDetail } from './spil/llama-pinata-detail'
import { partyBus } from './spil/party-bus'
import { partyBusDetail } from './spil/party-bus-detail'
import { buggy } from './spil/buggy'
import { buggyDetail } from './spil/buggy-detail'
import { rocketCar } from './spil/rocket-car'
import { rocketCarDetail } from './spil/rocket-car-detail'

/** Every lesson, in the order they appear in the catalog (easiest first). */
export const LESSONS: Lesson[] = [
  warmupLines,
  dotsFish,
  dotsStar,
  dotsHouse,
  dotsRocket,
  sunFlower,
  happyFace,
  cat,
  fish,
  bird,
  house,
  car,
  rocket,
  tree,
  faceProportions,
  owl,
  puppy,
  dolphin,
  elephant,
  toneScale,
  hatching,
  sphereShading,
  perspective1pt,
  perspective2pt,
  stylesCat,
  catDetail,
  cactus,
  tulip,
  sunflower,
  sunflowerDetail,
  rose,
  roseReal,
  leaves,
  flowerVase,
  sunFlowerDetail,
  mountains,
  beach,
  mountainDepth,
  sunsetSea,
  emotions,
  happyFaceDetail,
  figure,
  eyeReal,
  noseMouth,
  faceProfile,
  hairstyles,
  portraitShaded,
  butterfly,
  penguin,
  rabbit,
  parrot,
  horse,
  foxReal,
  owlDetail,
  fishDetail,
  puppyDetail,
  robot,
  unicorn,
  dragon,
  airplane,
  lighthouse,
  castle,
  houseDetail,
  textures,
  cylinderCone,
  appleStillLife,
  mermaid,
  mermaidDetail,
  mermaidRock,
  mermaidReal,
  seahorse,
  seahorseDetail,
  shells,
  shellsDetail,
  doll,
  dollPrincess,
  dollBallerina,
  dollMermaid,
  fashionFigure,
  ragDoll,
  ragDollDetail,
  fairy,
  fairyDetail,
  dollhouse,
  dollhouseDetail,
  monsterTruck,
  monsterTruckDetail,
  monsterTruckJump,
  motorcycle,
  motorcycleDetail,
  motorcycleReal,
  motocross,
  motocrossDetail,
  quad,
  quadDetail,
  digger,
  diggerDetail,
  tractor,
  tractorDetail,
  birdDetail,
  carDetail,
  rocketDetail,
  treeDetail,
  dolphinDetail,
  elephantReal,
  butterflyDetail,
  penguinDetail,
  rabbitDetail,
  cactusDetail,
  tulipDetail,
  beachDetail,
  airplaneDetail,
  lighthouseDetail,
  robotDetail,
  unicornDetail,
  pumpkin,
  pumpkinDetail,
  pumpkinReal,
  witch,
  witchDetail,
  ghost,
  ghostDetail,
  hauntedHouse,
  hauntedHouseDetail,
  christmasTree,
  christmasTreeDetail,
  santa,
  santaDetail,
  reindeer,
  reindeerDetail,
  sleigh,
  sleighDetail,
  gift,
  giftDetail,
  snowman,
  snowmanDetail,
  nisse,
  nisseDetail,
  fireworks,
  fireworksDetail,
  kransekage,
  kransekageDetail,
  heart,
  heartDetail,
  barrel,
  barrelDetail,
  easterEgg,
  easterEggDetail,
  chick,
  chickDetail,
  bonfire,
  bonfireDetail,
  birthdayCake,
  birthdayCakeDetail,
  balloons,
  balloonsDetail,
  blockHero,
  blockHeroDetail,
  blockMonster,
  blockMonsterDetail,
  grassBlock,
  grassBlockDetail,
  pixelSword,
  pixelSwordDetail,
  brickFigure,
  brickFigureDetail,
  llamaPinata,
  llamaPinataDetail,
  partyBus,
  partyBusDetail,
  buggy,
  buggyDetail,
  rocketCar,
  rocketCarDetail,
]

const byId = new Map(LESSONS.map((l) => [l.id, l]))

export function getLesson(id: string | undefined): Lesson | undefined {
  return id ? byId.get(id) : undefined
}

export const CATEGORIES: Category[] = ['prik', 'dyr', 'natur', 'mennesker', 'ting', 'fantasi', 'hoejtider', 'spil', 'teknik']

export const SUBS: Partial<Record<Category, Sub[]>> = {
  dyr: ['fugle', 'fisk', 'landdyr', 'insekter'],
  natur: ['blomster', 'landskab'],
  mennesker: ['ansigter', 'krop', 'dukker'],
  ting: ['koeretoejer', 'maskiner', 'bygninger', 'rummet'],
  fantasi: ['havfruer', 'eventyr'],
  hoejtider: ['halloween', 'jul', 'nytaar', 'hjerter', 'fastelavn', 'paaske', 'sankthans', 'foedselsdag'],
  spil: ['blokke', 'spilfigurer', 'raketbiler'],
}

export const CATEGORY_ICON: Record<Category, string> = {
  prik: '🔢',
  dyr: '🐾',
  natur: '🌸',
  mennesker: '🙂',
  ting: '🚗',
  fantasi: '🐉',
  hoejtider: '🎃',
  spil: '🎮',
  teknik: '✏️',
}

export const STYLE_ICON: Record<Style, string> = { enkel: '✏️', detaljer: '✨', naturtro: '🎨' }

export function styleOf(lesson: Lesson): Style {
  return lesson.style ?? 'enkel'
}

/** The subject a lesson belongs to: its own motif, else its base lesson's, else its id. */
export function motifOf(lesson: Lesson): string {
  if (lesson.motif) return lesson.motif
  const base = getLesson(lesson.base)
  return base ? motifOf(base) : lesson.id
}

/** Lessons that continue on this lesson's finished drawing ("Byg videre"). */
export function extensionsOf(id: string): Lesson[] {
  return LESSONS.filter((l) => l.base === id)
}

/** Other lessons of the same subject, simplest first. */
export function variantsOf(lesson: Lesson): Lesson[] {
  const motif = motifOf(lesson)
  return LESSONS.filter((l) => l.id !== lesson.id && motifOf(l) === motif).sort((a, b) => a.level - b.level)
}
