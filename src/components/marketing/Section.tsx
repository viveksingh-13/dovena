import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("marketing-section scroll-mt-24", className)}>
      <div className={cn("marketing-container", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-h2 text-balance">{title}</h2>
      {description ? (
        <p className="text-muted mt-4 text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
