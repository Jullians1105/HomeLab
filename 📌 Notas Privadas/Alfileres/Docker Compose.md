---
id: "docker-compose-referencia"
titulo: "Docker Compose (referencia rápida)"
categoria: "Notas Privadas/Alfileres"
status: "TODO"
prioridad: "Media"
tags: ["#docker", "#proxmox", "#referencia"]
pinned: true
archived: false
created: "2026-09-22T14:00:00-05:00"
modified: "2026-09-22T14:00:00-05:00"
---

# Docker Compose — referencia rápida

Pendiente de completar cuando se instale Proxmox (29-30 sep 2026) y se decida si los servicios corren en LXC nativos o en un contenedor Docker dentro de una VM. Placeholder para no perder la estructura mientras se define.

## Decisión pendiente

- [ ] ¿LXC por servicio (recomendado en Proxmox) o un host Docker centralizado por VLAN?
- [ ] Si es Docker: ¿un `docker-compose.yml` por VLAN o por servicio?

## Servicios candidatos a compose (VLAN 30 — Empresa/Clientes)

```yaml
# Placeholder — completar tras instalación de Proxmox
services:
  n8n:
    image: n8nio/n8n
    # ver [[n8n Configuration]]
  metabase:
    image: metabase/metabase
    # ver [[Metabase/Overview]]
  ollama:
    image: ollama/ollama
    # ver [[Ollama/Overview]]
  postgres:
    image: postgres:16
    # ver [[PostgreSQL/Overview]]
```

## Relacionadas

- [[Proxmox Installation]]
- [[n8n Configuration]]
- [[VLAN Configuration]]
