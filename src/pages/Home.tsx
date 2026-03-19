import { Link } from 'react-router-dom'
import EmiCalculator from '../components/EmiCalculator'

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

function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 21v-2a4 4 0 0 0-3-3.87"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 11a4 4 0 0 0-7.5-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconChartUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3v18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 13l3-3 4 4 5-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l3.2 6.5 7.2 1.1-5.2 5.1 1.2 7.2L12 18.8 4.6 21l1.2-7.2L0.6 9.6l7.2-1.1L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Home() {
  const keyServices = [
    {
      title: 'Investment Planning',
      description:
        'Build a tailored strategy that matches your goals, timeline, and risk comfort.',
      icon: <IconChart />,
    },
    {
      title: 'Wealth Management',
      description:
        'Professional portfolio oversight with a focus on diversification and growth.',
      icon: <IconShield />,
    },
    {
      title: 'Tax Consulting',
      description:
        'Clear guidance to help you stay compliant and optimize your financial outcomes.',
      icon: <IconTax />,
    },
    {
      title: 'Retirement Planning',
      description:
        'Plan confidently with retirement projections, income planning, and smarter choices.',
      icon: <IconRetirement />,
    },
  ]

  const testimonials = [
    {
      quote:
        'The team helped me build a clear plan for my investments. Everything felt transparent and well-structured.',
      name: 'Aarav Mehta',
      role: 'Investor',
    },
    {
      quote:
        'Professional, fast, and highly responsive. Their wealth management advice improved how we think about risk.',
      name: 'Neha Sharma',
      role: 'Business Owner',
    },
    {
      quote:
        'Tax season was stress-free. The guidance was practical, easy to follow, and genuinely helpful.',
      name: 'Karan Joshi',
      role: 'Freelancer',
    },
  ]

  const stats = [
    { value: '1,200+', label: 'Clients Served', icon: <IconUsers /> },
    {
      value: '$2.4B+',
      label: 'Investments Managed',
      icon: <IconChartUp />,
    },
    { value: '10+ Years', label: 'Industry Experience', icon: <IconClock /> },
    { value: '4.9/5', label: 'Client Satisfaction', icon: <IconStar /> },
  ]

  const clientLogos = [
    'NorthBridge Capital',
    'BluePeak Investments',
    'Aurum Wealth Co.',
    'Cobalt Financial',
    'Atlas Advisory Group',
    'Summit Tax Partners',
  ]

  const steps = [
    {
      title: 'Get a clear plan',
      description:
        'We assess your goals and risk comfort, then outline a strategy that’s easy to understand.',
    },
    {
      title: 'Build & optimize',
      description:
        'We help you refine investments, account for taxes, and stay aligned with changing priorities.',
    },
    {
      title: 'Review with confidence',
      description:
        'Ongoing check-ins ensure your plan remains relevant—and your decisions feel supported.',
    },
  ]

  return (
    <div className="pageEnter">
      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="heroKicker">Premium fintech services</div>
              <h1 className="heroTitle">Smart Financial Solutions for Your Future</h1>
              <p className="heroSub">
                Trusted advisory for investment planning, wealth management, tax consulting, and
                retirement planning—designed to feel simple, clear, and professional.
              </p>

              <div className="heroActions">
                <Link className="btn btnPrimary" to="/services">
                  Get Started <IconArrowRight />
                </Link>
                <Link className="btn btnSecondary" to="/contact">
                  Contact Us <IconArrowRight />
                </Link>
              </div>
            </div>

            <div className="heroCard" aria-label="Highlights">
              <div className="heroCardGrid">
                <div className="miniFeature">
                  <div className="miniFeatureTitle">Transparent Strategy</div>
                  <p className="miniFeatureText">Clear recommendations with no confusing jargon.</p>
                </div>
                <div className="miniFeature">
                  <div className="miniFeatureTitle">Risk-Aware Planning</div>
                  <p className="miniFeatureText">Designed around your comfort and long-term goals.</p>
                </div>
                <div className="miniFeature">
                  <div className="miniFeatureTitle">Ongoing Support</div>
                  <p className="miniFeatureText">Regular check-ins to keep you on track.</p>
                </div>
                <div className="miniFeature">
                  <div className="miniFeatureTitle">Secure & Reliable</div>
                  <p className="miniFeatureText">Modern practices for confidentiality and trust.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Key services">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Key Financial Services</h2>
                <p className="sectionSubtitle">
                  Everything you need to build, protect, and grow your wealth—supported by
                  clear guidance and premium service.
                </p>
              </div>
            </div>

            <div className="grid4">
              {keyServices.map((s) => (
                <div key={s.title} className="card" role="article" aria-label={s.title}>
                  <div className="cardTitle">
                    <span className="iconWrap" aria-hidden="true">
                      {s.icon}
                    </span>
                    {s.title}
                  </div>
                  <p className="cardText">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="logosStrip" aria-label="Trusted by">
              <div className="logosLabel">Trusted by teams and individuals</div>
              <div className="logosRow">
                {clientLogos.map((l) => (
                  <div key={l} className="logoPill">
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="How it works">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">How it works</h2>
                <p className="sectionSubtitle">
                  A simple, structured process designed to build long-term trust and clarity.
                </p>
              </div>
            </div>

            <div className="stepsGrid">
              {steps.map((s, idx) => (
                <div key={s.title} className="card stepCard">
                  <div className="stepTop">
                    <div className="stepNumber">{idx + 1}</div>
                    <div className="stepTitle">{s.title}</div>
                  </div>
                  <p className="cardText" style={{ marginTop: 10 }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-label="Why choose us">
          <div className="container">
            <div className="twoCol">
              <div className="card">
                <div className="cardTitle">
                  <span className="iconWrap" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Why clients choose us
                </div>
                <p className="cardText">
                  Premium financial advisory with a focus on transparency, risk awareness,
                  and measurable next steps.
                </p>
                <ul className="list">
                  <li>Clear recommendations and transparent decision-making</li>
                  <li>Planning that accounts for taxes and real-world constraints</li>
                  <li>Ongoing reviews so your strategy stays aligned</li>
                </ul>
              </div>

              <div className="card">
                <div className="cardTitle">
                  <span className="iconWrap" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                  </span>
                  Built for long-term outcomes
                </div>
                <p className="cardText">
                  We help you set expectations, track progress, and make financial decisions
                  with confidence.
                </p>
                <div className="miniBullets">
                  <div className="miniBullet">
                    <div className="miniBulletTitle">Portfolio clarity</div>
                    <div className="miniBulletText">Understand what you own and why.</div>
                  </div>
                  <div className="miniBullet">
                    <div className="miniBulletTitle">Tax-aware planning</div>
                    <div className="miniBulletText">Reduce friction and surprises.</div>
                  </div>
                  <div className="miniBullet">
                    <div className="miniBulletTitle">Confidence reviews</div>
                    <div className="miniBulletText">Update your strategy as life changes.</div>
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <Link className="btn btnPrimary" to="/contact" style={{ width: '100%' }}>
                    Schedule a Consultation
                    <IconArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Testimonials">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Client Testimonials</h2>
                <p className="sectionSubtitle">Real feedback from clients who trust our process.</p>
              </div>
            </div>

            <div className="testimonialsGrid">
              {testimonials.map((t) => (
                <div key={t.name} className="card">
                  <p className="testimonialQuote">“{t.quote}”</p>
                  <div className="testimonialFooter">
                    <div className="testimonialName">{t.name}</div>
                    <div className="testimonialRole">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-label="Statistics">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Trusted Results</h2>
                <p className="sectionSubtitle">
                  Premium support backed by measurable outcomes and consistent client satisfaction.
                </p>
              </div>
            </div>

            <div className="statsGrid">
              {stats.map((s) => (
                <div key={s.label} className="card">
                  <div className="statIconWrap" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="statValue">{s.value}</div>
                  <p className="statLabel">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-label="EMI Calculator on Home">
          <div className="container">
            <EmiCalculator />
          </div>
        </section>

        <section className="section" aria-label="Final call to action">
          <div className="container">
            <div className="ctaCard">
              <div>
                <div className="ctaKicker">Start with clarity</div>
                <h2 className="ctaTitle">Let’s build your financial future</h2>
                <p className="ctaText">
                  Tell us what you’re aiming for—we’ll respond with a clear plan and next steps.
                </p>
              </div>
              <div className="ctaActions">
                <Link className="btn btnPrimary" to="/contact">
                  Contact Us
                  <IconArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

