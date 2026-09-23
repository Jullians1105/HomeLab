---
id: "environment-setup"
titulo: "Environment Setup"
categoria: "Configuración"
status: "Done"
prioridad: "Media"
tags: ["#setup", "#configuracion", "#frontend"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Environment Setup

## Frontend (actual)

```bash
npm install
npm run dev       # Vite dev server
npm run build      # tsc -b && vite build
npm run lint       # oxlint
npm run preview    # preview del build
```

Requisitos: Node.js compatible con Vite 8 / React 19 (Node 18+ recomendado, no verificado con `.nvmrc` — no existe uno en el repo todavía).

## Variables de entorno

Ninguna configurada todavía — no hay archivo `.env` ni `.env.example` en el repo. Se necesitarán cuando exista el backend (ver [[API Integration]]): URL de PostgreSQL, Redis, y probablemente la ruta base de este vault para la integración `gray-matter`/`chokidar`.

## Obsidian

Vault = raíz de este repo. Ver [[Setup Obsidian]] para detalle de plugins habilitados y convención de frontmatter.

## Relacionadas

- [[Dependencies]]
- [[Setup Obsidian]]
- [[Deployment Plan]]
