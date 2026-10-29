import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site'

/** Simple Equal Housing Opportunity house icon (house outline with an equals sign). */
export function EhoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Equal Housing Opportunity"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M3 15 16 4l13 11" />
      <path d="M7 12v16h18V12" />
      <path d="M11.5 16.5h9M11.5 21.5h9" strokeLinecap="round" />
    </svg>
  )
}

export function NmlsLink({ className }: { className?: string }) {
  return (
    <a href={SITE.nmlsUrl} target="_blank" rel="noopener noreferrer" className={className}>
      NMLS #{SITE.nmls}
    </a>
  )
}

/** Full compliance block for the dark site/landing-page footers. */
export function ComplianceBlock() {
  return (
    <div className="container-main">
      <div className="flex items-center gap-3 mb-4 justify-center">
        <EhoIcon className="w-8 h-8 text-white/80 flex-shrink-0" />
        <span className="text-[12px] text-white/70 font-medium">Equal Housing Opportunity</span>
      </div>
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <p className="text-[12px] text-white/60 leading-[1.6]">
          <strong className="text-white/85">
            {SITE.name} ·{' '}
            <NmlsLink className="text-accent hover:underline" />
          </strong>{' '}
          · {SITE.regulator}.
        </p>
        <p className="text-[12px] text-white/60 leading-[1.6]">
          Equal Housing Opportunity. {SITE.name} does business in accordance with the Fair Housing Act
          and the Equal Credit Opportunity Act.
        </p>
        <p className="text-[12px] text-white/60 leading-[1.6]">
          MORTGAGE BROKER. We arrange, but do not make, mortgage loans. {SITE.notCommitment} Programs,
          rates, and terms are subject to change without notice.
        </p>
        <p className="text-[12px] text-white/60">
          Verify our license at{' '}
          <a
            href={SITE.nmlsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            NMLS Consumer Access
          </a>
        </p>
      </div>
    </div>
  )
}

/** Compact disclosures shown under every lead form (light background). */
export function FormDisclosures({ className }: { className?: string }) {
  return (
    <div className={cn('mt-5 pt-4 border-t border-ui-border text-[11.5px] leading-[1.55] text-ui-muted space-y-1.5', className)}>
      <p className="flex items-center gap-2">
        <EhoIcon className="w-5 h-5 text-primary flex-shrink-0" />
        <span>
          Equal Housing Opportunity · {SITE.name} ·{' '}
          <NmlsLink className="text-primary underline underline-offset-2 hover:text-accent-deep" /> ·{' '}
          {SITE.regulator}.
        </span>
      </p>
      <p>{SITE.notCommitment}</p>
    </div>
  )
}
