import type { Service as ServiceData } from "../types/index.js";

const WARNING_THRESHOLD = 75;
const CRITICAL_THRESHOLD = 90;

export class Service {
  constructor(private data: ServiceData) {}

  toJSON(): ServiceData {
    return this.data;
  }

  get isHealthy(): boolean {
    return this.data.status === "online" && this.data.cpu < WARNING_THRESHOLD && this.data.ram < WARNING_THRESHOLD;
  }

  get riskLevel(): "ok" | "warning" | "critical" {
    if (this.data.ram >= CRITICAL_THRESHOLD || this.data.cpu >= CRITICAL_THRESHOLD) return "critical";
    if (this.data.ram >= WARNING_THRESHOLD || this.data.cpu >= WARNING_THRESHOLD) return "warning";
    return "ok";
  }
}
