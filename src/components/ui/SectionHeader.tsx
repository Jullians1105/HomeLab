import type { ReactNode } from "react";

export default function SectionHeader({
  icon,
  iconColor = "text-primary",
  title,
  right,
}: {
  icon: string;
  iconColor?: string;
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-space-xs">
        <span className={`material-symbols-outlined ${iconColor} text-[20px]`}>{icon}</span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface">{title}</h2>
      </div>
      {right}
    </div>
  );
}
