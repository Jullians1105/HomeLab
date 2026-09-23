import mockStorage from "../data/mockStorage.json" with { type: "json" };
import type { StorageInfo } from "../types/index.js";

export class StorageService {
  getOverview(): StorageInfo {
    return mockStorage as StorageInfo;
  }

  getDisks() {
    return this.getOverview().disks;
  }

  getBreakdown() {
    const { disks } = this.getOverview();
    return disks.map((disk) => ({
      name: disk.name,
      usedBytes: disk.used,
      percentage: disk.percentage,
    }));
  }

  getPrediction() {
    return this.getOverview().prediction;
  }

  getLargeFiles() {
    return [
      { path: "/mnt/tank/ollama-models/llama-3-8b-instruct.gguf", sizeBytes: 8_540_000_000, modified: "2026-09-18T12:00:00Z" },
      { path: "/mnt/tank/backups/gestcon_full_2026-09-22.sql.gz", sizeBytes: 2_310_000_000, modified: "2026-09-22T02:00:00Z" },
      { path: "/mnt/tank/vms/pve-node-01.qcow2", sizeBytes: 1_980_000_000, modified: "2026-09-21T23:00:00Z" },
      { path: "/mnt/fast/docker-volumes/metabase_data.db", sizeBytes: 412_000_000, modified: "2026-09-23T05:00:00Z" },
      { path: "/mnt/fast/postgres/base/gestcon.tar", sizeBytes: 823_000_000, modified: "2026-09-23T02:00:00Z" },
    ];
  }
}

export const storageService = new StorageService();
