---
id: "proxmox-overview"
titulo: "Proxmox — Overview"
categoria: "Documentación Técnica/Proxmox"
status: "TODO"
prioridad: "Media"
tags: ["#proxmox", "#virtualizacion"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Proxmox — Overview

Placeholder breve. El detalle de instalación y configuración vive en [[Proxmox Setup]] (Documentación Técnica/Homelab) y [[Proxmox Installation]] (checklist operativo).

Proxmox VE es el hypervisor elegido para todo el homelab — combina KVM (máquinas virtuales completas, ej. el firewall OPNsense/pfSense) y LXC (contenedores del sistema, más livianos, para la mayoría de servicios) sobre un único host físico con recursos limitados (16GB RAM).

## Por qué Proxmox (razón registrada, no inventada retroactivamente)

Open source, gestión web nativa, soporte maduro de LXC (clave dado que el host solo tiene 16GB RAM — correr todo como VMs completas no sería viable) y buen soporte de bridges de red para las 4 VLANs planeadas.

## Relacionadas

- [[Proxmox Setup]]
- [[Proxmox Installation]]
- [[Arquitectura General]]
