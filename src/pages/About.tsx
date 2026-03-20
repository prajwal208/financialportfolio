import aboutHeroImg from '../assets/financial.jpg'
import teamImg from '../assets/home-team.jpg'

function Avatar({ initials, variant }: { initials: string; variant: number }) {
  const backgrounds = [
    'linear-gradient(135deg, rgba(11,77,179,0.95), rgba(56,189,248,0.75))',
    'linear-gradient(135deg, rgba(56,189,248,0.95), rgba(11,77,179,0.65))',
    'linear-gradient(135deg, rgba(11,77,179,0.9), rgba(99,102,241,0.6))',
    'linear-gradient(135deg, rgba(56,189,248,0.95), rgba(16,185,129,0.6))',
  ]

  return (
    <div
      className="avatar"
      aria-hidden="true"
      style={{
        background: backgrounds[variant % backgrounds.length],
      }}
    >
      {initials}
    </div>
  )
}

export default function About() {
  const team = [
    { name: 'Sana Patel', role: 'Investment Strategist', initials: 'SP', v: 0 },
    { name: 'Rahul Mehta', role: 'Wealth Advisor', initials: 'RM', v: 1 },
    { name: 'Priya Verma', role: 'Tax Consultant', initials: 'PV', v: 2 },
    { name: 'Arjun Rao', role: 'Retirement Planner', initials: 'AR', v: 3 },
  ]

  return (
    <div className="pageEnter">
      <main>
        <section className="section aboutSection">
          <div className="container">
            <div className="aboutStoryGrid">
              <div className="aboutStoryCopy">
                <div className="heroKicker">SMART FINANCIAL PLANNING</div>
                <h1 className="sectionTitle" style={{ fontSize: 34 }}>
                  Designed For Families Who Value Financial Security And Confidence
                </h1>
                <p className="sectionSubtitle">
                  We help families and businesses achieve lasting financial stability through
                  smart planning and disciplined strategies. Our approach blends long-term
                  vision with practical solutions to protect your assets and grow your wealth
                  with confidence. From investment planning to future-ready strategies, we
                  simplify complex financial decisions so you can focus on what matters most.
                </p>

                <div className="aboutStoryBulletGrid" aria-label="Our solutions">
                  <ul className="checkList aboutStoryCheckList">
                    <li>Personalized Financial Advisory Services</li>
                    <li>Investment & Portfolio Management</li>
                    <li>Wealth Growth & Risk Protection Strategies</li>
                  </ul>
                  <ul className="checkList aboutStoryCheckList">
                    <li>Retirement & Future Planning Solutions</li>
                    <li>Business & Asset Optimization</li>
                    <li>Long-Term Wealth Preservation</li>
                  </ul>
                </div>
              </div>

              <div className="aboutStoryMedia" aria-hidden="true">
                <img
                  src={aboutHeroImg}
                  className="aboutStoryMediaImg"
                  alt=""
                />
                <div className="aboutStoryMediaOverlay" />
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="sectionHeader">
                <div>
                  <h2 className="sectionTitle" style={{ fontSize: 28 }}>
                    Our Approach
                  </h2>
                  <p className="sectionSubtitle">
                    A disciplined process built to help you protect, grow, and plan with clarity.
                  </p>
                </div>
              </div>

              <div className="aboutValueGrid">
                <div className="card aboutValueCard">
                  <div className="cardTitle">
                    <span className="iconWrap" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
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
                      </svg>
                    </span>
                    Personalized advisory
                  </div>
                  <p className="cardText">
                    Clear guidance based on your goals, timeline, and risk comfort—so decisions feel confident.
                  </p>
                </div>

                <div className="card aboutValueCard">
                  <div className="cardTitle">
                    <span className="iconWrap" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
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
                    Investment & portfolio management
                  </div>
                  <p className="cardText">
                    Disciplined oversight and structured rebalancing to keep your plan aligned over time.
                  </p>
                </div>

                <div className="card aboutValueCard">
                  <div className="cardTitle">
                    <span className="iconWrap" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
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
                    </span>
                    Wealth growth & risk protection
                  </div>
                  <p className="cardText">
                    Strategies designed to protect what matters and support long-term financial confidence.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="sectionHeader">
                <div>
                  <h2 className="sectionTitle" style={{ fontSize: 28 }}>
                    Meet the Team
                  </h2>
                  <p className="sectionSubtitle">Experienced advisors with a premium approach.</p>
                </div>
              </div>

              <div className="teamGrid">
                {team.map((m) => (
                  <div key={m.name} className="card teamCard">
                    <div className="teamCardMedia" aria-hidden="true">
                      <img src={teamImg} className="teamCardImg" alt="" />
                      <div className="teamCardMediaOverlay" />
                      <div className="teamAvatarWrap">
                        <Avatar initials={m.initials} variant={m.v} />
                      </div>
                    </div>
                    <div className="teamCardBody">
                      <div className="teamName">{m.name}</div>
                      <div className="teamRole">{m.role}</div>
                      <p className="cardText">
                        Focused on clear strategy, practical guidance, and long-term planning.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="sectionHeader">
                <div>
                  <h2 className="sectionTitle" style={{ fontSize: 28 }}>
                    Achievements & Milestones
                  </h2>
                  <p className="sectionSubtitle">
                    A few highlights that reflect our commitment to clients.
                  </p>
                </div>
              </div>

              <div className="milestones">
                <div className="card">
                  <div className="milestoneValue">10+ Years</div>
                  <p className="cardText">Experience across investment and planning advisory.</p>
                </div>
                <div className="card">
                  <div className="milestoneValue">1,200+ Clients</div>
                  <p className="cardText">Long-term relationships built on clarity and trust.</p>
                </div>
                <div className="card">
                  <div className="milestoneValue">Premium Process</div>
                  <p className="cardText">
                    A structured framework for recommendations and ongoing review.
                  </p>
                </div>
                <div className="card">
                  <div className="milestoneValue">High Satisfaction</div>
                  <p className="cardText">
                    Consistent feedback focused on responsiveness and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

