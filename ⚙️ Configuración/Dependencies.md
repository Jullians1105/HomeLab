---
id: "dependencies"
titulo: "Dependencies"
categoria: "Configuración"
status: "In Progress"
prioridad: "Media"
tags: ["#configuracion", "#dependencias", "#frontend"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Dependencies

Estado real de `package.json` a 22 sep 2026.

## Dependencies

| Paquete | Versión |
|---|---|
| `react` | ^19.2.8 |
| `react-dom` | ^19.2.8 |

## devDependencies

| Paquete | Versión |
|---|---|
| `@tailwindcss/vite` | ^4.3.3 |
| `@types/node` | ^24.13.3 |
| `@types/react` | ^19.2.18 |
| `@types/react-dom` | ^19.2.7 |
| `@vitejs/plugin-react` | ^6.1.1 |
| `oxlint` | ^1.81.0 |
| `react-router-dom` | ^7.18.4 |
| `tailwindcss` | ^4.3.3 |
| `typescript` | ~6.0.2 |
| `vite` | ^8.3.0 |

## Problema detectado

`react-router-dom` está en `devDependencies` cuando debería estar en `dependencies` — es una librería de runtime (se usa en `main.tsx`/`App.tsx`, no solo en build/dev). No rompe nada localmente con Vite, pero es incorrecto para un build de producción estricto. Ver seguimiento en [[Bugs & Issues/Índice]].

## Pendientes de instalar (planeadas, no presentes)

- `axios` — para consumir la futura API (ver [[API Integration]])
- `chart.js` o `recharts` — para reemplazar el `CpuChart` hecho a mano
- `lucide-react` — íconos (actualmente se usa `material-symbols-outlined` vía Google Fonts, no un paquete React)
- Estado global: `zustand` (o Context API sin dependencia extra — a decidir)
- Backend (paquete separado, no en este `package.json`): `express`, `pg`, `redis`, `gray-matter`, `chokidar`

## Relacionadas

- [[Frontend Checklist]]
- [[Environment Setup]]
