import type { SystemMetric } from "../../types";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

const TONE_STYLES = {
  success: "bg-[#ecfdf5] text-[#065f46] border-[#a7f3d0]",
  warning: "bg-[#fef3c7] text-[#92400e] border-[#fde68a]",
  danger: "bg-[#fee2e2] text-[#991b1b] border-[#fecaca]",
};

export default function MetricCard({ metric }: { metric: SystemMetric }) {
  return (
    <Card className="p-space-md">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-outline">{metric.label}</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-mono-metric-lg text-[32px] leading-tight font-bold" style={{ color: metric.accent }}>
              {metric.value}
            </span>
          </div>
        </div>
        <span className={`${TONE_STYLES[metric.deltaTone]} border text-[11px] font-mono-metric-sm font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5`}>
          <span className="material-symbols-outlined text-[12px]">
            {metric.deltaDirection === "up" ? "arrow_upward" : "arrow_downward"}
          </span>
          {metric.delta}
        </span>
      </div>
      <div className="mt-space-md">
        <ProgressBar percent={metric.percent} gradientFrom={metric.gradientFrom} gradientTo={metric.gradientTo} />
      </div>
      <div className="flex items-center justify-between mt-space-xs text-on-surface-variant font-body-sm text-[12px]">
        <span>{metric.footerLeft}</span>
        <span className="font-mono-metric-sm">{metric.footerRight}</span>
      </div>
    </Card>
  );
}
