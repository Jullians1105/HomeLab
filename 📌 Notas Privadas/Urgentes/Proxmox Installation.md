---
id: "proxmox-installation"
titulo: "Proxmox Installation"
categoria: "Notas Privadas/Urgentes"
status: "TODO"
prioridad: "Alta"
tags: ["#proxmox", "#hardware", "#urgente"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Proxmox Installation

Plan de instalación para el Lenovo ThinkCentre M900 Tiny una vez llegue el hardware (29-30 sep 2026). Ver checklist de recepción en [[Hardware Setup 29 Sep]].

## Pasos planeados

1. Instalar Proxmox VE desde USB booteable en el NVMe de 256GB.
2. Configurar red de gestión (interfaz Proxmox) dentro de VLAN 20 — Core Services.
3. Añadir Seagate Exos 1TB como storage dedicado a backups (`vzdump`).
4. Añadir Seagate Enterprise 2TB como storage para VMs/LXC de VLAN 30 y 40.
5. Instalar OPNsense o pfSense como VM para hacer de firewall/router entre VLANs (pendiente elegir cuál — ver dudas abiertas).
6. Instalar OpenMediaVault como VM/LXC para gestión de storage compartido (NFS/SMB) hacia el resto de servicios.
7. Crear los 4 bridges de red correspondientes a las VLANs (ver [[VLAN Configuration]]).

## Dudas abiertas

- [ ] OPNsense vs pfSense — sin decisión tomada aún, evaluar según soporte de VLANs 802.1Q y facilidad de gestión.
- [ ] ZFS vs LVM-thin para el storage principal — con solo 16GB RAM, ZFS podría ser ajustado; evaluar.
- [ ] ¿OpenMediaVault como VM separada o como LXC liviano?

## Referencia de recursos

- Host: i7-6700T, 16GB RAM, 256GB NVMe — recursos limitados, priorizar LXC sobre VMs completas donde sea posible.

## Relacionadas

- [[Hardware Setup 29 Sep]]
- [[Arquitectura General]]
- [[Proxmox Setup]]
- [[Backups Strategy]]
