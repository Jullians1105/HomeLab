---
id: "arquitectura-general"
titulo: "Arquitectura General del Homelab"
categoria: "Documentación Técnica/Homelab"
status: "In Progress"
prioridad: "Alta"
tags: ["#homelab", "#arquitectura", "#proxmox"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Arquitectura General del Homelab

## Hardware base

- **Host**: Lenovo ThinkCentre M900 Tiny — i7-6700T, 16GB RAM, 256GB NVMe (llega 29-30 sep 2026, ver [[Hardware Setup 29 Sep]])
- **Storage backups**: Seagate Exos 1TB
- **Storage servicios**: Seagate Enterprise 2TB — Ollama, Metabase, n8n, datos de clientes
- **Red**: FiberHome SR1021D (router Claro, fibra 1Gb simétrica), TP-Link TL-SG108E (switch 8 puertos, VLAN 802.1Q + QoS), cableado Cat5e
- **Costo total**: COP $1,743,316 (~USD $2,436)

## Capa de virtualización

- **Hypervisor**: Proxmox VE (KVM para VMs, LXC para contenedores livianos)
- **Firewall/router interno**: OPNsense o pfSense como VM (decisión pendiente, ver [[Proxmox Installation]])
- **Storage compartido**: OpenMediaVault

## Segmentación de red (4 VLANs)

Ver detalle completo en [[VLAN Configuration]].

| VLAN | Propósito |
|---|---|
| 10 | IoT / Domótica |
| 20 | Core Services |
| 30 | Empresa / Clientes (futuro MVP de [[AIWorkspace (Consultoría)]]) |
| 40 | Personal / Desarrollo |

## Diagrama

Ver [[Network Diagram]] para el layout físico y lógico completo.

## Estado

Documentación de arquitectura escrita antes de tener el hardware físico instalado — es el plan, no un estado verificado en producción. Se actualizará esta nota tras la instalación (29-30 sep en adelante).

## Relacionadas

- [[Proxmox Setup]]
- [[Backups Strategy]]
- [[Hardware Setup 29 Sep]]
