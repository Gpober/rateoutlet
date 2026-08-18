const STATS = [
  { value: '10,000+', label: 'Families financed' },
  { value: '14–21 days', label: 'Average close time' },
  { value: 'Dozens', label: 'Of lenders shopped' },
  { value: 'Since 2010', label: 'Serving South Florida' },
]

export function TrustBar() {
  return (
    <section className="bg-white border-b border-ui-border">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ui-border">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 md:py-10 text-center px-4">
              <p className="font-display text-[26px] md:text-[34px] leading-none text-primary tracking-[-0.01em]">
                {s.value}
              </p>
              <p className="text-[13px] md:text-[14px] text-ui-muted mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
