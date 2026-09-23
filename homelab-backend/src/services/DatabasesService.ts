import mockDatabases from "../data/mockDatabases.json" with { type: "json" };
import type { DatabasesInfo } from "../types/index.js";

export class DatabasesService {
  getAll(): DatabasesInfo {
    return mockDatabases as DatabasesInfo;
  }

  getByName(name: string) {
    return this.getAll().databases.find((db) => db.name.toLowerCase() === name.toLowerCase());
  }

  getConnections() {
    return this.getAll().server.connections;
  }

  getSlowQueries() {
    return this.getAll().slowQueries;
  }

  getActiveQueries() {
    return [
      { pid: 4821, database: "GESTCON", query: "SELECT * FROM facturas WHERE estado = 'pendiente'", duration: "45ms", state: "active" },
      { pid: 4822, database: "AIWorkspace", query: "INSERT INTO ejecuciones (workflow_id, status) VALUES ($1, $2)", duration: "12ms", state: "active" },
      { pid: 4809, database: "Clientes", query: "SELECT COUNT(*) FROM sesiones WHERE last_seen > NOW() - INTERVAL '5 min'", duration: "8ms", state: "idle" },
    ];
  }
}

export const databasesService = new DatabasesService();
