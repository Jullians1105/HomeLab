---
id: "dashboard-frontend"
titulo: "Dashboard Frontend"
categoria: "Notas Privadas/En Progreso"
status: "In Progress"
prioridad: "Alta"
tags: ["#frontend", "#react", "#dashboard"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Dashboard Frontend

Estado real del código en `src/` a 22 sep 2026 (revisado directamente en el repo, no de memoria).

## Lo que SÍ existe hoy

Contrario a lo que se podría asumir en esta etapa, el frontend **ya no es solo el skeleton de Vite** — las 6 pantallas del dashboard tienen un primer borrador funcional con datos mock:

- `src/App.tsx` — routing con `react-router-dom` v7, 6 rutas definidas, todas envueltas en `Layout`
- `src/pages/Overview.tsx` (237 líneas) — la más desarrollada: banner de alerta, sección de métricas en tiempo real, gráfico CPU, tarjetas de servicios, clientes, workflows y KPIs
- `src/pages/PanelUX.tsx` (123 líneas)
- `src/pages/Notificaciones.tsx` (103 líneas)
- `src/pages/Almacenamiento.tsx` (92 líneas)
- `src/pages/PostgreSQL.tsx` (83 líneas)
- `src/pages/NotasPrivadas.tsx` (49 líneas) — la menos desarrollada de las 6
- Componentes compartidos: `Card`, `CpuChart` (SVG hecho a mano, sin librería de gráficos), `MetricCard`, `ProgressBar`, `SectionHeader`, `ServiceStatCard`, `StatusBadge`
- Layout: `Header`, `Layout`, `Sidebar` (navegación fija con `NavLink`, ítems desde `data/mock.ts`)
- `src/types/index.ts` — interfaces TS ya definidas para todos los dominios de datos (métricas, servicios, clientes, workflows, KPIs, PG, storage, notificaciones)
- `src/data/mock.ts` (305 líneas) — todos los datos son **mock**, no hay llamadas a API real

## Lo que falta (honesto, sin inflar)

- [ ] Sin backend — todo consume `data/mock.ts` directamente, ningún fetch/axios
- [ ] `axios` no está instalado (dependencia planeada, no presente en `package.json`)
- [ ] Sin librería de gráficos (Chart.js / Recharts) — `CpuChart` es SVG manual, no escala a otras métricas fácilmente
- [ ] Sin Context API ni Zustand — no hay estado global, cada página maneja su propio `useState`
- [ ] `react-router-dom` está en `devDependencies` en vez de `dependencies` (pendiente de corregir, ver [[Dependencies]])
- [ ] Sin pruebas (no hay Vitest/Jest configurado) — ver [[Testing Strategy]]
- [ ] Paleta de color implementada (`src/index.css`, tokens `@theme` estilo Material You) **no coincide** con la paleta plana especificada originalmente (`#3b82f6` etc.) — ver discrepancia anotada en [[Color Palette & Typography]]

## Checklist de código real

Ver detalle exhaustivo en [[Frontend Checklist]].

## Relacionadas

- [[Tailwind CSS Integration]]
- [[React Project Setup]]
- [[API Integration]]
- [[Frontend Checklist]]
- [[01-Visión General]]
