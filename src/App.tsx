import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

import './portfolio.css'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.card, .miniFeature, .logoPill, .stepCard, .ctaCard, .emiWrap, .contactItem, .mapFrameWrap, .sectionHeader, .heroCard, .heroGrid, .statsGrid, .testimonialsGrid',
      ),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('isVisible')
          }
        }
      },
      { threshold: 0.14 },
    )

    targets.forEach((el, i) => {
      el.classList.add('revealItem')
      // Stagger animations so the page doesn't feel like it "pops" all at once.
      const delayMs = Math.min(600, i * 90)
      el.style.setProperty('--reveal-delay', `${delayMs}ms`)
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}
