'use client'

import { useState, FormEvent } from 'react'
import { Check, Loader2 } from 'lucide-react'

const LOAN_TYPES = ['Purchase', 'Refinance', 'HELOC'] as const
const CREDIT = ['Excellent (740+)', 'Good (680–739)', 'Fair (620–679)', 'Not sure'] as const

const inputCls =
  'w-full rounded-md border border-ui-border bg-white px-4 py-3 text-[15px] text-ui-fg placeholder:text-ui-muted/70 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition'
const labelCls = 'block text-[13px] font-medium text-ui-fg mb-1.5'

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Design-only: simulate a submission. Wire this up later (e.g. Resend email
    // or a CRM webhook) via a server action — see app/actions.ts for a stub.
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="card p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7 text-success" />
        </div>
        <h3 className="font-display text-[26px] text-primary mb-2">Thanks — we’ve got it.</h3>
        <p className="text-[15px] text-ui-muted max-w-md mx-auto">
          A broker will reach out shortly with your personalized options. Need us sooner? Call{' '}
          <a href="tel:3054409201" className="text-primary font-semibold">
            (305) 440-9201
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>First name *</label>
          <input required name="firstName" className={inputCls} placeholder="Jane" />
        </div>
        <div>
          <label className={labelCls}>Last name *</label>
          <input required name="lastName" className={inputCls} placeholder="Doe" />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input required type="email" name="email" className={inputCls} placeholder="jane@email.com" />
        </div>
        <div>
          <label className={labelCls}>Phone *</label>
          <input required type="tel" name="phone" className={inputCls} placeholder="(305) 555-0100" />
        </div>
        <div>
          <label className={labelCls}>Loan type</label>
          <select name="loanType" className={inputCls} defaultValue="Purchase">
            {LOAN_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Credit</label>
          <select name="credit" className={inputCls} defaultValue={CREDIT[1]}>
            {CREDIT.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={labelCls}>Loan amount</label>
        <input name="loanAmount" className={inputCls} placeholder="$400,000" />
      </div>

      <div className="mt-5">
        <label className={labelCls}>Anything we should know?</label>
        <textarea name="comments" rows={3} className={`${inputCls} resize-none`} placeholder="Timeline, property type, questions…" />
      </div>

      <label className="flex items-start gap-2.5 mt-5 text-[13px] text-ui-muted leading-[1.5] cursor-pointer">
        <input type="checkbox" name="consent" className="mt-0.5 accent-primary" defaultChecked />
        <span>
          I agree to be contacted by The Rate Outlet about my inquiry. This is not a loan application
          and has no impact on my credit.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold w-full py-4 text-[15px] mt-6 disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          'Get My Free Quote'
        )}
      </button>
    </form>
  )
}
