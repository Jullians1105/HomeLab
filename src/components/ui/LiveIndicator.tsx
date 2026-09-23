export default function LiveIndicator({ isLive }: { isLive: boolean }) {
  return (
    <span
      className={`font-mono-metric-sm text-[11px] flex items-center gap-1 px-2 py-0.5 rounded-full border ${
        isLive
          ? "bg-[#ecfdf5] border-[#a7f3d0] text-[#065f46]"
          : "bg-[#f1f5f9] border-[#e2e8f0] text-[#64748b]"
      }`}
      title={
        isLive
          ? "Datos simulados vía polling al backend (homelab-backend) — aún no es hardware real"
          : "Backend no disponible — mostrando datos mock locales del frontend"
      }
    >
      <span className={`inline-block w-1.5 h-1.5 rounded-full ${isLive ? "bg-[#10b981] animate-pulse" : "bg-[#94a3b8]"}`} />
      {isLive ? "Live (backend)" : "Mock local"}
    </span>
  );
}
