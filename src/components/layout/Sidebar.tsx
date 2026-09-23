import { NavLink } from "react-router-dom";
import { navItems } from "../../data/mock";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[70px] bottom-0 w-60 bg-surface-container-lowest border-r border-[#e5e7eb] z-40 flex flex-col justify-between py-space-md">
      <div className="px-space-sm">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-space-sm px-space-md py-2 rounded transition-colors font-label-md text-label-md ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="px-space-md pt-space-sm border-t border-[#e5e7eb]">
        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
          <span className="font-mono-metric-sm">v2.14.0-stable</span>
          <span className="flex h-2 w-2 rounded-full bg-tertiary" />
        </div>
      </div>
    </aside>
  );
}
