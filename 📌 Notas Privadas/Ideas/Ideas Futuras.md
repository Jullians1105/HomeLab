---
id: "ideas-futuras"
titulo: "Ideas Futuras"
categoria: "Notas Privadas/Ideas"
status: "TODO"
prioridad: "Baja"
tags: ["#ideas", "#backlog"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Ideas Futuras

Backlog de ideas sin comprometer, no son tareas planeadas todavía.

## 1. Modo "solo lectura" del dashboard para clientes

Vista simplificada de [[Portal Cliente]] donde cada cliente ([[Transportes Elite SAS]], [[EQUIPXA SAS]], [[Estación de Servicios La Isla SAS]]) vea únicamente sus propios workflows n8n y KPIs, sin acceso al resto de la infraestructura.

## 2. Alertas por Telegram/WhatsApp desde n8n

Conectar el Centro de Notificaciones del dashboard (ver [[04-Notificaciones]]) con un workflow de n8n que reenvíe alertas críticas (ej. disco lleno, servicio caído) directo a un chat, sin depender de estar viendo el dashboard.

## 3. Exportar reportes mensuales automáticos por cliente

Usar Metabase + n8n para generar un PDF/resumen mensual por cliente (ejecuciones, uptime, ahorro estimado) y enviarlo automáticamente — insumo de valor para retención de clientes de [[AIWorkspace (Consultoría)]].

## 4. Sincronización bidireccional Obsidian ↔ Dashboard

Hoy el plan es que el dashboard lea las notas de este vault (`/api/notes`, ver [[API Endpoints]]). Idea a futuro: que también se puedan crear/editar notas simples desde el dashboard y que se reflejen como archivos `.md` reales en el repo (vía el backend con `gray-matter`).
