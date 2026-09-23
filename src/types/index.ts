export type ServiceStatus = "online" | "warning" | "offline";

export interface SystemMetric {
  id: string;
  label: string;
  value: string;
  percent: number;
  delta: string;
  deltaDirection: "up" | "down";
  deltaTone: "success" | "warning" | "danger";
  footerLeft: string;
  footerRight: string;
  accent: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ServiceCard {
  id: string;
  name: string;
  host: string;
  status: ServiceStatus;
  cpu: number;
  ram: number;
  tag?: string;
}

export interface TenantClient {
  id: string;
  initials: string;
  name: string;
  workflows: number;
  status: ServiceStatus;
  uptime: number;
}

export interface RunningWorkflow {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  progress: number;
  detailLeft: string;
  detailRight: string;
}

export interface MonthlyKpi {
  id: string;
  label: string;
  value: string;
  valueColor: string;
  footerLeft: string;
  footerRight: string;
  footerRightColor: string;
}

export interface NavItem {
  path: string;
  label: string;
  icon: string;
}

export interface PgDatabase {
  id: string;
  name: string;
  owner: string;
  status: ServiceStatus;
  size: string;
  connections: number;
  maxConnections: number;
  replication: "streaming" | "none";
  qps: number;
  cacheHitRatio: number;
}

export type VolumeHealth = "healthy" | "warning" | "full";

export interface StorageVolume {
  id: string;
  name: string;
  pool: string;
  size: string;
  used: number;
  temperature: number;
  health: VolumeHealth;
}

export type NotificationSeverity = "critica" | "advertencia" | "informativa" | "resuelta";

export interface NotificationItem {
  id: string;
  severity: NotificationSeverity;
  title: string;
  description: string;
  source: string;
  timestamp: string;
}

export interface ClientUsage {
  id: string;
  name: string;
  plan: string;
  status: ServiceStatus;
  executions: number;
  successRate: number;
  storageGb: number;
}

export interface PrivateNote {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  updatedAt: string;
}
