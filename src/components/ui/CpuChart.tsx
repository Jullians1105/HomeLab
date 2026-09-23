import { useMemo } from "react";

const HOURS = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"];

function buildPath(values: number[]) {
  const xStep = 940 / (values.length - 1);
  const points = values.map((v, i) => ({
    x: 50 + i * xStep,
    y: 260 - (v / 100) * 240,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return { d, points };
}

export default function CpuChart({ values }: { values: number[] }) {
  const { d, points } = useMemo(() => buildPath(values), [values]);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  const avgY = 260 - (avg / 100) * 240;
  const peakIndex = values.indexOf(Math.max(...values));
  const peak = points[peakIndex];

  const gridLines = [
    { y: 20, label: "100%" },
    { y: 80, label: "75%" },
    { y: 140, label: "50%" },
    { y: 200, label: "25%" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <svg className="w-full h-56 sm:h-72" preserveAspectRatio="none" viewBox="0 0 1000 320">
        <defs>
          <linearGradient id="cpuGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridLines.map((g) => (
          <g key={g.label}>
            <line stroke="#f1f5f9" strokeDasharray="3,3" strokeWidth="1" x1="45" x2="990" y1={g.y} y2={g.y} />
            <text fill="#94a3b8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="35" y={g.y + 4}>
              {g.label}
            </text>
          </g>
        ))}
        <line stroke="#e2e8f0" strokeWidth="1" x1="45" x2="990" y1="260" y2="260" />
        <text fill="#94a3b8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="35" y="264">
          0%
        </text>

        <line stroke="#f59e0b" strokeDasharray="4,4" strokeWidth="1.5" x1="45" x2="990" y1={avgY} y2={avgY} />
        <rect fill="#fffbeb" height="20" rx="4" stroke="#fde68a" strokeWidth="1" width="95" x="890" y={avgY - 10} />
        <text fill="#b45309" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600" textAnchor="middle" x="937" y={avgY + 4}>
          Promedio: {avg}%
        </text>

        <path d={`${d} L 990 260 L 50 260 Z`} fill="url(#cpuGradient)" />
        <path d={d} fill="none" stroke="#3b82f6" strokeWidth="2.5" />

        <circle cx={peak.x} cy={peak.y} fill="#3b82f6" r="6" stroke="#ffffff" strokeWidth="2.5" />
        <circle className="animate-ping" cx={peak.x} cy={peak.y} fill="none" r="10" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1.5" />

        {HOURS.map((h, i) => (
          <text
            key={h}
            fill="#64748b"
            fontFamily="JetBrains Mono"
            fontSize="11"
            textAnchor={i === HOURS.length - 1 ? "end" : i === 0 ? "start" : "middle"}
            x={i === HOURS.length - 1 ? 990 : 50 + i * (940 / 6)}
            y="285"
          >
            {h}
          </text>
        ))}
      </svg>
    </div>
  );
}
