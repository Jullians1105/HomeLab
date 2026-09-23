---
id: "api-endpoints"
titulo: "API Endpoints"
categoria: "Development"
status: "TODO"
prioridad: "Alta"
tags: ["#backend", "#api", "#spec"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# API Endpoints

Especificación de endpoints REST planeados para el backend (Node 18 + Express + TS + PostgreSQL + Redis). **Ninguno está implementado todavía** — no existe backend en el repo. Ver [[API Integration]].

## Notas

Endpoints `/api/notes/*` corresponden a la integración con este vault de Obsidian (`gray-matter` + `chokidar`, ver [[Setup Obsidian]] y [[02-Notas Privadas]]). El resto corresponde a datos operativos del homelab, hoy servidos como mock desde `src/data/mock.ts`.

## Notas (Obsidian sync)

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/notes` | Lista todas las notas |
| GET | `/api/notes/:id` | Detalle de una nota |
| POST | `/api/notes` | Crea una nota |
| PUT | `/api/notes/:id` | Actualiza una nota |
| DELETE | `/api/notes/:id` | Elimina una nota |
| GET | `/api/notes/category/:cat` | Notas por categoría (carpeta) |
| GET | `/api/notes/search?q=` | Búsqueda por texto |

## Homelab / infraestructura

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/services` | Lista de servicios y su estado |
| GET | `/api/services/:name` | Detalle de un servicio |
| GET | `/api/metrics` | Métricas del sistema (CPU/RAM/disco/red) |
| GET | `/api/storage` | Volúmenes de almacenamiento — ver [[06-Almacenamiento]] |
| GET | `/api/databases` | Bases PostgreSQL — ver [[05-PostgreSQL]] |

## Sin endpoint definido todavía

- Notificaciones (ver duda abierta en [[04-Notificaciones]])
- Workflows de n8n (ver [[Workflows/Índice]])
- Clientes/tenants (usados en [[01-Visión General]] y [[03-Panel UX]])

## Relacionadas

- [[API Integration]]
- [[Dashboard Frontend]]
- [[PostgreSQL/Overview]]
