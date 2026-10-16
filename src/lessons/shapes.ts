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

/** A ring (a circle with a round hole), for shading around something round. */
export function ring(cx: number, cy: number, outer: number, inner: number): string {
  return `${circle(cx, cy, outer)} M${n(cx - inner)} ${n(cy)} a${n(inner)} ${n(inner)} 0 1 0 ${n(2 * inner)} 0 a${n(inner)} ${n(inner)} 0 1 0 ${n(-2 * inner)} 0`
}

/** Points along a golden-angle (Fermat) spiral – the way seeds sit in a sunflower. */
export function goldenSpiral(cx: number, cy: number, radius: number, count: number): Pt[] {
  const golden = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: count }, (_, i) => {
    const r = radius * Math.sqrt((i + 0.5) / count)
    return [cx + r * Math.cos(i * golden), cy + r * Math.sin(i * golden)]
  })
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

/** Mirror path data horizontally around x = cx (commands M L Q C S T A H V Z, absolute or relative). */
export function mirrorX(d: string, cx: number): string {
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? []
  const out: string[] = []
  let cmd = ''
  let rel = false
  let argIdx = 0
  const arity: Record<string, number> = { M: 2, L: 2, Q: 4, C: 6, A: 7, H: 1, V: 1, Z: 0, T: 2, S: 4 }
  tokens.forEach((t, i) => {
    if (/[A-Za-z]/.test(t)) {
      cmd = t.toUpperCase()
      // A path's first "m" is absolute.
      rel = t !== cmd && !(i === 0 && cmd === 'M')
      argIdx = 0
      out.push(t)
      return
    }
    const v = Number(t)
    const x = () => (rel ? -v : 2 * cx - v)
    const pos = argIdx % (arity[cmd] || 1)
    let mirrored = v
    if (cmd === 'H') mirrored = x()
    else if (cmd === 'A') {
      if (pos === 4) mirrored = v === 1 ? 0 : 1 // sweep flag flips
      else if (pos === 5) mirrored = x()
      else if (pos === 2) mirrored = -v
    } else if (cmd !== 'V' && pos % 2 === 0) mirrored = x()
    out.push(n(mirrored))
    argIdx++
  })
  return out.join(' ').replace(/([A-Za-z]) /g, '$1')
}

/** Parallel hatch lines at `angleDeg`, `spacing` apart, clipped to a rectangle. */
export function hatch(x: number, y: number, w: number, h: number, spacing: number, angleDeg: number): string {
  const a = (angleDeg * Math.PI) / 180
  const [dx, dy] = [Math.cos(a), Math.sin(a)]
  const [nx, ny] = [-dy, dx]
  const [cx, cy] = [x + w / 2, y + h / 2]
  const reach = Math.hypot(w, h) / 2
  const segments: string[] = []
  for (let s = -reach + spacing / 2; s < reach; s += spacing) {
    const [px, py] = [cx + nx * s, cy + ny * s]
    // Clip the infinite line p + t·d to the rectangle (Liang–Barsky).
    let t0 = -Infinity
    let t1 = Infinity
    for (const [p, q] of [
      [-dx, px - x],
      [dx, x + w - px],
      [-dy, py - y],
      [dy, y + h - py],
    ]) {
      if (Math.abs(p) < 1e-9) {
        if (q < 0) t1 = -Infinity
        continue
      }
      const t = q / p
      if (p < 0) t0 = Math.max(t0, t)
      else t1 = Math.min(t1, t)
    }
    if (t1 - t0 > 2) segments.push(line(px + dx * t0, py + dy * t0, px + dx * t1, py + dy * t1))
  }
  return segments.join(' ')
}

/** Where the line a1→a2 crosses the line b1→b2. */
export function intersect(a1: Pt, a2: Pt, b1: Pt, b2: Pt): Pt {
  const d = (a1[0] - a2[0]) * (b1[1] - b2[1]) - (a1[1] - a2[1]) * (b1[0] - b2[0])
  const ta = a1[0] * a2[1] - a1[1] * a2[0]
  const tb = b1[0] * b2[1] - b1[1] * b2[0]
  return [(ta * (b1[0] - b2[0]) - (a1[0] - a2[0]) * tb) / d, (ta * (b1[1] - b2[1]) - (a1[1] - a2[1]) * tb) / d]
}

/** Scales path data uniformly by `s` and moves it by (tx, ty). Handles absolute and relative commands. */
export function transform(d: string, s: number, tx: number, ty: number): string {
  const parts = d.match(/[A-Za-z][^A-Za-z]*/g) ?? []
  return parts
    .map((part) => {
      const cmd = part[0]
      const rel = cmd !== cmd.toUpperCase()
      const nums = (part.slice(1).match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? []).map(Number)
      const X = (v: number) => (rel ? v * s : v * s + tx)
      const Y = (v: number) => (rel ? v * s : v * s + ty)
      const out = nums.map((v, i) => {
        switch (cmd.toUpperCase()) {
          case 'H':
            return X(v)
          case 'V':
            return Y(v)
          case 'A': {
            const k = i % 7
            if (k === 0 || k === 1) return v * s
            if (k === 5) return X(v)
            if (k === 6) return Y(v)
            return v
          }
          default:
            return i % 2 === 0 ? X(v) : Y(v)
        }
      })
      return cmd + out.map(n).join(' ')
    })
    .join(' ')
}
