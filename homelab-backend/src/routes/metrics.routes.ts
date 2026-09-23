import { Router } from "express";
import {
  getAllMetrics,
  getBandwidthMetric,
  getCpuMetric,
  getMetricsHistory,
  getRamMetric,
  getStorageMetric,
} from "../controllers/metricsController.js";

export const metricsRouter = Router();

metricsRouter.get("/history", getMetricsHistory);
metricsRouter.get("/cpu", getCpuMetric);
metricsRouter.get("/ram", getRamMetric);
metricsRouter.get("/storage", getStorageMetric);
metricsRouter.get("/bandwidth", getBandwidthMetric);
metricsRouter.get("/", getAllMetrics);
