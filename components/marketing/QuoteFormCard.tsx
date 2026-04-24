'use client'

import { useState, useRef } from 'react'
import { Phone, Mail, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { submitQuote, type QuoteFormData } from '@/app/actions'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function QuoteFormCard() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    const fd = new FormData(e.currentTarget)

    const data: QuoteFormData = {
      firstName: fd.get('firstName') as string,
      lastName: fd.get('lastName') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      loanAmount: fd.get('loanAmount') as string,
      loanType: fd.get('loanType') as QuoteFormData['loanType'],
      creditHistory: fd.get('creditHistory') as QuoteFormData['creditHistory'],
      comments: fd.get('comments') as string,
      marketing: fd.get('marketing') === 'on',
      honeypot: fd.get('honeypot') as string,
    }

    const result = await submitQuote(data)
    if (result.success) {
      setStatus('success')
      formRef.current?.reset()
    } else {
      setStatus('error')
      setErrorMsg(result.error)
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-md border border-ui-border text-[15px] text-ui-fg bg-white placeholder:text-ui-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition'
  const labelCls = 'block text-[13px] font-semibold text-ui-fg mb-1.5'

  return (
    <section id="contact" className="section-pad bg-section-muted">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-[420px_1fr] rounded-lg overflow-hidden shadow-lift"
        >

          {/* Left dark panel */}
          <div className="bg-primary p-10 flex flex-col justify-between text-white">
            <div>
              {/* Logo */}
              <div className="text-[22px] font-bold mb-8">
                <span className="text-white/80">The </span>
                <span className="text-accent">Rate</span>
                <span className="text-white/80"> Outlet</span>
              </div>

              <h2 className="text-[32px] md:text-[36px] font-bold leading-[1.1] mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/70 text-[15px] leading-[1.65] mb-8">
                Have a general question? Complete this form or call us directly — a real broker answers.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <a
                  href="tel:3054409201"
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/60 uppercase tracking-eyebrow mb-0.5">Phone</p>
                    <p className="text-[18px] font-bold">(305) 440-9201</p>
                  </div>
                </a>
                <a
                  href="mailto:info@therateoutlet.com"
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/60 uppercase tracking-eyebrow mb-0.5">Email</p>
                    <p className="text-[15px] font-medium break-all">info@therateoutlet.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office hours */}
            <p className="text-[13px] text-white/50 mt-8 border-t border-white/10 pt-6">
              Mon–Fri, 9am–6pm ET · NMLS #1017196
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 md:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                <CheckCircle className="w-14 h-14 text-success" />
                <h3 className="text-[24px] font-bold text-ui-fg">We&apos;ll be in touch!</h3>
                <p className="text-ui-muted text-[15px] max-w-sm">
                  Thanks for reaching out. A Rate Outlet broker will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[14px] text-accent hover:underline mt-2"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <h3 className="text-[22px] font-bold text-ui-fg mb-6">Get Your Free Quote</h3>

                {/* Honeypot — hidden from humans */}
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>First Name *</label>
                    <input name="firstName" type="text" required placeholder="Jane" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name *</label>
                    <input name="lastName" type="text" required placeholder="Smith" className={inputCls} />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className={labelCls}>Email *</label>
                  <input name="email" type="email" required placeholder="jane@example.com" className={inputCls} />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className={labelCls}>Phone Number *</label>
                  <input name="phone" type="tel" required placeholder="(305) 555-0100" className={inputCls} />
                </div>

                {/* Loan amount */}
                <div className="mb-4">
                  <label className={labelCls}>Loan Amount *</label>
                  <input name="loanAmount" type="text" required placeholder="$450,000" className={inputCls} />
                </div>

                {/* Loan type + credit row */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>Loan Type *</label>
                    <select name="loanType" required className={inputCls}>
                      <option value="">Select…</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Refinance">Refinance</option>
                      <option value="HELOC">HELOC</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Credit History *</label>
                    <select name="creditHistory" required className={inputCls}>
                      <option value="">Select…</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                      <option value="Poor">Poor</option>
                    </select>
                  </div>
                </div>

                {/* Comments */}
                <div className="mb-5">
                  <label className={labelCls}>Comments (optional)</label>
                  <textarea
                    name="comments"
                    rows={3}
                    placeholder="Anything else we should know?"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Marketing checkbox */}
                <label className="flex items-start gap-3 mb-5 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="marketing"
                    className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
                  />
                  <span className="text-[13px] text-ui-muted leading-[1.5]">
                    Receive rate alerts and market updates from The Rate Outlet
                  </span>
                </label>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-[13px] text-accent mb-4">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-md bg-accent text-white font-bold text-[16px] hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    'Sending…'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get My Free Quote
                    </>
                  )}
                </button>

                {/* Disclaimer */}
                <p className="text-[12px] text-ui-muted mt-3 text-center leading-[1.5]">
                  By submitting my data I agree to be contacted. · NMLS #1017196
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
