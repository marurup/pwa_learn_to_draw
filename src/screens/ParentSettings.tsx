import { Link } from 'react-router-dom'
import { TopBar } from '../components/ui'
import { useBack } from '../hooks/useBack'
import { useT } from '../i18n'
import { LANGS } from '../lessons/types'
import { deleteAllPhotos, deleteProfilePhotos } from '../state/gallery'
import { actions, useAppState } from '../state/store'
import { AGES, AVATARS } from './Welcome'

const LANG_LABEL = { da: '🇩🇰 Dansk', en: '🇬🇧 English' }

export function ParentSettings() {
  const t = useT()
  const app = useAppState()
  const back = useBack('/home')

  const removeProfile = async (id: string, name: string) => {
    if (!window.confirm(t('parents.confirmDeleteProfile', { name }))) return
    await deleteProfilePhotos(id)
    actions.removeProfile(id)
  }

  const removeAllPhotos = async () => {
    if (!window.confirm(t('parents.confirmDeletePhotos'))) return
    await deleteAllPhotos()
    actions.clearPhotoCounts()
  }

  return (
    <main className="screen parents">
      <TopBar back={back} title={t('parents.title')} />

      <section className="card stack">
        <h3>{t('parents.lang')}</h3>
        <div className="row">
          {LANGS.map((l) => (
            <button key={l} className="chip" aria-pressed={app.lang === l} onClick={() => actions.setLang(l)}>
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </section>

      <section className="card stack">
        <h3>{t('parents.profiles')}</h3>
        {app.profiles.map((p) => (
          <div key={p.id} className="profile-row">
            <select
              className="avatar-select"
              value={p.avatar}
              onChange={(e) => actions.editProfile(p.id, { avatar: e.target.value })}
              aria-label="avatar"
            >
              {AVATARS.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
            <label className="field">
              <span>{t('parents.name')}</span>
              <input
                value={p.name}
                onChange={(e) => actions.editProfile(p.id, { name: e.target.value.slice(0, 24) })}
                onBlur={(e) => !e.target.value.trim() && actions.editProfile(p.id, { name: '?' })}
              />
            </label>
            <label className="field">
              <span>{t('parents.age')}</span>
              <select value={p.age} onChange={(e) => actions.editProfile(p.id, { age: Number(e.target.value) })}>
                {AGES.map((a) => (
                  <option key={a} value={a}>
                    {a === 13 ? '13+' : a}
                  </option>
                ))}
              </select>
            </label>
            <label className="toggle">
              <input type="checkbox" checked={p.autoRead} onChange={(e) => actions.editProfile(p.id, { autoRead: e.target.checked })} />
              <span>{t('parents.autoRead')}</span>
            </label>
            <button className="btn soft danger-text" onClick={() => removeProfile(p.id, p.name)}>
              🗑️ {t('parents.deleteProfile')}
            </button>
          </div>
        ))}
        <div className="row">
          <Link to="/welcome" className="btn soft">
            ＋ {t('parents.addProfile')}
          </Link>
          <button className="btn soft danger-text" onClick={removeAllPhotos}>
            🗑️ {t('parents.deletePhotos')}
          </button>
        </div>
      </section>

      <section className="card stack">
        <h3>🔒 {t('parents.privacyTitle')}</h3>
        <p>{t('parents.privacy')}</p>
        <h3>📲 {t('parents.installTitle')}</h3>
        <p>{t('parents.install')}</p>
        <h3>💡 {t('parents.tipsTitle')}</h3>
        <p>{t('parents.tips')}</p>
      </section>
    </main>
  )
}
