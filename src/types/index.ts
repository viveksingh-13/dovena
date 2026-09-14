export type AutomationStatus =
  | "draft"
  | "active"
  | "paused"
  | "archived"
  | "error"

export type ExecutionStatus =
  | "pending"
  | "running"
  | "succeeded"
  | "failed"
  | "cancelled"

export type IntegrationStatus = "connected" | "disconnected" | "error"

export interface User {
  id: string
  email: string
  name: string
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}

export interface Integration {
  id: string
  name: string
  slug: string
  description?: string
  iconUrl?: string
  status: IntegrationStatus
  connectedAt?: string
}

export interface AutomationStep {
  id: string
  automationId: string
  name: string
  type: string
  order: number
  config: Record<string, unknown>
  integrationId?: string
}

export interface Automation {
  id: string
  name: string
  description?: string
  status: AutomationStatus
  ownerId: string
  steps: AutomationStep[]
  createdAt: string
  updatedAt: string
}

export interface Execution {
  id: string
  automationId: string
  status: ExecutionStatus
  startedAt: string
  finishedAt?: string
  errorMessage?: string
  triggeredBy?: string
}
