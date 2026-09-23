---
id: "spec-06-almacenamiento"
titulo: "06 — Almacenamiento"
categoria: "Dashboard Specs"
status: "Layout"
prioridad: "Media"
tags: ["#dashboard", "#spec", "#layout", "#storage"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# 06 — Almacenamiento

**Estado de diseño**: Layout definido. Implementada como primer borrador en `src/pages/Almacenamiento.tsx` (92 líneas, ver [[Dashboard Frontend]]). Ruta: `/almacenamiento`, título "Almacenamiento & Discos", subtítulo "Homelab | Pools ZFS" (nota: ZFS vs LVM-thin aún sin decidir, ver [[Proxmox Setup]] — el subtítulo asume ZFS, revisar si aplica tras la instalación real).

## Propósito

Monitoreo de discos/volúmenes físicos: Seagate Exos 1TB (backups) y Seagate Enterprise 2TB (servicios), más el NVMe interno del host.

## Layout planeado

Por cada volumen (`StorageVolume` en `types/index.ts`):

- Nombre, pool, tamaño
- % usado
- Temperatura (SMART)
- Salud: `healthy` / `warning` / `full`

## Pendiente de definir

- [ ] Fuente real de datos SMART/temperatura — requiere `smartmontools` o similar corriendo en el host, expuesto vía API
- [ ] Confirmar si el particionado final es ZFS (pools) o LVM-thin — afecta directamente el modelo de datos de esta pantalla
- [ ] Alertas de umbral (ej. >85% uso → warning) — no definidas aún

## Relacionadas

- [[Backups Strategy]]
- [[Proxmox Setup]]
- [[Dashboard Frontend]]
