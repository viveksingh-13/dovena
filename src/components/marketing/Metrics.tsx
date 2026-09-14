import { Reveal } from "@/components/marketing/Reveal"
import { Section } from "@/components/marketing/Section"

const METRICS = [
  {
    value: "10K+",
    label: "Potential tasks automated",
  },
  {
    value: "50+",
    label: "Workflow integrations",
  },
  {
    value: "24/7",
    label: "Automation availability",
  },
] as const

export function Metrics() {
  return (
    <Section className="!py-16 sm:!py-20">
      <Reveal>
        <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
          Designed to scale with your work
        </p>
        <p className="mx-auto mt-2 max-w-lg text-center text-xs text-muted-foreground/80">
          Illustrative product capacity — not current customer metrics.
        </p>

        <dl className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border/70 bg-card px-6 py-8 text-center shadow-sm"
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
