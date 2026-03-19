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
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h1 className="sectionTitle" style={{ fontSize: 34 }}>
                  About Us
                </h1>
                <p className="sectionSubtitle">
                  We are a modern financial advisory focused on premium service, clear strategy,
                  and long-term client outcomes.
                </p>
              </div>
            </div>

            <div className="twoCol">
              <div className="card">
                <div className="cardTitle">Our Mission</div>
                <p className="cardText">
                  Help individuals and businesses make confident financial decisions with
                  transparent guidance across investments, taxes, and retirement planning.
                </p>
                <ul className="list">
                  <li>Client-first planning and clear communication</li>
                  <li>Risk-aware strategies designed for stability</li>
                  <li>Premium support from start to ongoing review</li>
                </ul>
              </div>

              <div className="card">
                <div className="cardTitle">Our Vision</div>
                <p className="cardText">
                  Build a trusted financial partner experience—where every recommendation feels
                  understandable, measurable, and aligned with your future.
                </p>
                <ul className="list">
                  <li>Better financial literacy through simplicity</li>
                  <li>Consistent portfolio and planning frameworks</li>
                  <li>Security, reliability, and responsible advisory</li>
                </ul>
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
                  <div key={m.name} className="card">
                    <div className="teamMemberHeader">
                      <Avatar initials={m.initials} variant={m.v} />
                      <div>
                        <div className="teamName">{m.name}</div>
                        <div className="teamRole">{m.role}</div>
                      </div>
                    </div>
                    <p className="cardText">
                      Focused on clear strategy, practical guidance, and long-term planning.
                    </p>
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

