export interface MetricData {
  global: number;
  trend: string;
  history24h: number[];
}

export interface Metrics {
  cpu: MetricData;
  ram: MetricData;
  storage: MetricData;
  bandwidth: MetricData;
}

export interface DiskInfo {
  name: string;
  total: number;
  used: number;
  percentage: number;
  type: "SSD" | "HDD";
  readSpeed: string;
  writeSpeed: string;
  status: "ok" | "warning" | "critical";
}

export interface StorageInfo {
  total: {
    bytes: number;
    used: number;
    free: number;
    percentage: number;
  };
  disks: DiskInfo[];
  prediction: {
    nvmeFull: string;
    exosFull: string;
    enterpriseFull: string;
  };
}

export interface DatabaseInfo {
  name: string;
  owner: string;
  size: string;
  tables: number;
  indexes: number;
  lastBackup: string;
  backupSize: string;
}

export interface SlowQuery {
  query: string;
  avgDuration: string;
  calls: number;
}

export interface DatabasesInfo {
  server: {
    host: string;
    version: string;
    uptime: string;
    connections: { current: number; max: number };
  };
  databases: DatabaseInfo[];
  slowQueries: SlowQuery[];
}
