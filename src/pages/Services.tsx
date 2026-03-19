import { Link } from 'react-router-dom'

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 19H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 15l3-3 3 2 4-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconTax() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7h10M9 7v-1a3 3 0 0 1 6 0v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 9h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 13h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconRetirement() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 8v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12a9 9 0 1 1-9-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 3v6h-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Services() {
  const services = [
    {
      title: 'Investment Planning',
      description:
        'A goal-based approach to help you invest with confidence and clarity.',
      icon: <IconChart />,
    },
    {
      title: 'Wealth Management',
      description:
        'Portfolio oversight and strategy refinement to support long-term growth.',
      icon: <IconShield />,
    },
    {
      title: 'Tax Consulting',
      description:
        'Actionable guidance to help you understand obligations and optimize outcomes.',
      icon: <IconTax />,
    },
    {
      title: 'Retirement Planning',
      description:
        'Retirement forecasts and income planning to help you prepare for what’s next.',
      icon: <IconRetirement />,
    },
  ]

  return (
    <div className="pageEnter">
      <main>
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h1 className="sectionTitle" style={{ fontSize: 34 }}>
                  Our Services
                </h1>
                <p className="sectionSubtitle">
                  Clean, premium advisory designed to keep you informed and in control.
                </p>
              </div>

              <div>
                <Link className="btn btnPrimary" to="/contact">
                  Request a Consultation <IconArrowRight />
                </Link>
              </div>
            </div>

            <div className="servicesGrid">
              {services.map((s) => (
                <div key={s.title} className="card">
                  <div className="cardTitle">
                    <span className="iconWrap" aria-hidden="true">
                      {s.icon}
                    </span>
                    {s.title}
                  </div>
                  <p className="cardText">{s.description}</p>
                  <div style={{ marginTop: 14 }}>
                    <Link className="btn btnSecondary" to="/contact" style={{ width: '100%' }}>
                      Talk to an Advisor <IconArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="card">
                <div className="cardTitle">
                  <span className="iconWrap" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  What you get
                </div>
                <p className="cardText">
                  Strategy-first recommendations, clear next steps, and ongoing support designed
                  to build long-term trust.
                </p>
                <ul className="list" style={{ margin: 0, paddingLeft: 18 }}>
                  <li>Clear documentation and transparent decisions</li>
                  <li>Responsive advisory and practical guidance</li>
                  <li>Premium planning aligned to your goals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

