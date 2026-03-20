import { Link } from 'react-router-dom'

import heroImg from '../assets/financial2.jpg'
import cardImg1 from '../assets/financial.jpg'
import cardImg2 from '../assets/financial2.jpg'
import cardImg3 from '../assets/financial3.jpg'

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
      title: 'Mutual Funds',
      description: 'A disciplined selection process designed to fit your risk profile.',
      icon: <IconChart />,
      image: cardImg1,
    },
    {
      title: 'SIPs (Systematic Investing)',
      description: 'Start small, invest consistently, and stay aligned with long-term goals.',
      icon: <IconClock />,
      image: cardImg2,
    },
    {
      title: 'Insurance Advisory',
      description: 'Coverage strategies that protect what you’ve built and reduce uncertainty.',
      icon: <IconShield />,
      image: cardImg3,
    },
    {
      title: 'Tax Advisory',
      description: 'Practical planning so you can keep more, stay compliant, and invest smarter.',
      icon: <IconTax />,
      image: cardImg1,
    },
    {
      title: 'Wealth Management',
      description: 'Portfolio oversight, rebalancing, and guidance built for sustained outcomes.',
      icon: <IconChartUp />,
      image: cardImg2,
    },
    {
      title: 'Retirement Planning',
      description: 'Income projections and plan optimization for what’s next in life.',
      icon: <IconRetirement />,
      image: cardImg3,
    },
  ] as const

  return (
    <div className="pageEnter">
      <main>
        <section className="finSubHero" aria-label="Financial products hero">
          <div className="finSubHeroBg" aria-hidden="true">
            <img src={heroImg} alt="" className="finSubHeroImg" />
            <div className="finSubHeroOverlay" />
          </div>

          <div className="container finSubHeroInner">
            <div className="finSubHeroContent">
              <div className="finHeroKicker">Financial products</div>
              <h1 className="finHeroTitle finSubHeroTitle">Explore offerings built for clarity</h1>
              <p className="finHeroSub finSubHeroSub">
                Clean, premium advisory across mutual funds, systematic investing, insurance advisory,
                taxes, and wealth management.
              </p>

              <div className="heroActions finHeroActions">
                <Link className="btn btnPrimary btnOnDark" to="/contact">
                  Book Consultation <IconArrowRight />
                </Link>
                <Link className="btn btnGhostOnDark" to="/">
                  View Home <IconArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section finSection">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Our services</h2>
                <p className="sectionSubtitle">
                  Each offering includes a disciplined process, transparent communication, and
                  ongoing guidance.
                </p>
              </div>
            </div>

            <div className="serviceGrid" aria-label="Service cards">
              {services.map((s) => (
                <div key={s.title} className="serviceCard card">
                  <div className="serviceImgWrap" aria-hidden="true">
                    <img src={s.image} className="serviceImg" alt="" />
                    <div className="serviceImgOverlay" />
                  </div>

                  <div className="serviceBody">
                    <div className="cardTitle">
                      <span className="productIconWrap" aria-hidden="true">
                        {s.icon}
                      </span>
                      {s.title}
                    </div>
                    <p className="cardText">{s.description}</p>

                    <div className="productLinkRow">
                      <Link className="productLink" to="/contact">
                        Talk to an Advisor <IconArrowRight />
                      </Link>
                    </div>
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

