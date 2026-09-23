import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import SectionHeader from "../components/ui/SectionHeader";
import { storageVolumes } from "../data/mock";
import type { VolumeHealth } from "../types";

const HEALTH_STYLES: Record<VolumeHealth, { bg: string; border: string; text: string; label: string; bar: string }> = {
  healthy: { bg: "bg-[#ecfdf5]", border: "border-[#a7f3d0]", text: "text-[#065f46]", label: "Saludable", bar: "#10b981" },
  warning: { bg: "bg-[#fffbeb]", border: "border-[#fde68a]", text: "text-[#b45309]", label: "Atención media", bar: "#f59e0b" },
  full: { bg: "bg-[#fef2f2]", border: "border-[#fecaca]", text: "text-[#991b1b]", label: "Lleno", bar: "#ba1a1a" },
};

export default function Almacenamiento() {
  return (
    <>
      <section className="w-full bg-[#fef3c7] border-l-4 border-[#f59e0b] rounded-lg shadow-sm px-space-md py-space-sm flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-[#f59e0b] text-[20px] shrink-0">warning</span>
        <p className="font-body-md text-[13px] text-[#92400e] font-medium">
          <strong>tank/ollama-models:</strong> Límite operativo proyectado en ~6 días. Modelos no referenciados en 45
          días detectados — considera aplicar rotación automatizada gzip.
        </p>
      </section>

      <section className="flex flex-col gap-space-sm">
        <SectionHeader
          icon="hard_drive"
          title="Almacenamiento ZFS"
          right={
            <span className="font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
              {storageVolumes.length} volúmenes
            </span>
          }
        />
        <Card hover={false} className="overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f8fafc] text-[11px] uppercase tracking-wider text-[#64748b] font-label-sm">
                <th className="px-space-md py-space-sm font-medium">Volumen</th>
                <th className="px-space-md py-space-sm font-medium">Tamaño</th>
                <th className="px-space-md py-space-sm font-medium">Uso</th>
                <th className="px-space-md py-space-sm font-medium">Temperatura</th>
                <th className="px-space-md py-space-sm font-medium">Estado</th>
                <th className="px-space-md py-space-sm font-medium text-right">Acción</th>
              </tr>
            </thead>
            <tbody>
              {storageVolumes.map((v) => {
                const h = HEALTH_STYLES[v.health];
                return (
                  <tr key={v.id} className="border-t border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                    <td className="px-space-md py-space-sm">
                      <span className="font-mono-metric-sm text-mono-metric-sm text-on-surface font-medium">
                        {v.name}
                      </span>
                    </td>
                    <td className="px-space-md py-space-sm font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
                      {v.size}
                    </td>
                    <td className="px-space-md py-space-sm w-40">
                      <div className="flex items-center gap-space-sm">
                        <div className="flex-1">
                          <ProgressBar percent={v.used} color={h.bar} track="bg-[#f1f5f9]" />
                        </div>
                        <span className="font-mono-metric-sm text-[11px] text-on-surface-variant w-8">{v.used}%</span>
                      </div>
                    </td>
                    <td className="px-space-md py-space-sm font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
                      {v.temperature}°C
                    </td>
                    <td className="px-space-md py-space-sm">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${h.bg} ${h.border} ${h.text}`}>
                        {h.label}
                      </span>
                    </td>
                    <td className="px-space-md py-space-sm text-right">
                      <button
                        className="text-[12px] font-label-sm font-medium text-primary hover:underline"
                        type="button"
                      >
                        Aplicar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </section>
    </>
  );
}
