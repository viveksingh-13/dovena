import {
  Bot,
  Headphones,
  LineChart,
  Search,
  Settings2,
} from "lucide-react"

import { Reveal } from "@/components/marketing/Reveal"
import { Section, SectionHeader } from "@/components/marketing/Section"
import { Card, CardContent } from "@/components/ui/card"

const AGENTS = [
  {
    name: "Sales Agent",
    description: "Finds leads and follows up.",
    icon: LineChart,
  },
  {
    name: "Support Agent",
    description: "Understands requests and helps resolve them.",
    icon: Headphones,
  },
  {
    name: "Research Agent",
    description: "Collects information and creates summaries.",
    icon: Search,
  },
  {
    name: "Operations Agent",
    description: "Runs repetitive internal workflows.",
    icon: Settings2,
  },
] as const

export function AIWorkforce() {
  return (
    <Section id="workforce" className="relative overflow-hidden bg-muted/30">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_10%,transparent),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <SectionHeader
            title="Your AI workforce, without the overhead."
            description="Dovena doesn't just answer questions. It can understand tasks, use tools, and move work forward."
          />
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-xl" delayMs={60}>
          <div className="relative rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm backdrop-blur sm:p-6">
            <div className="mb-5 flex items-center justify-center gap-2">
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Bot className="size-5" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold tracking-tight">
                  Dovena orchestration
                </p>
                <p className="text-xs text-muted-foreground">
                  Agents collaborating on your workflow
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {AGENTS.map((agent, index) => (
                <Card
                  key={agent.name}
                  className="border-border/70 bg-background/80 transition-colors hover:border-primary/30"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="flex items-start gap-3 pt-1">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary">
                      <agent.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight">
                        {agent.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {agent.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
