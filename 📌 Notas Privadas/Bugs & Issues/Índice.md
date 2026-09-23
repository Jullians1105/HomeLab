---
id: "bugs-issues-indice"
titulo: "Bugs & Issues — Índice"
categoria: "Notas Privadas/Bugs & Issues"
status: "TODO"
prioridad: "Baja"
tags: ["#indice", "#bugs"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Bugs & Issues — Índice

Sin bugs registrados todavía — el proyecto está en etapa temprana (frontend con datos mock, sin backend desplegado). Cuando aparezca un bug real, crear una nota por bug en esta carpeta con este formato de título: `[Área] Descripción corta`.

## Formato sugerido por nota

```yaml
titulo: "[Frontend] Descripción corta del bug"
status: "TODO" | "In Progress" | "Done"
prioridad: "Alta" | "Media" | "Baja"
tags: ["#bug", "#area-afectada"]
```

## Conocido pero no registrado como bug formal todavía

- `react-router-dom` está en `devDependencies` en vez de `dependencies` en `package.json` — no rompe nada en dev/build local con Vite, pero es incorrecto semánticamente. Ver [[Dependencies]].
