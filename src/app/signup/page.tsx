import type { Metadata } from "next"
import Link from "next/link"

import { DovenaLogo } from "@/components/layout/DovenaLogo"
import { buttonVariants } from "@/components/ui/button"
import { APP_SEO_DESCRIPTION, APP_SEO_TITLE } from "@/lib/constants"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: APP_SEO_TITLE,
  description: APP_SEO_DESCRIPTION,
}

export default function SignUpPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <DovenaLogo />
      <div className="max-w-md space-y-2">
        <h1 className="text-h2">Sign up coming soon</h1>
        <p className="text-muted text-sm">
          Authentication is not available yet. This is a placeholder route for
          landing page CTAs.
        </p>
      </div>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}>
        Back to home
      </Link>
    </main>
  )
}
