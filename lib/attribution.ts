// Marketing attribution captured on the visitor's first page view and carried
// through the session, so a lead submitted three pages later still knows which
// ad / video / email brought them in. Browser-only helpers.

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const

export type Attribution = {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  landing_path: string
  referrer: string
}

export const EMPTY_ATTRIBUTION: Attribution = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_content: '',
  landing_path: '',
  referrer: '',
}

const STORAGE_KEY = 'tro_attribution'

function readStored(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return { ...EMPTY_ATTRIBUTION, ...parsed }
  } catch {
    return null
  }
}

/**
 * Returns the session's first-touch attribution, recording it from the current
 * page if this is the first page view of the session. Safe to call repeatedly.
 */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return EMPTY_ATTRIBUTION

  const stored = readStored()
  if (stored) return stored

  const params = new URLSearchParams(window.location.search)
  const first: Attribution = {
    ...EMPTY_ATTRIBUTION,
    landing_path: window.location.pathname + window.location.search,
    referrer: document.referrer || '',
  }
  for (const key of UTM_KEYS) first[key] = params.get(key)?.slice(0, 200) ?? ''

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(first))
  } catch {
    // Storage blocked (private mode, etc.) — still return this page's values.
  }
  return first
}
