import {
  FileSpreadsheet,
  FolderOpen,
  Hash,
  LayoutGrid,
  Mail,
  MessageSquare,
  Target,
  Users,
  Webhook,
  MessagesSquare,
} from "lucide-react"

import { Reveal } from "@/components/marketing/Reveal"
import { Section, SectionHeader } from "@/components/marketing/Section"
import { Card, CardContent } from "@/components/ui/card"

const INTEGRATIONS = [
  {
    name: "Gmail",
    description: "Trigger workflows from incoming emails.",
    icon: Mail,
  },
  {
    name: "Google Sheets",
    description: "Read and update spreadsheet data.",
    icon: FileSpreadsheet,
  },
  {
    name: "Slack",
    description: "Keep your team informed automatically.",
    icon: Hash,
  },
  {
    name: "Notion",
    description: "Sync notes, docs, and task databases.",
    icon: LayoutGrid,
  },
  {
    name: "Google Drive",
    description: "Organize and process files in context.",
    icon: FolderOpen,
  },
  {
    name: "HubSpot",
    description: "Automate CRM updates and outreach.",
    icon: Target,
  },
  {
    name: "Salesforce",
    description: "Keep pipeline data accurate and current.",
    icon: Users,
  },
  {
    name: "Discord",
    description: "Notify communities when work moves.",
    icon: MessageSquare,
  },
  {
    name: "Microsoft Teams",
    description: "Coordinate updates across channels.",
    icon: MessagesSquare,
  },
  {
    name: "Webhook",
    description: "Connect any custom system or API.",
    icon: Webhook,
  },
] as const

export function Integrations() {
  return (
    <Section id="integrations">
      <Reveal>
        <SectionHeader
          title="Connect Dovena to your workflow."
          description="Bring your favorite tools together and let Dovena orchestrate the work between them."
        />
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {INTEGRATIONS.map((integration, index) => (
          <Reveal
            key={integration.name}
            delayMs={(index % 5) * 50}
            className="h-full"
          >
            <Card className="h-full border-border/70 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md motion-reduce:hover:translate-y-0">
              <CardContent className="flex h-full flex-col gap-3 pt-1">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary">
                  <integration.icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {integration.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
