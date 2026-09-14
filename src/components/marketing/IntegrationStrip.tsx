import {
  FileSpreadsheet,
  FolderOpen,
  Hash,
  LayoutGrid,
  Mail,
  MessageSquare,
  Target,
  Users,
} from "lucide-react"

import { Reveal } from "@/components/marketing/Reveal"
import { Section } from "@/components/marketing/Section"

const TOOLS = [
  { name: "Gmail", icon: Mail },
  { name: "Google Sheets", icon: FileSpreadsheet },
  { name: "Slack", icon: Hash },
  { name: "Notion", icon: LayoutGrid },
  { name: "Google Drive", icon: FolderOpen },
  { name: "HubSpot", icon: Target },
  { name: "Salesforce", icon: Users },
  { name: "Discord", icon: MessageSquare },
] as const

export function IntegrationStrip() {
  return (
    <Section className="!py-12 sm:!py-14" containerClassName="max-w-5xl">
      <Reveal>
        <p className="text-center text-sm font-medium text-muted-foreground">
          Works with the tools your team already uses.
        </p>
        <div className="mt-6 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max items-center justify-start gap-3 sm:min-w-0 sm:flex-wrap sm:justify-center">
            {TOOLS.map((tool) => (
              <li
                key={tool.name}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-2 text-sm text-foreground/90 shadow-sm"
              >
                <tool.icon
                  className="size-3.5 text-muted-foreground"
                  aria-hidden="true"
                />
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
