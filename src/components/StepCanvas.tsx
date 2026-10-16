import type { CSSProperties } from 'react'
import { composeStep, dotNumberPositions } from '../lessons/compose'
import type { Lesson, Stroke } from '../lessons/types'
import { useTL } from '../i18n'

export type CanvasMode = 'step' | 'final' | 'thumb' | 'trace' | 'print'

interface Props {
  lesson: Lesson
  step?: number
  mode?: CanvasMode
  /** Changing this replays the drawing animation of the current step. */
  replayKey?: number
  /** Trace/print: show only the numbered dots of a dot-to-dot. */
  dotsOnly?: boolean
  label?: string
  className?: string
}

const BASE_WIDTH: Record<CanvasMode, number> = { step: 4, final: 4.5, thumb: 6, trace: 5, print: 4 }

function shadeFill(s: Stroke): { fill: string; fillOpacity?: number } {
  switch (s.fill) {
    case 'hatch':
      return { fill: 'url(#ltd-hatch)' }
    case 'cross':
      return { fill: 'url(#ltd-cross)' }
    case 'sphere':
      return { fill: 'url(#ltd-sphere)' }
    default:
      return { fill: '#3a3530', fillOpacity: s.tone ?? 0.3 }
  }
}

export function StepCanvas({ lesson, step = 0, mode = 'step', replayKey = 0, dotsOnly = false, label, className }: Props) {
  const tl = useTL()
  const final = mode !== 'step'
  const { strokes, labels } = dotsOnly ? { strokes: [], labels: [] } : composeStep(lesson, step, final)
  const animate = mode === 'step'
  const base = BASE_WIDTH[mode]

  const currentLines = strokes.filter((s) => s.current && s.stroke.kind !== 'shade')
  const per = Math.min(0.9, Math.max(0.3, 2.6 / Math.max(1, currentLines.length)))
  const delayOf = (key: string) => {
    const idx = currentLines.findIndex((s) => s.key === key)
    return Math.max(0, idx) * per * 0.85
  }

  const showDots = lesson.dots && (mode === 'step' || mode === 'print' || (mode === 'trace' && dotsOnly))
  const numberPos = lesson.dots ? dotNumberPositions(lesson.dots, mode === 'step' ? 17 : 20) : []
  const dotR = mode === 'step' ? 5 : 6
  const numSize = mode === 'step' ? 15 : 18

  const shades = strokes.filter((s) => s.stroke.kind === 'shade')
  const lines = strokes.filter((s) => s.stroke.kind !== 'shade')

  return (
    <svg
      className={`step-canvas ${mode} ${className ?? ''}`}
      viewBox={lesson.viewBox ?? '0 0 400 400'}
      role="img"
      aria-label={label ?? tl(lesson.title)}
    >
      {shades.map(({ key, stroke, current }) => (
        <path
          key={current ? `${key}-${replayKey}` : key}
          d={stroke.d}
          {...shadeFill(stroke)}
          className={current && animate ? 'anim-fade' : undefined}
          style={current && animate ? ({ '--delay': '0.2s' } as CSSProperties) : undefined}
        />
      ))}

      {lines.map(({ key, stroke, current }) => {
        const guide = stroke.kind === 'guide'
        const width = (guide ? base * 0.7 : current && animate ? base * 1.4 : base) * (stroke.weight ?? 1)
        const anim = current && animate
        return (
          <path
            key={anim ? `${key}-${replayKey}` : key}
            d={stroke.d}
            className={[guide ? 's-guide' : 's-line', current ? 'current' : '', anim ? (guide ? 'anim-fade' : 'anim-draw') : '']
              .filter(Boolean)
              .join(' ')}
            strokeWidth={width}
            pathLength={anim && !guide ? 1 : undefined}
            style={anim ? ({ '--delay': `${delayOf(key)}s`, '--dur': `${per}s` } as CSSProperties) : undefined}
          />
        )
      })}

      {showDots &&
        lesson.dots!.map(([x, y], i) => (
          <g key={`dot${i}`}>
            <circle className="s-dot" cx={x} cy={y} r={dotR} />
            <text
              className="s-dot-num"
              x={numberPos[i][0]}
              y={numberPos[i][1]}
              fontSize={numSize}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {i + 1}
            </text>
          </g>
        ))}

      {labels.map(({ key, label: l, current }) => (
        <text
          key={current ? `${key}-${replayKey}` : key}
          className={`s-label ${current && animate ? 'anim-fade' : ''}`}
          x={l.x}
          y={l.y}
          fontSize={16}
          textAnchor={l.anchor ?? 'middle'}
        >
          {tl(l.text)}
        </text>
      ))}
    </svg>
  )
}

/** Shared patterns and gradients, mounted once so every canvas can reference them. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="ltd-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#4a443e" strokeWidth="1.8" />
        </pattern>
        <pattern id="ltd-cross" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0V8M0 0H8" stroke="#4a443e" strokeWidth="1.8" />
        </pattern>
        <radialGradient id="ltd-sphere" cx="0.38" cy="0.34" r="0.75" fx="0.33" fy="0.28">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.25" stopColor="#d9d4cf" />
          <stop offset="0.7" stopColor="#6e6760" />
          <stop offset="0.86" stopColor="#47413b" />
          <stop offset="1" stopColor="#7c756e" />
        </radialGradient>
      </defs>
    </svg>
  )
}
