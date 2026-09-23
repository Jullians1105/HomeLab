---
id: "spec-04-notificaciones"
titulo: "04 — Notificaciones"
categoria: "Dashboard Specs"
status: "Layout"
prioridad: "Media"
tags: ["#dashboard", "#spec", "#layout"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# 04 — Notificaciones

**Estado de diseño**: Layout definido. Implementada como primer borrador en `src/pages/Notificaciones.tsx` (103 líneas, ver [[Dashboard Frontend]]).

## Propósito

Centro de notificaciones del sistema — subtítulo actual: "Homelab | Alertas del sistema".

## Layout planeado

- Lista de notificaciones (`NotificationItem` en `types/index.ts`) con severidad: `critica`, `advertencia`, `informativa`, `resuelta`
- Cada ítem: título, descripción, fuente (servicio que origina la alerta), timestamp
- Filtro por severidad
- Relación directa con el banner de alertas de [[01-Visión General]] — probablemente las alertas del banner son un subconjunto (solo las críticas activas) de esta pantalla completa

## Pendiente de definir

- [ ] Fuente real de notificaciones — hoy son mock, a futuro deberían originarse de: Proxmox (alertas de recursos), n8n (fallos de workflow), servicios monitoreados (caída de un contenedor)
- [ ] Si se integra con la idea de alertas por Telegram/WhatsApp (ver [[Ideas Futuras]])
- [ ] Endpoint dedicado — no está listado explícitamente en [[API Endpoints]] todavía, evaluar si notificaciones necesita su propio endpoint o se deriva de `/api/services` y `/api/metrics`

## Relacionadas

- [[01-Visión General]]
- [[Dashboard Frontend]]
