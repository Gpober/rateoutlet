'use server'

import { headers } from 'next/headers'
import { deliverLead, type Lead, type LeadType } from '@/lib/lead-delivery'
import { SITE } from '@/lib/site'

const LEAD_TYPES: LeadType[] = ['Quote', 'Realtor partner']
const LOAN_TYPES = ['Purchase', 'Refinance', 'HELOC']

export type QuoteFormData = {
  leadType?: LeadType
  firstName: string
  lastName: string
  email: string
  phone: string
  loanType?: string
  program?: string
  loanAmount?: string
  creditHistory?: string
  comments?: string
  brokerage?: string
  areasServed?: string
  marketing?: boolean
  honeypot?: string
  formName?: string
  pagePath?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  landing_path?: string
  referrer?: string
}

export type FormResult = { success: true } | { success: false; error: string }

// Server actions are callable directly, so treat every field as untrusted.
function clean(value: unknown, max = 300): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

const DELIVERY_ERROR = `Sorry — we couldn't send your request right now. Please call us at ${SITE.phone} and we'll help you directly.`

export async function submitQuote(data: QuoteFormData): Promise<FormResult> {
  // Honeypot check — bots fill this field, humans don't
  if (data?.honeypot) {
    return { success: true } // silently ignore
  }

  const leadType: LeadType = LEAD_TYPES.includes(data.leadType as LeadType)
    ? (data.leadType as LeadType)
    : 'Quote'

  const lead: Lead = {
    leadType,
    firstName: clean(data.firstName, 100),
    lastName: clean(data.lastName, 100),
    email: clean(data.email, 200),
    phone: clean(data.phone, 40),
    loanType: LOAN_TYPES.includes(clean(data.loanType)) ? clean(data.loanType) : '',
    program: clean(data.program, 100),
    loanAmount: clean(data.loanAmount, 40),
    creditHistory: clean(data.creditHistory, 60),
    brokerage: clean(data.brokerage, 200),
    areasServed: clean(data.areasServed, 500),
    comments: clean(data.comments, 2000),
    marketingConsent: data.marketing === true,
    formName: clean(data.formName, 60),
    pagePath: clean(data.pagePath, 500),
    utm_source: clean(data.utm_source, 200),
    utm_medium: clean(data.utm_medium, 200),
    utm_campaign: clean(data.utm_campaign, 200),
    utm_content: clean(data.utm_content, 200),
    landing_path: clean(data.landing_path, 500),
    referrer: clean(data.referrer, 500),
    submittedAt: new Date().toISOString(),
  }

  // Basic server-side validation
  if (!lead.firstName || !lead.lastName || !lead.email || !lead.phone) {
    return { success: false, error: 'Please fill in all required fields.' }
  }
  if (leadType === 'Realtor partner' && !lead.brokerage) {
    return { success: false, error: 'Please tell us your brokerage.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }
  if (lead.phone.replace(/\D/g, '').length < 10) {
    return { success: false, error: 'Please enter a valid phone number.' }
  }

  // Fall back to the HTTP Referer for the submitting page if the form didn't send one.
  if (!lead.pagePath) lead.pagePath = clean(headers().get('referer'), 500)

  const { delivered } = await deliverLead(lead)
  if (!delivered) {
    return { success: false, error: DELIVERY_ERROR }
  }
  return { success: true }
}
