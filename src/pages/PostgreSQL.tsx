import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import SectionHeader from "../components/ui/SectionHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { pgDatabases } from "../data/mock";

export default function PostgreSQL() {
  return (
    <section className="flex flex-col gap-space-sm">
      <SectionHeader
        icon="database"
        title="Bases PostgreSQL"
        right={
          <span className="font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
            {pgDatabases.length} bases monitorizadas
          </span>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        {pgDatabases.map((db) => {
          const connPct = Math.round((db.connections / db.maxConnections) * 100);
          return (
            <Card key={db.id} className="p-space-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{db.name}</h3>
                  <span className="font-mono-metric-sm text-[11px] text-outline">owner: {db.owner}</span>
                </div>
                <StatusBadge status={db.status} />
              </div>

              <div className="grid grid-cols-2 gap-space-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Tamaño</span>
                  <p className="font-mono-metric-md text-mono-metric-md text-on-surface mt-0.5">{db.size}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Consultas/seg</span>
                  <p className="font-mono-metric-md text-mono-metric-md text-on-surface mt-0.5">{db.qps} QPS</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono-metric-sm mb-1 text-on-surface-variant">
                  <span>Conexiones</span>
                  <span className="font-semibold text-on-surface">
                    {db.connections} / {db.maxConnections}
                  </span>
                </div>
                <ProgressBar
                  percent={connPct}
                  color={connPct >= 90 ? "#ba1a1a" : connPct >= 70 ? "#f59e0b" : "#3b82f6"}
                  track="bg-[#f1f5f9]"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono-metric-sm mb-1 text-on-surface-variant">
                  <span>Cache hit ratio</span>
                  <span className="font-semibold text-[#10b981]">{db.cacheHitRatio}%</span>
                </div>
                <ProgressBar percent={db.cacheHitRatio} color="#10b981" track="bg-[#f1f5f9]" />
              </div>

              <div className="pt-space-xs border-t border-[#f1f5f9] flex items-center justify-between">
                <span className="font-body-sm text-[12px] text-on-surface-variant">Replicación</span>
                <span
                  className={`text-[11px] font-mono-metric-sm font-semibold px-2 py-0.5 rounded-full border ${
                    db.replication === "streaming"
                      ? "bg-[#ecfdf5] text-[#065f46] border-[#a7f3d0]"
                      : "bg-[#f1f5f9] text-[#475569] border-[#e2e8f0]"
                  }`}
                >
                  {db.replication === "streaming" ? "Streaming activa" : "Sin réplica"}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
