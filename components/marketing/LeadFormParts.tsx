'use client'

import { useState, type FormEvent } from 'react'
import { AlertCircle, Check } from 'lucide-react'
import { submitQuote, type QuoteFormData } from '@/app/actions'
import { SITE } from '@/lib/site'
import { AttributionFields } from './Attribution'

export const inputCls =
  'w-full rounded-md border border-ui-border bg-white px-4 py-3 text-[15px] text-ui-fg placeholder:text-ui-muted/70 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition'
export const labelCls = 'block text-[13px] font-medium text-ui-fg mb-1.5'

/** Honeypot + attribution hidden fields shared by every lead form. */
export function HiddenLeadFields({ formName }: { formName: string }) {
  return (
    <>
      {/* Honeypot — bots fill this, humans never see it */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="formName" value={formName} readOnly />
      <AttributionFields />
    </>
  )
}

/** Optional marketing opt-in with TCPA consent language. Never pre-checked. */
export function MarketingConsent() {
  return (
    <label className="flex items-start gap-2.5 mt-5 text-[12.5px] text-ui-muted leading-[1.55] cursor-pointer">
      <input type="checkbox" name="marketing" className="mt-0.5 accent-primary flex-shrink-0" />
      <span>
        Yes, {SITE.name} may contact me with marketing about mortgage products at the phone number and
        email I provided, including by calls and text messages sent using automated technology or
        prerecorded/artificial voice. Consent is not a condition of any purchase or loan. Message and
        data rates may apply; reply STOP to opt out at any time.
      </span>
    </label>
  )
}

/** Shown above the submit button: contact about this inquiry is what they asked for. */
export function InquiryNotice() {
  return (
    <p className="mt-4 text-[12px] text-ui-muted leading-[1.5]">
      By submitting, you ask {SITE.name} to contact you about this inquiry. This is not a loan
      application and has no impact on your credit.
    </p>
  )
}

export function FormError({ message }: { message: string }) {
  return (
    <div role="alert" className="mt-5 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-800">
      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <span>{message}</span>
    </div>
  )
}

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-8 md:p-10 text-center">
      <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
        <Check className="w-7 h-7 text-success" />
      </div>
      <h3 className="font-display text-[26px] text-primary mb-2">{title}</h3>
      <p className="text-[15px] text-ui-muted max-w-md mx-auto">
        {body} Need us sooner? Call{' '}
        <a href={SITE.phoneHref} className="text-primary font-semibold">
          {SITE.phone}
        </a>
        .
      </p>
    </div>
  )
}

function str(fd: FormData, key: string): string {
  const v = fd.get(key)
  return typeof v === 'string' ? v : ''
}

/** Reads a lead form, sends it through submitQuote and tracks UI state. */
export function useLeadSubmit(leadType: QuoteFormData['leadType']) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)
    const fd = new FormData(e.currentTarget)
    const payload: QuoteFormData = {
      leadType,
      firstName: str(fd, 'firstName'),
      lastName: str(fd, 'lastName'),
      email: str(fd, 'email'),
      phone: str(fd, 'phone'),
      loanType: str(fd, 'loanType'),
      program: str(fd, 'program'),
      loanAmount: str(fd, 'loanAmount'),
      creditHistory: str(fd, 'credit'),
      comments: str(fd, 'comments'),
      brokerage: str(fd, 'brokerage'),
      areasServed: str(fd, 'areasServed'),
      marketing: fd.get('marketing') === 'on',
      honeypot: str(fd, 'website'),
      formName: str(fd, 'formName'),
      pagePath: window.location.pathname,
      utm_source: str(fd, 'utm_source'),
      utm_medium: str(fd, 'utm_medium'),
      utm_campaign: str(fd, 'utm_campaign'),
      utm_content: str(fd, 'utm_content'),
      landing_path: str(fd, 'landing_path'),
      referrer: str(fd, 'referrer'),
    }
    try {
      const result = await submitQuote(payload)
      if (result.success) {
        setStatus('success')
      } else {
        setError(result.error)
        setStatus('idle')
      }
    } catch {
      setError(`Sorry — something went wrong sending your request. Please call us at ${SITE.phone}.`)
      setStatus('idle')
    }
  }

  return { status, error, handleSubmit }
}
