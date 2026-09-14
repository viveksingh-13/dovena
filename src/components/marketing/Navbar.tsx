"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { DovenaLogo } from "@/components/layout/DovenaLogo"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

function useScrolled(threshold = 8) {
  return React.useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("scroll", onStoreChange, { passive: true })
      return () => window.removeEventListener("scroll", onStoreChange)
    },
    () => window.scrollY > threshold,
    () => false
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScrolled()

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Primary"
        className={cn(
          "marketing-container flex h-14 items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-3 shadow-sm backdrop-blur-xl transition-[background-color,box-shadow,border-color] sm:px-4",
          scrolled && "border-border bg-background/90 shadow-md"
        )}
      >
        <Link href="/" className="shrink-0" aria-label="Dovena home">
          <DovenaLogo size="compact" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Log in
          </Link>
          <Link href="/signup" className={buttonVariants({ size: "sm" })}>
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>
                  <DovenaLogo size="compact" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 border-t p-4">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full",
                  })}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ className: "w-full" })}
                >
                  Get Started
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
