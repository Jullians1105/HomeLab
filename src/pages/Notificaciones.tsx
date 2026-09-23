import { useMemo, useState } from "react";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import { notifications } from "../data/mock";
import type { NotificationSeverity } from "../types";

const FILTERS: { id: NotificationSeverity | "todas"; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "critica", label: "Críticas" },
  { id: "advertencia", label: "Advertencias" },
  { id: "informativa", label: "Informativas" },
  { id: "resuelta", label: "Resueltas" },
];

const SEVERITY_STYLES: Record<NotificationSeverity, { bg: string; border: string; text: string; icon: string; label: string }> = {
  critica: { bg: "bg-[#fef2f2]", border: "border-[#fecaca]", text: "text-[#991b1b]", icon: "error", label: "Crítica" },
  advertencia: { bg: "bg-[#fffbeb]", border: "border-[#fde68a]", text: "text-[#92400e]", icon: "warning", label: "Advertencia" },
  informativa: { bg: "bg-[#eff6ff]", border: "border-[#bfdbfe]", text: "text-[#1d4ed8]", icon: "info", label: "Info" },
  resuelta: { bg: "bg-[#ecfdf5]", border: "border-[#a7f3d0]", text: "text-[#065f46]", icon: "check_circle", label: "Resuelta" },
};

export default function Notificaciones() {
  const [filter, setFilter] = useState<NotificationSeverity | "todas">("todas");

  const filtered = useMemo(
    () => (filter === "todas" ? notifications : notifications.filter((n) => n.severity === filter)),
    [filter],
  );

  return (
    <section className="flex flex-col gap-space-sm">
      <SectionHeader
        icon="notifications"
        title="Centro de Notificaciones"
        right={
          <button className="font-label-sm text-label-sm font-medium text-primary hover:underline" type="button">
            Marcar leídas
          </button>
        }
      />

      <div className="flex items-center gap-1 self-start bg-[#f1f5f9] p-1 rounded-lg">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1 text-[12px] rounded transition-colors ${
              filter === f.id
                ? "font-semibold bg-[#3b82f6] text-white shadow-xs"
                : "font-medium text-on-surface-variant hover:text-on-surface hover:bg-white"
            }`}
            type="button"
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-space-sm">
        {filtered.map((n) => {
          const s = SEVERITY_STYLES[n.severity];
          return (
            <Card key={n.id} hover={false} className={`p-space-md border-l-4 ${s.border}`}>
              <div className="flex items-start justify-between gap-space-md">
                <div className="flex items-start gap-space-sm min-w-0">
                  <span className={`material-symbols-outlined text-[20px] ${s.text} shrink-0`}>{s.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <h3 className="font-headline-sm text-[14px] font-semibold text-on-surface">{n.title}</h3>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${s.bg} ${s.border} ${s.text}`}>
                        {s.label}
                      </span>
                    </div>
                    <p className="font-body-sm text-[13px] text-on-surface-variant mt-0.5">{n.description}</p>
                    <div className="flex items-center gap-space-sm mt-1.5 font-mono-metric-sm text-[11px] text-outline">
                      <span>{n.source}</span>
                      <span>·</span>
                      <span>{n.timestamp}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    className="text-[11px] font-medium text-on-surface-variant hover:text-on-surface px-2 py-1 rounded hover:bg-surface-container-high transition-colors"
                    type="button"
                  >
                    Posponer 1h
                  </button>
                  <button
                    className="text-[11px] font-medium text-on-surface-variant hover:text-on-surface px-2 py-1 rounded hover:bg-surface-container-high transition-colors"
                    type="button"
                  >
                    Archivar
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
