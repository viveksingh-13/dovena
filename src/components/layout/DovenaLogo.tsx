import { cn } from "@/lib/utils"
import { APP_NAME } from "@/lib/constants"

type DovenaLogoProps = {
  size?: "default" | "compact"
  monochrome?: boolean
  className?: string
}

function LogoMark({
  size,
  monochrome,
}: {
  size: "default" | "compact"
  monochrome?: boolean
}) {
  const dimension = size === "compact" ? 20 : 28

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        "shrink-0",
        monochrome ? "text-foreground" : "text-primary"
      )}
    >
      {/* Minimal geometric mark: nodes + flow path */}
      <rect
        x="2.75"
        y="2.75"
        width="22.5"
        height="22.5"
        rx="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="9.5" cy="14" r="2" fill="currentColor" />
      <circle cx="18.5" cy="9.5" r="2" fill="currentColor" />
      <circle cx="18.5" cy="18.5" r="2" fill="currentColor" />
      <path
        d="M11.2 13.2L16.6 10.3M11.2 14.8L16.6 17.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DovenaLogo({
  size = "default",
  monochrome = false,
  className,
}: DovenaLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground",
        className
      )}
      aria-label={APP_NAME}
    >
      <LogoMark size={size} monochrome={monochrome} />
      <span
        className={cn(
          "font-semibold tracking-tight",
          size === "compact" ? "text-base" : "text-xl"
        )}
      >
        {APP_NAME}
      </span>
    </div>
  )
}
