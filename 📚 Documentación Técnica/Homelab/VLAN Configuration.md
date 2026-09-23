---
id: "vlan-configuration-tecnica"
titulo: "VLAN Configuration"
categoria: "Documentación Técnica/Homelab"
status: "TODO"
prioridad: "Alta"
tags: ["#red", "#vlan", "#homelab"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# VLAN Configuration

Documentación técnica formal de la segmentación de red. Notas de trabajo día a día en [[VLAN Configuration|VLAN Configuration (Notas Privadas)]].

## Topología

```
Internet (Claro, fibra 1Gb simétrica)
    │
FiberHome SR1021D (router)
    │
TP-Link TL-SG108E (switch 8p, VLAN 802.1Q + QoS)
    │
    ├── VLAN 10 — IoT/Domótica
    ├── VLAN 20 — Core Services
    ├── VLAN 30 — Empresa/Clientes
    └── VLAN 40 — Personal/Desarrollo
    │
Proxmox VE (Lenovo ThinkCentre M900 Tiny)
```

## VLAN 10 — IoT / Domótica

Home Assistant, MQTT, sensores. Aislada del resto por defecto (dispositivos IoT son el vector de riesgo más común en un homelab).

## VLAN 20 — Core Services

Pi-hole (DNS/adblock), Nginx Proxy Manager (reverse proxy + TLS), Vaultwarden (gestor de contraseñas), Portainer (gestión de contenedores).

## VLAN 30 — Empresa / Clientes (futuro MVP)

n8n, Metabase, Ollama + Open WebUI, PostgreSQL, integraciones API (SAP y otras por definir), documentación de APIs. Es la VLAN productiva para [[AIWorkspace (Consultoría)]] — debe tener QoS prioritario.

## VLAN 40 — Personal / Desarrollo

Ollama + modelos LLM (uso personal), Jellyfin, Immich, Nextcloud, Gitea, code-server, PostgreSQL personal.

## Pendiente de configurar (nada de esto existe físicamente aún)

- [ ] Tagging 802.1Q en el switch TP-Link TL-SG108E
- [ ] QoS: VLAN 30 > VLAN 20 > VLAN 40 > VLAN 10 (prioridad propuesta, sin validar)
- [ ] Bridges en Proxmox, uno por VLAN
- [ ] Reglas de firewall inter-VLAN en OPNsense/pfSense

## Relacionadas

- [[Arquitectura General]]
- [[Network Diagram]]
- [[Proxmox Setup]]
