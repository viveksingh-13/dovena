import {
  MessageSquareText,
  Play,
  Sparkles,
  Workflow,
} from "lucide-react"

import { Reveal } from "@/components/marketing/Reveal"
import { Section, SectionHeader } from "@/components/marketing/Section"
import {
  WorkflowConnector,
  WorkflowNode,
} from "@/components/marketing/WorkflowNode"
import { Card, CardContent } from "@/components/ui/card"

const STEPS = [
  {
    number: "01",
    title: "Describe",
    description: "Tell Dovena what you want done in plain English.",
    icon: MessageSquareText,
    example: '"Follow up with every lead who hasn\'t replied in 3 days."',
  },
  {
    number: "02",
    title: "Build",
    description: "Dovena understands the request and creates the workflow.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Run",
    description:
      "Activate the automation and let Dovena handle the repetitive work.",
    icon: Play,
  },
] as const

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/30">
      <Reveal>
        <SectionHeader
          title="From idea to automation in seconds."
          description="You describe the outcome. Dovena handles the workflow."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <Reveal key={step.number} delayMs={index * 80}>
            <Card className="h-full border-border/70 bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0">
              <CardContent className="flex h-full flex-col gap-5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {step.number}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>
                </div>

                <div>
                  <h3 className="text-h3">{step.title}</h3>
                  <p className="text-muted mt-2 text-sm">{step.description}</p>
                </div>

                <div className="mt-auto rounded-xl border border-border/70 bg-muted/40 p-3">
                  {"example" in step && step.example ? (
                    <p className="text-sm leading-relaxed text-foreground/90 italic">
                      {step.example}
                    </p>
                  ) : step.number === "02" ? (
                    <div className="space-y-0">
                      <WorkflowNode
                        title="Trigger"
                        description="Lead idle 3 days"
                        icon={MessageSquareText}
                        compact
                      />
                      <WorkflowConnector className="h-4" />
                      <WorkflowNode
                        title="✦ Dovena AI"
                        description="Draft follow-up"
                        icon={Sparkles}
                        accent
                        compact
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-2.5">
                        <span className="absolute inline-flex size-full animate-soft-pulse rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-sm font-medium">Automation active</p>
                        <p className="text-xs text-muted-foreground">
                          Running in the background
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
