---
id: "spec-02-notas-privadas"
titulo: "02 — Notas Privadas"
categoria: "Dashboard Specs"
status: "Layout"
prioridad: "Media"
tags: ["#dashboard", "#spec", "#layout"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# 02 — Notas Privadas

**Estado de diseño**: Layout definido, sin refinar a detalle. Implementada como primer borrador en `src/pages/NotasPrivadas.tsx` (49 líneas — la página menos desarrollada de las 6, ver [[Dashboard Frontend]]).

## Propósito

Vista dentro del dashboard que refleja este mismo vault de Obsidian (`📌 Notas Privadas/`) vía `/api/notes` — ver [[API Endpoints]]. Es la integración más directa entre el código del dashboard y este repo de notas.

## Layout planeado

- Lista de notas agrupadas por carpeta (Alfileres, Urgentes, En Progreso, Completadas, Documentación, Bugs & Issues, Ideas)
- Filtro por status (`TODO` / `In Progress` / `Done`) y por prioridad
- Búsqueda por texto (mapea a `GET /api/notes/search?q=`)
- Vista de detalle de nota individual con su frontmatter renderizado (tags, status, prioridad)

## Pendiente de definir

- [ ] ¿Se permite editar notas desde el dashboard, o es solo lectura? (ver idea en [[Ideas Futuras]] — sincronización bidireccional)
- [ ] Cómo se renderizan wikilinks `[[...]]` dentro del dashboard (¿como links internos de navegación, o texto plano?)

## Relacionadas

- [[API Integration]]
- [[Setup Obsidian]]
- [[Dashboard Frontend]]
