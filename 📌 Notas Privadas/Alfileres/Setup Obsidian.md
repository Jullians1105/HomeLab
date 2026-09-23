---
id: "setup-obsidian"
titulo: "Setup Obsidian"
categoria: "Notas Privadas/Alfileres"
status: "In Progress"
prioridad: "Alta"
tags: ["#obsidian", "#setup", "#meta"]
pinned: true
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Setup Obsidian

El vault de Obsidian **es la raíz de este repo** (`HomeLab/`), no una subcarpeta `docs/obsidian/`. Esto permite versionar las notas junto al código y usar wikilinks entre specs, clientes y checklists de desarrollo.

## Estado actual

- [x] `.obsidian/` creado al abrir la carpeta del repo como vault (22 sep 2026)
- [x] Plugins core habilitados: file-explorer, global-search, graph, backlink, canvas, tag-pane, properties, daily-notes, templates, bookmarks, outline, bases, sync
- [x] Estructura de 8 carpetas raíz generada (ver [[Documentación]])
- [ ] Configurar plantilla (template) estándar de frontmatter en el plugin Templates
- [ ] Revisar plugins community (Dataview, Templater) — evaluar si se necesitan
- [ ] Configurar Daily Notes (carpeta destino, formato de fecha)

## Convención de frontmatter

Todas las notas usan este YAML:

```yaml
id: "kebab-case-unico"
titulo: "Título de la nota"
categoria: "Ruta/De/Carpeta"
status: "TODO" | "In Progress" | "Done"
prioridad: "Alta" | "Media" | "Baja"
tags: ["#tag1", "#tag2"]
pinned: false
archived: false
created: "ISO 8601"
modified: "ISO 8601"
```

## Notas relacionadas

- [[Docker Compose]]
- [[GitHub Workflow]]
- [[Git Strategy]]
