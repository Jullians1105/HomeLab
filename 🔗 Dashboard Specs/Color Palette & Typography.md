---
id: "color-palette-typography"
titulo: "Color Palette & Typography"
categoria: "Dashboard Specs"
status: "Done"
prioridad: "Media"
tags: ["#dashboard", "#spec", "#design-system"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Color Palette & Typography

Especificación de diseño original del dashboard. **Ver nota de discrepancia abajo** — el código actual (`src/index.css`) implementa un sistema de tokens distinto.

## Paleta (especificación original)

| Uso | Color | Hex |
|---|---|---|
| Primario | Azul | `#3b82f6` |
| Success | Verde | `#10b981` |
| Warning | Naranja | `#f59e0b` |
| Danger | Rojo | `#ef4444` |
| Info | Cyan | `#06b6d4` |
| Fondo de página | Gris muy claro | `#f5f7fa` |
| Fondo de tarjeta | Blanco | `#ffffff` |
| Texto primario | Casi negro | `#0c0d0e` |
| Texto secundario | Gris | `#666666` |
| Texto muted | Gris claro | `#b0b0b0` |

## Tipografía (especificación original)

- Fuente: **Inter**
- H1: 20-24px, bold
- H2: 16-18px, semibold
- Body: 12-14px
- Small: 10-11px

## Spacing

- Padding de sección: 32px
- Gaps: 24px
- Border-radius: 8-12px
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`

## ⚠️ Discrepancia con el código actual

`src/index.css` implementa un sistema de tokens `@theme` de Tailwind v4 estilo Material Design 3 ("Stitch"), con nombres y valores distintos a esta especificación:

- `--color-primary: #0058be` (azul más oscuro/saturado que `#3b82f6`)
- `--color-tertiary: #006947` (verde, cumple rol de "success" pero con otro tono)
- `--color-error: #ba1a1a` (rojo, distinto de `#ef4444`)
- Radios definidos como `--radius: 0.125rem` (más angulares/"utilitarios" que el 8-12px original)
- Sí coincide: la fuente Inter (`--font-sans: "Inter"`), cargada vía Google Fonts en `index.css`

**Pendiente decidir**: si esta nota (paleta plana original) sigue siendo la fuente de verdad y el código debe migrar hacia ella, o si el sistema Stitch ya implementado se adopta como definitivo y esta nota se actualiza para reflejarlo. Ver también [[Tailwind CSS Integration]].

## Relacionadas

- [[01-Visión General]]
- [[Dashboard Frontend]]
- [[Tailwind CSS Integration]]
