---
id: "vlan-configuration-notas"
titulo: "VLAN Configuration (notas de trabajo)"
categoria: "Notas Privadas/En Progreso"
status: "In Progress"
prioridad: "Alta"
tags: ["#red", "#vlan", "#homelab"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# VLAN Configuration — notas de trabajo

Notas de planeación día a día. La documentación técnica formal vive en [[Homelab/VLAN Configuration]] (Documentación Técnica).

## Estado

Planeado en su totalidad, nada configurado aún físicamente — el switch TP-Link TL-SG108E y el router FiberHome SR1021D llegan/están disponibles antes del hardware principal (29-30 sep), pero la configuración real de VLANs 802.1Q + QoS se hace junto con la instalación de Proxmox.

## Las 4 VLANs

| VLAN | Nombre | Servicios |
|---|---|---|
| 10 | IoT / Domótica | Home Assistant, MQTT, sensores |
| 20 | Core Services | Pi-hole, Nginx Proxy Manager, Vaultwarden, Portainer |
| 30 | Empresa / Clientes (futuro MVP) | n8n, Metabase, Ollama + Open WebUI, PostgreSQL, integraciones API (SAP, etc.) |
| 40 | Personal / Desarrollo | Ollama + LLMs, Jellyfin, Immich, Nextcloud, Gitea, code-server, PostgreSQL personal |

## Pendientes concretos

- [ ] Configurar VLANs 802.1Q en TP-Link TL-SG108E
- [ ] Configurar QoS priorizando VLAN 30 (clientes en producción) sobre VLAN 40 (personal)
- [ ] Crear bridges de red en Proxmox, uno por VLAN
- [ ] Definir reglas de firewall entre VLANs en OPNsense/pfSense (aislar VLAN 10 IoT del resto por defecto)
- [ ] Validar que el router FiberHome SR1021D no interfiera con el tagging 802.1Q (algunos routers de operador limitan esto)

## Relacionadas

- [[Homelab/VLAN Configuration]]
- [[Network Diagram]]
- [[Proxmox Installation]]
- [[Hardware Setup 29 Sep]]
