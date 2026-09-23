const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export type MetricRange = "24h" | "7d" | "30d";

interface BackendMetricData {
  global: number;
  trend: string;
  history24h: number[];
}

export interface BackendMetrics {
  cpu: BackendMetricData;
  ram: BackendMetricData;
  storage: BackendMetricData;
  bandwidth: BackendMetricData;
}

interface MetricsHistoryResponse {
  cpu: number[];
  ram: number[];
  storage: number[];
  bandwidth: number[];
}

export interface BackendService {
  name: string;
  status: "online" | "offline" | "warning";
  uptime: string;
  cpu: number;
  ram: number;
  disk: number;
  lastCheck: string;
}

export interface BackendWorkflow {
  id: string;
  name: string;
  status: "running" | "completed" | "failed";
  progress: number;
  startTime: string;
  estimatedEnd: string;
}

async function getJson<T>(pathname: string, signal?: AbortSignal): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${pathname}`, { signal });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function fetchMetrics(signal?: AbortSignal) {
  return getJson<BackendMetrics>("/api/metrics", signal);
}

export function fetchMetricsHistory(range: MetricRange, signal?: AbortSignal) {
  return getJson<MetricsHistoryResponse>(`/api/metrics/history?range=${range}`, signal);
}

export function fetchServices(signal?: AbortSignal) {
  return getJson<BackendService[]>("/api/services", signal);
}

export function fetchWorkflows(signal?: AbortSignal) {
  return getJson<BackendWorkflow[]>("/api/workflows", signal);
}
