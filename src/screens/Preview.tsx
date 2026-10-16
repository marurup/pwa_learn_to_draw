import { useParams } from 'react-router-dom'
import { StepCanvas } from '../components/StepCanvas'
import { LESSONS, getLesson } from '../lessons'

/** Developer contact sheet: every step of one lesson (or the finished drawing of all lessons). */
export function Preview() {
  const { id } = useParams()
  const lesson = getLesson(id)
  const size = lesson ? 340 : 260
  const cell = { width: size, height: size, background: '#fff', borderRadius: 12, padding: 6 }
  if (!lesson) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, padding: 12 }}>
        {LESSONS.map((l) => (
          <div key={l.id} style={cell}>
            <StepCanvas lesson={l} mode="final" />
            <div style={{ fontSize: 12, textAlign: 'center' }}>{l.id}</div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, padding: 12 }}>
      {lesson.steps.map((_, i) => (
        <div key={i} style={cell}>
          <StepCanvas lesson={lesson} step={i} mode="step" replayKey={-1} />
        </div>
      ))}
      <div style={cell}>
        <StepCanvas lesson={lesson} mode="final" />
      </div>
    </div>
  )
}
