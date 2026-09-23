---
id: "workflow-backup-diario-automatizado"
titulo: "Backup Diario Automatizado"
categoria: "Workflows"
status: "TODO"
prioridad: "Media"
tags: ["#n8n", "#workflow", "#backups", "#ejemplo"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Backup Diario Automatizado

**Workflow de ejemplo** — no implementado. Complementa (no reemplaza) el backup de infraestructura a nivel Proxmox descrito en [[Backups Strategy]]; este workflow es a nivel de datos de aplicación de cada cliente.

## Objetivo

Generar un respaldo diario de las bases de datos/archivos críticos de cada cliente en VLAN 30, independiente del `vzdump` de Proxmox, como capa adicional de seguridad ante corrupción de datos (no solo falla de hardware).

## Flujo propuesto (alto nivel)

1. **Trigger**: Cron diario (fuera de horario laboral del cliente)
2. **Dump**: `pg_dump` de la base PostgreSQL del cliente
3. **Compress**: Comprimir el dump
4. **Store**: Guardar en el volumen de backups (Seagate Exos 1TB) con retención (ej. últimos 7 días)
5. **Notify**: Confirmar éxito/fallo — ver [[04-Notificaciones]]

## Relación con alertas críticas

Un fallo en este workflow debería escalar como alerta de severidad `critica` (ver [[04-Notificaciones]]), ya que afecta directamente la continuidad de negocio del cliente.

## Pendiente

- [ ] Definir retención real (7 días es una propuesta sin validar contra espacio disponible en el disco de 1TB, compartido con backups de infraestructura)
- [ ] Evaluar si además se necesita backup off-site (ver riesgo abierto en [[Backups Strategy]])

## Relacionadas

- [[Backups Strategy]]
- [[Sync Facturación Diaria]]
- [[n8n Configuration]]
