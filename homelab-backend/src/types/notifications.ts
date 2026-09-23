export type NotificationSeverity = "critica" | "advertencia" | "informativa" | "resuelta";

export interface Notification {
  id: string;
  severity: NotificationSeverity;
  title: string;
  description: string;
  source: string;
  timestamp: string;
}
