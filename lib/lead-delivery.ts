// Server-only lead delivery: Resend email + optional JSON webhook.
// Imported by app/actions.ts; never import this from a client component.

import { SITE } from '@/lib/site'

export type LeadType = 'Quote' | 'Realtor partner'

export type Lead = {
  leadType: LeadType
  firstName: string
  lastName: string
  email: string
  phone: string
  loanType: string
  program: string
  loanAmount: string
  creditHistory: string
  brokerage: string
  areasServed: string
  comments: string
  marketingConsent: boolean
  formName: string
  pagePath: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  landing_path: string
  referrer: string
  submittedAt: string
}

type ChannelResult = { channel: string; ok: boolean; error?: string }

const TIMEOUT_MS = 10_000

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function leadRows(lead: Lead): [string, string][] {
  const rows: [string, string][] = [
    ['Lead type', lead.leadType],
    ['Name', `${lead.firstName} ${lead.lastName}`],
    ['Email', lead.email],
    ['Phone', lead.phone],
  ]
  if (lead.leadType === 'Realtor partner') {
    rows.push(['Brokerage', lead.brokerage], ['Areas served', lead.areasServed])
  } else {
    rows.push(
      ['Loan type', lead.loanType],
      ['Program', lead.program],
      ['Loan amount', lead.loanAmount],
      ['Credit', lead.creditHistory]
    )
  }
  rows.push(
    ['Comments', lead.comments],
    ['Marketing consent (TCPA)', lead.marketingConsent ? 'Yes' : 'No'],
    ['Form', lead.formName],
    ['Submitted from', lead.pagePath],
    ['Landing page', lead.landing_path],
    ['Referrer', lead.referrer],
    ['utm_source', lead.utm_source],
    ['utm_medium', lead.utm_medium],
    ['utm_campaign', lead.utm_campaign],
    ['utm_content', lead.utm_content],
    ['Submitted at', lead.submittedAt]
  )
  return rows.filter(([, v]) => v !== '')
}

function buildEmail(lead: Lead) {
  const rows = leadRows(lead)
  const name = `${lead.firstName} ${lead.lastName}`.replace(/[\r\n]+/g, ' ')
  const detail =
    lead.leadType === 'Realtor partner' ? lead.brokerage : [lead.loanType, lead.program].filter(Boolean).join(' / ')
  const subject = `New ${lead.leadType} lead: ${name}${detail ? ` (${detail})` : ''}`
    .replace(/[\r\n]+/g, ' ')
    .slice(0, 200)

  const html = `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#0E1B2A">
<h2 style="color:#0A2540;margin:0 0 12px">New ${escapeHtml(lead.leadType)} lead</h2>
<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="border-bottom:1px solid #E4E8ED;color:#5A6B7B;vertical-align:top;white-space:nowrap"><strong>${escapeHtml(
        k
      )}</strong></td><td style="border-bottom:1px solid #E4E8ED;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
  )
  .join('\n')}
</table>
<p style="font-size:12px;color:#5A6B7B;margin-top:16px">Sent from ${escapeHtml(SITE.url)}</p>
</body></html>`

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  return { subject, html, text }
}

async function sendResend(lead: Lead): Promise<ChannelResult> {
  const apiKey = process.env.RESEND_API_KEY
  const to = (process.env.LEAD_NOTIFY_EMAIL ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const from = process.env.LEAD_FROM_EMAIL?.trim()

  if (!apiKey || to.length === 0 || !from) {
    return {
      channel: 'resend',
      ok: false,
      error: 'Resend is partially configured: RESEND_API_KEY, LEAD_NOTIFY_EMAIL and LEAD_FROM_EMAIL are all required.',
    }
  }

  const { subject, html, text } = buildEmail(lead)
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, subject, html, text, reply_to: lead.email }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: 'no-store',
    })
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      return { channel: 'resend', ok: false, error: `HTTP ${res.status}: ${body.slice(0, 500)}` }
    }
    return { channel: 'resend', ok: true }
  } catch (err) {
    return { channel: 'resend', ok: false, error: String(err) }
  }
}

async function sendWebhook(lead: Lead, url: string): Promise<ChannelResult> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: 'no-store',
    })
    if (!res.ok) return { channel: 'webhook', ok: false, error: `HTTP ${res.status}` }
    return { channel: 'webhook', ok: true }
  } catch (err) {
    return { channel: 'webhook', ok: false, error: String(err) }
  }
}

/**
 * Sends the lead to every configured channel. A channel counts as configured
 * if any of its env vars is set (a half-configured channel fails loudly rather
 * than being silently skipped). Returns delivered=true only if at least one
 * channel accepted the lead.
 */
export async function deliverLead(lead: Lead): Promise<{ delivered: boolean; results: ChannelResult[] }> {
  const jobs: Promise<ChannelResult>[] = []

  const resendConfigured = Boolean(
    process.env.RESEND_API_KEY || process.env.LEAD_NOTIFY_EMAIL || process.env.LEAD_FROM_EMAIL
  )
  if (resendConfigured) jobs.push(sendResend(lead))

  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim()
  if (webhookUrl) jobs.push(sendWebhook(lead, webhookUrl))

  if (jobs.length === 0) {
    console.error('[lead] No delivery channel configured (set RESEND_API_KEY + LEAD_NOTIFY_EMAIL + LEAD_FROM_EMAIL and/or LEAD_WEBHOOK_URL). Lead NOT delivered.')
    return { delivered: false, results: [] }
  }

  const results = await Promise.all(jobs)
  for (const r of results) {
    if (!r.ok) console.error(`[lead] ${r.channel} delivery failed: ${r.error}`)
  }
  return { delivered: results.some((r) => r.ok), results }
}
