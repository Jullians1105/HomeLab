import { Metric } from "../models/Metric.js";
import { prometheusService } from "./PrometheusService.js";
import type { Metrics } from "../types/index.js";

export type MetricRange = "24h" | "7d" | "30d";

export class MetricsService {
  getAll(): Metrics {
    return prometheusService.scrape();
  }

  getCpu() {
    return new Metric(this.getAll().cpu);
  }

  getRam() {
    return new Metric(this.getAll().ram);
  }

  getStorage() {
    return new Metric(this.getAll().storage);
  }

  getBandwidth() {
    return new Metric(this.getAll().bandwidth);
  }

  getHistory(range: MetricRange) {
    const metrics = this.getAll();
    return {
      cpu: new Metric(metrics.cpu).sliceRange(range),
      ram: new Metric(metrics.ram).sliceRange(range),
      storage: new Metric(metrics.storage).sliceRange(range),
      bandwidth: new Metric(metrics.bandwidth).sliceRange(range),
    };
  }
}

export const metricsService = new MetricsService();
