# The Rate Outlet — marketing site

Next.js 14 (App Router) marketing site for The Rate Outlet, NMLS #1017196, at
https://therateoutletmortgage.com.

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Lead delivery (environment variables)

Every form (quote, campaign landing pages, realtor partner signup) posts to the
`submitQuote` server action in `app/actions.ts`, which delivers the lead through
`lib/lead-delivery.ts` to every configured channel:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | for email | Resend API key. Email is sent with a plain `fetch` to `https://api.resend.com/emails`. |
| `LEAD_NOTIFY_EMAIL` | for email | Who receives lead emails. Comma-separated for several, e.g. `gonzo@example.com,ops@example.com`. |
| `LEAD_FROM_EMAIL` | for email | Sender, on a domain verified in Resend, e.g. `The Rate Outlet <leads@therateoutletmortgage.com>`. |
| `LEAD_WEBHOOK_URL` | optional | If set, the lead is also POSTed here as JSON (CRM, Zapier, Make, Google Sheets, etc.). |

Set them in Vercel → Project → Settings → Environment Variables (Production and
Preview), then redeploy.

Behavior:

- Email and webhook are sent in parallel. The visitor sees success if **at least
  one** channel accepted the lead.
- If no channel is configured, or every configured channel fails, the visitor
  gets an error asking them to call the office number in `lib/site.ts`. Leads are
  never silently dropped. Failures are logged as `[lead] …` in the Vercel
  function logs.
- Email is "configured" as soon as any of the three Resend variables is set;
  if one is missing, that channel fails (and is logged) rather than being skipped.
- Lead emails set `reply_to` to the visitor's address, so replying goes straight
  to them. All user input is HTML-escaped.

### Webhook payload

```json
{
  "leadType": "Quote | Realtor partner",
  "firstName": "", "lastName": "", "email": "", "phone": "",
  "loanType": "Purchase | Refinance | HELOC | \"\"",
  "program": "e.g. FHA, VA, First-time buyer",
  "loanAmount": "", "creditHistory": "",
  "brokerage": "", "areasServed": "",
  "comments": "",
  "marketingConsent": true,
  "formName": "contact | lp:<slug> | realtors",
  "pagePath": "/lp/fha",
  "utm_source": "", "utm_medium": "", "utm_campaign": "", "utm_content": "",
  "landing_path": "/lp/fha?utm_source=instagram",
  "referrer": "https://www.instagram.com/",
  "submittedAt": "2026-01-01T12:00:00.000Z"
}
```

### Attribution

On the first page view of a browser session, `utm_source`, `utm_medium`,
`utm_campaign`, `utm_content`, the landing path and `document.referrer` are saved
to `sessionStorage` (`lib/attribution.ts`) and added as hidden fields to every
form, so they survive navigation between pages.

## Campaign landing pages

`/lp/start`, `/lp/first-time-buyers`, `/lp/fha`, `/lp/va`, `/lp/refinance`,
`/lp/heloc`. All copy lives in `lib/landing-pages.ts`; add an entry there to add
a page. They are `noindex` and left out of the sitemap. Use UTM tags on every
link, e.g. `https://therateoutletmortgage.com/lp/fha?utm_source=instagram&utm_medium=social&utm_campaign=fha-reel`.

## Site config

`lib/site.ts` holds the domain (`SITE.url`), phone, contact email
(`SITE.email`), NMLS number/link and the compliance statements used in the
footer and under every form.
