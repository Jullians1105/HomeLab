---
id: "tailwind-css-integration"
titulo: "Tailwind CSS Integration"
categoria: "Notas Privadas/Completadas"
status: "Done"
prioridad: "Media"
tags: ["#frontend", "#tailwind", "#css", "#done"]
pinned: false
archived: false
created: "2026-09-21T10:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Tailwind CSS Integration

Verificado directamente en el código (22 sep 2026) antes de marcar el status — **sí está integrada y en uso real**, no solo como dependencia declarada.

## Evidencia en el código

- `package.json` → `tailwindcss` y `@tailwindcss/vite` en `devDependencies` (Tailwind v4)
- `vite.config.ts` → plugin `tailwindcss()` registrado junto a `react()`
- `src/index.css` → `@import "tailwindcss";` + bloque `@theme` con tokens de diseño custom (colores, spacing, tipografía, radios)
- Todas las páginas y componentes en `src/pages/` y `src/components/` usan clases utilitarias de Tailwind extensivamente (`flex`, `gap-space-sm`, `rounded-lg`, `bg-primary-container`, etc.)
- `@layer base` con `@apply bg-surface font-body-md text-on-surface antialiased` sobre `body`

## Nota importante — discrepancia de paleta

Los tokens `@theme` en `src/index.css` usan un sistema tipo Material Design 3 ("Stitch") — ej. `--color-primary: #0058be`, `--color-tertiary: #006947` — que **no coincide** con la paleta plana especificada originalmente para el dashboard (`#3b82f6` primario, `#10b981` success, etc., ver [[Color Palette & Typography]]). Pendiente decidir si se unifica hacia la paleta original o se documenta el sistema Stitch como la fuente de verdad definitiva.

## Relacionadas

- [[React Project Setup]]
- [[Color Palette & Typography]]
- [[Dashboard Frontend]]
