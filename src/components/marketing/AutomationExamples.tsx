import {
  CalendarClock,
  Lightbulb,
  Mail,
  Receipt,
  Sparkles,
  Target,
} from "lucide-react"

import { Reveal } from "@/components/marketing/Reveal"
import { Section, SectionHeader } from "@/components/marketing/Section"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const EXAMPLES = [
  {
    category: "Sales",
    title: "Follow up with new leads",
    icon: Target,
    steps: [
      "Website Lead",
      "AI analyzes lead",
      "Personalizes email",
      "Sends follow-up",
      "Notifies sales",
    ],
  },
  {
    category: "Support",
    title: "Triage customer requests",
    icon: Mail,
    steps: [
      "New Email",
      "AI understands request",
      "Categorizes issue",
      "Drafts response",
      "Creates task",
    ],
  },
  {
    category: "Research",
    title: "Create daily research reports",
    icon: CalendarClock,
    steps: [
      "Schedule",
      "AI researches topic",
      "Summarizes findings",
      "Creates report",
      "Sends to team",
    ],
  },
  {
    category: "Marketing",
    title: "Turn ideas into content",
    icon: Lightbulb,
    steps: [
      "Idea",
      "AI generates content",
      "Creates variations",
      "Schedules posts",
    ],
  },
  {
    category: "Operations",
    title: "Keep your team updated",
    icon: Sparkles,
    steps: ["Event", "AI summarizes", "Updates workspace", "Notifies team"],
  },
  {
    category: "Finance",
    title: "Process incoming invoices",
    icon: Receipt,
    steps: ["Invoice", "Extract information", "Validate", "Store", "Notify finance"],
  },
] as const

export function AutomationExamples() {
  return (
    <Section id="solutions">
      <Reveal>
        <SectionHeader
          title="Tell Dovena what you need."
          description="Turn repetitive work into automated workflows."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EXAMPLES.map((example, index) => (
          <Reveal key={example.category} delayMs={(index % 3) * 70}>
            <Card className="h-full border-border/70 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0">
              <CardContent className="flex h-full flex-col gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary">
                    <example.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-primary uppercase">
                      {example.category}
                    </p>
                    <h3 className="text-sm font-semibold tracking-tight">
                      {example.title}
                    </h3>
                  </div>
                </div>

                <ol className="mt-auto space-y-0">
                  {example.steps.map((step, stepIndex) => (
                    <li key={step} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex w-full items-center rounded-lg border px-2.5 py-1.5 text-sm",
                          stepIndex === 1
                            ? "border-primary/25 bg-primary/5 text-foreground"
                            : "border-border/70 bg-muted/30 text-muted-foreground"
                        )}
                      >
                        {stepIndex === 1 ? (
                          <Sparkles
                            className="mr-1.5 size-3.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                        ) : null}
                        <span className="truncate">{step}</span>
                      </div>
                      {stepIndex < example.steps.length - 1 ? (
                        <span
                          className="my-1 h-3 w-px bg-border"
                          aria-hidden="true"
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
