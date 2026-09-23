import { useState } from "react";
import CpuChart from "../components/ui/CpuChart";
import MetricCard from "../components/ui/MetricCard";
import ProgressBar from "../components/ui/ProgressBar";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceStatCard from "../components/ui/ServiceStatCard";
import {
  cpuHistory24h,
  monthlyKpis,
  runningWorkflows,
  serviceCards,
  systemMetrics,
  tenantClients,
} from "../data/mock";

const RANGES = ["24H", "7D", "30D"] as const;

export default function Overview() {
  const [showAlert, setShowAlert] = useState(true);
  const [range, setRange] = useState<(typeof RANGES)[number]>("24H");

  return (
    <>
      {showAlert && (
        <section className="w-full bg-[#fef3c7] border-l-4 border-[#f59e0b] rounded-lg shadow-sm px-space-md py-space-sm flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-space-sm min-w-0">
            <span className="material-symbols-outlined text-[#f59e0b] text-[20px] shrink-0">warning</span>
            <p className="font-body-md text-[13px] text-[#92400e] font-medium truncate">
              <strong>Ollama:</strong> Alto uso de memoria RAM (92%). Considera escalar recursos dedicados o
              descargar modelos inactivos.
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-label-sm text-label-sm px-3 py-1 rounded transition-colors shadow-xs"
              type="button"
            >
              Optimizar memoria
            </button>
            <button
              className="text-[#92400e] hover:text-[#78350f] p-1 rounded hover:bg-[#fde68a] transition-colors flex items-center justify-center"
              onClick={() => setShowAlert(false)}
              title="Descartar alerta"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </section>
      )}

      <section className="flex flex-col gap-space-sm">
        <SectionHeader
          icon="settings_suggest"
          title="Métricas en Tiempo Real"
          right={
            <span className="font-mono-metric-sm text-mono-metric-sm text-on-surface-variant flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary" /> Polling cada 3s
            </span>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {systemMetrics.map((m) => (
            <MetricCard key={m.id} metric={m} />
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-[#e5e7eb] rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-[#f1f5f9] pb-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">monitoring</span>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Uso de CPU (últimas 24 horas)</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Monitoreo continuo de carga promedio agrupado por hora
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 self-start sm:self-auto bg-[#f1f5f9] p-1 rounded-lg">
            {RANGES.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1 text-[12px] rounded transition-colors ${
                  range === r
                    ? "font-semibold bg-[#3b82f6] text-white shadow-xs"
                    : "font-medium text-on-surface-variant hover:text-on-surface hover:bg-white"
                }`}
                type="button"
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <CpuChart values={cpuHistory24h} />
      </section>

      <section className="flex flex-col gap-space-sm">
        <SectionHeader
          icon="dns"
          iconColor="text-[#006947]"
          title="Estado de Servicios"
          right={
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono-metric-sm">
              {serviceCards.length} contenedores core monitorizados
            </span>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
          {serviceCards.map((s) => (
            <ServiceStatCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        <section className="lg:col-span-5 flex flex-col gap-space-sm">
          <SectionHeader
            icon="groups"
            title="Clientes Activos"
            right={
              <span className="bg-[#e0e7ff] text-[#3730a3] text-[11px] font-semibold px-2 py-0.5 rounded-full font-mono-metric-sm">
                {tenantClients.length} Tenants
              </span>
            }
          />
          <div className="flex flex-col gap-space-sm">
            {tenantClients.map((c) => (
              <div
                key={c.id}
                className="bg-surface-container-lowest border border-[#e5e7eb] rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary font-headline-sm">
                      {c.initials}
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-[14px] font-semibold text-on-surface">{c.name}</h3>
                      <span className="font-body-sm text-[12px] text-on-surface-variant">
                        {c.workflows} workflows activos
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                      <span className="font-label-sm text-[11px] font-bold text-[#065f46]">ONLINE</span>
                    </div>
                    <span className="bg-[#ecfdf5] text-[#065f46] text-[10px] font-mono-metric-sm px-1.5 py-0.5 rounded border border-[#a7f3d0]">
                      Uptime: {c.uptime}%
                    </span>
                  </div>
                </div>
                <ProgressBar percent={c.uptime} color="#10b981" />
              </div>
            ))}
          </div>
        </section>

        <section className="lg:col-span-7 flex flex-col gap-space-sm">
          <SectionHeader
            icon="bolt"
            iconColor="text-[#f59e0b]"
            title="Workflows en Ejecución"
            right={
              <span className="font-mono-metric-sm text-mono-metric-sm text-on-surface-variant">
                {runningWorkflows.length} tareas concurrentes
              </span>
            }
          />
          <div className="flex flex-col gap-space-sm">
            {runningWorkflows.map((w) => (
              <div
                key={w.id}
                className="bg-surface-container-lowest border border-[#e5e7eb] rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px]" style={{ color: w.iconColor }}>
                      {w.icon}
                    </span>
                    <span className="font-headline-sm text-[14px] font-semibold text-on-surface">{w.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#ffedd5] text-[#c2410c] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#fed7aa]">
                      EN EJECUCIÓN
                    </span>
                    <span className="font-mono-metric-sm text-[12px] font-bold text-on-surface">{w.progress}%</span>
                  </div>
                </div>
                <ProgressBar percent={w.progress} color={w.iconColor} height="h-2" track="bg-[#f1f5f9]" />
                <div className="flex items-center justify-between text-on-surface-variant font-mono-metric-sm text-[11px]">
                  <span>{w.detailLeft}</span>
                  <span style={{ color: w.iconColor }}>{w.detailRight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-space-sm pt-space-xs">
        <SectionHeader
          icon="bar_chart"
          title="KPIs del Mes"
          right={<span className="text-[12px] font-mono-metric-sm text-on-surface-variant">Período: Mes en curso</span>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {monthlyKpis.map((k) => (
            <div
              key={k.id}
              className="bg-surface-container-lowest border border-[#e5e7eb] rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-outline">{k.label}</span>
                <div className="mt-1">
                  <span className="font-mono-metric-lg text-[28px] font-bold" style={{ color: k.valueColor }}>
                    {k.value}
                  </span>
                </div>
              </div>
              <div className="mt-space-sm pt-space-xs border-t border-[#f1f5f9] flex items-center justify-between text-on-surface-variant text-[12px]">
                <span>{k.footerLeft}</span>
                <span className="font-mono-metric-sm text-[11px] font-semibold" style={{ color: k.footerRightColor }}>
                  {k.footerRight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
