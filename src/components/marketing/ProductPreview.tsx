"use client"

import * as React from "react"
import {
  CheckCircle2,
  FileSpreadsheet,
  Loader2,
  Mail,
  Sparkles,
} from "lucide-react"

import {
  WorkflowConnector,
  WorkflowNode,
} from "@/components/marketing/WorkflowNode"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const DEMO_PROMPT =
  "When I receive a new lead, save their details to Google Sheets and send them a personalized email."

const WORKFLOW_STEPS = [
  {
    title: "Gmail",
    description: "New lead received",
    icon: Mail,
  },
  {
    title: "✦ Dovena AI",
    description: "Analyze lead",
    icon: Sparkles,
    accent: true,
  },
  {
    title: "Google Sheets",
    description: "Save lead information",
    icon: FileSpreadsheet,
  },
  {
    title: "Email",
    description: "Send personalized email",
    icon: Mail,
  },
] as const

type BuildState = "idle" | "building" | "ready"

function usePrefersReducedMotion() {
  return React.useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)")
      media.addEventListener("change", onStoreChange)
      return () => media.removeEventListener("change", onStoreChange)
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  )
}

export function ProductPreview({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion()
  const [value, setValue] = React.useState("")
  const [buildState, setBuildState] = React.useState<BuildState>("idle")
  const [showWorkflow, setShowWorkflow] = React.useState(false)

  React.useEffect(() => {
    if (reducedMotion) {
      const frame = window.requestAnimationFrame(() => {
        setValue(DEMO_PROMPT)
      })
      return () => window.cancelAnimationFrame(frame)
    }

    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setValue(DEMO_PROMPT.slice(0, index))
      if (index >= DEMO_PROMPT.length) {
        window.clearInterval(timer)
      }
    }, 18)

    return () => window.clearInterval(timer)
  }, [reducedMotion])

  function handleBuild() {
    if (buildState === "building") return
    setBuildState("building")
    setShowWorkflow(false)

    window.setTimeout(
      () => {
        setBuildState("ready")
        setShowWorkflow(true)
      },
      reducedMotion ? 0 : 1100
    )
  }

  return (
    <div
      id="product"
      className={cn(
        "mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)] ring-1 ring-foreground/5 dark:shadow-[0_24px_80px_-28px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="ml-2 text-xs font-medium text-muted-foreground">
          dovena.app / automations / new
        </span>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            Create an automation
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            What would you like Dovena to do?
          </p>
        </div>

        <Textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          rows={4}
          className="min-h-28 resize-none bg-background text-sm leading-relaxed sm:text-sm"
          aria-label="Automation prompt"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            size="lg"
            className="h-10 px-4"
            onClick={handleBuild}
            disabled={!value.trim() || buildState === "building"}
          >
            {buildState === "building" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Building…
              </>
            ) : (
              "Build Automation"
            )}
          </Button>

          {buildState === "ready" ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Automation ready
            </p>
          ) : null}
        </div>

        {(showWorkflow || buildState === "ready") && (
          <div className="rounded-xl border border-border/70 bg-muted/25 p-4 sm:p-5">
            <p className="mb-4 text-sm font-medium tracking-tight">
              Dovena understood your request
            </p>
            <div className="mx-auto flex max-w-sm flex-col items-stretch">
              {WORKFLOW_STEPS.map((step, index) => (
                <React.Fragment key={step.title}>
                  <div
                    className={cn(
                      !reducedMotion && "animate-fade-up opacity-0"
                    )}
                    style={
                      reducedMotion
                        ? undefined
                        : {
                            animationDelay: `${index * 120}ms`,
                            animationFillMode: "forwards",
                          }
                    }
                  >
                    <WorkflowNode
                      title={step.title}
                      description={step.description}
                      icon={step.icon}
                      accent={"accent" in step ? step.accent : false}
                      compact
                    />
                  </div>
                  {index < WORKFLOW_STEPS.length - 1 ? (
                    <WorkflowConnector />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
