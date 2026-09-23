import type { ServiceCard as ServiceCardType } from "../../types";
import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";

function metricTone(value: number) {
  if (value >= 90) return { text: "text-[#ba1a1a]", bar: "#ba1a1a" };
  if (value >= 70) return { text: "text-[#f59e0b]", bar: "#f59e0b" };
  return { text: "text-on-surface", bar: "#3b82f6" };
}

export default function ServiceStatCard({ service }: { service: ServiceCardType }) {
  const isWarning = service.status === "warning";
  const cpuTone = metricTone(service.cpu);
  const ramTone = metricTone(service.ram);

  return (
    <div
      className={`bg-surface-container-lowest border rounded-xl p-space-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-[175px] relative overflow-hidden ${
        isWarning ? "border-[#fde68a] bg-gradient-to-b from-[#fffbeb]/40 to-transparent" : "border-[#e5e7eb]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-[15px] font-semibold text-on-surface truncate">{service.name}</span>
          <StatusBadge status={service.status} />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono-metric-sm text-[11px] text-outline">{service.host}</span>
          {service.tag && (
            <span className="text-[9px] font-mono-metric-sm px-1 rounded bg-[#f1f5f9] text-[#475569] font-medium">
              {service.tag}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-2 mt-2">
        <div>
          <div className="flex justify-between text-[11px] font-mono-metric-sm mb-1 text-on-surface-variant">
            <span>CPU</span>
            <span className={`font-semibold ${cpuTone.text}`}>{service.cpu}%</span>
          </div>
          <ProgressBar percent={service.cpu} color={cpuTone.bar} track="bg-[#f1f5f9]" />
        </div>
        <div>
          <div className="flex justify-between text-[11px] font-mono-metric-sm mb-1 text-on-surface-variant">
            <span>RAM</span>
            <span className={`font-semibold ${ramTone.text}`}>{service.ram}%</span>
          </div>
          <ProgressBar percent={service.ram} color={ramTone.bar} track="bg-[#f1f5f9]" />
        </div>
      </div>
    </div>
  );
}
