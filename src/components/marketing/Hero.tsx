import Link from "next/link"
import { Sparkles } from "lucide-react"

import { ProductPreview } from "@/components/marketing/ProductPreview"
import { Reveal } from "@/components/marketing/Reveal"
import { buttonVariants } from "@/components/ui/button"
import { APP_TAGLINE } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-8 sm:pt-16 sm:pb-12">
      <div
        className="pointer-events-none absolute inset-0 surface-grid opacity-70 dark:opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="marketing-container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            AI-powered work automation
          </div>

          <h1 className="text-display">{APP_TAGLINE}</h1>

          <p className="text-muted mx-auto mt-5 max-w-2xl text-base sm:text-lg">
            Describe what you want automated. Dovena builds the workflow,
            connects your tools, and runs it for you.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-5 text-sm sm:min-w-44"
              )}
            >
              Start Automating
            </Link>
            <a
              href="#how-it-works"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-5 text-sm sm:min-w-44"
              )}
            >
              See How It Works
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required
          </p>
        </Reveal>

        <Reveal className="mt-12 sm:mt-14" delayMs={120}>
          <ProductPreview />
        </Reveal>
      </div>
    </section>
  )
}
