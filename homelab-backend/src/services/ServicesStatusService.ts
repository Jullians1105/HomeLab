import mockServices from "../data/mockServices.json" with { type: "json" };
import { Service } from "../models/Service.js";
import type { Service as ServiceData } from "../types/index.js";

export class ServicesStatusService {
  getAll(): Service[] {
    return (mockServices as ServiceData[]).map((s) => new Service(s));
  }

  getByName(name: string): Service | undefined {
    return this.getAll().find((s) => s.toJSON().name.toLowerCase() === name.toLowerCase());
  }

  restart(name: string): { name: string; status: "restarting" } | undefined {
    const service = this.getByName(name);
    if (!service) return undefined;
    return { name: service.toJSON().name, status: "restarting" };
  }
}

export const servicesStatusService = new ServicesStatusService();
