---
id: "proxmox-setup-tecnico"
titulo: "Proxmox Setup"
categoria: "Documentación Técnica/Homelab"
status: "TODO"
prioridad: "Alta"
tags: ["#proxmox", "#homelab", "#virtualizacion"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Proxmox Setup

Documentación técnica formal de la instalación y configuración de Proxmox VE. Checklist operativo del día de instalación en [[Proxmox Installation]] (Notas Privadas/Urgentes).

## Recursos del host

- CPU: Intel i7-6700T (4 núcleos / 8 hilos)
- RAM: 16GB — recurso más limitante, priorizar LXC sobre VMs completas
- Storage: 256GB NVMe (sistema) + 1TB Exos (backups) + 2TB Enterprise (datos/servicios)

## Plan de storage (a definir en instalación)

- Sistema Proxmox: NVMe 256GB
- `vzdump` backups: Exos 1TB (ver [[Backups Strategy]])
- Datos de servicios (VLAN 30/40): Enterprise 2TB
- ZFS vs LVM-thin: sin decidir — con 16GB de RAM, ZFS puede quedar ajustado en cache ARC; evaluar LVM-thin como alternativa más liviana.

## VMs / LXC planeados

| Servicio | Tipo | VLAN |
|---|---|---|
| OPNsense/pfSense (firewall) | VM | — (enrutamiento entre VLANs) |
| OpenMediaVault | VM o LXC | 20 |
| Pi-hole | LXC | 20 |
| Nginx Proxy Manager | LXC | 20 |
| Vaultwarden | LXC | 20 |
| Portainer | LXC | 20 |
| n8n | LXC/Docker | 30 |
| Metabase | LXC/Docker | 30 |
| Ollama + Open WebUI | VM o LXC (GPU passthrough no aplica, sin GPU dedicada) | 30/40 |
| PostgreSQL (clientes) | LXC | 30 |
| PostgreSQL (personal) | LXC | 40 |
| Jellyfin, Immich, Nextcloud, Gitea, code-server | LXC/Docker | 40 |
| Home Assistant, MQTT | LXC | 10 |

Nota: sin GPU dedicada en el i7-6700T (gráficos integrados HD 530), Ollama correrá en CPU — esperar rendimiento limitado con modelos grandes. Pendiente decidir tamaño máximo de modelo viable.

## Relacionadas

- [[Arquitectura General]]
- [[VLAN Configuration]]
- [[Backups Strategy]]
- [[Proxmox/Overview]]
