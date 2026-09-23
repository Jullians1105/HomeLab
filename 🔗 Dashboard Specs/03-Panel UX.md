---
id: "spec-03-panel-ux"
titulo: "03 — Panel UX"
categoria: "Dashboard Specs"
status: "Layout"
prioridad: "Media"
tags: ["#dashboard", "#spec", "#layout"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# 03 — Panel UX

**Estado de diseño**: Layout definido. Implementada como primer borrador en `src/pages/PanelUX.tsx` (123 líneas, ver [[Dashboard Frontend]]).

## Propósito

Panel de analítica de uso/rendimiento — visión más orientada a "consumo y rendimiento" (subtítulo actual en `App.tsx`: "Homelab | Consumo y rendimiento").

## Layout planeado

- Serie de tráfico/consumo a lo largo del tiempo (`trafficSeries` en `data/mock.ts` — 12 puntos, probablemente mensual o por hora, sin fuente real aún)
- Uso por cliente (`clientUsage` — plan, estado, ejecuciones, tasa de éxito, storage en GB) — mapea directo a los 3 clientes actuales
- Métricas de rendimiento del sistema en un rango de tiempo mayor que la Visión General (7D/30D en vez de solo 24H)

## Pendiente de definir

- [ ] Fuente real de los datos de tráfico (¿Proxmox API? ¿n8n execution logs?) — hoy es mock sin conexión a nada real
- [ ] Si esta pantalla se solapa conceptualmente con [[01-Visión General]] (ambas muestran métricas de sistema) — evaluar si conviene diferenciarlas más claramente

## Relacionadas

- [[Dashboard Frontend]]
- [[API Endpoints]]
