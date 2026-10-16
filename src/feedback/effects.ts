// Photo processing on the device: crop/rotate, whiten the paper, and compose a framed picture to share.

export interface Area {
  x: number
  y: number
  width: number
  height: number
}

export type Background = 'none' | 'sun' | 'sea' | 'meadow' | 'rainbow'
export type Frame = 'none' | 'gold' | 'wood' | 'polaroid'
export const BACKGROUNDS: Background[] = ['none', 'sun', 'sea', 'meadow', 'rainbow']
export const FRAMES: Frame[] = ['none', 'gold', 'wood', 'polaroid']

/** CSS versions of the backgrounds, used for the on-screen preview (the photo is multiplied on top). */
export const BACKGROUND_CSS: Record<Background, string> = {
  none: '#ffffff',
  sun: 'radial-gradient(circle at 25% 20%, #fffbe0 0%, #ffe27a 45%, #ffb870 100%)',
  sea: 'linear-gradient(180deg, #e3f6ff 0%, #a9dcf7 60%, #7cc3ee 100%)',
  meadow: 'linear-gradient(180deg, #e6f6ff 0%, #f3fbff 58%, #d4f0bd 58%, #b9e39b 100%)',
  rainbow: 'linear-gradient(135deg, #ffd9d9, #ffe8c4, #fff6bf, #dcf6cf, #d4ebff, #e9ddff)',
}

const MAX_SOURCE = 2400
const MAX_OUTPUT = 1600

export function loadImage(src: Blob | string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = typeof src === 'string' ? src : URL.createObjectURL(src)
    const img = new Image()
    img.onload = () => {
      if (typeof src !== 'string') URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      if (typeof src !== 'string') URL.revokeObjectURL(url)
      reject(new Error('image load failed'))
    }
    img.src = url
  })
}

function canvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas')
  c.width = Math.max(1, Math.round(w))
  c.height = Math.max(1, Math.round(h))
  const ctx = c.getContext('2d', { willReadFrequently: true })
  if (!ctx) throw new Error('no 2d context')
  return [c, ctx]
}

function toBlob(c: HTMLCanvasElement, quality = 0.9): Promise<Blob> {
  return new Promise((resolve, reject) =>
    c.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/jpeg', quality),
  )
}

/**
 * Crops `area` (in the original image's pixels, after rotating by `rotation` degrees – the format
 * react-easy-crop reports) and scales the result down to a sensible size.
 */
export async function cropPhoto(file: Blob, area: Area, rotation: number): Promise<Blob> {
  const img = await loadImage(file)
  // Work on a scaled-down copy so big camera photos stay within tablet canvas limits.
  const scale = Math.min(1, MAX_SOURCE / Math.max(img.naturalWidth, img.naturalHeight))
  const w = img.naturalWidth * scale
  const h = img.naturalHeight * scale
  const rad = (rotation * Math.PI) / 180
  const bw = Math.abs(Math.cos(rad) * w) + Math.abs(Math.sin(rad) * h)
  const bh = Math.abs(Math.sin(rad) * w) + Math.abs(Math.cos(rad) * h)

  const [rotated, rctx] = canvas(bw, bh)
  rctx.fillStyle = '#fff'
  rctx.fillRect(0, 0, bw, bh)
  rctx.translate(bw / 2, bh / 2)
  rctx.rotate(rad)
  rctx.drawImage(img, -w / 2, -h / 2, w, h)

  const cx = area.x * scale
  const cy = area.y * scale
  const cw = area.width * scale
  const ch = area.height * scale
  const out = Math.min(1, MAX_OUTPUT / Math.max(cw, ch))
  const [result, ctx] = canvas(cw * out, ch * out)
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, result.width, result.height)
  ctx.drawImage(rotated, cx, cy, cw, ch, 0, 0, result.width, result.height)
  return toBlob(result)
}

/**
 * "White paper": estimates the paper's brightness across the photo (which is uneven in a room-lit
 * photo), divides it out, and darkens the pencil a little. Colours are kept.
 */
export async function whitenPaper(photo: Blob): Promise<Blob> {
  const img = await loadImage(photo)
  const w = img.naturalWidth
  const h = img.naturalHeight
  const [full, fctx] = canvas(w, h)
  fctx.drawImage(img, 0, 0)
  const src = fctx.getImageData(0, 0, w, h)

  // Paper estimate: tiny copy → max filter (paper is the brightest thing) → blur → scale back up.
  const sw = Math.max(8, Math.round(w / 32))
  const sh = Math.max(8, Math.round(h / 32))
  const [small, sctx] = canvas(sw, sh)
  sctx.imageSmoothingQuality = 'high'
  sctx.drawImage(img, 0, 0, sw, sh)
  const sd = sctx.getImageData(0, 0, sw, sh)
  sctx.putImageData(maxFilter(sd, 2), 0, 0)
  const [, bctx] = canvas(w, h)
  bctx.imageSmoothingEnabled = true
  bctx.imageSmoothingQuality = 'high'
  bctx.filter = 'blur(1px)'
  bctx.drawImage(small, 0, 0, w, h)
  const bgd = bctx.getImageData(0, 0, w, h).data

  const d = src.data
  for (let i = 0; i < d.length; i += 4) {
    for (let c = 0; c < 3; c++) {
      const paper = Math.max(40, bgd[i + c])
      let v = Math.min(1, (d[i + c] / paper) * 1.06)
      v = Math.pow(v, 1.6) // deepen the pencil
      d[i + c] = v * 255
    }
  }
  fctx.putImageData(src, 0, 0)
  return toBlob(full)
}

function maxFilter(img: ImageData, radius: number): ImageData {
  const { width: w, height: h, data } = img
  const out = new ImageData(w, h)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4
      for (let c = 0; c < 3; c++) {
        let m = 0
        for (let dy = -radius; dy <= radius; dy++) {
          const yy = Math.min(h - 1, Math.max(0, y + dy))
          for (let dx = -radius; dx <= radius; dx++) {
            const xx = Math.min(w - 1, Math.max(0, x + dx))
            m = Math.max(m, data[(yy * w + xx) * 4 + c])
          }
        }
        out.data[o + c] = m
      }
      out.data[o + 3] = 255
    }
  }
  return out
}

function paintBackground(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, bg: Background) {
  let fill: string | CanvasGradient = '#fff'
  if (bg === 'sun') {
    const g = ctx.createRadialGradient(x + w * 0.25, y + h * 0.2, 0, x + w * 0.25, y + h * 0.2, Math.hypot(w, h) * 0.85)
    g.addColorStop(0, '#fffbe0')
    g.addColorStop(0.45, '#ffe27a')
    g.addColorStop(1, '#ffb870')
    fill = g
  } else if (bg === 'sea') {
    const g = ctx.createLinearGradient(0, y, 0, y + h)
    g.addColorStop(0, '#e3f6ff')
    g.addColorStop(0.6, '#a9dcf7')
    g.addColorStop(1, '#7cc3ee')
    fill = g
  } else if (bg === 'meadow') {
    const g = ctx.createLinearGradient(0, y, 0, y + h)
    g.addColorStop(0, '#e6f6ff')
    g.addColorStop(0.58, '#f3fbff')
    g.addColorStop(0.58, '#d4f0bd')
    g.addColorStop(1, '#b9e39b')
    fill = g
  } else if (bg === 'rainbow') {
    const g = ctx.createLinearGradient(x, y, x + w, y + h)
    ;['#ffd9d9', '#ffe8c4', '#fff6bf', '#dcf6cf', '#d4ebff', '#e9ddff'].forEach((c, i, all) => g.addColorStop(i / (all.length - 1), c))
    fill = g
  }
  ctx.fillStyle = fill
  ctx.fillRect(x, y, w, h)
}

/** Builds the picture that gets shared or saved: background, drawing and frame in one JPEG. */
export async function composePicture(
  photo: Blob,
  opts: { background: Background; frame: Frame; caption?: string },
): Promise<Blob> {
  const img = await loadImage(photo)
  const w = img.naturalWidth
  const h = img.naturalHeight
  const unit = Math.max(w, h) / 100
  const pad = { none: 0, gold: 7, wood: 7, polaroid: 5 }[opts.frame] * unit
  const bottom = opts.frame === 'polaroid' ? 16 * unit : pad
  const [c, ctx] = canvas(w + pad * 2, h + pad + bottom)

  if (opts.frame === 'gold') {
    const g = ctx.createLinearGradient(0, 0, c.width, c.height)
    g.addColorStop(0, '#f7d774')
    g.addColorStop(0.3, '#c9932b')
    g.addColorStop(0.55, '#ffe9a3')
    g.addColorStop(0.8, '#b98222')
    g.addColorStop(1, '#f3cf6a')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.strokeStyle = 'rgba(80,50,10,0.55)'
    ctx.lineWidth = unit * 0.6
    ctx.strokeRect(pad - unit, pad - unit, w + unit * 2, h + unit * 2)
  } else if (opts.frame === 'wood') {
    ctx.fillStyle = '#9a6233'
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.strokeStyle = 'rgba(60,30,10,0.25)'
    ctx.lineWidth = unit * 0.35
    for (let i = 0; i < c.height; i += unit * 1.6) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.bezierCurveTo(c.width * 0.3, i + unit, c.width * 0.6, i - unit, c.width, i + unit * 0.5)
      ctx.stroke()
    }
  } else if (opts.frame === 'polaroid') {
    ctx.fillStyle = '#fdfdfb'
    ctx.fillRect(0, 0, c.width, c.height)
  }

  paintBackground(ctx, pad, pad, w, h, opts.background)
  ctx.globalCompositeOperation = opts.background === 'none' ? 'source-over' : 'multiply'
  ctx.drawImage(img, pad, pad, w, h)
  ctx.globalCompositeOperation = 'source-over'

  if (opts.frame === 'polaroid' && opts.caption) {
    ctx.fillStyle = '#3b3632'
    ctx.font = `500 ${Math.round(unit * 6)}px Fredoka, system-ui, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(opts.caption, c.width / 2, h + pad + bottom / 2, c.width - pad * 2)
  }
  return toBlob(c, 0.92)
}

/** Shares the picture with the system share sheet; falls back to downloading it. */
export async function sharePicture(blob: Blob, fileName: string, text: string): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const file = new File([blob], fileName, { type: 'image/jpeg' })
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text })
      return 'shared'
    } catch (e) {
      if ((e as DOMException).name === 'AbortError') return 'cancelled'
    }
  }
  downloadBlob(blob, fileName)
  return 'downloaded'
}

export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 10_000)
}
