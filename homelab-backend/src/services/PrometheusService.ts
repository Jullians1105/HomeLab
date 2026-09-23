import mockMetrics from "../data/mockMetrics.json" with { type: "json" };
import type { Metrics } from "../types/index.js";

const JITTER = 1.5;
const HISTORY_JITTER = 1;

function jitter(value: number, amount = JITTER): number {
  const delta = (Math.random() * 2 - 1) * amount;
  return Math.max(0, Math.round((value + delta) * 10) / 10);
}

function jitterHistory(history: number[]): number[] {
  return history.map((v) => jitter(v, HISTORY_JITTER));
}

/**
 * Simula un scrape de Prometheus sobre las métricas base mock: cada lectura
 * (global y el historial completo) recibe una pequeña variación aleatoria,
 * para que el polling desde el frontend se sienta "vivo" mientras no hay un
 * Prometheus/Proxmox real conectado. Al llegar hardware real, solo hay que
 * reemplazar el cuerpo de este método por la consulta real — controllers,
 * rutas y frontend quedan iguales.
 */
export class PrometheusService {
  scrape(): Metrics {
    const base = mockMetrics as Metrics;
    return {
      cpu: { ...base.cpu, global: jitter(base.cpu.global), history24h: jitterHistory(base.cpu.history24h) },
      ram: { ...base.ram, global: jitter(base.ram.global), history24h: jitterHistory(base.ram.history24h) },
      storage: {
        ...base.storage,
        global: jitter(base.storage.global),
        history24h: jitterHistory(base.storage.history24h),
      },
      bandwidth: {
        ...base.bandwidth,
        global: jitter(base.bandwidth.global),
        history24h: jitterHistory(base.bandwidth.history24h),
      },
    };
  }
}

export const prometheusService = new PrometheusService();
