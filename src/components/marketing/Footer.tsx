import Link from "next/link"

import { DovenaLogo } from "@/components/layout/DovenaLogo"
import { Separator } from "@/components/ui/separator"
import { APP_TAGLINE } from "@/lib/constants"

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Automations", href: "#product" },
      { label: "AI Assistant", href: "#workforce" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales", href: "#solutions" },
      { label: "Support", href: "#solutions" },
      { label: "Marketing", href: "#solutions" },
      { label: "Operations", href: "#solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/signup" },
      { label: "Help Center", href: "/signup" },
      { label: "Blog", href: "/signup" },
      { label: "Contact", href: "/signup" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/signup" },
      { label: "Careers", href: "/signup" },
      { label: "Privacy", href: "/signup" },
      { label: "Terms", href: "/signup" },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="marketing-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" aria-label="Dovena home">
              <DovenaLogo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {APP_TAGLINE}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold tracking-tight">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © 2026 Dovena. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
