import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type WorkflowNodeProps = {
  title: string
  description: string
  icon: LucideIcon
  accent?: boolean
  className?: string
  compact?: boolean
}

export function WorkflowNode({
  title,
  description,
  icon: Icon,
  accent = false,
  className,
  compact = false,
}: WorkflowNodeProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-xl border bg-card text-left shadow-sm",
        accent
          ? "border-primary/30 bg-primary/5 ring-1 ring-primary/15"
          : "border-border/80",
        compact ? "px-3 py-2.5" : "px-4 py-3",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border",
            accent
              ? "border-primary/25 bg-primary/10 text-primary"
              : "border-border bg-muted/60 text-foreground"
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium tracking-tight text-foreground">
            {title}
          </p>
          <p className="text-small mt-0.5">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function WorkflowConnector({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex h-6 w-full items-center justify-center", className)}
      aria-hidden="true"
    >
      <svg width="2" height="24" className="overflow-visible text-primary/50">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-flow-dash motion-reduce:animate-none"
        />
      </svg>
    </div>
  )
}
