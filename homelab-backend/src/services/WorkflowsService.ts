import mockWorkflows from "../data/mockWorkflows.json" with { type: "json" };
import type { Workflow } from "../types/index.js";

export class WorkflowsService {
  getAll(): Workflow[] {
    return mockWorkflows as Workflow[];
  }

  getById(id: string): Workflow | undefined {
    return this.getAll().find((w) => w.id === id);
  }
}

export const workflowsService = new WorkflowsService();
