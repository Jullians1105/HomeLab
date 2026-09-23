import type { MetricData } from "../types/index.js";

export class Metric {
  constructor(private data: MetricData) {}

  toJSON(): MetricData {
    return this.data;
  }

  get average(): number {
    const { history24h } = this.data;
    return Number((history24h.reduce((a, b) => a + b, 0) / history24h.length).toFixed(1));
  }

  get peak(): number {
    return Math.max(...this.data.history24h);
  }

  sliceRange(range: "24h" | "7d" | "30d"): number[] {
    const points = { "24h": 24, "7d": 24 * 7, "30d": 24 * 30 }[range];
    const { history24h } = this.data;
    if (points <= history24h.length) return history24h.slice(-points);
    const repeats = Math.ceil(points / history24h.length);
    return Array.from({ length: repeats }, () => history24h).flat().slice(-points);
  }
}
