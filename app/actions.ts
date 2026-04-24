'use server'

export type QuoteFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  loanAmount: string
  loanType: 'Purchase' | 'Refinance' | 'HELOC'
  creditHistory: 'Excellent' | 'Good' | 'Fair' | 'Poor'
  comments?: string
  marketing: boolean
  honeypot?: string
}

export type FormResult = { success: true } | { success: false; error: string }

export async function submitQuote(data: QuoteFormData): Promise<FormResult> {
  // Honeypot check — bots fill this field, humans don't
  if (data.honeypot) {
    return { success: true } // silently ignore
  }

  // Basic server-side validation
  if (!data.firstName || !data.lastName || !data.email || !data.phone) {
    return { success: false, error: 'Please fill in all required fields.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  // TODO: Wire to Resend for email notification
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({ from: '...', to: 'info@therateoutlet.com', ... })

  // TODO: Wire to CRM webhook
  // await fetch(process.env.CRM_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(data) })

  console.log('[QuoteForm] New submission:', {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    loanType: data.loanType,
    loanAmount: data.loanAmount,
    creditHistory: data.creditHistory,
  })

  return { success: true }
}
