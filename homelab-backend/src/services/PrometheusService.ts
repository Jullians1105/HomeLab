import mockMetrics from "../data/mockMetrics.json" with { type: "json" };
import type { Metrics } from "../types/index.js";

const JITTER = 1.5;

function jitter(value: number): number {
  const delta = (Math.random() * 2 - 1) * JITTER;
  return Math.max(0, Math.round((value + delta) * 10) / 10);
}

/**
 * Simula un scrape de Prometheus sobre las métricas base mock, dando
 * una pequeña variación en cada lectura para que /api/metrics se sienta
 * "vivo" mientras no hay un Prometheus real conectado.
 */
export class PrometheusService {
  scrape(): Metrics {
    const base = mockMetrics as Metrics;
    return {
      cpu: { ...base.cpu, global: jitter(base.cpu.global) },
      ram: { ...base.ram, global: jitter(base.ram.global) },
      storage: { ...base.storage, global: jitter(base.storage.global) },
      bandwidth: { ...base.bandwidth, global: jitter(base.bandwidth.global) },
    };
  }
}

export const prometheusService = new PrometheusService();
