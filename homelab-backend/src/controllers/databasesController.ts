import type { Request, Response } from "express";
import { databasesService } from "../services/DatabasesService.js";
import { notFound } from "../utils/helpers.js";

export function getAllDatabases(_req: Request, res: Response): void {
  res.json(databasesService.getAll());
}

export function getDatabaseByName(req: Request, res: Response): void {
  const db = databasesService.getByName(req.params.name);
  if (!db) return notFound(res, "Base de datos");
  res.json(db);
}

export function getConnections(_req: Request, res: Response): void {
  res.json(databasesService.getConnections());
}

export function getSlowQueries(_req: Request, res: Response): void {
  res.json(databasesService.getSlowQueries());
}

export function getActiveQueries(_req: Request, res: Response): void {
  res.json(databasesService.getActiveQueries());
}

export function getBackups(_req: Request, res: Response): void {
  const backups = databasesService.getAll().databases.map((db) => ({
    database: db.name,
    lastBackup: db.lastBackup,
    backupSize: db.backupSize,
  }));
  res.json(backups);
}
