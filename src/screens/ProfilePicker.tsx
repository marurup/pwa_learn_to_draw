import { Link, useNavigate } from 'react-router-dom'
import { useT } from '../i18n'
import { actions, useAppState } from '../state/store'

export function ProfilePicker() {
  const t = useT()
  const navigate = useNavigate()
  const { profiles } = useAppState()

  return (
    <main className="screen center">
      <h1>{t('who.title')}</h1>
      <div className="profile-grid">
        {profiles.map((p) => (
          <button
            key={p.id}
            className="choice profile"
            onClick={() => {
              actions.setActive(p.id)
              navigate('/home')
            }}
          >
            <span className="avatar big">{p.avatar}</span>
            {p.name}
          </button>
        ))}
        <Link to="/welcome" className="choice profile new">
          <span className="avatar big add">＋</span>
          {t('who.new')}
        </Link>
      </div>
    </main>
  )
}
