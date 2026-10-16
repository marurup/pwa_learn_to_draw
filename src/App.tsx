import { useEffect, type ReactNode } from 'react'
import { HashRouter, Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { SvgDefs } from './components/StepCanvas'
import { useLang, useT } from './i18n'
import { getLesson } from './lessons'
import type { Lesson } from './lessons/types'
import { useAppState, type Profile } from './state/store'
import { Catalog } from './screens/Catalog'
import { Gallery } from './screens/Gallery'
import { Guide } from './screens/Guide'
import { Home } from './screens/Home'
import { LessonDone } from './screens/LessonDone'
import { LessonIntro } from './screens/LessonIntro'
import { LessonPlayer } from './screens/LessonPlayer'
import { ParentSettings } from './screens/ParentSettings'
import { PhotoAdjust } from './screens/PhotoAdjust'
import { Preview } from './screens/Preview'
import { PrintSheet } from './screens/PrintSheet'
import { ProfilePicker } from './screens/ProfilePicker'
import { Result } from './screens/Result'
import { TraceMode } from './screens/TraceMode'
import { Welcome } from './screens/Welcome'

function WithProfile({ render }: { render: (p: Profile) => ReactNode }) {
  const app = useAppState()
  if (!app.profiles.length) return <Navigate to="/welcome" replace />
  const profile = app.profiles.find((p) => p.id === app.activeId)
  if (!profile) return <Navigate to="/who" replace />
  return render(profile)
}

function WithLesson({ render }: { render: (l: Lesson, p: Profile) => ReactNode }) {
  const t = useT()
  const lesson = getLesson(useParams().id)
  return (
    <WithProfile
      render={(p) =>
        lesson ? (
          render(lesson, p)
        ) : (
          <main className="screen center">
            <p className="lead">{t('lesson.notFound')}</p>
            <Link className="btn" to="/catalog">
              {t('catalog.title')}
            </Link>
          </main>
        )
      }
    />
  )
}

function Start() {
  const app = useAppState()
  if (!app.profiles.length) return <Navigate to="/welcome" replace />
  if (!app.profiles.some((p) => p.id === app.activeId)) return <Navigate to="/who" replace />
  return <Navigate to="/home" replace />
}

function DocumentSync() {
  const lang = useLang()
  const t = useT()
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t('app.name')
  }, [lang, t])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function App() {
  return (
    <HashRouter>
      <SvgDefs />
      <DocumentSync />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/who" element={<ProfilePicker />} />
        <Route path="/home" element={<WithProfile render={(p) => <Home profile={p} />} />} />
        <Route path="/guide" element={<WithProfile render={(p) => <Guide profile={p} />} />} />
        <Route path="/catalog" element={<WithProfile render={(p) => <Catalog profile={p} />} />} />
        <Route path="/gallery" element={<WithProfile render={(p) => <Gallery profile={p} />} />} />
        <Route path="/result/:photoId" element={<WithProfile render={(p) => <Result profile={p} />} />} />
        <Route path="/parents" element={<ParentSettings />} />
        <Route path="/lesson/:id" element={<WithLesson render={(l) => <LessonIntro lesson={l} />} />} />
        <Route path="/lesson/:id/step/:n" element={<WithLesson render={(l, p) => <LessonPlayer lesson={l} profile={p} />} />} />
        <Route path="/lesson/:id/done" element={<WithLesson render={(l, p) => <LessonDone lesson={l} profile={p} />} />} />
        <Route path="/lesson/:id/photo" element={<WithLesson render={(l, p) => <PhotoAdjust lesson={l} profile={p} />} />} />
        <Route path="/lesson/:id/trace" element={<WithLesson render={(l) => <TraceMode lesson={l} />} />} />
        <Route path="/lesson/:id/print" element={<WithLesson render={(l) => <PrintSheet lesson={l} />} />} />
        {import.meta.env.DEV && <Route path="/preview" element={<Preview />} />}
        {import.meta.env.DEV && <Route path="/preview/:id" element={<Preview />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
