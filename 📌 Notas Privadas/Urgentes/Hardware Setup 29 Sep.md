---
id: "hardware-setup-29-sep"
titulo: "Hardware Setup — 29 Sep 2026"
categoria: "Notas Privadas/Urgentes"
status: "TODO"
prioridad: "Alta"
tags: ["#hardware", "#proxmox", "#urgente"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Hardware Setup — 29 Sep 2026

Llega el hardware base del homelab. Checklist de recepción e instalación inicial.

## Hardware esperado

| Ítem | Fecha llegada | Uso previsto |
|---|---|---|
| Lenovo ThinkCentre M900 Tiny (i7-6700T, 16GB RAM, 256GB NVMe) | 29-30 sep | Host Proxmox VE |
| Seagate Exos 1TB | 29 sep | Backups |
| Seagate Enterprise 2TB | 30 sep | Ollama / Metabase / n8n / datos clientes |

Costo total: **COP $1,743,316** (~USD $2,436).

## Checklist día de llegada

- [ ] Verificar integridad física de ambos discos y del Tiny PC
- [ ] Backup de datos actuales en Windows 11 Pro (si aplica) antes de migrar
- [ ] Crear USB booteable con Proxmox VE (última versión estable)
- [ ] Instalar discos: NVMe interno (sistema), 1TB (backups), 2TB (datos/servicios) — ver [[Proxmox Installation]]
- [ ] Conectar a switch TP-Link TL-SG108E (ver [[VLAN Configuration]])
- [ ] Confirmar acceso a interfaz web de Proxmox desde VLAN 20 (Core Services)

## Riesgos / dudas abiertas

- Confirmar si el NVMe de 256GB alcanza solo para el sistema Proxmox + ISOs, o si conviene mover templates al disco de 2TB desde el día 1.
- Definir particionado ZFS vs LVM-thin antes de instalar (ver [[Proxmox Setup]]).

## Relacionadas

- [[Proxmox Installation]]
- [[Arquitectura General]]
- [[Network Diagram]]
