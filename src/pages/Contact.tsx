import { type FormEvent, useMemo, useState } from 'react'

import contactHeroImg from '../assets/financial3.jpg'
import contactAsideImg from '../assets/tab-aside-image-alt.jpg'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
    | null
  >(null)

  const [submitting, setSubmitting] = useState(false)

  const contactDetails = useMemo(
    () => ({
      phone: '+1 (555) 012-3456',
      email: 'hello@financeflow.com',
      address: '221B Financial Avenue, London, UK',
      mapQuery: 'London, UK',
    }),
    [],
  )

  function validate(next: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (!next.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!next.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!isValidEmail(next.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!next.message.trim()) nextErrors.message = 'Please enter your message.'
    else if (next.message.trim().length < 10)
      nextErrors.message = 'Message should be at least 10 characters.'
    return nextErrors
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)

    const nextErrors = validate(form)
    setErrors(nextErrors)
    const hasErrors = Object.keys(nextErrors).length > 0
    if (hasErrors) return

    setSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 700))
      setStatus({
        type: 'success',
        message:
          'Thanks for contacting us. Your message has been received—we will get back to you soon.',
      })
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again in a moment.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="pageEnter">
      <main>
        <section className="finSubHero" aria-label="Contact hero">
          <div className="finSubHeroBg" aria-hidden="true">
            <img src={contactHeroImg} className="finSubHeroImg" alt="" />
            <div className="finSubHeroOverlay" />
          </div>
          <div className="container finSubHeroInner">
            <div className="finSubHeroContent">
              <div className="finHeroKicker">Get in touch</div>
              <h1 className="finHeroTitle finSubHeroTitle" style={{ margin: 0 }}>
                Contact BluePeak Finance
              </h1>
              <p className="finHeroSub finSubHeroSub" style={{ marginBottom: 0 }}>
                Send a message and our team will reach out with next steps—usually within
                one business day.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h1 className="sectionTitle" style={{ fontSize: 34 }}>
                  Contact Us
                </h1>
                <p className="sectionSubtitle">
                  Send a message and our team will reach out with next steps.
                </p>
              </div>
            </div>

            <div className="contactGrid">
              <div className="card" style={{ padding: 18 }}>
                <form className="form" onSubmit={onSubmit} aria-label="Contact form">
                  <div className="field">
                    <div className="label">Name</div>
                    <input
                      className="input"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                    {errors.name ? <div className="errorText">{errors.name}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Email</div>
                    <input
                      className="input"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                    {errors.email ? <div className="errorText">{errors.email}</div> : null}
                  </div>

                  <div className="field">
                    <div className="label">Message</div>
                    <textarea
                      className="textarea"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Tell us what you need help with..."
                    />
                    {errors.message ? (
                      <div className="errorText">{errors.message}</div>
                    ) : null}
                  </div>

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                    <button className="btn btnPrimary" type="submit" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <a className="btn btnSecondary" href={`mailto:${contactDetails.email}`}>
                      Email Us
                    </a>
                  </div>

                  {status ? (
                    <div
                      className={status.type === 'success' ? 'successText' : 'errorText'}
                      role="status"
                      aria-live="polite"
                      style={{ marginTop: 12 }}
                    >
                      {status.message}
                    </div>
                  ) : null}
                </form>
              </div>

              <div className="contactRight">
                <div className="contactAsideMedia" aria-hidden="true">
                  <img src={contactAsideImg} className="contactAsideImg" alt="" />
                  <div className="contactAsideOverlay" />
                </div>

                <div style={{ display: 'grid', gap: 14 }}>
                <div className="contactItem">
                  <div className="contactLabel">Phone</div>
                  <div className="contactValue">
                    <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
                  </div>
                </div>
                <div className="contactItem">
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </div>
                </div>
                <div className="contactItem">
                  <div className="contactLabel">Address</div>
                  <div className="contactValue">{contactDetails.address}</div>
                </div>

                <div className="mapFrameWrap" aria-label="Location map">
                  <iframe
                    className="mapFrame"
                    loading="lazy"
                    title="Company location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      contactDetails.mapQuery,
                    )}&output=embed`}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

