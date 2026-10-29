'use client'

import { useEffect, useState } from 'react'
import { captureAttribution, EMPTY_ATTRIBUTION, type Attribution } from '@/lib/attribution'

/** Mounted once in the root layout: records first-touch attribution on the first page view. */
export function AttributionTracker() {
  useEffect(() => {
    captureAttribution()
  }, [])
  return null
}

/** Hidden inputs carrying the session's attribution into a lead form. */
export function AttributionFields() {
  const [attr, setAttr] = useState<Attribution>(EMPTY_ATTRIBUTION)

  useEffect(() => {
    setAttr(captureAttribution())
  }, [])

  return (
    <>
      {(Object.keys(attr) as (keyof Attribution)[]).map((key) => (
        <input key={key} type="hidden" name={key} value={attr[key]} readOnly />
      ))}
    </>
  )
}
