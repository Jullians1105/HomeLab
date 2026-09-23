---
id: "network-diagram"
titulo: "Network Diagram"
categoria: "Documentación Técnica/Homelab"
status: "TODO"
prioridad: "Media"
tags: ["#red", "#diagrama", "#homelab"]
pinned: false
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Network Diagram

Descripción textual del diagrama físico/lógico de red (sin imagen — se puede generar un diagrama visual más adelante desde esta descripción, ej. con Excalidraw o Canvas de Obsidian).

## Diagrama lógico (ASCII)

```
                         Internet (Claro, fibra 1Gb simétrica)
                                      │
                         FiberHome SR1021D (router)
                                      │
                     TP-Link TL-SG108E (switch 8p gestionado)
                          VLAN 802.1Q tagging + QoS
                                      │
        ┌───────────────┬────────────┼────────────┬───────────────┐
        │               │            │             │               │
    VLAN 10          VLAN 20      VLAN 30       VLAN 40       (puertos
   IoT/Domótica   Core Services  Empresa/       Personal/      libres/
        │               │        Clientes       Desarrollo     futuro)
        │               │            │             │
        └───────────────┴────────────┴─────────────┘
                                │
                    Proxmox VE (Lenovo ThinkCentre
                       M900 Tiny — bridges por VLAN)
                                │
                ┌───────────────┴───────────────┐
                │                                │
        OPNsense/pfSense VM                OpenMediaVault
        (firewall inter-VLAN)              (storage compartido)
```

## Storage físico (fuera del diagrama de red)

- NVMe 256GB interno → sistema Proxmox
- Seagate Exos 1TB → backups (`vzdump`)
- Seagate Enterprise 2TB → datos de servicios (Ollama, Metabase, n8n, clientes)

## Cableado

Cat5e entre router, switch y host — suficiente para 1Gb simétrico, sin necesidad de Cat6 en esta fase.

## Pendiente

- [ ] Confirmar puertos físicos asignados por VLAN en el TP-Link TL-SG108E
- [ ] Diagrama visual (no solo ASCII) una vez la topología esté validada en producción

## Relacionadas

- [[Arquitectura General]]
- [[VLAN Configuration]]
