import { Router } from "express";
import { getHealth, getStatus } from "../controllers/healthController.js";
import { asyncHandler } from "../utils/helpers.js";

export const healthRouter = Router();

healthRouter.get("/health", asyncHandler(getHealth));
healthRouter.get("/status", getStatus);
