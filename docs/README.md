# Documentación — vault de Obsidian

El vault de Obsidian de este proyecto **vive en la raíz del repo** (`HomeLab/`), no en esta carpeta `docs/`. `docs/` solo contiene este README como punto de entrada rápido para quien clone el repo y no use Obsidian.

## Por qué en la raíz

El usuario abrió Obsidian apuntando a la raíz del repositorio como vault (22 sep 2026), generando `.obsidian/` ahí mismo. Mover las notas a una subcarpeta rompería esa configuración, así que la estructura de notas convive con `src/`, `public/`, etc.

## Estructura (8 carpetas raíz)

| Carpeta | Contenido |
|---|---|
| `📌 Notas Privadas/` | Kanban de trabajo: Alfileres, Urgentes, En Progreso, Completadas, Documentación, Bugs & Issues, Ideas |
| `📚 Documentación Técnica/` | Documentación formal del homelab (Proxmox, VLANs, backups) y de cada servicio (n8n, Metabase, Ollama, PostgreSQL, Proxmox) |
| `🔗 Dashboard Specs/` | Especificación de las 6 pantallas del dashboard + paleta de color y tipografía |
| `🔴 Clientes/` | Una nota por cliente actual de AIWorkspace |
| `⚡ Workflows/` | Catálogo de workflows de n8n (reales o de ejemplo) |
| `📊 Proyectos/` | Un proyecto por iniciativa (AIWorkspace, GESTCON, Dashboard Admin, Portal Cliente, Compass) |
| `🚀 Development/` | Checklist de frontend, endpoints de API, testing, deployment |
| `⚙️ Configuración/` | Estrategia de Git, setup de entorno, dependencias |

## Convención de frontmatter

Toda nota lleva este YAML al inicio:

```yaml
---
id: "kebab-case-unico"
titulo: "Título de la nota"
categoria: "Ruta/De/Carpeta"
status: "TODO" | "In Progress" | "Done"
prioridad: "Alta" | "Media" | "Baja"
tags: ["#tag1", "#tag2"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---
```

Las notas usan wikilinks (`[[Nombre de otra nota]]`) para conectar clientes, specs, checklists y documentación técnica entre sí — el grafo de Obsidian (plugin `graph`, ya habilitado) es útil para navegar estas relaciones.

## Abrir en Obsidian

Ya está configurado: `.obsidian/` existe en la raíz del repo con los plugins core necesarios (file-explorer, graph, backlink, tag-pane, properties, daily-notes, templates, bookmarks, bases, sync, entre otros). Basta con abrir la carpeta `HomeLab/` como vault en Obsidian — no requiere pasos adicionales.

Nota: `.obsidian/workspace.json` y el caché local están excluidos de git (ver `.gitignore`); la configuración compartida (`app.json`, `appearance.json`, `core-plugins.json`) sí está versionada.
