import type { ServiceStatus } from "../../types";

const STYLES: Record<ServiceStatus, { bg: string; border: string; text: string; dot: string; label: string }> = {
  online: { bg: "bg-[#ecfdf5]", border: "border-[#a7f3d0]", text: "text-[#065f46]", dot: "bg-[#10b981]", label: "ONLINE" },
  warning: { bg: "bg-[#fffbeb]", border: "border-[#fde68a]", text: "text-[#b45309]", dot: "bg-[#f59e0b]", label: "WARN" },
  offline: { bg: "bg-[#fef2f2]", border: "border-[#fecaca]", text: "text-[#991b1b]", dot: "bg-[#ef4444]", label: "OFFLINE" },
};

export default function StatusBadge({ status, pulse = true }: { status: ServiceStatus; pulse?: boolean }) {
  const s = STYLES[status];
  return (
    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full ${s.bg} border ${s.border}`}>
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${s.dot} opacity-75`} />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${s.dot}`} />
      </span>
      <span className={`text-[10px] font-bold ${s.text}`}>{s.label}</span>
    </div>
  );
}
