import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import EmiCalculator from '../components/EmiCalculator'

import heroImg from '../assets/home-hero.jpg'
import benefitsImg from '../assets/tab-aside-image-alt.jpg'
import productImg1 from '../assets/financial.jpg'
import productImg2 from '../assets/financial2.jpg'
import productImg3 from '../assets/financial3.jpg'

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
  const featuredProducts = [
    {
      title: 'Mutual Funds',
      description: 'Diversified portfolios designed for clarity, discipline, and long-term growth.',
      icon: <IconChart />,
      image: productImg1,
    },
    {
      title: 'SIPs & Systematic Investing',
      description: 'A disciplined way to build wealth over time—aligned to your goals and risk comfort.',
      icon: <IconClock />,
      image: productImg2,
    },
    {
      title: 'Insurance Advisory',
      description: 'Coverage strategies that protect your goals and help manage uncertainty with confidence.',
      icon: <IconShield />,
      image: productImg3,
    },
    {
      title: 'Wealth Management',
      description: 'Ongoing portfolio oversight and smart rebalancing for sustained financial outcomes.',
      icon: <IconChartUp />,
      image: productImg1,
    },
    {
      title: 'Tax Advisory',
      description:
        'Practical planning so you can keep more, stay compliant, and invest with confidence.',
      icon: <IconTax />,
      image: productImg2,
    },
    {
      title: 'Retirement Planning',
      description: 'Income projections and plan optimization for long-term financial security.',
      icon: <IconRetirement />,
      image: productImg3,
    },
  ] as const

  const testimonials = [
    {
      quote:
        'The team helped me build a clear plan for my investments. Everything felt transparent and well-structured.',
      name: 'Aarav Mehta',
      role: 'Investor',
      initials: 'AM',
      rating: 5,
    },
    {
      quote:
        'Professional, fast, and highly responsive. Their wealth management advice improved how we think about risk.',
      name: 'Neha Sharma',
      role: 'Business Owner',
      initials: 'NS',
      rating: 5,
    },
    {
      quote:
        'Tax season was stress-free. The guidance was practical, easy to follow, and genuinely helpful.',
      name: 'Karan Joshi',
      role: 'Freelancer',
      initials: 'KJ',
      rating: 5,
    },
  ]

  const stats = [
    {
      value: 1200,
      decimals: 0,
      suffix: '+',
      label: 'Satisfied Clients',
      icon: <IconUsers />,
      variant: 'a',
    },
    {
      value: 2.4,
      decimals: 1,
      suffix: 'B+',
      label: 'Investments Managed',
      icon: <IconChartUp />,
      variant: 'b',
    },
    {
      value: 12,
      decimals: 0,
      suffix: '+',
      label: 'Years Experience',
      icon: <IconClock />,
      variant: 'c',
    },
    {
      value: 4.9,
      decimals: 1,
      suffix: '/5',
      label: 'Client Satisfaction',
      icon: <IconStar />,
      variant: 'd',
    },
  ] as const

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
      icon: <IconChart />,
      variant: 'a',
    },
    {
      title: 'Build & optimize',
      description:
        'We help you refine investments, account for taxes, and stay aligned with changing priorities.',
      icon: <IconShield />,
      variant: 'b',
    },
    {
      title: 'Review with confidence',
      description:
        'Ongoing check-ins ensure your plan remains relevant—and your decisions feel supported.',
      icon: <IconRetirement />,
      variant: 'c',
    },
  ]

  return (
    <div className="pageEnter">
      <main>
        <section className="finHero" aria-label="Hero">
          <div className="finHeroBg" aria-hidden="true">
            <img src={heroImg} className="finHeroBgImg" alt="" />
            <div className="finHeroBgOverlay" />
          </div>

          <div className="container finHeroInner">
            <div className="finHeroCopy">
              <h1 className="finHeroTitle">
                Your Trusted Financial Partner
              </h1>
              <p className="finHeroSub">
                Unlock your financial potential with competitive rates, fast approvals, and
                personalized lending solutions tailored to your needs.
              </p>

              <div className="finHeroActions">
                <Link className="btn btnExplore" to="/services" aria-label="Explore more">
                  Explore More
                  <span className="finHeroArrowCircle" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>

                
              </div>

              
            </div>

            <div aria-hidden="true" />
          </div>
        </section>

        <section className="section finSection" aria-label="Featured financial products">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Featured financial products</h2>
                <p className="sectionSubtitle">
                  Clean guidance across mutual funds, systematic investing, insurance advisory, and
                  disciplined wealth management.
                </p>
              </div>
            </div>

            <div className="productGrid" aria-label="Product cards">
              {featuredProducts.map((p) => (
                <div
                  key={p.title}
                  className="productCard card"
                  role="article"
                  aria-label={p.title}
                >
                  <div className="productImgWrap" aria-hidden="true">
                    <img src={p.image} className="productImg" alt="" />
                  </div>

                  <div className="productCardBody">
                    <div className="productCardTitle">
                      <span className="productIconWrap" aria-hidden="true">
                        {p.icon}
                      </span>
                      {p.title}
                    </div>
                    <p className="productCardText">{p.description}</p>

                    <div className="productLinkRow">
                      <Link className="productLink" to="/services">
                        Explore details
                        <IconArrowRight />
                      </Link>
                    </div>
                  </div>
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
                    <div
                      className={`stepIconWrap stepIconWrap--${s.variant}`}
                      aria-hidden="true"
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="stepTitle">{s.title}</div>
                      <div className="stepIndex" aria-hidden="true">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <p className="cardText" style={{ marginTop: 10 }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section finSection finBenefits" aria-label="Why choose us">
          <div className="container">
            <div className="finBenefitsGrid">
              <div className="benefitMedia" aria-hidden="true">
                <img src={benefitsImg} className="benefitImg" alt="" />
                <div className="benefitOverlay" />
                <div className="benefitBadge">Long-term clarity, built-in</div>
              </div>

              <div>
                <h2 className="sectionTitle">Why clients choose BluePeak</h2>
                <p className="sectionSubtitle">
                  Premium guidance that respects your goals, reduces complexity, and keeps your
                  strategy moving with confidence.
                </p>

                <ul className="checkList" aria-label="What you can expect">
                  <li>Transparent recommendations in plain language</li>
                  <li>Tax-aware planning designed around real-life constraints</li>
                  <li>Disciplined reviews so you stay aligned as priorities change</li>
                </ul>

                <div className="benefitCtaRow">
                  <Link className="btn btnPrimary" to="/contact">
                    Schedule a Consultation <IconArrowRight />
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
                <div key={t.name} className="card testimonialCard">
                  <div className="testimonialTop">
                    <div className="testimonialStars" aria-label={`Rating ${t.rating} out of 5`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="testimonialStar" aria-hidden="true">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="testimonialAvatar" aria-hidden="true">
                      {t.initials}
                    </div>
                  </div>

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
                  <div
                    className={`statIconWrap statIconWrap--${s.variant}`}
                    aria-hidden="true"
                  >
                    {s.icon}
                  </div>
                  <div className="statValue">
                    <AnimatedCounter
                      value={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      durationMs={1000}
                    />
                  </div>
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

