---
id: "git-strategy"
titulo: "Git Strategy"
categoria: "Configuración"
status: "Done"
prioridad: "Media"
tags: ["#git", "#workflow", "#configuracion"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Git Strategy

## Ramas

| Rama | Propósito |
|---|---|
| `main` | Producción. Tags de versión (`v1.0.0`, etc.) |
| `development` | Integración de features antes de pasar a `main` |
| `feature/auth` | Autenticación |
| `feature/api` | Backend / API |
| `feature/obsidian-sync` | Integración con este vault (`gray-matter` + `chokidar`) |
| `docs/obsidian-setup` | Documentación del setup de Obsidian |
| `docs/homelab-specs` | Documentación técnica del homelab |

## Convención de commits — Conventional Commits

| Prefijo | Uso |
|---|---|
| `feat:` | funcionalidad nueva |
| `fix:` | corrección de bug |
| `docs:` | documentación |
| `refactor:` | cambio interno sin alterar comportamiento |
| `chore:` | mantenimiento, dependencias |
| `test:` | pruebas |

## Workflow

1. Crear rama `feature/nombre` desde `development`
2. Commits siguiendo Conventional Commits
3. Push a origin
4. Pull Request hacia `development`
5. Review + merge
6. `development` → `main` cuando esté listo para producción

## Estado actual del repo

Solo existe `main` con un commit (`571113f feat: initialize React app with TypeScript and routing`) — el resto de ramas descritas arriba son la estrategia planeada, no ramas creadas todavía.

## Relacionadas

- [[GitHub Workflow]]
- [[Setup Obsidian]]
