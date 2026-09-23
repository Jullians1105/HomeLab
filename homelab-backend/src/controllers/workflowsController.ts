import type { Request, Response } from "express";
import { workflowsService } from "../services/WorkflowsService.js";
import { notFound } from "../utils/helpers.js";

export function getAllWorkflows(_req: Request, res: Response): void {
  res.json(workflowsService.getAll());
}

export function getWorkflowById(req: Request, res: Response): void {
  const workflow = workflowsService.getById(req.params.id);
  if (!workflow) return notFound(res, "Workflow");
  res.json(workflow);
}
