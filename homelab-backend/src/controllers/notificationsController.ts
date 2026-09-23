import type { Request, Response } from "express";
import { notificationsService } from "../services/NotificationsService.js";
import type { NotificationSeverity } from "../types/index.js";

const VALID_SEVERITIES: NotificationSeverity[] = ["critica", "advertencia", "informativa", "resuelta"];

export function getAllNotifications(req: Request, res: Response): void {
  const severity = req.query.severity;
  if (typeof severity === "string" && (VALID_SEVERITIES as string[]).includes(severity)) {
    res.json(notificationsService.getBySeverity(severity as NotificationSeverity).map((n) => n.toJSON()));
    return;
  }
  res.json(notificationsService.getAll().map((n) => n.toJSON()));
}
