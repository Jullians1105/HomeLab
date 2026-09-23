export default function ProgressBar({
  percent,
  color = "#3b82f6",
  gradientFrom,
  gradientTo,
  height = "h-1.5",
  track = "bg-[#e2e8f0]",
}: {
  percent: number;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  height?: string;
  track?: string;
}) {
  const style = gradientFrom && gradientTo
    ? { width: `${percent}%`, backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }
    : { width: `${percent}%`, backgroundColor: color };

  return (
    <div className={`w-full ${track} rounded-full ${height} overflow-hidden`}>
      <div className="h-full rounded-full" style={style} />
    </div>
  );
}
