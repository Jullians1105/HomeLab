import type { Request, Response } from "express";
import { storageService } from "../services/StorageService.js";

export function getStorageOverview(_req: Request, res: Response): void {
  res.json(storageService.getOverview());
}

export function getDisks(_req: Request, res: Response): void {
  res.json(storageService.getDisks());
}

export function getBreakdown(_req: Request, res: Response): void {
  res.json(storageService.getBreakdown());
}

export function getPrediction(_req: Request, res: Response): void {
  res.json(storageService.getPrediction());
}

export function getLargeFiles(_req: Request, res: Response): void {
  res.json(storageService.getLargeFiles());
}
