import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import SectionHeader from "../components/ui/SectionHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { clientUsage, trafficSeries } from "../data/mock";

const analyticsKpis = [
  { id: "executions", label: "Ejecuciones", value: "2,520", tone: "#3b82f6", footer: "Mediana 142ms" },
  { id: "success", label: "Tasa Éxito", value: "99.2%", tone: "#10b981", footer: "Umbral 250ms" },
  { id: "users", label: "Usuarios Únicos", value: "18", tone: "#8b5cf6", footer: "Multi-tenant" },
  { id: "sessions", label: "Sesiones", value: "312", tone: "#06b6d4", footer: "Hace 3 min" },
];

function TrafficBars({ values }: { values: number[] }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-1.5 h-32">
      {values.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t bg-gradient-to-t from-[#3b82f6] to-[#60a5fa]"
            style={{ height: `${(v / max) * 100}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export default function PanelUX() {
  return (
    <>
      <section className="flex flex-col gap-space-sm">
        <SectionHeader icon="insights" title="Panel UX & Analytics" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {analyticsKpis.map((k) => (
            <Card key={k.id} className="p-space-md flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">{k.label}</span>
              <span className="font-mono-metric-lg text-[28px] font-bold mt-1" style={{ color: k.tone }}>
                {k.value}
              </span>
              <span className="font-mono-metric-sm text-[11px] text-on-surface-variant mt-space-xs pt-space-xs border-t border-[#f1f5f9]">
                {k.footer}
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-[#e5e7eb] rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Distribución de llamadas al orquestador n8n
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Tráfico agrupado por día del mes</p>
        </div>
        <TrafficBars values={trafficSeries} />
        <div className="flex items-center justify-between font-mono-metric-sm text-[11px] text-outline">
          <span>Día 01</span>
          <span>Día 08</span>
          <span>Día 15</span>
          <span>Día 22</span>
          <span>Día 30</span>
        </div>
      </section>

      <section className="flex flex-col gap-space-sm">
        <SectionHeader
          icon="groups"
          title="Consumo por Cliente"
          right={
            <span className="font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
              Acumuladas este mes de facturación
            </span>
          }
        />
        <Card hover={false} className="overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f8fafc] text-[11px] uppercase tracking-wider text-[#64748b] font-label-sm">
                <th className="px-space-md py-space-sm font-medium">Cliente</th>
                <th className="px-space-md py-space-sm font-medium">Plan</th>
                <th className="px-space-md py-space-sm font-medium">Estado</th>
                <th className="px-space-md py-space-sm font-medium">Ejecuciones</th>
                <th className="px-space-md py-space-sm font-medium">Tasa Éxito</th>
                <th className="px-space-md py-space-sm font-medium">Almacenamiento</th>
              </tr>
            </thead>
            <tbody>
              {clientUsage.map((c) => (
                <tr key={c.id} className="border-t border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                  <td className="px-space-md py-space-sm font-medium text-on-surface text-[13px]">{c.name}</td>
                  <td className="px-space-md py-space-sm">
                    <span className="text-[11px] font-mono-metric-sm px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#475569]">
                      {c.plan}
                    </span>
                  </td>
                  <td className="px-space-md py-space-sm">
                    <StatusBadge status={c.status} pulse={false} />
                  </td>
                  <td className="px-space-md py-space-sm font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
                    {c.executions.toLocaleString("es-CO")}
                  </td>
                  <td className="px-space-md py-space-sm w-32">
                    <div className="flex items-center gap-space-sm">
                      <div className="flex-1">
                        <ProgressBar percent={c.successRate} color="#10b981" track="bg-[#f1f5f9]" />
                      </div>
                      <span className="font-mono-metric-sm text-[11px] text-on-surface-variant">{c.successRate}%</span>
                    </div>
                  </td>
                  <td className="px-space-md py-space-sm font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
                    {c.storageGb} GB
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </>
  );
}
