---
id: "api-integration-notas"
titulo: "API Integration (notas de trabajo)"
categoria: "Notas Privadas/En Progreso"
status: "TODO"
prioridad: "Media"
tags: ["#backend", "#api", "#frontend"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# API Integration — notas de trabajo

Conectar el dashboard (hoy 100% mock, ver [[Dashboard Frontend]]) a datos reales. Planeado para octubre 2026, después de tener infraestructura base (5-10 oct).

## Estado actual

- Backend: **no existe todavía**. Ni carpeta `server/`, ni Express, ni conexión a PostgreSQL en el repo.
- Frontend: consume `src/data/mock.ts` directamente, sin capa de fetch/axios.
- `axios` no instalado — pendiente añadir cuando se empiece el backend.

## Plan (alto nivel)

1. Node 18 + Express + TypeScript + PostgreSQL + Redis como backend.
2. Exponer los endpoints listados en [[API Endpoints]].
3. Integración con Obsidian vía `gray-matter` (parseo de frontmatter) + `chokidar` (watch de cambios en los `.md` de este mismo vault) para que `/api/notes` refleje las notas reales de este repo.
4. Reemplazar imports de `data/mock.ts` en cada página por hooks de fetch (`useEffect` + estado, o migrar a Context/Zustand antes de esto).

## Riesgo conocido

El dashboard lee notas propias del repo (`📌 Notas Privadas/`) vía API — hay que decidir el mecanismo de auth/exposición para no servir este contenido públicamente si el dashboard llega a desplegarse fuera de la red local.

## Relacionadas

- [[API Endpoints]]
- [[Dashboard Frontend]]
- [[Frontend Checklist]]
- [[Deployment Plan]]
