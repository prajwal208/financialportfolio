import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = useMemo(
    () => () => {
      setMobileOpen(false)
    },
    [],
  )

  return (
    <header className="siteHeader" aria-label="Primary header">
      <div className="container headerInner">
        <NavLink to="/" className="brand" onClick={handleNavClick}>
          <div className="brandMark" aria-hidden="true" />
          <div className="brandName">BluePeak Finance</div>
        </NavLink>

        <div className="navWrap" aria-label="Navigation">
          <nav className="navLinks" aria-label="Primary navigation">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `navLink ${isActive ? 'navLinkActive' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="navToggleBtn hamburger"
            aria-label="Open menu"
            aria-controls="mobileNavPanel"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden="true">☰</span>
            <span className="srOnly">Menu</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="container mobilePanel" id="mobileNavPanel">
          <div className="mobileLinks">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `navLink ${isActive ? 'navLinkActive' : ''}`
                }
                onClick={handleNavClick}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

