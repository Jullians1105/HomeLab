import type {
  ClientUsage,
  MonthlyKpi,
  NavItem,
  NotificationItem,
  PgDatabase,
  PrivateNote,
  RunningWorkflow,
  ServiceCard,
  StorageVolume,
  SystemMetric,
  TenantClient,
} from "../types";

export const navItems: NavItem[] = [
  { path: "/", label: "Visión General", icon: "grid_view" },
  { path: "/panel-ux", label: "Panel UX", icon: "insights" },
  { path: "/bases-postgresql", label: "Bases PostgreSQL", icon: "database" },
  { path: "/almacenamiento", label: "Almacenamiento", icon: "hard_drive" },
  { path: "/notificaciones", label: "Notificaciones", icon: "notifications" },
  { path: "/notas-privadas", label: "Notas Privadas", icon: "sticky_note_2" },
];

export const systemMetrics: SystemMetric[] = [
  {
    id: "cpu",
    label: "CPU Usage",
    value: "45%",
    percent: 45,
    delta: "+2% 1h",
    deltaDirection: "up",
    deltaTone: "danger",
    footerLeft: "8 cores @ 3.6 GHz",
    footerRight: "Cluster OK",
    accent: "#3b82f6",
    gradientFrom: "#60a5fa",
    gradientTo: "#3b82f6",
  },
  {
    id: "ram",
    label: "Memoria RAM",
    value: "62%",
    percent: 62,
    delta: "+5%",
    deltaDirection: "up",
    deltaTone: "warning",
    footerLeft: "9.9 GB de 16 GB",
    footerRight: "Elevado",
    accent: "#f59e0b",
    gradientFrom: "#fbbf24",
    gradientTo: "#f59e0b",
  },
  {
    id: "storage",
    label: "Almacenamiento NVMe",
    value: "38%",
    percent: 38,
    delta: "-1%",
    deltaDirection: "down",
    deltaTone: "success",
    footerLeft: "760 GB de 2.0 TB",
    footerRight: "ZFS Pool Sano",
    accent: "#10b981",
    gradientFrom: "#34d399",
    gradientTo: "#10b981",
  },
  {
    id: "network",
    label: "Ancho de Banda",
    value: "12%",
    percent: 12,
    delta: "-3%",
    deltaDirection: "down",
    deltaTone: "success",
    footerLeft: "120 Mbps / 1 Gbps",
    footerRight: "Fibra Simétrica",
    accent: "#06b6d4",
    gradientFrom: "#22d3ee",
    gradientTo: "#06b6d4",
  },
];

export const cpuHistory24h = [
  78, 65, 70, 55, 45, 60, 75, 70, 85, 72, 68, 62, 58, 70, 82, 68, 55, 62, 75,
  80, 65, 70, 55, 48,
];

export const serviceCards: ServiceCard[] = [
  { id: "proxmox", name: "Proxmox VE", host: "host: pve-node-01", status: "online", cpu: 34, ram: 56 },
  { id: "n8n", name: "n8n Workflow", host: "host: docker-n8n", status: "online", cpu: 12, ram: 28 },
  { id: "metabase", name: "Metabase BI", host: "host: analytics-lxc", status: "online", cpu: 18, ram: 42 },
  { id: "ollama", name: "Ollama LLM", host: "gpu-node-ai", status: "warning", cpu: 78, ram: 92, tag: "Llama-3-8B" },
  { id: "postgres", name: "PostgreSQL", host: "host: db-cluster-pg", status: "online", cpu: 22, ram: 38 },
];

export const tenantClients: TenantClient[] = [
  { id: "te", initials: "TE", name: "Transportes Elite SAS", workflows: 5, status: "online", uptime: 99.8 },
  { id: "eq", initials: "EQ", name: "EQUIPXA SAS", workflows: 3, status: "online", uptime: 99.9 },
  { id: "li", initials: "LI", name: "La Isla SAS", workflows: 2, status: "online", uptime: 98.5 },
];

export const runningWorkflows: RunningWorkflow[] = [
  {
    id: "wf-001",
    name: "Sync Nextcloud → GESTCON",
    icon: "sync",
    iconColor: "#3b82f6",
    progress: 75,
    detailLeft: "150 archivos de 200 procesados",
    detailRight: "ETL Job #8921",
  },
  {
    id: "wf-002",
    name: "Backup PostgreSQL Clúster",
    icon: "cloud_upload",
    iconColor: "#10b981",
    progress: 45,
    detailLeft: "~2.3 GB de 5.2 GB transferidos (ZSTD)",
    detailRight: "ZFS Snap Target",
  },
  {
    id: "wf-003",
    name: "Ollama: Process LLM Embeddings",
    icon: "psychology",
    iconColor: "#8b5cf6",
    progress: 90,
    detailLeft: "~8,800 tokens completados",
    detailRight: "vllm-embed-02",
  },
];

export const monthlyKpis: MonthlyKpi[] = [
  {
    id: "uptime",
    label: "Uptime Promedio",
    value: "99.4%",
    valueColor: "#10b981",
    footerLeft: "Meta: 99%",
    footerRight: "✓ Cumple",
    footerRightColor: "#10b981",
  },
  {
    id: "clients",
    label: "Clientes Activos",
    value: "3",
    valueColor: "#3b82f6",
    footerLeft: "10 workflows totales",
    footerRight: "+1 cliente (growth)",
    footerRightColor: "#3b82f6",
  },
  {
    id: "workflows",
    label: "Workflows Completados",
    value: "2,847",
    valueColor: "#6366f1",
    footerLeft: "Tasa éxito 99.2%",
    footerRight: "+12% vs mes anterior",
    footerRightColor: "#6366f1",
  },
  {
    id: "savings",
    label: "Costos Ahorrados",
    value: "$2.4M COP",
    valueColor: "#059669",
    footerLeft: "vs VPS en la nube",
    footerRight: "ROI positivo",
    footerRightColor: "#059669",
  },
];

export const pgDatabases: PgDatabase[] = [
  {
    id: "gestcon",
    name: "GESTCON",
    owner: "gestcon_app",
    status: "online",
    size: "18.4 GB",
    connections: 34,
    maxConnections: 100,
    replication: "streaming",
    qps: 142,
    cacheHitRatio: 98.7,
  },
  {
    id: "aiworkspace",
    name: "AIWorkspace",
    owner: "ai_workspace_svc",
    status: "online",
    size: "6.1 GB",
    connections: 12,
    maxConnections: 50,
    replication: "streaming",
    qps: 58,
    cacheHitRatio: 99.2,
  },
  {
    id: "clientes",
    name: "Clientes",
    owner: "crm_readonly",
    status: "warning",
    size: "24.9 GB",
    connections: 47,
    maxConnections: 50,
    replication: "none",
    qps: 210,
    cacheHitRatio: 91.4,
  },
];

export const storageVolumes: StorageVolume[] = [
  { id: "tank-vms", name: "tank/vms", pool: "tank", size: "1.2 TB", used: 58, temperature: 38, health: "healthy" },
  { id: "tank-backups", name: "tank/backups", pool: "tank", size: "800 GB", used: 82, temperature: 41, health: "warning" },
  { id: "tank-ollama-models", name: "tank/ollama-models", pool: "tank", size: "400 GB", used: 96, temperature: 44, health: "full" },
  { id: "fast-postgres", name: "fast/postgres", pool: "fast-nvme", size: "500 GB", used: 34, temperature: 36, health: "healthy" },
  { id: "fast-docker", name: "fast/docker-volumes", pool: "fast-nvme", size: "300 GB", used: 61, temperature: 37, health: "healthy" },
];

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    severity: "critica",
    title: "Ollama: VRAM saturada en gpu-node-ai",
    description: "El modelo Llama-3-8B superó el 90% de uso de RAM sostenido durante 15 minutos.",
    source: "Ollama LLM",
    timestamp: "Hace 8 min",
  },
  {
    id: "n2",
    severity: "advertencia",
    title: "tank/backups al 82% de capacidad",
    description: "Límite operativo proyectado en ~12 días al ritmo actual de snapshots.",
    source: "Almacenamiento ZFS",
    timestamp: "Hace 2 horas",
  },
  {
    id: "n3",
    severity: "advertencia",
    title: "Latencia elevada en Bases PostgreSQL",
    description: "El pool 'Clientes' alcanzó 47/50 conexiones activas.",
    source: "PostgreSQL",
    timestamp: "Hace 5 horas",
  },
  {
    id: "n4",
    severity: "informativa",
    title: "Backup nocturno completado",
    description: "Snapshot ZFS de tank/vms replicado correctamente a almacenamiento externo.",
    source: "n8n Workflow",
    timestamp: "Hace 12 horas",
  },
  {
    id: "n5",
    severity: "resuelta",
    title: "Nodo pve-node-01 reinició inesperadamente",
    description: "Servicio recuperado automáticamente, sin pérdida de datos reportada.",
    source: "Proxmox VE",
    timestamp: "Hace 1 día",
  },
];

export const clientUsage: ClientUsage[] = [
  { id: "te", name: "Transportes Elite SAS", plan: "Multi-tenant", status: "online", executions: 1240, successRate: 99.4, storageGb: 18 },
  { id: "eq", name: "EQUIPXA SAS", plan: "Multi-tenant", status: "online", executions: 860, successRate: 99.8, storageGb: 9 },
  { id: "li", name: "La Isla SAS", plan: "Estándar", status: "online", executions: 420, successRate: 98.1, storageGb: 5 },
];

export const trafficSeries = [12, 18, 15, 22, 30, 26, 34, 28, 40, 36, 44, 38];

export const privateNotes: PrivateNote[] = [
  {
    id: "note-ollama",
    title: "Configurar Ollama con Llama 2 en Proxmox",
    excerpt: "Pasos para desplegar el contenedor LXC con acceso a GPU pass-through y límites de VRAM.",
    tags: ["ollama", "proxmox", "gpu"],
    updatedAt: "Hace 3 días",
  },
  {
    id: "note-n8n-timeout",
    title: "Fix: n8n API timeout con Metabase",
    excerpt: "Aumentar N8N_DEFAULT_TIMEOUT y revisar el pool de conexiones expuesto por Metabase.",
    tags: ["n8n", "metabase", "bugfix"],
    updatedAt: "Hace 5 días",
  },
  {
    id: "note-backup-321",
    title: "Implementar backup 3-2-1 para PostgreSQL",
    excerpt: "3 copias, 2 medios distintos, 1 fuera de sitio. Automatizado vía n8n + rclone.",
    tags: ["postgresql", "backup"],
    updatedAt: "Hace 1 semana",
  },
  {
    id: "note-zfs-raidz2",
    title: "Migración a ZFS RAIDZ2 con discos Exos",
    excerpt: "Checklist de migración del pool actual a RAIDZ2 con 6 discos Exos de 4TB.",
    tags: ["zfs", "storage"],
    updatedAt: "Hace 2 semanas",
  },
  {
    id: "note-checklist-prod",
    title: "Checklist de Puesta en Producción",
    excerpt: "Lista de verificación previa a exponer un nuevo servicio del homelab a clientes.",
    tags: ["ops", "checklist"],
    updatedAt: "Hace 3 semanas",
  },
];
