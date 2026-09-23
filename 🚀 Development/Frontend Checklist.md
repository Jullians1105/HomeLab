---
id: "frontend-checklist"
titulo: "Frontend Checklist"
categoria: "Development"
status: "In Progress"
prioridad: "Alta"
tags: ["#frontend", "#checklist", "#react"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Frontend Checklist

Checklist basado en una revisión directa de `src/` a 22 sep 2026 — no es una lista aspiracional, refleja el código real. Ver contexto narrativo en [[Dashboard Frontend]].

## Setup base

- [x] Vite + React 19 + TypeScript
- [x] `react-router-dom` v7 — routing configurado (`BrowserRouter`, 6 rutas en `App.tsx`)
- [x] Tailwind CSS v4 integrada (`@tailwindcss/vite`, `@import "tailwindcss"`, tokens `@theme` custom) — ver [[Tailwind CSS Integration]]
- [x] `oxlint` configurado como linter
- [ ] `react-router-dom` movido de `devDependencies` a `dependencies` en `package.json`

## Estructura de componentes

- [x] `components/layout/`: `Header.tsx`, `Layout.tsx`, `Sidebar.tsx`
- [x] `components/ui/`: `Card`, `CpuChart`, `MetricCard`, `ProgressBar`, `SectionHeader`, `ServiceStatCard`, `StatusBadge`
- [x] `types/index.ts` — interfaces TS para todos los dominios de datos
- [x] `data/mock.ts` (305 líneas) — datos mock para las 6 pantallas

## Las 6 pantallas — estado de código

- [x] `pages/Overview.tsx` (237 líneas) — la más completa
- [x] `pages/PanelUX.tsx` (123 líneas)
- [x] `pages/Notificaciones.tsx` (103 líneas)
- [x] `pages/Almacenamiento.tsx` (92 líneas)
- [x] `pages/PostgreSQL.tsx` (83 líneas)
- [x] `pages/NotasPrivadas.tsx` (49 líneas) — la menos desarrollada

Todas existen y renderizan con datos mock; ninguna consume datos reales.

## Pendiente — no implementado todavía

- [ ] Capa de datos real: sin `axios` instalado, sin ningún `fetch` en el código, todo importa directo de `data/mock.ts`
- [ ] Estado global: sin Context API ni Zustand — cada página usa `useState` local
- [ ] Librería de gráficos: `CpuChart` es SVG manual; sin Chart.js/Recharts instalados — no escala bien a otras métricas
- [ ] Lucide React: no instalado — los íconos actuales usan `material-symbols-outlined` (Google Material Symbols vía font, no un paquete de íconos React)
- [ ] Testing: sin Vitest/Jest configurado — ver [[Testing Strategy]]
- [ ] Backend/API: no existe — ver [[API Integration]] y [[API Endpoints]]
- [ ] Paleta de color implementada no coincide con la especificación original — ver [[Color Palette & Typography]]

## Relacionadas

- [[Dashboard Frontend]]
- [[Dependencies]]
- [[API Integration]]
