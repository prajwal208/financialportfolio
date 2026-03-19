import { NavLink } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="siteFooter" aria-label="Footer">
      <div className="container footerInner">
        <div>
          <div className="brand" style={{ gap: 10 }}>
            <div className="brandMark" aria-hidden="true" />
            <div className="brandName">BluePeak Finance</div>
          </div>
          <div style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750 }}>
            © {new Date().getFullYear()} BluePeak Finance. All rights reserved.
          </div>
          <div style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750 }}>
            Premium advisory for investments, taxes, and retirement planning.
          </div>
        </div>

        <div className="footerCols" aria-label="Footer columns">
          <div className="footerCol">
            <div className="footerHeading">Quick Links</div>
            <div className="footerLinkList">
              <NavLink to="/" className="footerLinkItem">
                Home
              </NavLink>
              <NavLink to="/services" className="footerLinkItem">
                Services
              </NavLink>
              <NavLink to="/about" className="footerLinkItem">
                About Us
              </NavLink>
              <NavLink to="/contact" className="footerLinkItem">
                Contact
              </NavLink>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerHeading">Services</div>
            <div className="footerLinkList">
              <NavLink to="/services" className="footerLinkItem">
                Investment Planning
              </NavLink>
              <NavLink to="/services" className="footerLinkItem">
                Wealth Management
              </NavLink>
              <NavLink to="/services" className="footerLinkItem">
                Tax Consulting
              </NavLink>
              <NavLink to="/services" className="footerLinkItem">
                Retirement Planning
              </NavLink>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerHeading">Contact</div>
            <div className="footerContactText">
              <div style={{ marginTop: 8 }}>
                Address: 221B Financial Avenue, London, UK
              </div>
            </div>

            <div className="socialRow" aria-label="Social links">
              <a className="socialIconBtn" href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M16 8.5l3.8-4.5h-2.2L14.4 7H13l-1.6-3H7.2l3 5.3L7 20h2.2l2.8-5.3L15 20h4l-3-5.2z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="socialIconBtn" href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 9v13M6 6.5a1.5 1.5 0 1 0 0-.01z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 22V12a3 3 0 0 1 6 0v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="socialIconBtn" href="#" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M10 15l6-3-6-3v6z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12c0 7-1 9-9 9s-9-2-9-9 1-9 9-9 9 2 9 9z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

