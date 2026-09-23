import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`bg-surface-container-lowest border border-[#e5e7eb] rounded-xl shadow-sm ${
        hover ? "hover:shadow-md hover:-translate-y-0.5 transition-all" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
