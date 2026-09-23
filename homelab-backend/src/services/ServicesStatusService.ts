import mockServices from "../data/mockServices.json" with { type: "json" };
import { Service } from "../models/Service.js";
import type { Service as ServiceData } from "../types/index.js";

const JITTER = 3;

function jitter(value: number): number {
  const delta = Math.round((Math.random() * 2 - 1) * JITTER);
  return Math.min(100, Math.max(0, value + delta));
}

export class ServicesStatusService {
  getAll(): Service[] {
    return (mockServices as ServiceData[]).map(
      (s) => new Service({ ...s, cpu: jitter(s.cpu), ram: jitter(s.ram) }),
    );
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
