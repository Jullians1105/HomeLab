---
id: "spec-05-postgresql"
titulo: "05 — PostgreSQL"
categoria: "Dashboard Specs"
status: "Layout"
prioridad: "Media"
tags: ["#dashboard", "#spec", "#layout", "#postgresql"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# 05 — PostgreSQL

**Estado de diseño**: Layout definido. Implementada como primer borrador en `src/pages/PostgreSQL.tsx` (83 líneas, ver [[Dashboard Frontend]]). Ruta: `/bases-postgresql`, título "Bases PostgreSQL", subtítulo "Homelab | Clústeres de base de datos".

## Propósito

Monitoreo de las instancias/bases PostgreSQL del homelab. Ver contexto técnico en [[PostgreSQL/Overview]].

## Layout planeado

Por cada base (`PgDatabase` en `types/index.ts`):

- Nombre, owner, estado (online/warning/offline)
- Tamaño
- Conexiones actuales / máximas
- Replicación (`streaming` / `none`)
- QPS (queries por segundo)
- Cache hit ratio

## Pendiente de definir

- [ ] Conexión real — hoy `pgDatabases` en `data/mock.ts` es 100% inventado, no hay ninguna instancia PostgreSQL corriendo todavía
- [ ] Cómo se obtienen estas métricas en producción (¿`pg_stat_activity`? ¿extensión de monitoreo tipo `pg_stat_statements`?)
- [ ] Alcance: ¿esta pantalla muestra solo la PostgreSQL de clientes (VLAN 30), o también la personal (VLAN 40) y la del backend del dashboard?

## Relacionadas

- [[PostgreSQL/Overview]]
- [[API Endpoints]]
- [[Dashboard Frontend]]
