'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const currency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function Field({
  label,
  prefix,
  suffix,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string
  prefix?: string
  suffix?: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[14px] font-medium text-ui-fg">{label}</label>
        <div className="flex items-center gap-1 rounded-md border border-ui-border px-2.5 py-1 bg-white">
          {prefix && <span className="text-[13px] text-ui-muted">{prefix}</span>}
          <input
            type="number"
            value={Number.isNaN(value) ? '' : value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-24 text-right text-[14px] font-semibold text-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          {suffix && <span className="text-[13px] text-ui-muted">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        value={Number.isNaN(value) ? min : value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none bg-ui-border accent-accent cursor-pointer"
      />
    </div>
  )
}

export function MortgageCalculator() {
  const [price, setPrice] = useState(500000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(6.5)
  const [term, setTerm] = useState(30)
  const [taxPct, setTaxPct] = useState(1.1)
  const [insurance, setInsurance] = useState(1800)

  const result = useMemo(() => {
    const down = price * (downPct / 100)
    const principal = Math.max(price - down, 0)
    const monthlyRate = rate / 100 / 12
    const n = term * 12
    const pi =
      monthlyRate === 0
        ? principal / n
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1)
    const tax = (price * (taxPct / 100)) / 12
    const ins = insurance / 12
    const total = pi + tax + ins
    return {
      principal,
      down,
      pi: Number.isFinite(pi) ? pi : 0,
      tax,
      ins,
      total: Number.isFinite(total) ? total : 0,
    }
  }, [price, downPct, rate, term, taxPct, insurance])

  // Colors chosen for contrast on the navy result card.
  const rows = [
    { label: 'Principal & interest', value: result.pi, color: 'bg-accent' },
    { label: 'Property tax', value: result.tax, color: 'bg-[#6E93BF]' },
    { label: 'Home insurance', value: result.ins, color: 'bg-white/85' },
  ]

  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
      {/* Inputs */}
      <div className="card p-6 md:p-8">
        <div className="space-y-7">
          <Field label="Home price" prefix="$" value={price} onChange={setPrice} min={100000} max={3000000} step={10000} />
          <Field label="Down payment" suffix="%" value={downPct} onChange={setDownPct} min={0} max={60} step={1} />
          <Field label="Interest rate" suffix="%" value={rate} onChange={setRate} min={2} max={12} step={0.05} />
          <div>
            <label className="text-[14px] font-medium text-ui-fg block mb-2">Loan term</label>
            <div className="grid grid-cols-3 gap-2">
              {[15, 20, 30].map((t) => (
                <button
                  key={t}
                  onClick={() => setTerm(t)}
                  className={`py-2.5 rounded-md text-[14px] font-semibold border transition-colors ${
                    term === t
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-ui-fg border-ui-border hover:border-primary'
                  }`}
                >
                  {t} yrs
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Property tax" suffix="%/yr" value={taxPct} onChange={setTaxPct} min={0} max={3} step={0.05} />
            <Field label="Insurance" prefix="$" suffix="/yr" value={insurance} onChange={setInsurance} min={0} max={12000} step={100} />
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="rounded-lg bg-primary text-white p-6 md:p-8 flex flex-col shadow-lift">
        <p className="text-[12px] uppercase tracking-eyebrow text-accent font-semibold">
          Estimated monthly payment
        </p>
        <p className="font-display text-[46px] md:text-[54px] leading-none mt-3 mb-1">
          {currency(result.total)}
        </p>
        <p className="text-[13px] text-white/55 mb-7">per month · {currency(result.principal)} loan amount</p>

        {/* Breakdown bar */}
        <div className="flex h-2.5 rounded-full overflow-hidden mb-5">
          {rows.map((r) => (
            <div
              key={r.label}
              className={r.color}
              style={{ width: `${result.total ? (r.value / result.total) * 100 : 0}%` }}
            />
          ))}
        </div>

        <div className="space-y-3 mb-7">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between text-[14px]">
              <span className="flex items-center gap-2.5 text-white/70">
                <span className={`w-2.5 h-2.5 rounded-full ${r.color}`} />
                {r.label}
              </span>
              <span className="font-semibold">{currency(r.value)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between text-[14px] pt-3 border-t border-white/10">
            <span className="text-white/70">Down payment</span>
            <span className="font-semibold">{currency(result.down)}</span>
          </div>
        </div>

        <Link href="/contact" className="btn-gold w-full py-3.5 text-[15px] mt-auto">
          Lock in a real rate <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-[11.5px] text-white/45 leading-[1.5] mt-4">
          Estimate only. Excludes HOA dues and any mortgage insurance. Your actual rate and payment
          depend on credit, property, and loan details.
        </p>
      </div>
    </div>
  )
}
