import type { Request, Response } from "express";
import { servicesStatusService } from "../services/ServicesStatusService.js";
import { notFound } from "../utils/helpers.js";

export function getAllServices(_req: Request, res: Response): void {
  res.json(servicesStatusService.getAll().map((s) => s.toJSON()));
}

export function getServiceByName(req: Request, res: Response): void {
  const service = servicesStatusService.getByName(req.params.name);
  if (!service) return notFound(res, "Servicio");
  res.json({ ...service.toJSON(), riskLevel: service.riskLevel });
}

export function restartService(req: Request, res: Response): void {
  const result = servicesStatusService.restart(req.params.name);
  if (!result) return notFound(res, "Servicio");
  res.status(202).json(result);
}
