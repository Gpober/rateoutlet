'use client'

import { Loader2 } from 'lucide-react'
import { FormDisclosures } from './Compliance'
import {
  FormError,
  FormSuccess,
  HiddenLeadFields,
  InquiryNotice,
  MarketingConsent,
  inputCls,
  labelCls,
  useLeadSubmit,
} from './LeadFormParts'

export const LOAN_TYPES = ['Purchase', 'Refinance', 'HELOC'] as const
export type LoanType = (typeof LOAN_TYPES)[number]
const CREDIT = ['Excellent (740+)', 'Good (680–739)', 'Fair (620–679)', 'Not sure'] as const

export function QuoteForm({
  variant = 'full',
  loanType,
  program,
  formName = 'contact',
  submitLabel = 'Get My Free Quote',
}: {
  /** `short` drops loan amount, credit and comments for campaign landing pages. */
  variant?: 'full' | 'short'
  /** Preset loan type; when set on the short form the selector is hidden. */
  loanType?: LoanType
  /** Campaign program context, e.g. "FHA" or "First-time buyer". */
  program?: string
  formName?: string
  submitLabel?: string
}) {
  const { status, error, handleSubmit } = useLeadSubmit('Quote')
  const short = variant === 'short'

  if (status === 'success') {
    return (
      <FormSuccess
        title="Thanks — we’ve got it."
        body="A broker will reach out shortly with your personalized options."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <HiddenLeadFields formName={formName} />
      {program && <input type="hidden" name="program" value={program} readOnly />}
      {short && loanType && <input type="hidden" name="loanType" value={loanType} readOnly />}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${formName}-firstName`} className={labelCls}>First name *</label>
          <input id={`${formName}-firstName`} required name="firstName" autoComplete="given-name" className={inputCls} placeholder="Jane" />
        </div>
        <div>
          <label htmlFor={`${formName}-lastName`} className={labelCls}>Last name *</label>
          <input id={`${formName}-lastName`} required name="lastName" autoComplete="family-name" className={inputCls} placeholder="Doe" />
        </div>
        <div>
          <label htmlFor={`${formName}-email`} className={labelCls}>Email *</label>
          <input id={`${formName}-email`} required type="email" name="email" autoComplete="email" className={inputCls} placeholder="jane@email.com" />
        </div>
        <div>
          <label htmlFor={`${formName}-phone`} className={labelCls}>Phone *</label>
          <input id={`${formName}-phone`} required type="tel" name="phone" autoComplete="tel" className={inputCls} placeholder="(305) 555-0100" />
        </div>
        {!(short && loanType) && (
          <div className={short ? 'sm:col-span-2' : undefined}>
            <label htmlFor={`${formName}-loanType`} className={labelCls}>Loan type</label>
            <select id={`${formName}-loanType`} name="loanType" className={inputCls} defaultValue={loanType ?? 'Purchase'}>
              {LOAN_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        )}
        {!short && (
          <div>
            <label htmlFor={`${formName}-credit`} className={labelCls}>Credit</label>
            <select id={`${formName}-credit`} name="credit" className={inputCls} defaultValue={CREDIT[1]}>
              {CREDIT.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {!short && (
        <>
          <div className="mt-5">
            <label htmlFor={`${formName}-loanAmount`} className={labelCls}>Loan amount</label>
            <input id={`${formName}-loanAmount`} name="loanAmount" className={inputCls} placeholder="$400,000" />
          </div>

          <div className="mt-5">
            <label htmlFor={`${formName}-comments`} className={labelCls}>Anything we should know?</label>
            <textarea id={`${formName}-comments`} name="comments" rows={3} className={`${inputCls} resize-none`} placeholder="Timeline, property type, questions…" />
          </div>
        </>
      )}

      <MarketingConsent />
      <InquiryNotice />

      {error && <FormError message={error} />}

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
          submitLabel
        )}
      </button>

      <FormDisclosures />
    </form>
  )
}
