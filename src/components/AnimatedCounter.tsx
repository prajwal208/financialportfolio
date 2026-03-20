import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  durationMs?: number
  className?: string
}

function formatNumber(value: number, decimals: number) {
  // Keep formatting stable across platforms.
  const fmt = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return fmt.format(value)
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  durationMs = 900,
  className,
}: Props) {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const rootRef = useRef<HTMLSpanElement | null>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(prefersReducedMotion)

  const target = useMemo(() => value, [value])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (prefersReducedMotion) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        io.disconnect()
        setHasStarted(true)

        const start = performance.now()
        const from = 0
        const to = target

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs)
          // Ease-out for a smoother feel.
          const eased = 1 - Math.pow(1 - t, 3)
          const next = from + (to - from) * eased
          setDisplayValue(next)

          if (t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target, durationMs, prefersReducedMotion])

  const shown = hasStarted ? (prefersReducedMotion ? target : displayValue) : 0

  return (
    <span ref={rootRef} className={className} aria-label={String(target)}>
      {prefix}
      {formatNumber(shown, decimals)}
      {suffix}
    </span>
  )
}

