import { Router } from "express";
import {
  getActiveQueries,
  getAllDatabases,
  getBackups,
  getConnections,
  getDatabaseByName,
  getSlowQueries,
} from "../controllers/databasesController.js";

export const databasesRouter = Router();

databasesRouter.get("/connections", getConnections);
databasesRouter.get("/queries", getActiveQueries);
databasesRouter.get("/queries-slow", getSlowQueries);
databasesRouter.get("/backups", getBackups);
databasesRouter.get("/:name", getDatabaseByName);
databasesRouter.get("/", getAllDatabases);
