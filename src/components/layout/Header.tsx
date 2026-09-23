import { Link } from "react-router-dom";

export default function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-surface-container-lowest border-b border-[#e5e7eb] px-gutter-lg">
      <div className="h-full w-full flex items-center justify-between">
        <div className="flex items-center gap-space-lg">
          <Link to="/" className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[20px]">dns</span>
          </Link>
          <div className="flex flex-col justify-center">
            <span className="font-headline-sm text-headline-sm text-on-surface">{title}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono-metric-sm">
              {subtitle}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-[#ecfdf5] border border-[#a7f3d0]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
            </span>
            <span className="font-label-sm text-label-sm text-tertiary font-semibold">Sistema Online</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-on-surface-variant font-mono-metric-sm text-mono-metric-sm px-space-xs">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>Hace 2 minutos</span>
          </div>
          <button
            className="flex items-center justify-center h-8 w-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            title="Refrescar Telemetría"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
          </button>
          <Link
            to="/notificaciones"
            className="flex items-center justify-center h-8 w-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            title="Notificaciones"
          >
            <span className="material-symbols-outlined text-[18px]">notifications</span>
          </Link>
          <div className="h-5 w-[1px] bg-[#e5e7eb] mx-space-xs" />
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
