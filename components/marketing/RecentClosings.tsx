import closings from '@/data/recent-closings.json'
import { Home } from 'lucide-react'

type Closing = {
  id: number
  propertyType: string
  location: string
  loanAmount: string
  term: string
}

function ClosingCard({ closing }: { closing: Closing }) {
  const rows = [
    { label: 'Property Type', value: closing.propertyType },
    { label: 'Location', value: closing.location },
    { label: 'Loan Amount', value: closing.loanAmount },
    { label: 'Term', value: closing.term },
  ]
  return (
    <div className="bg-white rounded-md p-6 shadow-card border border-ui-border">
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-ui-border">
        <div className="w-8 h-8 bg-accent-soft rounded flex items-center justify-center flex-shrink-0">
          <Home className="w-4 h-4 text-accent" />
        </div>
        <span className="text-[13px] font-semibold text-ui-muted uppercase tracking-eyebrow">
          Recent Closing
        </span>
      </div>
      <div className="divide-y divide-ui-border">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-3 gap-4">
            <span className="text-[12px] uppercase tracking-eyebrow text-ui-muted font-medium flex-shrink-0">
              {label}
            </span>
            <span className="text-[16px] font-bold text-ui-fg text-right">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function RecentClosings() {
  return (
    <section className="section-pad bg-section-muted">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Recent Closings</p>
          <h2 className="text-[32px] md:text-[42px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] mb-4">
            Real loans. Real South Florida clients.
          </h2>
          <p className="text-[17px] text-ui-muted max-w-[560px] mx-auto">
            A snapshot of loans we&apos;ve closed recently. Your file could be next.
          </p>
        </div>

        {/* Cards grid — data-driven from data/recent-closings.json */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {(closings as Closing[]).map((closing) => (
            <ClosingCard key={closing.id} closing={closing} />
          ))}
        </div>

        <p className="text-center text-[13px] text-ui-muted mt-8">
          Data updated monthly · Edit{' '}
          <code className="bg-white px-1.5 py-0.5 rounded text-[12px] border border-ui-border">
            data/recent-closings.json
          </code>{' '}
          to update this section without touching components.
        </p>
      </div>
    </section>
  )
}
