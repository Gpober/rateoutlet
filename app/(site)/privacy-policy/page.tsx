import { PageHeader } from '@/components/marketing/PageHeader'
import policy from '@/data/privacy-policy.json'

export const metadata = {
  title: 'Privacy Policy',
  description: 'The Rate Outlet privacy and information security policy under the Gramm-Leach-Bliley Act.',
}

// Carried over word for word from the previous site (therateoutlet.com/privacy-policy),
// so the address and the wording the business published stay the same.
export default function PrivacyPolicyPage() {
  const [intro, ...rest] = policy as string[]
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle={intro} />
      <section className="section-pad">
        <div className="container-main max-w-3xl space-y-4 text-[15px] leading-relaxed text-ui-body">
          {rest.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  )
}
