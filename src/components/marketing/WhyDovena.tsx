import { Check, X } from "lucide-react"

import { Reveal } from "@/components/marketing/Reveal"
import { Section, SectionHeader } from "@/components/marketing/Section"
import { cn } from "@/lib/utils"

const TRADITIONAL = [
  "Answers questions",
  "Requires manual follow-up",
  "Doesn't complete workflows",
  "Separate tools",
  "Copy and paste",
] as const

const DOVENA = [
  "Understands goals",
  "Builds workflows",
  "Connects tools",
  "Runs automatically",
  "Reports results",
] as const

export function WhyDovena() {
  return (
    <Section id="why" className="bg-muted/30">
      <Reveal>
        <SectionHeader title="Built for work, not just conversation." />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
        <Reveal>
          <ComparisonCard
            title="Traditional AI"
            items={TRADITIONAL}
            variant="muted"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <ComparisonCard title="Dovena" items={DOVENA} variant="featured" />
        </Reveal>
      </div>
    </Section>
  )
}

function ComparisonCard({
  title,
  items,
  variant,
}: {
  title: string
  items: readonly string[]
  variant: "muted" | "featured"
}) {
  const featured = variant === "featured"

  return (
    <div
      className={cn(
        "h-full rounded-2xl border p-6 sm:p-7",
        featured
          ? "border-primary/30 bg-card shadow-md ring-1 ring-primary/15"
          : "border-border/70 bg-card/70"
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3
          className={cn(
            "text-lg font-semibold tracking-tight",
            featured ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {title}
        </h3>
        {featured ? (
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            Recommended
          </span>
        ) : null}
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                featured
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {featured ? (
                <Check className="size-3.5" aria-hidden="true" />
              ) : (
                <X className="size-3.5" aria-hidden="true" />
              )}
            </span>
            <span
              className={cn(
                featured ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
