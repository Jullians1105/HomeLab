---
id: "github-workflow-referencia"
titulo: "GitHub Workflow (referencia rápida)"
categoria: "Notas Privadas/Alfileres"
status: "Done"
prioridad: "Media"
tags: ["#git", "#github", "#referencia"]
pinned: true
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# GitHub Workflow — referencia rápida

Resumen operativo del día a día. Detalle completo en [[Git Strategy]].

## Flujo estándar

```bash
git checkout development
git pull
git checkout -b feature/nombre-corto

# ... commits (Conventional Commits) ...

git push -u origin feature/nombre-corto
gh pr create --base development --title "feat: ..." --body "..."
```

## Convención de commits

| Prefijo | Uso |
|---|---|
| `feat:` | funcionalidad nueva |
| `fix:` | corrección de bug |
| `docs:` | documentación (incluye notas de Obsidian) |
| `refactor:` | cambio interno sin alterar comportamiento |
| `chore:` | tareas de mantenimiento, dependencias |
| `test:` | pruebas |

## Ramas activas del proyecto

- `main` — producción, tags `v1.0.0` etc.
- `development` — integración
- `feature/auth`, `feature/api`, `feature/obsidian-sync`
- `docs/obsidian-setup`, `docs/homelab-specs`

## Relacionadas

- [[Git Strategy]]
- [[Setup Obsidian]]
