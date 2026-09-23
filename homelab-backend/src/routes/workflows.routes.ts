import { Router } from "express";
import { getAllWorkflows, getWorkflowById } from "../controllers/workflowsController.js";

export const workflowsRouter = Router();

workflowsRouter.get("/:id", getWorkflowById);
workflowsRouter.get("/", getAllWorkflows);
