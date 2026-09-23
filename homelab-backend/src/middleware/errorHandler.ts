import type { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger.js";

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    error: "NotFound",
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
    statusCode: 404,
  });
}

export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
  const message = err instanceof Error ? err.message : "Error interno del servidor";
  logger.error(`${req.method} ${req.originalUrl} → ${message}`, err);
  res.status(500).json({ error: "InternalServerError", message, statusCode: 500 });
}
