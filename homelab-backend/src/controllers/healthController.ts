import type { Request, Response } from "express";
import { checkDatabaseConnection } from "../config/database.js";
import { obsidianConfig } from "../config/obsidian.js";
import { checkRedisConnection } from "../config/redis.js";

export async function getHealth(_req: Request, res: Response): Promise<void> {
  const [database, cache] = await Promise.all([checkDatabaseConnection(), checkRedisConnection()]);

  res.json({
    status: "ok",
    mockMode: obsidianConfig.mockMode,
    timestamp: new Date().toISOString(),
    dependencies: {
      database: database ? "connected" : "unavailable (mock mode no lo requiere)",
      cache: cache ? "connected" : "unavailable (mock mode no lo requiere)",
    },
  });
}

export function getStatus(_req: Request, res: Response): void {
  res.json({
    api: "homelab-backend",
    version: process.env.API_VERSION ?? "v1",
    uptime: process.uptime(),
    mockMode: obsidianConfig.mockMode,
  });
}
