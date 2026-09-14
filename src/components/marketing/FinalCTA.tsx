import Link from "next/link"

import { Reveal } from "@/components/marketing/Reveal"
import { Section } from "@/components/marketing/Section"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FinalCTA() {
  return (
    <Section id="pricing" className="relative overflow-hidden pb-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full text-primary/20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-flow"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M8 8h20M36 8h20M8 32h20M36 32h20M8 56h20M36 56h20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                className="animate-flow-dash motion-reduce:animate-none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-flow)" opacity="0.35" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_12%,transparent),transparent_70%)]" />
      </div>

      <Reveal>
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-border/80 bg-card/90 px-6 py-12 text-center shadow-lg backdrop-blur sm:px-10 sm:py-14">
          <h2 className="text-h1">Stop doing repetitive work.</h2>
          <p className="text-muted mx-auto mt-4 max-w-xl">
            Tell Dovena what needs to get done. Let AI handle the rest.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-5 sm:min-w-44"
              )}
            >
              Start Automating
            </Link>
            <a
              href="#product"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-5 sm:min-w-44"
              )}
            >
              Explore Dovena
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
