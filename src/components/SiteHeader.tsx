import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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

          <Link
            to="/contact"
            className="btn btnPrimary desktopCta headerCtaBtn"
            aria-label="Book a consultant"
            onClick={handleNavClick}
          >
            Book Consultant
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <button
            type="button"
            className="navToggleBtn hamburger"
            aria-label="Open menu"
            aria-controls="mobileNavPanel"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
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

          <div style={{ marginTop: 12 }}>
            <Link
              to="/contact"
              className="btn btnPrimary"
              onClick={handleNavClick}
              style={{ width: '100%' }}
            >
              Book Consultant
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

