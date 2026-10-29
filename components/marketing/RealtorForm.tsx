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

export function RealtorForm() {
  const { status, error, handleSubmit } = useLeadSubmit('Realtor partner')

  if (status === 'success') {
    return (
      <FormSuccess
        title="Thanks — let’s work together."
        body="Gonzo will reach out personally to set up a quick intro call."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <HiddenLeadFields formName="realtors" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="rp-firstName" className={labelCls}>First name *</label>
          <input id="rp-firstName" required name="firstName" autoComplete="given-name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="rp-lastName" className={labelCls}>Last name *</label>
          <input id="rp-lastName" required name="lastName" autoComplete="family-name" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rp-brokerage" className={labelCls}>Brokerage *</label>
          <input id="rp-brokerage" required name="brokerage" autoComplete="organization" className={inputCls} placeholder="Your brokerage" />
        </div>
        <div>
          <label htmlFor="rp-email" className={labelCls}>Email *</label>
          <input id="rp-email" required type="email" name="email" autoComplete="email" className={inputCls} />
        </div>
        <div>
          <label htmlFor="rp-phone" className={labelCls}>Phone *</label>
          <input id="rp-phone" required type="tel" name="phone" autoComplete="tel" className={inputCls} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="rp-areas" className={labelCls}>Areas you serve</label>
        <input id="rp-areas" name="areasServed" className={inputCls} placeholder="e.g. Miami-Dade, Broward, Palm Beach" />
      </div>

      <div className="mt-5">
        <label htmlFor="rp-comments" className={labelCls}>Anything else?</label>
        <textarea id="rp-comments" name="comments" rows={3} className={`${inputCls} resize-none`} placeholder="Buyers you’re working with now, best time to reach you…" />
      </div>

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
          'Become a Partner'
        )}
      </button>

      <FormDisclosures />
    </form>
  )
}
