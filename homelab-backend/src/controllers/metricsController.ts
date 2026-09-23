import type { Request, Response } from "express";
import { metricsService } from "../services/MetricsService.js";
import { isValidMetricRange } from "../utils/validators.js";

export function getAllMetrics(_req: Request, res: Response): void {
  res.json(metricsService.getAll());
}

export function getCpuMetric(_req: Request, res: Response): void {
  res.json(metricsService.getCpu().toJSON());
}

export function getRamMetric(_req: Request, res: Response): void {
  res.json(metricsService.getRam().toJSON());
}

export function getStorageMetric(_req: Request, res: Response): void {
  res.json(metricsService.getStorage().toJSON());
}

export function getBandwidthMetric(_req: Request, res: Response): void {
  res.json(metricsService.getBandwidth().toJSON());
}

export function getMetricsHistory(req: Request, res: Response): void {
  const range = req.query.range;
  const parsedRange = isValidMetricRange(range) ? range : "24h";
  res.json(metricsService.getHistory(parsedRange));
}
