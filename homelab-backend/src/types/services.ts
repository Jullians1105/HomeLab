export type ServiceStatus = "online" | "offline" | "warning";

export interface Service {
  name: string;
  status: ServiceStatus;
  uptime: string;
  cpu: number;
  ram: number;
  disk: number;
  lastCheck: string;
}

export type WorkflowStatus = "running" | "completed" | "failed";

export interface Workflow {
  id: string;
  name: string;
  status: WorkflowStatus;
  progress: number;
  startTime: string;
  estimatedEnd: string;
}
