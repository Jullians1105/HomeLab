import { Router } from "express";
import {
  getBreakdown,
  getDisks,
  getLargeFiles,
  getPrediction,
  getStorageOverview,
} from "../controllers/storageController.js";

export const storageRouter = Router();

storageRouter.get("/disks", getDisks);
storageRouter.get("/breakdown", getBreakdown);
storageRouter.get("/prediction", getPrediction);
storageRouter.get("/large-files", getLargeFiles);
storageRouter.get("/", getStorageOverview);
