// Small helpers that turn simple shapes into SVG path data, so lessons stay readable.

const n = (v: number) => String(Math.round(v * 10) / 10)

export type Pt = [number, number]

export function circle(cx: number, cy: number, r: number): string {
  return ellipse(cx, cy, r, r)
}

/** Full ellipse, drawn starting from the left-most point (clockwise on screen). */
export function ellipse(cx: number, cy: number, rx: number, ry: number, rotateDeg = 0): string {
  if (rotateDeg === 0) {
    return `M${n(cx - rx)} ${n(cy)} a${n(rx)} ${n(ry)} 0 1 1 ${n(2 * rx)} 0 a${n(rx)} ${n(ry)} 0 1 1 ${n(-2 * rx)} 0`
  }
  const a = (rotateDeg * Math.PI) / 180
  const sx = cx - rx * Math.cos(a)
  const sy = cy - rx * Math.sin(a)
  const ex = cx + rx * Math.cos(a)
  const ey = cy + rx * Math.sin(a)
  return `M${n(sx)} ${n(sy)} A${n(rx)} ${n(ry)} ${n(rotateDeg)} 1 1 ${n(ex)} ${n(ey)} A${n(rx)} ${n(ry)} ${n(rotateDeg)} 1 1 ${n(sx)} ${n(sy)}`
}

/** Circular arc from startDeg to endDeg (0° = right, 90° = down), clockwise when end > start. */
export function arc(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  return ellipseArc(cx, cy, r, r, startDeg, endDeg)
}

export function ellipseArc(cx: number, cy: number, rx: number, ry: number, startDeg: number, endDeg: number): string {
  const p = (deg: number): Pt => [cx + rx * Math.cos((deg * Math.PI) / 180), cy + ry * Math.sin((deg * Math.PI) / 180)]
  const [x1, y1] = p(startDeg)
  const [x2, y2] = p(endDeg)
  const sweep = endDeg > startDeg ? 1 : 0
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0
  return `M${n(x1)} ${n(y1)} A${n(rx)} ${n(ry)} 0 ${large} ${sweep} ${n(x2)} ${n(y2)}`
}

export function line(x1: number, y1: number, x2: number, y2: number): string {
  return `M${n(x1)} ${n(y1)} L${n(x2)} ${n(y2)}`
}

export function poly(points: Pt[], close = false): string {
  const [first, ...rest] = points
  return `M${n(first[0])} ${n(first[1])} ` + rest.map(([x, y]) => `L${n(x)} ${n(y)}`).join(' ') + (close ? ' Z' : '')
}

export function rect(x: number, y: number, w: number, h: number): string {
  return poly(
    [
      [x, y],
      [x + w, y],
      [x + w, y + h],
      [x, y + h],
    ],
    true,
  )
}

export function roundRect(x: number, y: number, w: number, h: number, r: number): string {
  return [
    `M${n(x + r)} ${n(y)}`,
    `H${n(x + w - r)}`,
    `Q${n(x + w)} ${n(y)} ${n(x + w)} ${n(y + r)}`,
    `V${n(y + h - r)}`,
    `Q${n(x + w)} ${n(y + h)} ${n(x + w - r)} ${n(y + h)}`,
    `H${n(x + r)}`,
    `Q${n(x)} ${n(y + h)} ${n(x)} ${n(y + h - r)}`,
    `V${n(y + r)}`,
    `Q${n(x)} ${n(y)} ${n(x + r)} ${n(y)}`,
    'Z',
  ].join(' ')
}

/** Mirror path data horizontally around x = cx (only absolute commands M L Q C A H V Z are supported). */
export function mirrorX(d: string, cx: number): string {
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? []
  const out: string[] = []
  let cmd = ''
  let i = 0
  let argIdx = 0
  const arity: Record<string, number> = { M: 2, L: 2, Q: 4, C: 6, A: 7, H: 1, V: 1, Z: 0, T: 2, S: 4 }
  while (i < tokens.length) {
    const t = tokens[i]
    if (/[A-Za-z]/.test(t)) {
      if (t !== t.toUpperCase()) throw new Error(`mirrorX supports absolute commands only, got ${t}`)
      cmd = t
      argIdx = 0
      out.push(t)
      i++
      continue
    }
    const v = Number(t)
    const pos = argIdx % (arity[cmd] || 1)
    let mirrored = v
    if (cmd === 'H') mirrored = 2 * cx - v
    else if (cmd === 'A') {
      if (pos === 4) mirrored = v === 1 ? 0 : 1 // sweep flag flips
      else if (pos === 5) mirrored = 2 * cx - v
      else if (pos === 2) mirrored = -v
    } else if (cmd !== 'V' && pos % 2 === 0) mirrored = 2 * cx - v
    out.push(n(mirrored))
    argIdx++
    i++
  }
  return out.join(' ').replace(/([A-Z]) /g, '$1')
}
