'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Scroll-reveal that degrades gracefully: content is fully visible by default,
// and the fade-up is layered on only when JS runs (see the `.js` gate in
// globals.css + the class added in layout.tsx). No-JS / crawlers see content.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('reveal-item', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
