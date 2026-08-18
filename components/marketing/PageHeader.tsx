export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute top-[-30%] right-[-5%] w-[420px] h-[420px] rounded-full bg-accent/12 blur-3xl pointer-events-none" />
      <div className="container-main relative py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-eyebrow text-accent font-semibold mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-[36px] md:text-[52px] leading-[1.06] tracking-[-0.02em]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[17px] leading-[1.65] text-white/70 mt-5">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
