const STATS = [
  { number: '10,000+', label: 'Clients Served' },
  { number: '14–21 days', label: 'Average Closing' },
  { number: 'From 3%', label: 'Rates Starting At' },
  { number: '24 hrs', label: 'Approval Turnaround' },
]

export function StatStrip() {
  return (
    <section className="bg-section-muted border-y border-ui-border py-12">
      <div className="container-main">
        {/* Eyebrow */}
        <p className="text-center eyebrow mb-8">
          Trusted by South Florida homeowners since 2010
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-ui-border">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-6 px-4 text-center">
              <span className="text-[36px] md:text-[42px] font-bold text-primary leading-none tracking-tight">
                {stat.number}
              </span>
              <span className="text-[12px] uppercase tracking-eyebrow text-ui-muted mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
