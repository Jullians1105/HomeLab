---
id: "workflow-sync-facturacion-diaria"
titulo: "Sync Facturación Diaria"
categoria: "Workflows"
status: "TODO"
prioridad: "Media"
tags: ["#n8n", "#workflow", "#facturacion", "#ejemplo"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Sync Facturación Diaria

**Workflow de ejemplo** — no implementado, es una plantilla razonable de lo que este tipo de cliente podría necesitar (aplica en principio a [[Transportes Elite SAS]] y [[EQUIPXA SAS]], ambos con volumen de facturación diario).

## Objetivo

Sincronizar facturas emitidas durante el día entre el sistema contable del cliente y una base PostgreSQL centralizada (ver [[PostgreSQL/Overview]]), para que Metabase pueda generar reportes sin depender de exportar manualmente.

## Flujo propuesto (alto nivel)

1. **Trigger**: Cron diario (ej. 11pm) o webhook si el sistema contable lo soporta
2. **Extract**: Consultar API/export del sistema contable del cliente (sistema específico por definir por cliente)
3. **Transform**: Normalizar formato (fechas, montos, NIT/cliente) a un esquema común
4. **Load**: Insertar/actualizar en PostgreSQL (tabla `facturas` o similar)
5. **Notify**: Si falla algún paso, enviar notificación (ver [[04-Notificaciones]] y la idea de alertas por Telegram/WhatsApp en [[Ideas Futuras]])

## Pendiente

- [ ] Confirmar qué sistema contable usa cada cliente y si expone API o solo exportación manual (CSV/Excel)
- [ ] Definir esquema de la tabla `facturas`
- [ ] Manejo de duplicados / reintentos

## Relacionadas

- [[n8n Configuration]]
- [[Backup Diario Automatizado]]
